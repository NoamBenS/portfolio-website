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
        {children}
      </body>
    </html>
  );
}
