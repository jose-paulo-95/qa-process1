"use client";

import { useProgress } from "./ProgressContext";

interface TemaConcluidoButtonProps {
  slug: string;
}

export function TemaConcluidoButton({ slug }: TemaConcluidoButtonProps) {
  const { isTemaCompleted, markTemaCompleted } = useProgress();

  if (isTemaCompleted(slug)) {
    return (
      <div className="mt-6 rounded-lg bg-emerald-100 p-4 text-center text-sm font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200">
        ✓ Tema concluído. Você pode avançar para o próximo.
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900">
      <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
        Este tema não possui questões. Marque como concluído quando terminar a leitura.
      </p>
      <button
        type="button"
        onClick={() => markTemaCompleted(slug)}
        className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
      >
        Marquei como concluído
      </button>
    </div>
  );
}
