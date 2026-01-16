const faqs = [
  {
    q: "Isso é um produto real?",
    a: "Não. É uma empresa fictícia. A demo é front-end only, focada em UI/UX e consistência.",
  },
  {
    q: "Por que não tem back-end?",
    a: "O objetivo é demonstrar qualidade de front-end: layout, componentes, estados e acessibilidade.",
  },
  {
    q: "O que essa demo prova?",
    a: "Hierarquia visual, espaçamento, responsividade, microinterações e organização de código.",
  },
  {
    q: "Dá pra evoluir pra um produto real?",
    a: "Sim. Dá pra conectar API, autenticação e persistência depois. A base de UI já está pronta.",
  },
];

export default function FaqContent() {
  return (
    <div className="grid gap-3">
      {faqs.map((f) => (
        <div
          key={f.q}
          className="rounded-2xl border border-var(--border) bg-white/80 p-4"
        >
          <div className="text-sm font-extrabold">{f.q}</div>
          <p className="mt-2 text-sm leading-relaxed text-sub">{f.a}</p>
        </div>
      ))}
    </div>
  );
}
