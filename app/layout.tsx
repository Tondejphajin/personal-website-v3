import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tin | Personal Portfolio",
  description: "Tin Dejphachon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 flex justify-center h-screen`}
      >
        <div
          className="bg-white/90 w-[76.25rem] text-zinc-800 shadow-lg
        shadow-zinc-800/5 ring-1 ring-zinc-900/5"
        >
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
