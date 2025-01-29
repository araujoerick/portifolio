import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Header from "./_components/header";
import Menu from "./_components/menu";
import { ThemeProvider } from "./_components/theme-provider";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erick Araújo - Portifólio",
  description: "Portifólio de Erick Araújo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${poppins.className} relative antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header>
            <Menu />
          </Header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
