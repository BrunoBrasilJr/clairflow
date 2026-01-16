import "./globals.css";
import ScrollRestorationTop from "./ScrollRestorationTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClairFlow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ScrollRestorationTop />
        {children}
      </body>
    </html>
  );
}
