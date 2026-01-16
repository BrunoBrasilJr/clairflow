"use client";

import { useEffect } from "react";

export default function ScrollRestorationTop() {
  useEffect(() => {
    // evita o browser lembrar a posição anterior no reload
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // sempre começa no topo ao carregar/recarregar
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return null;
}
