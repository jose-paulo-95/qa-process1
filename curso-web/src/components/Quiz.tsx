"use client";

import { useState, useEffect, useRef } from "react";
import type { QuizQuestion, QuizOption } from "@/lib/quiz-data";

interface QuizProps {
  questions: QuizQuestion[];
  onAllCorrect?: () => void;
}

export function Quiz({ questions, onAllCorrect }: QuizProps) {
  const [selected, setSelected] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<Record<string, { correct: boolean; message: string }>>({});
  const calledRef = useRef(false);

  const allCorrect =
    questions.length > 0 &&
    questions.every((q) => feedback[q.id]?.correct === true);

  useEffect(() => {
    if (allCorrect && onAllCorrect && !calledRef.current) {
      calledRef.current = true;
      onAllCorrect();
    }
  }, [allCorrect, onAllCorrect]);

  const handleSelect = (questionId: string, option: QuizOption) => {
    const opt = option;
    setSelected((s) => ({ ...s, [questionId]: opt.id }));
    if (opt.correct) {
      setFeedback((f) => ({
        ...f,
        [questionId]: { correct: true, message: opt.feedbackCorrect || "Correto!" },
      }));
    } else {
      setFeedback((f) => ({
        ...f,
        [questionId]: { correct: false, message: opt.feedbackWrong || "Incorreto. Tente novamente." },
      }));
    }
  };

  if (questions.length === 0) return null;

  return (
    <div className="mt-8 space-y-8 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Questões de múltipla escolha
        </h3>
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
          {Object.values(feedback).filter((f) => f.correct).length}/{questions.length} corretas
        </span>
      </div>
      {allCorrect && (
        <div className="rounded-lg bg-emerald-100 p-4 text-center text-sm font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200">
          🎉 Parabéns! Você acertou todas. Pode avançar para o próximo tema.
        </div>
      )}
      {questions.map((q) => (
        <div key={q.id} className="space-y-3">
          <p className="font-medium text-zinc-800 dark:text-zinc-200">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((opt) => {
              const isSelected = selected[q.id] === opt.id;
              const fb = feedback[q.id];
              const showCorrect = fb?.correct && isSelected;
              const showWrong = !fb?.correct && isSelected;
              const isLocked = fb?.correct === true;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => !isLocked && handleSelect(q.id, opt)}
                  disabled={isLocked}
                  className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                    isLocked
                      ? "cursor-default"
                      : "cursor-pointer hover:border-zinc-400 dark:hover:border-zinc-500"
                  } ${
                    showCorrect
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                      : showWrong
                        ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20"
                        : "border-zinc-200 dark:border-zinc-600"
                  }`}
                >
                  <span className="shrink-0 font-medium text-zinc-500 dark:text-zinc-400">
                    {opt.id.toUpperCase()})
                  </span>
                  <span className="flex-1">{opt.text}</span>
                  {showCorrect && <span className="text-emerald-600">✓</span>}
                </button>
              );
            })}
          </div>
          {feedback[q.id] && (
            <div
              className={`rounded-lg px-4 py-3 text-sm ${
                feedback[q.id].correct
                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200"
                  : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200"
              }`}
            >
              {feedback[q.id].correct ? (
                <span className="font-medium">Correto! </span>
              ) : (
                <span className="font-medium">Incorreto. </span>
              )}
              {feedback[q.id].message}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
