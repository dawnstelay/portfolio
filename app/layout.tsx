import type { Metadata } from "next";
import { Figtree, Bricolage_Grotesque, DM_Mono, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import NavMobile from "../components/navmobile";
import FootBar from "../components/footbar";
import Loader from "../components/loader";
import { CursorContextProvider } from "../components/cursorcontext";
import Cursor from "../components/customcursor";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: "300"
})

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: "300",
})

const zen = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku-gothic-new",
  subsets: ["latin"],
  weight: ["400", "700"],
})

const mono = DM_Mono({
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
        className={`${figtree.variable} ${bricolage.variable} ${mono.variable} ${zen.variable} antialiased min-h-screen flex`}
      >
        <Loader>
        <CursorContextProvider>
        <Cursor/>
          <div className="flex flex-col md:flex-row">
          <Navbar/>
        <NavMobile/>
        <main className=" flex-1">
          {children}
        </main>
        
            <FootBar/>
        </div>
        </CursorContextProvider>
        </Loader>
        
      </body>
    </html>
  );
}
