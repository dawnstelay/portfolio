'use client'

import Link from "next/link";
import { useState, useEffect } from "react"

export default function ScrollUp() {
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
        <div className="fixed w-100 bottom-0 right-0 flex flex-col items-center pointer-events-auto font-dm_mono">
            <div className={`mb-6 transition-all duration-500 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                <button onClick={scrollToTop}
                className="flower">
                ↑
                </button>
            </div>
        </div>
    )
}


/*className="flower pointer-events-auto bg-violet-200 text-orange-50 px-4 py-2 rounded-full font-mono shadow-lg hover:bg-indigo-300 transition"> */
