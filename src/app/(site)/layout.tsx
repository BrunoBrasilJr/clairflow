import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      {/* Background do site */}
      <div className="pointer-events-none fixed inset-0 -z-10 page-bg">
        <div className="absolute inset-0 grid-soft opacity-70" />
      </div>

      <Header />
      <main className="relative">{children}</main>
      <Footer />

      {/* botão voltar ao topo */}
      <ScrollToTop />
    </div>
  );
}
