'use client'

import { useState } from "react"
import Image from "next/image"

export default function ImageModal({
    className,
    src,
    alt,
    width,
    height,
    descriptor,
}: {
    className : string
    src: string
    alt: string
    width: number
    height : number
    descriptor: string
}) {
    const [open, setOpen] = useState(false)

    return(
        <div>
            <Image
            className="hover:scale-105 hover:border-dashed hover:border-amber-500 transition duration-300"
            src={src}
            alt={alt}
            width={width}
            height={height}
            onClick={() => setOpen(true)}
            />

            {open && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
                onClick={() => setOpen(false)}>
                    <div className="relative max-w-4xl w-full"
                    onClick={(e) => e.stopPropagation()}>
                        <button className="absolute right-0 text-white text-6xl"
                        onClick={() => setOpen(false)}>
                            x
                        </button>
                        <Image
                        className="w-full h-auto rounded"
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        />
                        <p className="text-center justify-center text-white text-xl font-zen">{descriptor}</p>
                    </div>
                </div>
            )}
        </div>
    )
}