import type { Metadata } from "next";
import { Space_Mono, Figtree, Dongle } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import NavMobile from "../components/navmobile";
import FootBar from "../components/footbar";
import Loader from "../components/loader";




const mono = Space_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: "400"
});


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
        className={`${mono.variable} ${figtree.variable} ${dongle.variable} antialiased min-h-screen flex flex-col md:flex-row`}
      >
        <NavMobile/>
        <Navbar/>
        <Loader>
          {children}
        </Loader>
        <FootBar/>
      </body>
    </html>
  );
}
