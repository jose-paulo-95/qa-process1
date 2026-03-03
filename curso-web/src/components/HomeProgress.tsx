"use client";

import Link from "next/link";
import { useProgress } from "./ProgressContext";
import { useProfessorMode } from "./ProfessorContext";
import { TEMAS } from "@/lib/temas";

export function HomeProgress() {
  const { progressPercent, isTemaCompleted, isTemaUnlocked } = useProgress();
  const { isProfessorMode, withProfessorParam } = useProfessorMode();
  const firstIncomplete = TEMAS.find((t) => isTemaUnlocked(t.slug) && !isTemaCompleted(t.slug));

  if (isProfessorMode) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-900/20">
        <h2 className="text-lg font-semibold text-amber-800 dark:text-amber-200">
          Modo Professor
        </h2>
        <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
          Visualização completa de todos os módulos e temas.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 dark:border-emerald-800 dark:from-emerald-900/20 dark:to-zinc-900">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200">
          Seu progresso
        </h2>
        <span className="text-2xl font-bold tabular-nums text-emerald-600 dark:text-emerald-400">
          {progressPercent}%
        </span>
      </div>
      <div className="mb-4 h-3 overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-900/40">
        <div
          className="h-full rounded-full bg-emerald-500 transition-all duration-500 dark:bg-emerald-600"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      {firstIncomplete && progressPercent < 100 && (
        <Link
          href={withProfessorParam(`/tema/${firstIncomplete.slug}`)}
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500"
        >
          <span>▶</span> Continuar estudando
        </Link>
      )}
      {progressPercent === 100 && (
        <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
          🎉 Parabéns! Você concluiu todos os temas.
        </p>
      )}
    </div>
  );
}
