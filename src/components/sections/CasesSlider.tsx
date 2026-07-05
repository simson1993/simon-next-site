"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type Case = {
  title: string;
  description: string;
  image: string;
  size: "wide" | "tall" | "medium";
};

const cases: Case[] = [
  {
    title: "SOLAR215",
    description: "Branding for battery storage company",
    image: "/cases/solar215.jpg",
    size: "wide",
  },
  {
    title: "MODEST",
    description: "Logo and Type",
    image: "/cases/modest.jpg",
    size: "tall",
  },
  {
    title: "SnapCollect",
    description: "Screenshot App built with AI",
    image: "/cases/snapcollect.jpg",
    size: "medium",
  },
];

/* wide and medium share the same height (487px at max width),
   tall is narrower and shorter, all bottom-aligned. */
const sizeClasses: Record<Case["size"], string> = {
  wide: "w-[85vw] max-w-[780px] aspect-[16/10]",
  tall: "w-[55vw] max-w-[330px] aspect-[3/4]",
  medium: "w-[75vw] max-w-[650px] aspect-[4/3]",
};

export function CasesSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Case | null>(null);
  const [mounted, setMounted] = useState(false);
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0, moved: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  function onPointerDown(e: React.PointerEvent) {
    const track = trackRef.current;
    if (!track) return;
    drag.current = {
      down: true,
      startX: e.clientX,
      scrollLeft: track.scrollLeft,
      moved: 0,
    };
  }

  function onPointerMove(e: React.PointerEvent) {
    const track = trackRef.current;
    const d = drag.current;
    if (!track || !d.down) return;
    const dx = e.clientX - d.startX;
    d.moved = Math.max(d.moved, Math.abs(dx));
    if (d.moved > 5) {
      track.scrollLeft = d.scrollLeft - dx;
    }
  }

  function endDrag() {
    drag.current.down = false;
  }

  function handleCardClick(c: Case) {
    if (drag.current.moved > 5) return;
    setActive(c);
  }

  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2">
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className="cases-track flex items-end gap-6 overflow-x-auto px-[max(1.5rem,calc(50vw-30rem))] pt-8 pb-24 -mb-16 cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {cases.map((c) => (
          <article
            key={c.title}
            onClick={() => handleCardClick(c)}
            className={`relative shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-[transform,box-shadow] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.025] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] ${sizeClasses[c.size]}`}
          >
            <Image
              src={c.image}
              alt={c.title}
              fill
              sizes="(max-width: 768px) 85vw, 780px"
              draggable={false}
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/40 to-transparent">
              <h3 className="text-base font-medium text-white">{c.title}</h3>
              <p className="text-sm text-white/70">{c.description}</p>
            </div>
          </article>
        ))}
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {active && (
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/60"
                onClick={() => setActive(null)}
              >
                <motion.div
                  key="sheet"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 260 }}
                  drag="y"
                  dragConstraints={{ top: 0, bottom: 0 }}
                  dragElastic={{ top: 0, bottom: 0.6 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.y > 120) setActive(null);
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute inset-x-0 top-[20px] bottom-0 rounded-t-3xl overflow-hidden flex flex-col"
                  style={{ backgroundColor: "var(--surface)" }}
                >
                  <div className="group flex justify-center pt-3 pb-2 shrink-0 cursor-grab active:cursor-grabbing">
                    <div className="h-1 w-10 rounded-full bg-[var(--border-default)] transition-colors group-hover:bg-[var(--text-tertiary)]" />
                  </div>

                  <button
                    onClick={() => setActive(null)}
                    aria-label="Close case"
                    className="absolute top-5 right-5 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-opacity hover:opacity-70"
                    style={{
                      backgroundColor: "var(--surface)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <X size={18} />
                  </button>

                  <div className="overflow-y-auto px-6 pb-16">
                    <div className="mx-auto max-w-3xl pt-10">
                      <h2 className="text-2xl font-medium">{active.title}</h2>
                      <p
                        className="mt-1"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {active.description}
                      </p>
                      <div className="relative mt-8 aspect-[16/10] rounded-2xl overflow-hidden">
                        <Image
                          src={active.image}
                          alt={active.title}
                          fill
                          sizes="768px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
