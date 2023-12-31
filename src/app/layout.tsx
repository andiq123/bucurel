import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import getBussinessInfo from "./data/bussiness-info";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const bussInfo = getBussinessInfo();

export const metadata: Metadata = {
  title: "Auto di Marian Bucurel",
  description: bussInfo.denominazione,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
