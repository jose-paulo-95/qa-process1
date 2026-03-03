"use client";

import Link from "next/link";
import { getTemasByModulo } from "@/lib/temas";
import { useProgress } from "./ProgressContext";
import { useProfessorMode } from "./ProfessorContext";

const MODULO_TITLES: Record<number, string> = {
  1: "Fundamentos de QA (CTFL 4.0)",
  2: "Técnicas de Teste (CTFL 4.0)",
  3: "Testes de API",
  4: "Swagger e Contratos",
  5: "Automação Cypress",
  6: "Ferramentas e Processo",
};

export function ModuleList() {
  const { isTemaCompleted, isTemaUnlocked } = useProgress();
  const { isProfessorMode, withProfessorParam } = useProfessorMode();
  const modulos = [1, 2, 3, 4, 5, 6];

  return (
    <div className="space-y-6">
      {modulos.map((modId) => {
        const temas = getTemasByModulo(modId);
        if (temas.length === 0) return null;
        const completedCount = temas.filter((t) => isTemaCompleted(t.slug)).length;
        const totalCount = temas.length;
        const progressPct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

        return (
          <div
            key={modId}
            className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900"
          >
            <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4 dark:border-zinc-700">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                Módulo {modId}: {MODULO_TITLES[modId]}
              </h3>
              <div className="flex items-center gap-2">
                <div className="h-2 w-20 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
                  <div
                    className="h-full rounded-full bg-emerald-500 transition-all"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {completedCount}/{totalCount}
                </span>
              </div>
            </div>
            <div className="space-y-1 p-3">
              {temas.map((t) => {
                const unlocked = isTemaUnlocked(t.slug);
                const done = isTemaCompleted(t.slug);
                return unlocked ? (
                  <Link
                    key={t.slug}
                    href={withProfessorParam(`/tema/${t.slug}`)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
                        done
                          ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400"
                          : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                      }`}
                    >
                      {done ? "✓" : t.order}
                    </span>
                    <span className="font-medium text-zinc-800 dark:text-zinc-200">
                      {t.title}
                    </span>
                  </Link>
                ) : (
                  <div
                    key={t.slug}
                    className="flex cursor-not-allowed items-center gap-3 rounded-lg px-3 py-2.5 text-zinc-400 dark:text-zinc-500"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-xs dark:bg-zinc-800">
                      🔒
                    </span>
                    <span>{t.title}</span>
                  </div>
                );
              })}
              {(temas.every((t) => isTemaCompleted(t.slug)) || isProfessorMode) && (
                <Link
                  href={withProfessorParam(`/modulo/${modId}/prova`)}
                  className="flex items-center gap-3 rounded-lg border-2 border-dashed border-amber-200 px-3 py-2.5 transition-colors hover:border-amber-300 hover:bg-amber-50 dark:border-amber-800 dark:hover:bg-amber-900/20"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs dark:bg-amber-900/40">
                    📝
                  </span>
                  <span className="font-medium text-amber-800 dark:text-amber-200">
                    Prova do Módulo {modId}
                  </span>
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
