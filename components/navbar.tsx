'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    
    return(
        <div id="navBox" className=" flex p-10 justify-center border-b border-dashed w-[100%]">
            <nav className="flex flex-row justify-between">
                
                <Image
                className=""
                src="/logo.svg"
                alt="Logo"
                width={50}
                height={50}
                />
                
                <div id="desktop" className="hidden md:flex">
                    <ul className="flex flex-row gap-3">
                        <li>
                            <Link href="/" className= "navunderlineanim">home</Link>
                        </li>

                        <li>
                            <Link href="/dev" className={`${pathname === '/dev' ? 'text-violet-200' : ''} navunderlineanim`}>
                            dev</Link>
                        </li>

                        <li>
                            <Link href="/design" className={`${pathname === '/design' ? 'text-violet-200' : ''} navunderlineanim`}>
                            design</Link>
                        </li>

                        <li>
                            <Link href="/art" className={`${pathname === '/art' ? 'text-violet-200' : ''} navunderlineanim`}>
                            art</Link>
                        </li>

                        <li>
                            <Link href="/about" className={`${pathname === '/about' ? 'text-violet-200' : ''} navunderlineanim`}>about</Link>
                        </li>
                    </ul>
                </div>

                <div id="mobile" className= "md:hidden">
                    <button
                    onClick={() => setOpen(!open)}
                    className="relative w-3 h-3 flex justify-center"
                    aria-label="Toggle Menu"
                    >
                        <span className={`absolute left-0 top-1/2 h-[1px] w-full bg-black transition-all duration-300 ease-in-out
                            ${open ? "rotate-45" : "-translate-y-2"}`}></span>
                        <span className={`absolute left-0 top-1/2 h-[1px] w-full bg-black transition-all duration-300 ease-in-out
                            ${open ? "opacity-0" : ""}`}></span>
                        <span className={`absolute left-0 top-1/2 h-[1px] w-full bg-black transition-all duration-300 ease-in-out
                            ${open ? "-rotate-45" : "translate-y-2"}`}></span>
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 ease-in-out
                    ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                        <ul className=" items-center justify-center gap-4 pb-4 font-dm_mono">
                            <li>
                                <Link href="/" className= "navunderlineanim"  onClick={() => setOpen(false)}>home</Link>
                            </li>

                            <li>
                                <Link href="/dev" className={`${pathname === '/dev' ? 'text-violet-200' : ''} navunderlineanim`}  onClick={() => setOpen(false)}>
                                dev</Link>
                            </li>

                            <li>
                                <Link href="/design" className={`${pathname === '/design' ? 'text-violet-200' : ''} navunderlineanim`}  onClick={() => setOpen(false)}>
                                design</Link>
                            </li>

                            <li>
                                <Link href="/art" className={`${pathname === '/art' ? 'text-violet-200' : ''} navunderlineanim`}  onClick={() => setOpen(false)}>
                                art</Link>
                            </li>

                            <li>
                                <Link href="/about" className={`${pathname === '/about' ? 'text-violet-200' : ''} navunderlineanim`}  onClick={() => setOpen(false)}>about</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </nav>
        </div>
    )
}