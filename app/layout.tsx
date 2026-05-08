import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Datélys by I&C | Crème Anti-Âge Naturelle",
  description: "Crème anti-âge naturelle à base de noyaux de dattes. Une beauté naturelle inspirée de la nature avec des ingrédients soigneusement sélectionnés.",
  keywords: ["Datélys", "crème anti-âge", "noyaux de dattes", "beauté naturelle", "I&C"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="ltr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
