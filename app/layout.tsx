import type { Metadata } from "next";
import {DM_Mono, Urbanist } from "next/font/google";
import "./globals.scss";
import Nav from "../components/nav";
import ScrollUp from "../components/scrollUp";
import Footer from "../components/footer"
import Loader from "../components/loader";
import Transition from "../components/transition";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["100", "200", "300","400", "500","600", "700"],
})

const dm_mono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300"],
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
    <html lang="en">
      <body
        className={`${dm_mono.variable} ${urbanist.variable} antialiased`}
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