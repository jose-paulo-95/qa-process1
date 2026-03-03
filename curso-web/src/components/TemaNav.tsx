"use client";

import Link from "next/link";
import { useProgress } from "./ProgressContext";
import { useProfessorMode } from "./ProfessorContext";
import type { Tema } from "@/lib/temas";
import { getTemaBySlug } from "@/lib/temas";

interface TemaNavProps {
  currentSlug: string;
  prev: Tema | null;
  next: Tema | null;
}

export function TemaNav({ currentSlug, prev, next }: TemaNavProps) {
  const { isTemaCompleted, isProvaUnlocked } = useProgress();
  const { isProfessorMode, withProfessorParam } = useProfessorMode();
  const completed = isTemaCompleted(currentSlug);
  const currentTema = getTemaBySlug(currentSlug);
  const isLastTemaOfModule =
    currentTema &&
    next &&
    next.moduloId !== currentTema.moduloId;
  const provaUnlocked = currentTema && isProvaUnlocked(currentTema.moduloId);
  const canGoNext = completed || isProfessorMode;

  return (
    <nav className="mt-12 flex flex-col gap-4 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900">
      {!completed && !isProfessorMode && (
        <p className="rounded-lg bg-amber-50 px-4 py-2 text-sm text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
          Responda todas as questões corretamente (ou marque como concluído) para desbloquear o próximo tema.
        </p>
      )}
      {completed && isLastTemaOfModule && provaUnlocked && (
        <Link
          href={withProfessorParam(`/modulo/${currentTema!.moduloId}/prova`)}
          className="flex items-center justify-center gap-2 rounded-lg border-2 border-dashed border-amber-300 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800 transition-colors hover:bg-amber-100 dark:border-amber-700 dark:bg-amber-900/20 dark:text-amber-200 dark:hover:bg-amber-900/30"
        >
          📝 Fazer prova do Módulo {currentTema!.moduloId}
        </Link>
      )}
      <div className="flex justify-between gap-4">
        {prev ? (
          <Link
            href={withProfessorParam(`/tema/${prev.slug}`)}
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            <span>←</span> {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          canGoNext ? (
            <Link
              href={withProfessorParam(`/tema/${next.slug}`)}
              className="ml-auto flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
            >
              Próximo: {next.title}
              <span>→</span>
            </Link>
          ) : (
            <span className="ml-auto flex items-center gap-2 rounded-lg bg-zinc-200 px-4 py-2 text-sm font-medium text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400">
              Próximo: {next.title}
              <span className="text-xs">(bloqueado)</span>
            </span>
          )
        ) : (
          <Link
            href={withProfessorParam("/")}
            className="ml-auto rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
          >
            Voltar ao início
          </Link>
        )}
      </div>
    </nav>
  );
}
