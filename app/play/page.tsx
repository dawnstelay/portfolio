'use client'

import { useState } from "react";
import Image from "next/image";
import ReactGridLayout, { useContainerWidth, type Layout,  type LayoutItem } from "react-grid-layout";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

type PlaygroundImage = {
    id: string;
    src: string;
    alt: string;
    tapeColor: string;
    rotation: string;
};

const images: PlaygroundImage[] = [
    {
        id: "play-1",
        src: "/banner.png",
        alt: "Flower study",
        tapeColor: "bg-pink-200/75",
        rotation: "-rotate-2",
    },
    {
        id: "play-2",
        src: "/banner.png",
        alt: "Character sketch",
        tapeColor: "bg-yellow-200/80",
        rotation: "rotate-2",
    },
    {
        id: "play-3",
        src: "/banner.png",
        alt: "Environment illustration",
        tapeColor: "bg-sky-200/80",
        rotation: "-rotate-1",
    },
    {
        id: "play-4",
        src: "/banner.png",
        alt: "Texture experiment",
        tapeColor: "bg-violet-200/75",
        rotation: "rotate-1",
    },
    {
        id: "play-5",
        src: "/banner.png",
        alt: "Animation frame",
        tapeColor: "bg-orange-200/75",
        rotation: "-rotate-3",
    },
    {
        id: "play-6",
        src: "/banner.png",
        alt: "Painting study",
        tapeColor: "bg-emerald-200/75",
        rotation: "rotate-3",
    },
];

const ROW_HEIGHT = 30;
const GRID_MARGIN_X = 10;
const GRID_MARGIN_Y = 10;

const originalLayout: Layout = [
  { i: "play-1", x: 0, y: 0, w: 4, h: 5, minW: 2, minH: 2 },
  { i: "play-2", x: 4, y: 0, w: 3, h: 3, minW: 2, minH: 2 },
  { i: "play-3", x: 7, y: 0, w: 5, h: 4, minW: 2, minH: 2 },
  { i: "play-4", x: 4, y: 3, w: 3, h: 4, minW: 2, minH: 2 },
  { i: "play-5", x: 0, y: 5, w: 4, h: 4, minW: 2, minH: 2 },
  { i: "play-6", x: 7, y: 4, w: 5, h: 5, minW: 2, minH: 2 },
];

const makeFreshLayout = (): Layout =>
  originalLayout.map((item) => ({
    ...item,
  }));

const aspectRatios = Object.fromEntries(
  originalLayout.map((item) => [item.i, item.w / item.h])
);

export default function Play() {
    const [layout, setLayout] = useState<Layout>(() => makeFreshLayout());

  const {
    width,
    containerRef,
    mounted: widthReady,
  } = useContainerWidth({
    initialWidth: 1200,
  });

  const resetBoard = () => {
    setLayout(makeFreshLayout());
  };

  const handleLayoutChange = (newLayout: Layout) => {
    setLayout(newLayout);
  };

 const handleResize = (
  newLayout: Layout,
  _oldItem: LayoutItem | null,
  newItem: LayoutItem | null
) => {
  // The library's callback allows null values.
  // If no active resized item is provided, preserve the given layout.
  if (!newItem) {
    setLayout(newLayout);
    return;
  }

  const ratio = aspectRatios[newItem.i];

  if (!ratio) {
    setLayout(newLayout);
    return;
  }

  const nextHeight = Math.max(
    newItem.minH ?? 2,
    Math.round(newItem.w / ratio)
  );

  const layoutWithLockedRatio: Layout = newLayout.map((item) =>
    item.i === newItem.i
      ? {
          ...item,
          h: nextHeight,
        }
      : item
  );

  setLayout(layoutWithLockedRatio);
};

  return (
    <main className="py-20 min-h-screen w-full font-funnel">
      
      <header className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-10 text-center sm:flex-row sm:text-left">
        <div>
          

          <h1 className="mt-2 font-kiwi text-5xl text-(--blackbean)">
            Playground
          </h1>

          <p className="mt-3 max-w-xl font-space text-slate-600">
            Explore some of my other words. 
            Drag each image from its top edge. Resize it from its bottom-right
            corner while keeping its original proportions.
          </p>
        </div>

        <button
          type="button"
          onClick={resetBoard}
          className="rounded-full border-2 border-[var(--blackbean)] bg-[var(--ivory)] px-6 py-3 font-funnel text-[var(--blackbean)] shadow-[3px_3px_0_var(--blackbean)] transition hover:-translate-y-0.5 hover:shadow-[5px_5px_0_var(--blackbean)]  active:translate-y-0 active:shadow-[1px_1px_0_var(--blackbean)]"
        >
          Reset board ↺
        </button>
      </header>

      {/* Full-width, full-height draggable page canvas */}
      <section
        ref={containerRef}
        className="relative min-h-[calc(100vh-240px)] w-full overflow-hidden px-4 pb-10 sm:px-8"
        aria-label="Draggable art playground"
      >
        {widthReady && (
          <ReactGridLayout
            width={width}
            layout={layout}
            onLayoutChange={handleLayoutChange}
            onResize={handleResize}
            gridConfig={{
              cols: 12,
              rowHeight: ROW_HEIGHT,
              margin: [GRID_MARGIN_X, GRID_MARGIN_Y],
              containerPadding: [10, 10],
            }}
            dragConfig={{
              enabled: true,
              handle: ".drag-handle",
              bounded: true,
            }}
            resizeConfig={{
              enabled: true,
              handles: ["se"],
            }}
            className="layout"
          >
            {images.map((image) => (
              <div key={image.id} className="playground-item">
                <article
                  className={`group relative h-full w-full rounded-sm bg-white p-3 shadow-[5px_6px_0_rgba(56,42,49,0.22)] transition-shadow duration-200 hover:shadow-[7px_8px_0_rgba(56,42,49,0.28)] ${image.rotation}`}
                >
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute left-1/2 top-1 z-10 h-6 w-24 -translate-x-1/2 -rotate-2 opacity-80 shadow-sm ${image.tapeColor}`}
                  />

                  <button
                    type="button"
                    className="drag-handle absolute inset-x-0 top-0 z-20 h-11 cursor-grab active:cursor-grabbing"
                    aria-label={`Drag ${image.alt}`}
                  />

                  <div className="relative h-[calc(100%-2rem)] w-full overflow-hidden bg-stone-100">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 90vw, 33vw"
                      className="pointer-events-none object-cover"
                    />
                  </div>

                  <p className="pointer-events-none mt-2 truncate px-1 font-zen text-sm text-[var(--blackbean)]">
                    {image.alt}
                  </p>
                </article>
              </div>
            ))}
          </ReactGridLayout>
        )}
      </section>

      <p className="pb-8 text-center font-space text-sm text-slate-500">
        Tip: drag from the top edge of a photo. Resize from the bottom-right
        handle.
      </p>
    </main>
    )
}