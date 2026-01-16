import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const plans = [
  {
    name: "Starter",
    price: "R$ 0",
    desc: "Para testar o fluxo com um time pequeno.",
    perks: [
      "1 workspace",
      "Templates básicos",
      "Painel simples",
      "Suporte comunidade",
    ],
    highlight: false,
  },
  {
    name: "Team",
    price: "R$ 49/mês",
    desc: "Para equipes que querem consistência e velocidade.",
    perks: [
      "Workflows ilimitados",
      "Aprovações + histórico",
      "Templates avançados",
      "Insights leves",
    ],
    highlight: true,
  },
  {
    name: "Business",
    price: "R$ 149/mês",
    desc: "Para operação com SLA e visibilidade total.",
    perks: [
      "Times e permissões",
      "Insights avançados",
      "Export e relatórios",
      "Onboarding guiado",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="planos" className="band-alt">
      <Container className="section-pad">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-muted">Planos</p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Preço simples. Valor claro.
          </h2>
          <p className="max-w-2xl text-base text-sub">
            Estrutura limpa, legível e consistente — sem CTA desalinhado.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {plans.map((p) => (
            <Card key={p.name} className="lift">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-base font-extrabold">{p.name}</div>
                  <p className="mt-1 text-sm text-sub">{p.desc}</p>
                </div>

                {p.highlight && (
                  <span className="pill rounded-full px-3 py-1 text-xs font-semibold text-sub">
                    Popular
                  </span>
                )}
              </div>

              <div className="mt-5 text-3xl font-extrabold tracking-tight">
                {p.price}
              </div>

              <ul className="mt-5 grid gap-2 text-sm text-sub">
                {p.perks.map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <span
                      className="size-1.5 rounded-full"
                      style={{ background: "var(--primary)" }}
                    />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button
                  as="a"
                  href="#cta"
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  Começar
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
