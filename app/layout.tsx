import type { Metadata } from "next";
import { Space_Mono, Funnel_Display } from "next/font/google";
import "./globals.scss";
import Nav from "../components/nav";
import ScrollUp from "../components/scrollUp";
import Footer from "../components/footer"
import Loader from "../components/loader";
import Transition from "../components/transition";
import localFont from "next/font/local";


const space = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
})

const funnel = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
})


const cozy = localFont({
  variable: "--font-cozy-quill",
  src: "../public/fonts/CozyQuill.woff2",
})

const kiwi = localFont({
  variable: "--font-kiwi-soda",
  src: "../public/fonts/KiwiSoda.woff2",
})

const emoji = localFont({
  variable: "--font-pixel-emoji",
  src: "../public/fonts/PixelEmoji.woff2"
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
    <html lang="en" className={`${space.variable} ${funnel.variable} ${cozy.variable} ${kiwi.variable} ${emoji.variable}`}>
      <body
        className={`antialiased`}
      >
        <Loader>
        
          <div className="background justify-center item-center">
          <Nav/>
        <main className="overlay justify-center item-center">
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