"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { EmblaOptionsType } from "embla-carousel";
import { volkhov } from "./fonts";

const items = [
  {
    id: 0,
    width: 320,
    height: 308,
    imageSrc: "/slide-01.png",
    imageAlt: "slide 1",
  },
  {
    id: 1,
    width: 256,
    height: 380,
    imageSrc: "/slide-02.png",
    imageAlt: "slide 2",
  },
  {
    id: 2,
    width: 256,
    height: 308,
    imageSrc: "/slide-03.png",
    imageAlt: "slide 3",
  },
  {
    id: 3,
    width: 256,
    height: 380,
    imageSrc: "/slide-04.png",
    imageAlt: "slide 4",
  },
  {
    id: 4,
    width: 256,
    height: 308,
    imageSrc: "/slide-05.png",
    imageAlt: "slide 5",
  },
  {
    id: 5,
    width: 256,
    height: 380,
    imageSrc: "/slide-06.png",
    imageAlt: "slide 6",
  },
  {
    id: 6,
    width: 320,
    height: 308,
    imageSrc: "/slide-07.png",
    imageAlt: "slide 7",
  },
  {
    id: 7,
    width: 256,
    height: 380,
    imageSrc: "/slide-02.png",
    imageAlt: "slide 2",
  },
  {
    id: 8,
    width: 256,
    height: 308,
    imageSrc: "/slide-03.png",
    imageAlt: "slide 3",
  },
  {
    id: 9,
    width: 256,
    height: 380,
    imageSrc: "/slide-04.png",
    imageAlt: "slide 4",
  },
  {
    id: 10,
    width: 256,
    height: 308,
    imageSrc: "/slide-05.png",
    imageAlt: "slide 5",
  },
  {
    id: 11,
    width: 256,
    height: 380,
    imageSrc: "/slide-06.png",
    imageAlt: "slide 6",
  },
  {
    id: 12,
    width: 320,
    height: 308,
    imageSrc: "/slide-07.png",
    imageAlt: "slide 7",
  },
  {
    id: 13,
    width: 256,
    height: 380,
    imageSrc: "/slide-04.png",
    imageAlt: "slide 4",
  },
];

export default function InfiniteSlider() {
  const options: EmblaOptionsType = {
    align: "start",
    dragFree: true,
    loop: true,
  };

  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({ speed: 1, playOnInit: true }),
  ]);

  return (
    <section className="m-auto w-full py-[9.375rem]">
      <div className="mx-auto max-w-[38.375rem] text-center">
        <h2
          className={`${volkhov.className} text-5xl font-normal text-balance text-[#484848] not-italic sm:text-[2.875rem] sm:leading-[3.6875rem]`}
        >
          Follow Us On Instagram
        </h2>
        <p className="mt-5 text-lg font-normal text-pretty text-[#8A8A8A] not-italic sm:text-base sm:leading-6.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>
      </div>
      <div className="mt-[6.25rem] overflow-hidden" ref={emblaRef}>
        <div
          className="flex w-full items-center will-change-transform"
          style={{ touchAction: "pan-y pinch-zoom" }}
        >
          {items.map(({ id, width, height, imageSrc, imageAlt }) => {
            // const isEven = id % 2 === 0;
            return (
              <div
                key={id}
                className="flex-none first:pl-0 last:pr-0"
                style={{
                  // width: `calc(${width}px / 1920px)`,
                  width: `calc(${width} / 1920)`,
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                <div
                  className="overflow-hidden text-4xl font-semibold shadow-inner select-none"
                  style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    position: "relative",
                  }}
                >
                  <Image
                    width={1920}
                    height={900}
                    sizes="(max-width: 600px) 100vw, (min-width: 601px) 50vw, 300px"
                    alt={imageAlt}
                    src={imageSrc}
                    priority={true}
                    quality={100}
                    decoding="sync"
                    loading="eager"
                    tabIndex={0}
                    style={{
                      color: "transparent",
                      objectPosition: "32.710618239182686% 50%",
                    }}
                    className="block object-cover object-center"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
