'use client'

import { useEffect, useRef } from "react";

export default function MovingBG() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const letters = container.querySelectorAll<HTMLElement>("[data-letter]");

        let animationID: number;

        const animate = (time: number) => {
            letters.forEach((letter) => {
                const x = Number(letter.dataset.x);
                const y = Number(letter.dataset.y);

                //const wave = Math.sin( x * 0.3 + y * 0.4 + time * 0.0007);
                //const xMove = Math.cos(x * 0.3 + y * 0.4 + time * 0.0007) * 10;
                //const yMove = wave * 25;
                //letter.style.transform = `translate(${xMove}px, ${yMove}px)`;
                
                
                const wave = Math.sin(x * 0.35 + y * 0.25 + time * 0.0015) * 25;
                letter.style.transform = `translateY(${ wave }px)`;
            });

            animationID = requestAnimationFrame(animate);
        };

        animationID = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationID);
    }, []);

    const row = 12;
    const col = 12;
    return (
        <div ref={containerRef} className="pointer-events-none fixed inset-0 bg-(--sky) overflow-hidden min-h-screen">
            <div className="grid h-full w-full grid-cols-[repeat(12,1fr)]">
                {Array.from({ length: row * col }).map((_, i) => {
                    const x = i % col;
                    const y = Math.floor(i / col);

                    return (
                        <span
                            key={i}
                            data-letter
                            data-x={x}
                            data-y={y}
                            className="flex items-center justify-center font-emoji text-4xl font-bold text-(--ivory) rotate-[30deg]"
                        >
                            F
                        </span>
                    );
                })}
            </div>

        </div>
    )
}