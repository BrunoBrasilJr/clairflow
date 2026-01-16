import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";

const items = [
  {
    name: "Marina, Ops Lead",
    quote:
      "A leitura de status ficou instantânea. O time parou de se perder em mensagens e começou a trabalhar com fluxo claro.",
  },
  {
    name: "Renato, Product Manager",
    quote:
      "O histórico de aprovação resolveu discussões e retrabalho. Ficou objetivo e fácil de acompanhar.",
  },
  {
    name: "Carla, Tech Lead",
    quote:
      "UI leve, consistente e sem ruído. Dá pra sentir que foi pensado como produto de verdade.",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="band-alt">
      <Container className="section-pad">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-muted">Depoimentos</p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Credibilidade que parece real.
          </h2>
          <p className="max-w-2xl text-base text-sub">
            Conteúdo fictício, mas estrutura e acabamento de SaaS premium.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {items.map((t) => (
            <Card key={t.name} className="lift">
              <p className="text-sm leading-relaxed text-sub">“{t.quote}”</p>
              <div className="mt-4 text-sm font-extrabold">{t.name}</div>
              <div className="mt-1 text-xs text-muted">
                Cliente fictício • B2B
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
