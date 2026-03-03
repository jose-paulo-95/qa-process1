"use client";

import { useProgress } from "./ProgressContext";

export function ProgressBar() {
  const { progressPercent } = useProgress();

  return (
    <div className="px-4 py-2">
      <div className="flex items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400">
        <span>Seu progresso</span>
        <span className="font-medium tabular-nums">{progressPercent}%</span>
      </div>
      <div className="mt-1 h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
        <div
          className="h-full rounded-full bg-emerald-500 transition-all duration-500 ease-out dark:bg-emerald-600"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
