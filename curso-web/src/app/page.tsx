import Link from "next/link";
import { TEMAS } from "@/lib/temas";
import { HomeProgress } from "@/components/HomeProgress";
import { ModuleList } from "@/components/ModuleList";

export default function HomePage() {
  return (
    <div className="max-w-3xl p-8">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Curso QA Junior para Pleno
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
          Curso completo alinhado ao syllabus CTFL 4.0. Estude no seu ritmo,
          responda às questões e avance tema a tema.
        </p>
        </div>
        <Link
          href="/?perfil=professor"
          className="shrink-0 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-800 transition-colors hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200 dark:hover:bg-amber-900/30"
        >
          Modo Professor
        </Link>
      </div>

      <div className="mb-8">
        <HomeProgress />
      </div>

      <div className="mb-8 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        <h2 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
          Como estudar
        </h2>
        <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          <li className="flex items-start gap-2">
            <span className="font-medium text-emerald-600">1.</span>
            Leia o conteúdo do tema
          </li>
          <li className="flex items-start gap-2">
            <span className="font-medium text-emerald-600">2.</span>
            Responda as questões corretamente para desbloquear o próximo
          </li>
          <li className="flex items-start gap-2">
            <span className="font-medium text-emerald-600">3.</span>
            Ao final de cada módulo, faça a prova e confira as referências
          </li>
        </ul>
      </div>

      <h2 className="mb-4 text-xl font-semibold text-zinc-800 dark:text-zinc-200">
        Módulos e temas ({TEMAS.length} temas + 6 provas)
      </h2>
      <ModuleList />

      <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        <h2 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
          Recursos práticos
        </h2>
        <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
          <li>
            <a
              href="https://serverest.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline dark:text-emerald-400"
            >
              API ServeRest
            </a>
          </li>
          <li>
            <a
              href="https://serverest.dev/doc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline dark:text-emerald-400"
            >
              Swagger ServeRest
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
