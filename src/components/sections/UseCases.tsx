import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";

const cases = [
  {
    title: "Onboarding de colaboradores",
    desc: "Checklists, aprovações e etapas com responsáveis claros.",
  },
  {
    title: "Solicitações internas",
    desc: "Demandas de design/dev com status objetivo e histórico.",
  },
  {
    title: "Fluxo de releases",
    desc: "Aprovação antes de deploy e handoff entre áreas sem ruído.",
  },
  {
    title: "Operações e SLA",
    desc: "Priorização, visibilidade de gargalo e tempo por etapa.",
  },
];

export default function UseCases() {
  return (
    <section id="casos" className="band">
      <Container className="section-pad">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-muted">Casos</p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Onde a ClairFlow encaixa.
          </h2>
          <p className="max-w-2xl text-base text-sub">
            Exemplos de aplicação realista pra um SaaS B2B — com UI limpa e
            previsível.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <Card key={c.title} className="lift">
              <div className="text-base font-extrabold">{c.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-sub">{c.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
