import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/lib/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle-component";

export const metadata: Metadata = {
  icons: "n.svg",
  title: "Noam Ben Simon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <header
            style={{ backgroundColor: "var(--background)" }}
            className="flex justify-center fixed top-0 left-0 w-full z-50 py-4"
          >
            <div>NOAM BEN SIMON</div>
            <div className="fixed right-5">
              <ThemeToggle />
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="flex justify-center py-4 text-sm">
            Website designed and coded by me.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
