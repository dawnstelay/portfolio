'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function NavMobile() {
    const [open, setOpen] = useState(false);
    
    return(
        <header className="sm:hidden sticky top-0 z-50 bg-white border-b font-dm_mono p-6">
            <div className="flex items-center justify-between m-4">
                <h1 className="text-2xl">dawniqueca steele</h1>
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
            <nav className="flex flex-col items-center gap-4 pb-4 font-dm_mono">
                <Link className="navunderlineanim" href="/" onClick={() => setOpen(false)}>home</Link>
                <Link className="navunderlineanim" href="/work" onClick={() => setOpen(false)}>work</Link>
                <Link className="navunderlineanim" href="/art" onClick={() => setOpen(false)}>art</Link>
                <Link className="navunderlineanim" href="/about" onClick={() => setOpen(false)}>about</Link>

                <span className=" m-2 items-center h-[0.5px] w-25 bg-black"></span>

                <div className="flex gap-4 pt-2 text-sm">
                    <a className="navunderlineanim" href="https://linkedin.com/in/dawniquecasteele" target="_blank">
                        LinkedIn
                    </a>
                    <a className="navunderlineanim" href="https://github.com/dawniquecasteele" target="_blank">
                        Github
                    </a>
                    
                    <a className="navunderlineanim" href="https://www.artstation.com/dawnstelay" target="_blank">
                        Artstation
                    </a>

                    <a className="navunderlineanim" href="https://www.canva.com/design/DAHDPtF8Ikg/O2m4WaYvdCHbSbvyTpc4ZQ/view?utm_content=DAHDPtF8Ikg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h67a7ae7149" 
                    target="_blank">
                        Resume
                    </a>
                </div>

            </nav>
            </div>
            
        </header>
       
    );
}