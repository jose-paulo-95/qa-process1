"use client";

import Link from "next/link";
import { useProfessorMode } from "./ProfessorContext";

interface ProvaBreadcrumbProps {
  moduloId: number;
}

export function ProvaBreadcrumb({ moduloId }: ProvaBreadcrumbProps) {
  const { withProfessorParam } = useProfessorMode();

  return (
    <div className="mb-6 flex items-center gap-2 text-sm">
      <Link
        href={withProfessorParam("/")}
        className="text-zinc-500 transition-colors hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
      >
        Início
      </Link>
      <span className="text-zinc-300 dark:text-zinc-600">/</span>
      <span className="text-zinc-500 dark:text-zinc-400">
        Módulo {moduloId}
      </span>
    </div>
  );
}
