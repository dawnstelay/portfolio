'use client'

import { useState, useEffect } from "react"
import Image from "next/image"

export default function ImageModal({
    className,
    src,
    alt,
    width,
    height,
    descriptor,
}: {
    className: string
    src: string
    alt: string
    width: number
    height: number
    descriptor: string
}) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        window.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [open]);


    return (
        <div className={className}>

            <button
                type="button"
                onClick={() => setOpen(true)}
                className="group block w-full cursor-zoom-in overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--sky)] focus:ring-offset-4"
                aria-label={`Open image: ${alt}`}
            >
                <div className="overflow-hidden rounded-xl">
                    <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                </div>
            </button>

            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 p-5 backdrop-blur-sm animate-[modal-overlay-in_250ms_ease-out_forwards] sm:p-8"
                    onClick={() => setOpen(false)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label={alt}
                        className="w-full max-w-4xl animate-[modal-content-in_350ms_cubic-bezier(0.16,1,0.3,1)_forwards]"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="mb-3 flex justify-end">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                aria-label="Close image modal"
                                className="grid h-11 w-11 place-items-center rounded-full bg-[#fff8f5] text-2xl leading-none text-slate-700 shadow-md transition duration-200 hover:scale-110 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--sky)]"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>

                        <div className="overflow-hidden rounded-xl bg-white shadow-2xl">
                            <Image
                                src={src}
                                alt={alt}
                                width={width}
                                height={height}
                                sizes="(max-width: 768px) 100vw, 896px"
                                className="max-h-[70vh] w-full object-contain"
                            />

                            <div className="border-t border-[#efdeda] bg-[#fff8f5] px-5 py-5 text-left sm:px-8 sm:py-6">
                                <p className="font-space text-base leading-relaxed text-slate-700 sm:text-lg">
                                    {descriptor}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}