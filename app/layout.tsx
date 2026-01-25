import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: "300"
});

export const metadata: Metadata = {
  title: "Dawniqueca Steele",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
