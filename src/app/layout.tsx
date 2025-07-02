import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>
        <header className="fixed top-3 left-0 w-full z-50">
          <div className="flex justify-center py-4">NOAM BEN SIMON</div>
        </header>
        {children}
        <footer className="fixed bottom-3 w-full z-50">
          <div className="flex justify-center py-4 text-sm">
            Website designed and coded by me.
          </div>
        </footer>
      </body>
    </html>
  );
}
