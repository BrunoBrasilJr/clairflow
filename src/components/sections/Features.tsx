import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import {
  Activity,
  Layers,
  ShieldCheck,
  Timer,
  Wand2,
  Sparkles,
} from "lucide-react";

const items = [
  {
    title: "Templates prontos",
    desc: "Comece com fluxos prontos e personalize rápido.",
    tone: "bg-primary-10",
    icon: Layers,
  },
  {
    title: "Aprovação com histórico",
    desc: "Status objetivo e rastreabilidade do processo.",
    tone: "bg-secondary-10",
    icon: ShieldCheck,
  },
  {
    title: "Automação sem atrito",
    desc: "UI simples pra montar etapas e transições.",
    tone: "bg-accent-10",
    icon: Wand2,
  },
  {
    title: "Insights úteis",
    desc: "Leitura rápida de gargalos e tempos por etapa.",
    tone: "bg-primary-10",
    icon: Activity,
  },
  {
    title: "Menos retrabalho",
    desc: "Contexto no lugar certo e checklist claro.",
    tone: "bg-secondary-10",
    icon: Sparkles,
  },
  {
    title: "Velocidade real",
    desc: "Interface leve, responsiva e objetiva.",
    tone: "bg-accent-10",
    icon: Timer,
  },
];

export default function Features() {
  return (
    <section id="recursos" className="band">
      <Container className="section-pad">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-text-3">Recursos</p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Simples o suficiente pra usar todo dia.
          </h2>
          <p className="max-w-2xl text-base text-text-2">
            Aqui a UI mostra maturidade: espaçamento, hierarquia e consistência.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <Card key={it.title} className="lift">
                <div className="flex items-start gap-3">
                  <div
                    className={`grid size-11 place-items-center rounded-2xl border border-border ${it.tone}`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <div className="text-base font-bold">{it.title}</div>
                    <p className="mt-1 text-sm leading-relaxed text-text-2">
                      {it.desc}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
