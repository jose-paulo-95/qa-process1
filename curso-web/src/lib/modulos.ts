export interface Modulo {
  slug: string;
  title: string;
  duration?: string;
  order: number;
}

export const MODULOS: Modulo[] = [
  { slug: "modulo-01-fundamentos-qa", title: "Fundamentos de QA", duration: "~4h", order: 1 },
  { slug: "modulo-02-tecnicas-teste", title: "Técnicas de Teste", duration: "~3h", order: 2 },
  { slug: "modulo-03-postman", title: "Testes de API (Postman)", duration: "~6h", order: 3 },
  { slug: "modulo-04-swagger", title: "Swagger e Contratos", duration: "~4h", order: 4 },
  { slug: "modulo-05-cypress", title: "Automação Cypress", duration: "~8h", order: 5 },
  { slug: "modulo-06-ferramentas", title: "Ferramentas e Processo", duration: "~5h", order: 6 },
];

export function getModuloSlugs(): string[] {
  return MODULOS.map((m) => m.slug);
}
