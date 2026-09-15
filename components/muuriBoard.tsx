"use client";

import { useEffect, useRef } from "react";
import ImageModal from "./imageModal";

export type PlaygroundImage = {
  id: string;
  src: string;
  alt: string;
  descriptor: string;
  width: number;
  height: number;
  rotation?: string;
};

type MuuriBoardProps = {
  images: PlaygroundImage[];
};

const MIN_CARD_WIDTH = 150;

export default function MuuriBoard({ images }: MuuriBoardProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    let cancelled = false;
    let cleanupBoard: (() => void) | undefined;

    const initializeBoard = async () => {
      const [{ default: Muuri }, { default: interact }] = await Promise.all([
        import("muuri"),
        import("interactjs"),
      ]);

      if (cancelled || !gridRef.current) return;

      const grid = new Muuri(gridRef.current, {
        items: ".muuri-item",

        layout: {
          fillGaps: true,
          rounding: false,
        },

        layoutOnResize: 150,
        layoutDuration: 300,
        layoutEasing: "cubic-bezier(0.22, 1, 0.36, 1)",

        dragEnabled: true,
        dragHandle: ".drag-handle",
        dragAxis: "xy",
        dragSort: true,

        dragStartPredicate: {
          distance: 5,
          delay: 0,
        },

        dragSortHeuristics: {
          sortInterval: 40,
          minDragDistance: 6,
          minBounceBackAngle: 1,
        },

        dragRelease: {
          duration: 250,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          useDragContainer: true,
        },
      });

      const refreshLayout = () => {
        grid.refreshItems().layout();
      };

      const itemElements = gridRef.current.querySelectorAll<HTMLElement>(
        ".muuri-item"
      );

      itemElements.forEach((itemElement) => {
        const getMaximumCardSize = () => {
          const boardWidth = gridRef.current?.clientWidth ?? 1200;

          return Math.max(MIN_CARD_WIDTH, boardWidth - 24);
        };

        interact(itemElement).resizable({
          edges: {
            right: ".resize-handle",
            bottom: ".resize-handle",
          },

          modifiers: [
          
            interact.modifiers.aspectRatio({
              ratio: "preserve",
            }),

            interact.modifiers.restrictSize({
              min: {
                width: MIN_CARD_WIDTH,
                height: MIN_CARD_WIDTH,
              },
              max: {
                width: getMaximumCardSize(),
                height: getMaximumCardSize(),
              },
            }),
          ],

          listeners: {
            start() {
              itemElement.classList.add("is-resizing");
            },

            move(event) {
              itemElement.style.width = `${event.rect.width}px`;
              refreshLayout();
            },

            end() {
              itemElement.classList.remove("is-resizing");
              refreshLayout();
            },
          },
        });
      });

      const previewImages = gridRef.current.querySelectorAll("img");

      previewImages.forEach((image) => {
        image.addEventListener("load", refreshLayout);
      });

      requestAnimationFrame(refreshLayout);

      cleanupBoard = () => {
        previewImages.forEach((image) => {
          image.removeEventListener("load", refreshLayout);
        });

        itemElements.forEach((itemElement) => {
          interact(itemElement).unset();
        });

        grid.destroy();
      };
    };

    initializeBoard();

    return () => {
      cancelled = true;
      cleanupBoard?.();
    };
  }, [images]);

  return (
    <div
      ref={gridRef}
      className="muuri-grid relative min-h-[700px] w-full"
      aria-label="Interactive draggable art board"
    >
      {images.map((image) => {
        const imageRatio = image.width / image.height;

        const initialWidth = Math.max(
          MIN_CARD_WIDTH,
          Math.min(400, Math.round(imageRatio * 260 + 70))
        );

        return (
          <div
            key={image.id}
            className={`muuri-item ${image.rotation ?? ""}`}
            style={{ width: `${initialWidth}px` }}
          >
            <div className="relative">
              <button
                type="button"
                className="drag-handle mb-2 block h-7 w-full cursor-grab rounded-full bg-[var(--blackbean)]/10 transition hover:bg-[var(--blackbean)]/20 active:cursor-grabbing"
                aria-label={`Drag ${image.alt}`}
              >
                <span
                  aria-hidden="true"
                  className="mx-auto block h-1 w-10 rounded-full bg-[var(--blackbean)]/45"
                />
              </button>

              <ImageModal
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                descriptor={image.descriptor}
                className="block w-full"
              />

              <button
                type="button"
                className="resize-handle absolute -bottom-3 -right-3 z-20 grid h-10 w-10 cursor-se-resize place-items-center rounded-full border-2 border-[var(--blackbean)] bg-[var(--ivory)] shadow-[3px_3px_0_var(--blackbean)] transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--sky)]"
                aria-label={`Resize ${image.alt}`}
              >
                <span
                  aria-hidden="true"
                  className="mb-1 mr-1 h-4 w-4 border-b-[3px] border-r-[3px] border-[var(--blackbean)]"
                />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}