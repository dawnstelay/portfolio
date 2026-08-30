import type { Metadata } from "next";
import {Space_Mono, Funnel_Display, Momo_Signature } from "next/font/google";
import "./globals.scss";
import Nav from "../components/nav";
import ScrollUp from "../components/scrollUp";
import Footer from "../components/footer"
import Loader from "../components/loader";
import Transition from "../components/transition";


const space = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
})

const funnel = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
})

const momo = Momo_Signature({
  variable: "--font-momo-signature",
  subsets: ["latin"],
  weight: ["400"],
})


export const metadata: Metadata = {
  title: "dawniqueca steele ⋆˚ೀ",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${momo.variable} ${funnel.variable} ${space.variable}`}>
      <body
        className={`antialiased`}
      >
        <Loader>
        
          <div>
          <Nav/>
        <main>
          <Transition>
          {children}
          </Transition>
        </main>
    
            <Footer/>
            <ScrollUp/>
        </div>
        </Loader>
        
      </body>
    </html>
  );
}