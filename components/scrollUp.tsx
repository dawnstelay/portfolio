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
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className="fixed bottom-0 right-0 m-8 pointer-events-auto font-space">
            <div className={`transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                <button onClick={scrollToTop}
                    className="flower pointer-events-auto rounded-full shadow-lg hover:cursor-pointer transition">
                    ↑
                </button>
            </div>
        </div>
    )
}



