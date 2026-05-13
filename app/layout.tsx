import type { Metadata } from "next";
import {DM_Mono, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.scss";
import Nav from "../components/nav";
import NavMobile from "../components/navmobile";
import ScrollUp from "../components/scrollUp";
import Footer from "../components/footer"
import Loader from "../components/loader";
import { CursorContextProvider } from "../components/cursorcontext";
import Cursor from "../components/customcursor";

const zen = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku-gothic-new",
  subsets: ["latin"],
  weight: ["400", "700"],
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
        className={`${dm_mono.variable} ${zen.variable} antialiased min-h-screen`}
      >
        <Loader>
        <CursorContextProvider>
        <Cursor/>
          <div>
          <Nav/>
        <NavMobile/>
        <main>
          {children}
        </main>
    
            <Footer/>
            <ScrollUp/>
        </div>
        </CursorContextProvider>
        </Loader>
        
      </body>
    </html>
  );
}
