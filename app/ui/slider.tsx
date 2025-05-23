import Image from "next/image";
import Link from "next/link";
import { volkhov } from "./fonts";

export default function Slider() {
  return (
    <section className="flex h-[35.6375rem] w-full">
      <div className="group flex h-full w-full bg-[#dadada]">
        <div className="relative flex flex-1 cursor-pointer items-center justify-center overflow-hidden bg-[#f8f8f8] text-white transition-all duration-700 ease-in-out group-hover:flex-[0] hover:flex-[1]">
          <div className="relative h-[35.625rem] w-[45.125rem] shrink-0">
            <Image
              width={722}
              height={570}
              quality={100}
              priority={true}
              src="/slider-banner.png"
              alt="Promotional banner for Peaky Blinders fashion collection"
            />
            <div className="group/inner absolute top-[19px] left-[339px] flex h-[4.6875rem] w-[14.375rem] justify-end before:absolute before:top-0 before:left-0 before:size-[1.3125rem] before:rounded-full before:bg-[rgba(255,255,255,0.63)] before:ring before:ring-black before:backdrop-blur-[0.625rem]">
              <svg
                width="81"
                height="21"
                viewBox="0 0 81 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[11px] left-[24.5px] opacity-0 group-hover/inner:opacity-100"
              >
                <path d="M0.5 1H61L80.5 20.5" stroke="black" />
              </svg>
              <span className="self-end border border-solid border-black bg-white/40 px-[1.766rem] py-[0.357rem] text-center text-base leading-6.5 font-normal text-black not-italic opacity-0 backdrop-blur-[0.375rem] transition-opacity group-hover/inner:opacity-100">
                Flat Cap
              </span>
            </div>
            <div className="group/inner absolute top-[133px] left-[27px] flex h-[4.5625rem] w-[15.59375rem] justify-start before:absolute before:top-0 before:right-0 before:size-[1.3125rem] before:rounded-full before:bg-[rgba(255,255,255,0.63)] before:ring before:ring-black before:backdrop-blur-[0.625rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="141"
                height="21"
                viewBox="0 0 141 21"
                fill="none"
                className="absolute top-[11px] right-[25px] opacity-0 group-hover/inner:opacity-100"
              >
                <path d="M141 1H20.5L1 20.5" stroke="black" />
              </svg>
              <span className="self-end border border-solid border-black bg-white/40 px-[1.179rem] py-[0.357rem] text-center text-base leading-6.5 font-normal text-black not-italic opacity-0 backdrop-blur-[0.375rem] transition-opacity group-hover/inner:opacity-100">
                Suspender
              </span>
            </div>
            <div className="group/inner absolute top-[200px] left-[292px] flex h-[4.6875rem] w-[14.375rem] justify-end before:absolute before:top-0 before:left-0 before:size-[1.3125rem] before:rounded-full before:bg-[rgba(255,255,255,0.63)] before:ring before:ring-black before:backdrop-blur-[0.625rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="21"
                viewBox="0 0 81 21"
                fill="none"
                className="absolute top-[11px] left-[25px] opacity-0 group-hover/inner:opacity-100"
              >
                <path d="M0.5 1H61L80.5 20.5" stroke="black" />
              </svg>
              <span className="self-end border border-solid border-black bg-white/40 px-[1.25rem] py-[0.357rem] text-center text-base leading-6.5 font-normal text-black not-italic opacity-0 backdrop-blur-[0.375rem] transition-opacity group-hover/inner:opacity-100">
                Hugo Boss
              </span>
            </div>
            <div className="group/inner absolute top-[299px] left-[-17px] flex h-[4.5625rem] w-[15.59375rem] justify-start before:absolute before:top-0 before:right-0 before:size-[1.3125rem] before:rounded-full before:bg-[rgba(255,255,255,0.63)] before:ring before:ring-black before:backdrop-blur-[0.625rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="141"
                height="21"
                viewBox="0 0 141 21"
                fill="none"
                className="absolute top-[11px] right-[25px] opacity-0 group-hover/inner:opacity-100"
              >
                <path d="M141 1H20.5L1 20.5" stroke="black" />
              </svg>
              <span className="self-end border border-solid border-black bg-white/40 px-[1.25rem] py-[0.357rem] text-center text-base leading-6.5 font-normal text-black not-italic opacity-0 backdrop-blur-[0.375rem] transition-opacity group-hover/inner:opacity-100">
                Hugo Boss
              </span>
            </div>
            <div className="group/inner absolute top-[472px] left-[296px] flex h-[4.6875rem] w-[14.375rem] justify-end before:absolute before:top-0 before:left-0 before:size-[1.3125rem] before:rounded-full before:bg-[rgba(255,255,255,0.63)] before:ring before:ring-black before:backdrop-blur-[0.625rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="21"
                viewBox="0 0 81 21"
                fill="none"
                className="absolute top-[11px] left-[25px] opacity-0 group-hover/inner:opacity-100"
              >
                <path d="M0.5 1H61L80.5 20.5" stroke="black" />
              </svg>
              <span className="self-end border border-solid border-black bg-white/40 px-[1.96rem] py-[0.357rem] text-center text-base leading-6.5 font-normal text-black not-italic opacity-0 backdrop-blur-[0.375rem] transition-opacity group-hover/inner:opacity-100">
                Santoni
              </span>
            </div>
          </div>
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-[11.75rem] md:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon
              points="0,100 100,0 100,100"
              fill="currentColor"
              className="text-[#dadada]"
            />
            <line
              x1="0"
              y1="100"
              x2="100"
              y2="0"
              stroke="#000"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="relative flex flex-1 cursor-pointer items-center justify-center overflow-hidden bg-[#dadada] text-black transition-all duration-700 ease-in-out group-hover:flex-[0] hover:flex-[1]">
          <ProductDetails />
        </div>
      </div>
    </section>
  );
}

