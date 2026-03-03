"use client";

import Link from "next/link";
import { REFERENCIAS_POR_MODULO } from "@/lib/referencias";

export function ReferenciasModulo({ moduloId }: { moduloId: number }) {
  const refs = REFERENCIAS_POR_MODULO[moduloId];
  if (!refs || refs.length === 0) return null;

  const typeLabels: Record<string, string> = {
    curso: "Curso",
    video: "Vídeo",
    documentacao: "Documentação",
  };

  return (
    <div className="mt-12 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900">
      <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        📚 Complemente seus estudos
      </h2>
      <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
        Cursos, vídeos e documentação para aprofundar no Módulo {moduloId}.
      </p>
      <ul className="space-y-3">
        {refs.map((r, i) => (
          <li key={i}>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-lg border border-zinc-200 p-3 transition-colors hover:border-emerald-300 hover:bg-emerald-50 dark:border-zinc-700 dark:hover:border-emerald-800 dark:hover:bg-emerald-900/20"
            >
              <span className="shrink-0 rounded bg-zinc-200 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400">
                {typeLabels[r.type] ?? r.type}
              </span>
              <div className="min-w-0 flex-1">
                <span className="font-medium text-emerald-600 dark:text-emerald-400">
                  {r.title}
                </span>
                {r.description && (
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {r.description}
                  </p>
                )}
              </div>
              <span className="shrink-0 text-zinc-400">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
