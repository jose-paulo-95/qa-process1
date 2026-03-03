"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TEMAS, getTemasByModulo } from "@/lib/temas";
import { useProgress } from "./ProgressContext";
import { useProfessorMode } from "./ProfessorContext";
import { ProgressBar } from "./ProgressBar";

const MODULO_TITLES: Record<number, string> = {
  1: "Fundamentos de QA (CTFL 4.0)",
  2: "Técnicas de Teste (CTFL 4.0)",
  3: "Testes de API",
  4: "Swagger e Contratos",
  5: "Automação Cypress",
  6: "Ferramentas e Processo",
};

const STORAGE_EXPANDED = "curso-qa-modules-expanded";

function loadExpanded(): Record<number, boolean> {
  const defaultAll = { 1: true, 2: true, 3: true, 4: true, 5: true, 6: true };
  if (typeof window === "undefined") return defaultAll;
  try {
    const raw = localStorage.getItem(STORAGE_EXPANDED);
    if (!raw) return defaultAll;
    const parsed = JSON.parse(raw) as Record<string, boolean>;
    return Object.fromEntries(
      Object.entries(parsed).map(([k, v]) => [Number(k), v])
    ) as Record<number, boolean>;
  } catch {
    return defaultAll;
  }
}

function saveExpanded(state: Record<number, boolean>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_EXPANDED, JSON.stringify(state));
}

export function Sidebar() {
  const pathname = usePathname();
  const { isTemaCompleted, isTemaUnlocked, isProvaCompleted, isProvaUnlocked } = useProgress();
  const { isProfessorMode, withProfessorParam } = useProfessorMode();
  const firstIncompleteTema = TEMAS.find((t) => isTemaUnlocked(t.slug) && !isTemaCompleted(t.slug));
  const defaultExpanded = { 1: true, 2: true, 3: true, 4: true, 5: true, 6: true };
  const [expanded, setExpanded] = useState<Record<number, boolean>>(defaultExpanded);

  useEffect(() => {
    setExpanded(loadExpanded());
  }, []);

  const toggleModulo = (modId: number) => {
    const next = { ...expanded, [modId]: !expanded[modId] };
    setExpanded(next);
    saveExpanded(next);
  };

  const modulos = [1, 2, 3, 4, 5, 6];

  return (
    <aside className="flex w-72 shrink-0 flex-col overflow-hidden border-r border-zinc-200 bg-gradient-to-b from-zinc-50 to-white dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
      <div className="flex flex-col gap-1 border-b border-zinc-200 p-4 dark:border-zinc-800">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          Curso QA Pleno
        </Link>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          CTFL 4.0 • Junior → Pleno
        </p>
      </div>

      <ProgressBar />

      <nav className="flex-1 overflow-y-auto p-3">
        <Link
          href={withProfessorParam("/")}
          className={`mb-2 flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
            pathname === "/"
              ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200"
              : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
          }`}
        >
          <span>🏠</span> Início
          {isProfessorMode && <span className="rounded bg-amber-200 px-1.5 text-xs text-amber-800">Professor</span>}
        </Link>

        {firstIncompleteTema && (
          <Link
            href={withProfessorParam(`/tema/${firstIncompleteTema.slug}`)}
            className="mb-3 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800 transition-colors hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-200 dark:hover:bg-emerald-900/30"
          >
            <span>▶</span> Continuar estudando
          </Link>
        )}

        <div className="space-y-1">
          {modulos.map((modId) => {
            const temas = getTemasByModulo(modId);
            if (temas.length === 0) return null;
            const isExpanded = expanded[modId] ?? true;
            const completedCount = temas.filter((t) => isTemaCompleted(t.slug)).length;
            const totalCount = temas.length;
            const provaDone = isProvaCompleted(modId);
            const provaUnlocked = isProvaUnlocked(modId);

            return (
              <div
                key={modId}
                className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700"
              >
                <button
                  type="button"
                  onClick={() => toggleModulo(modId)}
                  className="flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-zinc-800"
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`transition-transform ${isExpanded ? "rotate-90" : ""}`}
                      aria-hidden
                    >
                      ▶
                    </span>
                    Módulo {modId}
                  </span>
                  <span className="rounded-full bg-zinc-200 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400">
                    {completedCount}/{totalCount}
                  </span>
                </button>
                {isExpanded && (
                  <div className="border-t border-zinc-200 bg-white/50 dark:border-zinc-700 dark:bg-zinc-900/30">
                    <div className="px-2 py-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      {MODULO_TITLES[modId]}
                    </div>
                    {temas.map((t) => {
                      const isActive = pathname === `/tema/${t.slug}`;
                      const done = isTemaCompleted(t.slug);
                      const unlocked = isTemaUnlocked(t.slug);
                      return (
                        <div key={t.slug}>
                          {unlocked ? (
                            <Link
                              href={withProfessorParam(`/tema/${t.slug}`)}
                              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                                isActive
                                  ? "bg-emerald-100 font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200"
                                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                              }`}
                            >
                              <span
                                className={`shrink-0 text-xs ${
                                  done ? "text-emerald-500" : "text-zinc-400 dark:text-zinc-500"
                                }`}
                                aria-hidden
                              >
                                {done ? "✓" : "○"}
                              </span>
                              <span className="truncate">{t.title}</span>
                            </Link>
                          ) : (
                            <div
                              className="flex cursor-not-allowed items-center gap-2 rounded-md px-3 py-2 text-sm text-zinc-400 dark:text-zinc-500"
                              title="Complete o tema anterior para desbloquear"
                            >
                              <span className="shrink-0 text-xs">🔒</span>
                              <span className="truncate">{t.title}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                    {(provaUnlocked || isProfessorMode) && (
                      <Link
                        href={withProfessorParam(`/modulo/${modId}/prova`)}
                        className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                          pathname === `/modulo/${modId}/prova`
                            ? "bg-emerald-100 font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200"
                            : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                        }`}
                      >
                        <span className={`shrink-0 text-xs ${provaDone ? "text-emerald-500" : "text-zinc-400"}`}>
                          {provaDone ? "✓" : "📝"}
                        </span>
                        <span className="truncate font-medium">Prova do Módulo {modId}</span>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
