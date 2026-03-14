'use client'

import Link from "next/link";
import { useState, useEffect } from "react"

export default function FootBar() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }

    return(
        <div className="fixed w-100 bottom-0 w-full flex flex-col items-center pointer-events-none font-dongle">
            <div className={`mb-6 transition-all duration-500 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                <button onClick={scrollToTop}
                className="pointer-events-auto bg-amber-500 text-orange-50 px-5 py-2 rounded-full font-mono shadow-lg hover:bg-violet-200 transition">
                ↑
                </button>
            </div>
        </div>
    )
}
