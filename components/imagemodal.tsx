'use client'

import { useState } from "react"
import Image from "next/image"

export default function ImageModal({
    className,
    src,
    alt,
    width,
    height,
}: {
    className : string
    src: string
    alt: string
    width: number
    height : number
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
                    <div className="relatice max-w-5xl w-full"
                    onClick={(e) => e.stopPropagation()}>
                        <button className="absolute -top-10 right-0 text-white text-3xl"
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
                    </div>
                </div>
            )}
        </div>
    )
}