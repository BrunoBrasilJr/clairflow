import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";

export default function About() {
  return (
    <section id="sobre" className="band">
      <Container className="section-pad">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* NÃO adiciona texto. Só garante altura pra alinhar com os cards */}
          <div className="lg:min-h-360px">
            <p className="text-sm font-semibold text-muted">Sobre</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Um SaaS fictício com acabamento de produto real.
            </h2>

            {/* Mantém o texto que você já tinha — não adiciona nada */}
            <p className="mt-4 max-w-xl text-base leading-relaxed text-sub">
              A ClairFlow organiza tarefas, aprovações e handoffs com um fluxo
              simples e previsível. A proposta é reduzir retrabalho e ruído —
              colocando status, responsáveis e contexto onde o time realmente
              usa.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-sub">
              O foco aqui é experiência: hierarquia visual clara, espaçamento
              consistente, microinterações suaves e responsividade forte. Tudo
              pensado pra “parecer produto” sem depender de back-end.
            </p>
          </div>

          <div className="grid gap-4">
            <Card className="lift">
              <div className="text-base font-extrabold">Missão</div>
              <p className="mt-2 text-sm leading-relaxed text-sub">
                Transformar processos confusos em fluxos previsíveis e fáceis de
                operar.
              </p>
            </Card>

            <Card className="lift">
              <div className="text-base font-extrabold">Visão</div>
              <p className="mt-2 text-sm leading-relaxed text-sub">
                Clareza como padrão: status, responsável e contexto sempre
                visíveis.
              </p>
            </Card>

            <Card className="lift">
              <div className="text-base font-extrabold">Valores</div>
              <p className="mt-2 text-sm leading-relaxed text-sub">
                Simplicidade, consistência, acessibilidade e foco na tarefa.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
