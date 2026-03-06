'use client'

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";


export default function NavMobile() {
    const [open, setOpen] = useState(false);
    
    return(
        <header className="md:hidden sticky top-0 z-50 bg-white border-b font-dongle">
            <div className="flex items-center justify-between p-4">
                <h1 className="text-4xl">dawniqueca steele</h1>
                <button
                onClick={() => setOpen(!open)}
                className="relative w-3 h-3 flex flex-col justify-between"
                aria-label="Toggle Menu"
                >
                    <span className={`absolute left-0 top-1/2 h-[1px] w-full bg-black transition-all duration-300 ease-in-out
                        ${open ? "rotate-45" : "-translate-y-2"}`}></span>
                    <span className={`absolute left-0 top-1/2 h-[1px] w-full bg-black transition-all duration-300 ease-in-out
                        ${open ? "opacity-0" : ""}`}></span>
                    <span className={`absolute left-0 top-1/2 h-[1px] w-full bg-black transition-all duration-300 ease-in-out
                        ${open ? "-rotate-45" : "translate-y-2"}`}></span>
                </button>
            </div>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out
                ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
            <nav className="flex flex-col items-center gap-4 pb-4 font-figtree">
                <Link href="/" onClick={() => setOpen(false)}>home</Link>
                <Link href="/work" onClick={() => setOpen(false)}>work</Link>
                <Link href="/art" onClick={() => setOpen(false)}>art</Link>
                <Link href="/about" onClick={() => setOpen(false)}>about</Link>

                <div className="flex gap-4 pt-2">
                    <a href="https://linkedin.com/in/dawniquecasteele" target="_blank">
                        LinkedIn
                    </a>
                    <a href="https://github.com/dawniquecasteele" target="_blank">
                        Github
                    </a>
                    
                    <a href="https://www.artstation.com/dawnstelay" target="_blank">
                        Artstation
                    </a>
                </div>

            </nav>
            </div>
            
        </header>
       
    );
}