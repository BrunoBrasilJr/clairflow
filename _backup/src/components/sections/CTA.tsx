import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section id="cta">
      <Container className="py-16 sm:py-20">
        <Card className="p-7 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold text-text-3">Contato</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Quer ver a demo em ação?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-text-2">
                Landing de empresa fictícia, mas com padrão de produto real.
                Perfeita para portfólio: mostra UI/UX, estrutura e atenção a
                detalhe.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-white p-5 sm:p-6">
              <div className="text-sm font-bold">Solicitar demo</div>
              <p className="mt-1 text-sm text-text-2">
                (Front-end only — botão e formulário para simulação)
              </p>

              <div className="mt-5 grid gap-3">
                <input
                  className="h-11 w-full rounded-2xl border border-border bg-bg-2 px-4 text-sm outline-none"
                  placeholder="Seu nome"
                />
                <input
                  className="h-11 w-full rounded-2xl border border-border bg-bg-2 px-4 text-sm outline-none"
                  placeholder="Seu e-mail"
                />
                <Button variant="primary" size="lg" className="w-full">
                  Enviar
                </Button>
                <Button
                  as="a"
                  href="#planos"
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  Ver planos
                </Button>
              </div>

              <p className="mt-3 text-xs text-text-3">
                Dica: depois a gente conecta isso com “mailto:” e deixa bem
                apresentável.
              </p>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
