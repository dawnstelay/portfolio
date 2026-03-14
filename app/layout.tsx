import type { Metadata } from "next";
import { Figtree, Dongle } from "next/font/google";
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

const dongle = Dongle({
  variable: "--font-dongle",
  subsets: ["latin"],
  weight: "300"
})



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
        className={`${figtree.variable} ${dongle.variable} antialiased min-h-screen flex`}
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
