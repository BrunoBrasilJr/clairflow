import "./globals.css";
import ScrollRestorationTop from "./ScrollRestorationTop";

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
