"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useProgress } from "./ProgressContext";
import { useProfessorMode } from "./ProfessorContext";
import type { ProvaConfig } from "@/lib/prova-data";
import type { QuizOption } from "@/lib/quiz-data";

export function ProvaQuiz({ prova }: { prova: ProvaConfig }) {
  const { markProvaCompleted, isProvaCompleted, isProvaUnlocked } = useProgress();
  const { withProfessorParam } = useProfessorMode();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!isProvaUnlocked(prova.moduloId)) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-900/20">
        <h2 className="font-semibold text-amber-800 dark:text-amber-200">
          Complete os temas do módulo primeiro
        </h2>
        <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
          Responda corretamente às questões de todos os temas do Módulo {prova.moduloId} para desbloquear a prova.
        </p>
        <Link
          href={withProfessorParam("/")}
          className="mt-4 inline-block rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700"
        >
          Voltar ao início
        </Link>
      </div>
    );
  }

  const handleSelect = (qId: string, opt: QuizOption) => {
    if (submitted) return;
    setAnswers((a) => ({ ...a, [qId]: opt.id }));
  };

  const handleSubmit = useCallback(() => {
    if (submitted) return;
    const fb: Record<string, boolean> = {};
    let correctCount = 0;
    prova.questions.forEach((q) => {
      const selected = answers[q.id];
      const opt = q.options.find((o) => o.id === selected);
      const correct = opt?.correct ?? false;
      fb[q.id] = correct;
      if (correct) correctCount++;
    });
    setFeedback(fb);
    setSubmitted(true);
    if (correctCount >= prova.minCorrectToPass) {
      markProvaCompleted(prova.moduloId);
    }
  }, [prova, answers, submitted, markProvaCompleted]);

  const correctCount = Object.values(feedback).filter(Boolean).length;
  const passed = submitted && correctCount >= prova.minCorrectToPass;
  const allAnswered = prova.questions.every((q) => answers[q.id]);

  if (isProvaCompleted(prova.moduloId)) {
    return (
      <div className="space-y-6">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-900/20">
          <h2 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200">
            ✓ Prova já concluída
          </h2>
          <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-300">
            Você aprovou nesta prova. Confira as referências abaixo para complementar seus estudos.
          </p>
        </div>
        <Link
          href={withProfessorParam("/")}
          className="inline-block rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
        >
          Voltar ao início
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {prova.questions.map((q) => (
        <div key={q.id} className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900">
          <p className="mb-4 font-medium text-zinc-800 dark:text-zinc-200">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((opt) => {
              const isSelected = answers[q.id] === opt.id;
              const showCorrect = submitted && opt.correct;
              const showWrong = submitted && isSelected && !opt.correct;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelect(q.id, opt)}
                  disabled={submitted}
                  className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                    submitted ? "cursor-default" : "cursor-pointer hover:border-zinc-400"
                  } ${
                    showCorrect
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                      : showWrong
                        ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20"
                        : isSelected
                          ? "border-emerald-400 dark:border-emerald-600"
                          : "border-zinc-200 dark:border-zinc-600"
                  }`}
                >
                  <span className="shrink-0 font-medium text-zinc-500">{opt.id.toUpperCase()})</span>
                  <span className="flex-1">{opt.text}</span>
                  {showCorrect && <span className="text-emerald-600">✓</span>}
                  {showWrong && <span className="text-amber-600">✗</span>}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {!submitted ? (
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!allAnswered}
          className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${
            allAnswered
              ? "bg-emerald-600 text-white hover:bg-emerald-700"
              : "cursor-not-allowed bg-zinc-200 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400"
          }`}
        >
          Enviar prova
        </button>
      ) : (
        <div className="space-y-4">
          <div
            className={`rounded-xl p-6 ${
              passed
                ? "border border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20"
                : "border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20"
            }`}
          >
            <h2 className={`text-lg font-semibold ${passed ? "text-emerald-800 dark:text-emerald-200" : "text-amber-800 dark:text-amber-200"}`}>
              {passed ? "🎉 Parabéns! Você aprovou!" : "Não foi dessa vez"}
            </h2>
            <p className="mt-2 text-sm">
              Você acertou {correctCount} de {prova.questions.length}.{" "}
              {passed
                ? "Recomendamos revisar as referências abaixo."
                : `É necessário acertar pelo menos ${prova.minCorrectToPass} para aprovar.`}
            </p>
          </div>
          <Link
            href={withProfessorParam("/")}
            className="inline-block rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Voltar ao início
          </Link>
        </div>
      )}
    </div>
  );
}
