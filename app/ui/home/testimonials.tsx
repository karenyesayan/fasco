"use client";

import React, { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "../buttons";
import Rating from "../rating";
import { Person } from "@/app/lib/definitions";
import { volkhov } from "../fonts";

const people = [
  {
    id: 1,
    name: "James K.",
    role: "Traveler",
    rating: 5,
    text: `"You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!"`,
    imageUrl: "/james-k.png",
  },
  {
    id: 2,
    name: "Megen W.",
    role: "UI Designer",
    rating: 5,
    text: `"Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great."`,
    imageUrl: "/megen-w.png",
  },
  {
    id: 3,
    name: "Suzan B.",
    role: "UI Designer",
    rating: 5,
    text: `"Items That I ordered were the best investment I ever made. I can't say enough about your quality service."`,
    imageUrl: "/suzan-b.png",
  },
];

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export default function Testimonials() {
  const options = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          // const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const absDiff = Math.abs(diffToTarget);
          let scale = 1 - absDiff * 0.5;
          scale = numberWithinRange(scale, 0.5, 1);
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `translateX(${
            -150 * diffToTarget
          }%) scale(${scale})`;
          (tweenNode.parentNode as HTMLElement | null)?.style.setProperty(
            "z-index",
            `${1000 - Math.floor(absDiff * 1000)}`,
          );
          (tweenNode.parentNode as HTMLElement | null)?.style.setProperty(
            "position",
            "relative",
          );
        });
      });
    },
    [],
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale);
  }, [emblaApi, tweenScale, setTweenFactor, setTweenNodes]);

  return (
    <section className="w-full bg-[#fafafa] pt-[6.25rem] pb-[3.625rem]">
      <div className="mx-auto text-center">
        <h2
          className={`${volkhov.className} text-5xl font-normal text-balance text-[#484848] not-italic sm:text-[2.875rem] sm:leading-[3.6875rem]`}
        >
          This Is What Our Customers Say
        </h2>
        <p className="mt-5 text-lg font-normal text-pretty text-[#8A8A8A] not-italic sm:text-base sm:leading-6.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis
        </p>
      </div>
      <div className="m-auto max-w-[97.5rem]">
        <div
          className="overflow-hidden px-[3.75rem] pt-[4.375rem] pb-[3.6875rem]"
          ref={emblaRef}
        >
          <div
            className="ml-[calc(0px_*_-1)] flex touch-pan-y"
            style={{ backfaceVisibility: "hidden" }}
          >
            {people.map((person) => (
              <div className="min-w-0 flex-[0_0_55%] pl-0" key={person.id}>
                <Testimonial person={person} />
              </div>
            ))}
          </div>
        </div>
        <div className="grid justify-center">
          <div className="grid grid-cols-[repeat(2,1fr)] items-center gap-4">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonial({ person }: { person: Person }) {
  return (
    <div className="embla__slide__number relative isolate overflow-hidden rounded-[0.625rem] bg-white px-6 py-24 shadow-[0px_20px_60px_rgba(46,33,61,0.08)] sm:py-[4.938rem] lg:px-8">
      <div className="3xl:gap-[6.5rem] mx-auto flex max-w-2xl gap-[5.1875rem] lg:max-w-[47.8125rem]">
        <div className="relative h-[15.125rem] w-[15.125rem] bg-[#d9d9d9]">
          <Image
            width={242}
            height={242}
            alt={`${person.name} picture`}
            src={person.imageUrl}
            className="absolute -top-5 left-[1.3125rem] mx-auto h-60.5 max-w-60.5"
          />
        </div>
        <figure className="relative -top-5 max-w-[24.625rem]">
          <blockquote className="text-left text-base leading-6 font-normal text-[#484848] not-italic">
            <p>{person.text}</p>
          </blockquote>
          <figcaption className="mt-[1.6875rem]">
            <Rating value={person.rating} size="md" color="#FCA120" />
            <hr className="mt-7.5 h-px max-w-[14.375rem] bg-[#484848]" />
            <div className="mt-[0.9375rem] flex flex-col items-start justify-center gap-[0.8125rem] text-center text-base">
              <div
                className={`${volkhov.className} m-0 text-[2rem] leading-[2.5625rem] font-normal text-[#484848] not-italic`}
              >
                {person.name}
              </div>
              <div className="text-base leading-6 font-normal text-[#484848] not-italic">
                {person.role}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