function ProductDetails() {
  return (
    <div className="grid w-full items-start gap-y-5 text-left md:max-w-2xl lg:max-w-[32.1875rem]">
      <span className="text-base leading-6 font-normal text-[#767676] not-italic">
        Women Collection
      </span>
      <h2
        className={`${volkhov.className} text-[2.875rem] leading-[3.6875rem] font-normal text-nowrap text-[#484848] not-italic`}
      >
        Peaky Blinders
      </h2>
      <section aria-labelledby="information-heading">
        <h3 id="information-heading" className="sr-only">
          Product information
        </h3>
        <Link
          href="#"
          className="text-base leading-6 font-normal text-black not-italic"
          style={{ textDecoration: "underline" }}
        >
          DESCRIPTION
        </Link>
        <p className="mt-[1.2rem] line-clamp-4 text-base leading-6 font-normal text-ellipsis text-[#767676] not-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Scelerisque duis.
        </p>
      </section>
      <section
        aria-labelledby="options-heading"
        className="flex flex-col gap-5"
      >
        <h3 id="options-heading" className="sr-only">
          Product options
        </h3>
        <div className="flex items-center gap-[0.9375rem]">
          <div className="text-base leading-6 font-normal text-[#767676] not-italic">
            Size:
          </div>
          <span className="rounded-[0.625rem] bg-black px-[1.208rem] py-[0.375rem] text-base leading-4 font-normal text-white not-italic">
            M
          </span>
        </div>
        <p className="text-[1.75rem] leading-10.5 font-medium text-black not-italic">
          $100.00
        </p>
        <Link
          href="#"
          className="flex w-[40.19417476%] items-center justify-center rounded-[0.625rem] border border-transparent bg-black px-8 py-[1.2rem] text-base leading-4 font-normal text-white not-italic shadow-[0px_20px_35px_rgba(0,0,0,0.15)] hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
        >
          Buy Now
        </Link>
      </section>
    </div>
  );
}
