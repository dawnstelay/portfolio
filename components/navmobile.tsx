'use client'

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";


export default function NavMobile() {
    const [open, setOpen] = useState(false);
    
    return(
        <header className="md:hidden sticky top-0 z-50 bg-white border-b font-mono">
            <div className="flex items-center justify-between p-4">
                <h1 className="text-lg">DAWNIQUECA STEELE</h1>
                <button
                onClick={() => setOpen(!open)}
                className="relative w-6 h-6 flex flex-col justify-between"
                aria-label="Toggle Menu"
                >
                    <span className={`absolute left-0 top-1/2 h-[2px] w-full bg-black transition-all duration-300 ease-in-out
                        ${open ? "rotate-45" : "-translate-y-2"}`}></span>
                    <span className={`absolute left-0 top-1/2 h-[2px] w-full bg-black transition-all duration-300 ease-in-out
                        ${open ? "opacity-0" : ""}`}></span>
                    <span className={`absolute left-0 top-1/2 h-[2px] w-full bg-black transition-all duration-300 ease-in-out
                        ${open ? "-rotate-45" : "translate-y-2"}`}></span>
                </button>
            </div>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out
                ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
            <nav className="flex flex-col items-center gap-4 pb-4">
                <Link href="/" onClick={() => setOpen(false)}>HOME</Link>
                <Link href="/animation" onClick={() => setOpen(false)}>ANIMATION</Link>
                <Link href="/design" onClick={() => setOpen(false)}>DESIGN</Link>
                <Link href="/dev" onClick={() => setOpen(false)}>DEV</Link>
                <Link href="/gallery" onClick={() => setOpen(false)}>GALLERY</Link>
                <Link href="/about" onClick={() => setOpen(false)}>ABOUT</Link>

                <div className="flex gap-4 pt-2">
                    <a href="https://linkedin.com/in/dawniquecasteele" target="_blank">
                        <Image 
                        src="/linkedin.svg" 
                        alt="LinkedIn Logo" 
                        width={30} 
                        height={30} 
                        />
                    </a>
                    <a href="https://github.com/dawniquecasteele" target="_blank">
                        <Image 
                        src="/github.svg" 
                        alt="GitHub Logo" 
                        width={30} 
                        height={30} 
                        />
                    </a>
                    <a href="mailto:dawniqsteele@gmail.com">
                        <Image 
                        src="/email.svg" 
                        alt="Email Logo" 
                        width={30} 
                        height={30} 
                        />
                    </a>
                    <a href="https://www.artstation.com/dawnstelay" target="_blank">
                        <Image 
                        src="/artstation.svg" 
                        alt="Artstation Logo" 
                        width={30} 
                        height={30} 
                        />
                    </a>
                </div>

            </nav>
            </div>
            
        </header>
       
    );
}