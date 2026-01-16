import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";

export default function Product() {
  return (
    <section id="produto" className="band-alt">
      <Container className="section-pad">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold text-muted">Produto</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Fluxos claros do início ao fim.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-sub">
              Em vez de “mensagem perdida”, você tem etapas, responsáveis e
              status com leitura rápida. Menos ruído, mais previsibilidade.
            </p>

            <div className="mt-6 rounded-3xl border border-var(--border) bg-white/70 p-5 backdrop-blur lift">
              <div className="text-sm font-bold">
                O que melhora imediatamente
              </div>
              <ul className="mt-3 grid gap-2 text-sm text-sub">
                <li className="flex items-start gap-2">
                  <span
                    className="mt-2 size-1.5 rounded-full"
                    style={{ background: "var(--primary)" }}
                  />
                  <span>Responsável por etapa (sem dúvida de “quem faz”).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="mt-2 size-1.5 rounded-full"
                    style={{ background: "var(--secondary)" }}
                  />
                  <span>Histórico de aprovação com status objetivo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="mt-2 size-1.5 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                  <span>Visibilidade de gargalos e tempo por etapa.</span>
                </li>
              </ul>
            </div>
          </div>

          <Card className="lift">
            <div className="rounded-3xl border border-var(--border) bg-white/75 p-6 backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-extrabold">Fluxo exemplo</div>
                  <p className="mt-1 text-sm text-sub">
                    Solicitação → Aprovação → Execução → Entrega
                  </p>
                </div>
                <span className="pill rounded-full px-3 py-1 text-xs font-semibold text-sub">
                  preview
                </span>
              </div>

              <div className="mt-6 grid gap-3">
                {[
                  { step: "1) Solicitação", w: "w-4/5" },
                  { step: "2) Aprovação", w: "w-3/5" },
                  { step: "3) Execução", w: "w-4/6" },
                  { step: "4) Entrega", w: "w-2/5" },
                ].map((x) => (
                  <div
                    key={x.step}
                    className="rounded-3xl border border-var(--border) bg-white/70 p-4"
                  >
                    <div className="text-xs font-semibold text-muted">
                      {x.step}
                    </div>
                    <div
                      className={`mt-2 h-2 ${x.w} rounded-full`}
                      style={{ background: "var(--ink-10)" }}
                    />
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs text-muted">
                Demo front-end: foco em UI/UX e consistência visual.
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
