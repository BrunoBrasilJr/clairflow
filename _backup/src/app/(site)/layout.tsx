import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 page-bg">
        <div className="absolute inset-0 grid-soft opacity-70" />
      </div>

      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
