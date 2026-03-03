import { notFound } from "next/navigation";
import { getProvaByModulo } from "@/lib/prova-data";
import { ProvaQuiz } from "@/components/ProvaQuiz";
import { ReferenciasModulo } from "@/components/ReferenciasModulo";
import { ProvaBreadcrumb } from "@/components/ProvaBreadcrumb";

export async function generateStaticParams() {
  return [1, 2, 3, 4, 5, 6].map((id) => ({ id: String(id) }));
}

export default async function ProvaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const moduloId = parseInt(id, 10);
  if (isNaN(moduloId) || moduloId < 1 || moduloId > 6) notFound();

  const prova = getProvaByModulo(moduloId);
  if (!prova) notFound();

  return (
    <div className="max-w-3xl p-8">
      <ProvaBreadcrumb moduloId={moduloId} />
      <header className="mb-8">
        <div className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
          Prova do Módulo
        </div>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Prova: {prova.moduloTitle}
        </h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Responda corretamente a pelo menos {prova.minCorrectToPass} de {prova.questions.length} questões para aprovar.
        </p>
      </header>
      <ProvaQuiz prova={prova} />
      <ReferenciasModulo moduloId={moduloId} />
    </div>
  );
}
