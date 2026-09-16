"use client";

import { useState } from "react";
import BaseModal from "./baseModal";

type ImageModalProps = {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  descriptor: string;
};

export default function ImageModal({
  className = "",
  src,
  alt,
  width,
  height,
  descriptor,
}: ImageModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open image: ${alt}`}
        className="group block h-full w-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[var(--sky)] focus:ring-offset-4"
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="block h-full w-full object-fill transition-transform duration-300 ease-out group-hover:scale-[1.015]"
        />
      </button>

      {open && (
        <BaseModal
          label={`${alt} image viewer`}
          onClose={() => setOpen(false)}
        >
          <div className="mb-3 flex justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close image modal"
              className="grid h-11 w-11 place-items-center rounded-full bg-[var(--ivory)] text-2xl leading-none text-[var(--blackbean)] shadow-md transition hover:scale-110 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--sky)]"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="block max-h-[72vh] w-full object-contain"
            />

            <div className="border-t border-[#efdeda] bg-[#fff8f5] px-5 py-5 text-left sm:px-8 sm:py-6">
              <h2 className="font-funnel text-2xl text-[var(--blackbean)]">
                {alt}
              </h2>

              <p className="mt-2 font-space text-base leading-relaxed text-slate-700 sm:text-lg">
                {descriptor}
              </p>
            </div>
          </div>
        </BaseModal>
      )}
    </div>
  );
}