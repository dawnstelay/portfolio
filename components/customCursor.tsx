'use client'

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (!hasFinePointer) return;

    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let animationFrame: number;
    let isHoveringInteractive = false;

    const updateCursor = () => {
      const followSpeed = 0.45;

      cursorX += (mouseX - cursorX) * followSpeed;
      cursorY += (mouseY - cursorY) * followSpeed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(${cursorX}px, ${cursorY}px, 0)
          translate(-50%, -50%)
        `;
      }

      animationFrame = requestAnimationFrame(updateCursor);
    };

    const handlePointerMove = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      cursorRef.current?.classList.add("cursor-is-visible");

      const target = event.target as HTMLElement | null;

      const interactiveElement = target?.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor-hover]'
      );

      const shouldBeCircle = Boolean(interactiveElement);

      if (shouldBeCircle !== isHoveringInteractive) {
        isHoveringInteractive = shouldBeCircle;

        cursorRef.current?.classList.toggle(
          "cursor-is-hovering",
          isHoveringInteractive
        );
      }
    };

    const handlePointerLeave = () => {
      cursorRef.current?.classList.remove("cursor-is-visible");
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);

    animationFrame = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-[9999]"
    >
      <div className="custom-cursor-circle absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-(--blackbean) bg-(--blackbean)/75" />

      <svg
        viewBox="0 0 32 32"
        className="custom-cursor-arrow absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 3.8C4.2 3.45 3.45 4.2 3.8 5L12.1 26.1C12.55 27.25 14.2 27.3 14.72 26.18L18.65 17.72L27.12 13.8C28.25 13.28 28.2 11.62 27.05 11.18L5 3.8Z"
          fill="var(--blackbean)"
          stroke="var(--blackbean)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        <path
          d="M5 3.8C4.2 3.45 3.45 4.2 3.8 5L12.1 26.1C12.55 27.25 14.2 27.3 14.72 26.18L18.65 17.72L27.12 13.8C28.25 13.28 28.2 11.62 27.05 11.18L5 3.8Z"
          fill="var(--blackbean)"
          stroke="var(--blackbean)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
    {/*
        <path
          d="M6.4 6.4L12.7 22.5L16.1 15.25L23.35 11.9L6.4 6.4Z"
          fill="white"
          fillOpacity="0.16"
        />

        */}
      </svg>
    </div>
  );
}