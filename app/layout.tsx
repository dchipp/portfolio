import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Patrick Francesco Mascia",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <meta name="description" content="Hi, I am Patrick Francesco Mascia, and this is my personal portfolio where I showcase what I can do and what I have done throughout the years. I am open to learn new technology and topics." />
      <meta name="keywords" content="Patrick, Patrick Mascia, Patrick Francesco Mascia" />
      <meta property="og:title" content="Patrick Francesco Mascia | Portfolio" />
      <meta property="og:description" content="Hi, I am Patrick Francesco Mascia, and this is my personal portfolio where I showcase what I can do and what I have done throughout the years. I am open to learn new technology and topics." />
      <meta property="og:image" content="portrait.png" />
      <body className={inter.className + " bg-background"} >
        <Navbar/>
        {children}</body>
    </html>
  );
}
