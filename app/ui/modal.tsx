"use client";

import { clsx } from "clsx";
import { usePreventBodyScroll } from "../lib/hooks";
import CloseIcon from "../../public/icons/close.svg";

export default function Modal({
  isOpen,
  onClose,
  centered,
  ref,
  children,
}: {
  isOpen: boolean;
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
  centered?: boolean;
  ref: React.RefObject<null | HTMLInputElement>;
  children: React.ReactNode;
}) {
  usePreventBodyScroll(isOpen);

  return (
    <div
      className={clsx(
        isOpen ? "relative z-10" : "animate-[fade-out_250ms_forwards]",
      )}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={clsx(
          "fixed inset-0 hidden bg-white transition-opacity delay-150 duration-[cubic-bezier(0.4,0,0.2,1)] min-[48rem]:block",
          isOpen
            ? "animate-[backdrop-fade-in_300ms_ease-out] opacity-60"
            : "animate-[backdrop-fade-out_200ms_ease-in]",
        )}
        aria-hidden="true"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          className={clsx(
            "flex min-h-full items-stretch justify-center text-center lg:px-[1rem]",
            centered
              ? "min-[48rem]:items-center min-[48rem]:px-[0.5rem]"
              : "text-center md:items-start md:px-[0.5rem]",
          )}
        >
          <div
            ref={ref}
            className={clsx(
              "flex w-full text-left text-base leading-normal transition-all delay-150 duration-[cubic-bezier(0.4,0,0.2,1)] md:mx-[2rem] md:max-w-2xl md:px-[1rem] lg:max-w-4xl",
              isOpen
                ? "animate-[scale-up_300ms_ease-out] md:animate-[scale-up-48_300ms_ease-out]"
                : "animate-[scale-down_200ms_ease-in] md:animate-[scale-down-48_200ms_ease-in]",
            )}
          >
            <div className="relative w-full flex-row items-start overflow-hidden bg-white px-4 pt-14 pb-8 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] sm:px-[1.5rem] sm:pt-8 md:flex md:flex-col md:items-center md:p-[1.5rem] lg:rounded-2xl lg:p-8">
              <button
                className={clsx(
                  "absolute top-8 right-4 z-10 text-[#99a1af] sm:top-8 sm:right-6 md:top-6 md:right-6",
                  centered ? "lg:top-8 lg:right-8" : "md:hidden",
                )}
                type="button"
                data-autofocus
                onClick={onClose}
              >
                <span className="sr-only">Close</span>
                <CloseIcon />
              </button>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
