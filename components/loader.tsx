'use client'

import { useEffect, useState } from "react";
import MovingBG from "./movingBG";

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
                }, 600)
            }, 800)
        }
        if (document.readyState === "complete") {
            handleLoad()
        } else {
            window.addEventListener("load", handleLoad)
            return () => window.removeEventListener("load", handleLoad)
        }

    }, [])

    return (
        <>
            {loading && (
                <div className={`font-kiwi fixed inset-0 flex items-center justify-center z-100 transition-opacity duration-700 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
                    <div className=" flex flex-col items-center space-y-6">
                        <MovingBG />
                        <div className="loader">
                        </div>
                        <p className="text-4xl text-(--blackbean) z-10">loading...</p>
                    </div>
                </div>
            )}

            <div className={`${loading ? "opacity-0" : "opacity-100"}`}>
                {children}
            </div>
        </>
    )


}

/* add personalization */