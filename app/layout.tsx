import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./_components/header";
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
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
