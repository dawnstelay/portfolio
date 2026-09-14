'use client'

import { useState, useEffect } from "react"

type Artwork = {
  name: string;
  image: string;
  descriptor: string;
  tags: string[];
};

type ImageModalProps = {
  work: Artwork;
  currentIndex: number;
  totalImages: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export default function ImageModal({
    work,
  currentIndex,
  totalImages,
  onClose,
  onPrevious,
  onNext,
}: ImageModalProps) {
    

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrevious, onNext]);
  const hasMultipleImages = totalImages > 1;


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 p-5 backdrop-blur-sm animate-[modal-overlay-in_250ms_ease-out_forwards] sm:p-8"
      onClick={onClose}
    >
         <div
        role="dialog"
        aria-modal="true"
        aria-label={`${work.name} image viewer`}
        className="w-full max-w-4xl animate-[modal-content-in_350ms_cubic-bezier(0.16,1,0.3,1)_forwards]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between">
          <p className="rounded-full bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur-sm">
            {currentIndex + 1} / {totalImages}
          </p>
          
            <button
            type="button"
            onClick={onClose}
            aria-label="Close image modal"
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-2xl leading-none text-(--blackbean) shadow-md transition duration-200 hover:scale-110 hover:bg-(--sky) focus:outline-none focus:ring-1 focus:ring-(--blackbean)"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="relative overflow-hidden rounded-xl bg-white shadow-2xl">
          

          <img
            src={work.image}
            alt={work.name}
            width={1200}
            height={900}
            sizes="(max-width: 768px) 100vw, 896px"
            className="max-h-[70vh] w-full object-contain"
          />

        </div>


        <div className="mt-4 rounded-2xl border border-(--ivory) bg-white px-5 py-5 text-left shadow-lg sm:px-8 sm:py-6">
          <h2 className="font-funnel text-2xl text-(--blackbean)">
            {work.name}
          </h2>

          <p className="mt-2 font-space text-base leading-relaxed text-(--blackbean) sm:text-lg">
            {work.descriptor}
          </p>

          {hasMultipleImages && (
            <div className="">
              <button
                type="button"
                onClick={onPrevious}
                aria-label={`View previous artwork. Current artwork: ${work.name}`}
                className="mt-9 absolute grid h-12 w-12 items-center text-center rounded-full bg-white text-2xl text-(--blackbean)shadow-lg transition duration-200 hover:scale-110 hover:bg-(--sky) focus:outline-none focus:ring-1 focus:ring-(--blackbean) sm:left-5 sm:h-14 sm:w-14"
              >
                <span aria-hidden="true">‹</span>
              </button>

              <button
                type="button"
                onClick={onNext}
                aria-label={`View next artwork. Current artwork: ${work.name}`}
                className="mt-9 absolute grid h-12 w-12 items-center text-center rounded-full bg-white text-2xl text-(blackbean) shadow-lg transition duration-200 hover:scale-110 hover:bg-(--sky) focus:outline-none focus:ring-1 focus:ring-(--blackbean) sm:right-5 sm:h-14 sm:w-14"
              >
                <span aria-hidden="true">›</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}