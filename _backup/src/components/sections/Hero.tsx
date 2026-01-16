"use client";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const bullets = [
  "Aprovações e handoffs sem caos",
  "Templates prontos para times",
  "Status claro em segundos",
  "UI premium (front-end only)",
];

const automations = [
  { name: "Onboarding", status: "Ativo", note: "4 etapas • 2 aprovações" },
  { name: "Solicitação de design", status: "Ativo", note: "SLA • checklist" },
  { name: "Release", status: "Pausado", note: "Aguardando review" },
];

const approvals = [
  { title: "Campanha Q1", who: "Marketing", state: "Aprovado" },
  { title: "Landing nova", who: "Produto", state: "Em análise" },
  { title: "Checklist de operação", who: "Ops", state: "Pendente" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge>ClairFlow • Automação de workflows</Badge>
              <span className="pill inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-sub">
                Light • Premium • B2B
              </span>
            </div>

            <h1 className="mt-6 max-w-[22ch] text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Automação leve.{" "}
              <span className="text-aurora">Resultados claros</span>.
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-sub sm:text-lg">
              A ClairFlow organiza tarefas, aprovações e handoffs com um fluxo
              simples. Menos retrabalho, mais clareza — com uma experiência
              premium do tipo que parece produto de empresa grande.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href="#planos" variant="primary" size="lg">
                Ver planos <ArrowRight className="size-4" />
              </Button>
              <Button as="a" href="#produto" variant="secondary" size="lg">
                Ver como funciona
              </Button>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-sub">
                  <CheckCircle2
                    className="mt-0.5 size-4"
                    style={{ color: "var(--primary)" }}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          >
            <Card className="lift">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-extrabold">
                    Dashboard (preview)
                  </div>
                  <p className="mt-1 text-sm text-sub">
                    Uma simulação leve do produto (sem back-end).
                  </p>
                </div>
                <span className="pill rounded-full px-3 py-1 text-xs font-semibold text-sub">
                  beta
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-var(--border) bg-white/70 p-4 backdrop-blur">
                  <div className="text-xs font-semibold text-muted">
                    Automations
                  </div>
                  <div className="mt-3 grid gap-3">
                    {automations.map((a) => (
                      <div
                        key={a.name}
                        className="rounded-2xl border border-var(--border) bg-white/80 p-3"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-sm font-bold">{a.name}</div>
                          <span className="text-xs font-semibold text-sub">
                            {a.status}
                          </span>
                        </div>
                        <div className="mt-1 text-xs text-muted">{a.note}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-var(--border) bg-white/70 p-4 backdrop-blur">
                  <div className="text-xs font-semibold text-muted">
                    Approvals
                  </div>
                  <div className="mt-3 grid gap-3">
                    {approvals.map((a) => (
                      <div
                        key={a.title}
                        className="rounded-2xl border border-var(--border) bg-white/80 p-3"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-sm font-bold">{a.title}</div>
                          <span className="text-xs font-semibold text-sub">
                            {a.state}
                          </span>
                        </div>
                        <div className="mt-1 text-xs text-muted">{a.who}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-3xl border border-var(--border) bg-white/70 p-4 backdrop-blur">
                <div className="text-xs font-semibold text-muted">Impact</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="pill rounded-full px-3 py-1 text-xs font-semibold text-sub">
                    -30% retrabalho
                  </span>
                  <span className="pill rounded-full px-3 py-1 text-xs font-semibold text-sub">
                    + clareza
                  </span>
                  <span className="pill rounded-full px-3 py-1 text-xs font-semibold text-sub">
                    + velocidade
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
