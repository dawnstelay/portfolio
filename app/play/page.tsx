"use client";

import MuuriBoard from "../../components/muuriBoard";

export type PlaygroundImage = {
  id: string;
  src: string;
  alt: string;
  descriptor: string;
  width: number;
  height: number;
  rotation?: string;
};

const images: PlaygroundImage[] = [
  {
    id: "play-1",
    src: "/works/calico.png",
    alt: "Flower study",
    descriptor:
      "...",
    width: 1400,
    height: 1800,
    rotation: "-rotate-0",
  },
  {
    id: "play-2",
    src: "/works/Cecil Iteration Sequence.png",
    alt: "Character sketch",
    descriptor:
      "...",
    width: 1600,
    height: 1000,
    rotation: "rotate-0",
  },
  {
    id: "play-3",
    src: "/banner.png",
    alt: "Environment illustration",
    descriptor:
      "...",
    width: 1600,
    height: 900,
    rotation: "-rotate-0",
  },

  {
    id: "play-4",
    src: "/works/calico.png",
    alt: "Flower study",
    descriptor:
      "...",
    width: 1400,
    height: 1800,
    rotation: "-rotate-0",
  },
  {
    id: "play-5",
    src: "/works/Cecil Iteration Sequence.png",
    alt: "Character sketch",
    descriptor:
      "...",
    width: 1600,
    height: 1000,
    rotation: "rotate-0",
  },
  {
    id: "play-6",
    src: "/banner.png",
    alt: "Environment illustration",
    descriptor:
      "...",
    width: 1600,
    height: 900,
    rotation: "-rotate-0",
  },
];

export default function Play() {
  return (
    <main className="min-h-screen w-full px-5 py-20 font-funnel sm:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <p className="font-space text-sm uppercase tracking-[0.2em] text-slate-500">
            Move things around
          </p>

          <h1 className="mt-2 font-kiwi text-5xl text-(--blackbean)">
            Playground
          </h1>

          <p className="mx-auto mt-3 max-w-xl font-space text-slate-600">
            Drag each artwork from its handle. Resize it from the corner and
            click it to view its caption.
          </p>
        </header>

        <MuuriBoard images={images} />

        <p className="mt-6 text-center font-space text-sm text-slate-500">
          Tip: drag from the small bar above each image. Resize from the
          bottom-right circle.
        </p>
      </div>
    </main>
  );
}