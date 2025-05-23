"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import ClassNames from "embla-carousel-class-names";
import { clsx } from "clsx";
import {
  DotButton,
  useDotButton,
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./buttons";
import { useCountdown } from "../lib/hooks";
import { volkhov } from "./fonts";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const OPTIONS = {};
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Promo() {
  return (
    <section className="w-full max-w-none overflow-hidden bg-[linear-gradient(180deg,_#FFFFFF_0%,_#FAFAFA_100%)] pt-[9.6875rem] pb-[9.0625rem]">
      <div className="relative left-[20rem] flex w-full max-w-none">
        <div className="flex flex-col gap-12.5">
          <div className="grid w-full items-start gap-y-5 text-left md:max-w-2xl lg:max-w-[27.75rem]">
            <h2
              className={`${volkhov.className} text-[2.875rem] leading-[3.6875rem] font-normal text-[#484848] not-italic`}
            >
              Deals Of The Month
            </h2>
            <p className="text-base leading-6.5 font-normal text-[#8A8A8A] not-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin
            </p>
            <Link
              href="#"
              className="mt-5 flex w-[46.62162162%] items-center justify-center rounded-[0.625rem] border border-transparent bg-black px-8 py-[1.2rem] text-base leading-[1rem] font-normal text-white not-italic shadow-[0px_20px_35px_rgba(0,0,0,0.15)] hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
            >
              Buy Now
            </Link>
          </div>
          <CountdownTimer />
        </div>
        <Carousel slides={SLIDES} options={OPTIONS} />
      </div>
    </section>
  );
}

function CountdownTimer() {
  const [days, hours, minutes, seconds] = useCountdown(194730);

  return (
    <div className="flex max-w-[24.625rem] flex-col gap-[0.9375rem]">
      <h2 className="text-left text-[1.75rem] leading-10.5 font-medium text-[#484848] not-italic">
        Hurry, Before It’s Too Late!
      </h2>
      <div className="flex justify-center gap-7.5">
        <div className="my-0 text-center">
          <span className="flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-[0.625rem] bg-white text-[2rem] leading-[2rem] font-normal text-[#484848] not-italic shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)]">
            {days}
          </span>
          <span className="block pt-[0.9375rem] text-center text-2xl leading-[1.8125rem] font-normal text-[#484848] not-italic">
            Days
          </span>
        </div>
        <div className="my-0 text-center">
          <span className="flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-[0.625rem] bg-white text-[2rem] leading-[2rem] font-normal text-[#484848] not-italic shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)]">
            {hours}
          </span>
          <span className="block pt-[0.9375rem] text-center text-2xl leading-[1.8125rem] font-normal text-[#484848] not-italic">
            Hr
          </span>
        </div>
        <div className="my-0 text-center">
          <span className="flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-[0.625rem] bg-white text-[2rem] leading-[2rem] font-normal text-[#484848] not-italic shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)]">
            {minutes}
          </span>
          <span className="block pt-[0.9375rem] text-center text-2xl leading-[1.8125rem] font-normal text-[#484848] not-italic">
            Mins
          </span>
        </div>
        <div className="my-0 text-center">
          <span className="flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-[0.625rem] bg-white text-[2rem] leading-[2rem] font-normal text-[#484848] not-italic shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)]">
            {seconds}
          </span>
          <span className="block pt-[0.9375rem] text-center text-2xl leading-[1.8125rem] font-normal text-[#484848] not-italic">
            Sec
          </span>
        </div>
      </div>
    </div>
  );
}

function Carousel({ slides, options }: PropType) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="relative flex w-full max-w-[83.25rem] gap-6">
      <div className="grid grid-cols-[repeat(2,1fr)] items-end gap-4">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
      <div className="flex-auto overflow-hidden" ref={emblaRef}>
        <div
          className="ml-[calc(1.5rem_*_-1)] flex"
          style={{ touchAction: "pan-y pinch-zoom" }}
        >
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="flex h-[53.889vh] items-center justify-center text-[4rem] font-semibold shadow-[inset_0_0_0_0.2rem_rgb(234,234,234)] select-none">
                <span>{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-[50%] bottom-0 mr-[calc((2.6rem_-_1.4rem)_/_2_*_-1)] flex flex-wrap items-center justify-end">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            style={{
              WebkitTapHighlightColor: "rgba(49, 49, 49, 0.5)",
              WebkitAppearance: "none",
            }}
            className={clsx(
              "m-0 inline-flex h-[2.6rem] w-[3.1875rem] cursor-pointer touch-manipulation appearance-none items-center justify-center rounded-[50%] border-0 bg-transparent p-0 no-underline after:flex after:h-[0.6875rem] after:w-[0.6875rem] after:items-center after:rounded-[50%] after:bg-[#B6B6B6] after:content-['']",
              {
                "mx-3 h-[27px] w-[27px] rounded-[50%] border-1 border-black/70 after:rounded-[50%] after:shadow-[inset_0_0_0_0.4rem_#000]":
                  index === selectedIndex,
              },
            )}
          />
        ))}
      </div>
    </div>
  );
}
