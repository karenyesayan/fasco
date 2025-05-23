import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import CloseIcon from "../../public/icons/close.svg";
import BurgerBarsIcon from "../../public/icons/burger-bars.svg";
import { EmblaCarouselType } from "embla-carousel";
import { UseDotButtonType, UsePrevNextButtonsType } from "../lib/definitions";

type PropType = ComponentPropsWithRef<"button">;

export function usePrevNextButtons(
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (arg: EmblaCarouselType) => EmblaCarouselType,
): UsePrevNextButtonsType {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
}

export function PrevButton(props: PropType) {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button--prev z-[1] m-0 inline-flex h-12 w-12 cursor-pointer touch-manipulation appearance-none items-center justify-center rounded-[50%] border-0 bg-white p-0 text-black no-underline shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] disabled:text-[#B6B6B6]"
      type="button"
      style={{
        WebkitTapHighlightColor: "rgba(49, 49, 49, 0.5)",
        WebkitAppearance: "none",
      }}
      {...restProps}
    >
      <svg
        className="h-[29.16666666666667%] w-[29.16666666666667%]"
        viewBox="0 0 532 532"
      >
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
      {children}
    </button>
  );
}

export function NextButton(props: PropType) {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button--next z-[1] m-0 inline-flex h-12 w-12 cursor-pointer touch-manipulation appearance-none items-center justify-center rounded-[50%] border-0 bg-white p-0 text-black no-underline shadow-[0px_4px_14px_1px_rgba(0,0,0,0.16)] disabled:text-[#B6B6B6]"
      style={{
        WebkitTapHighlightColor: "rgba(49, 49, 49, 0.5)",
        WebkitAppearance: "none",
      }}
      type="button"
      {...restProps}
    >
      <svg
        className="h-[29.16666666666667%] w-[29.16666666666667%]"
        viewBox="0 0 532 532"
      >
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      {children}
    </button>
  );
}

export function useDotButton(
  emblaApi: EmblaCarouselType | undefined,
): UseDotButtonType {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
}

export function DotButton(props: PropType) {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
}

export function CloseButton({
  onToggle,
}: {
  onToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      type="button"
      onClick={() => onToggle(false)}
      className="absolute top-5.5 right-4 min-[52.125rem]:hidden"
    >
      <span className="sr-only">Close drawer</span>
      <CloseIcon
        aria-hidden="true"
        className="size-5 fill-[#484848] stroke-[#484848]"
      />
    </button>
  );
}

export function BurgerButton({
  onToggle,
}: {
  onToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      type="button"
      onClick={() => onToggle(true)}
      className="min-[52.125rem]:hidden"
    >
      <span className="sr-only">Open mobile menu</span>
      <BurgerBarsIcon
        aria-hidden="true"
        className="size-6 fill-[#484848] stroke-[#484848]"
      />
    </button>
  );
}
