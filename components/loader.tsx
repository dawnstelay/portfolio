'use client'

import { useEffect, useState } from "react";

export default function Loader({
    children,
}: {
    children: React.ReactNode
}) {
    const [loading, setLoading] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
    const handleLoad = () => {
        setTimeout(() => {
            setFadeOut(true)
            setTimeout(() => {
                setLoading(false)
            },600)
        }, 800)
    }
    if (document.readyState === "complete") {
        handleLoad()
    } else {
        window.addEventListener("load", handleLoad)
        return () => window.removeEventListener("load", handleLoad)
    }

    }, [])

    return(
        <>
        {loading && (
            <div className={`fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-700 ${
                fadeOut ? "opacity-0" : "opacity-100"}`}>
                <div className="flex flex-col items-center space-y-6">
                    <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="font-zen tracking-wide text-sm uppercase">
                        Loading
                        </p>
                </div>
            </div>
      )}

        <div className={`transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}>
        {children}
        </div>
        </>
    )


}

/* add personalization */