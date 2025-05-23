import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-4 lg:max-w-[82rem]">
      <div className="grid grid-cols-[24.5rem_1fr_24.5rem] grid-rows-[9.375rem_23.9375rem_9.375rem] gap-x-9 gap-y-[36.5px] xl:grid-cols-[24.5rem_26.625rem_24.5rem]">
        <div className="relative col-start-1 col-end-2 row-start-1 row-end-4 rounded-[0.625rem] bg-[#E0E0E0]">
          <div className="absolute inset-px rounded-lg bg-[#E0E0E0] lg:rounded-[0.625rem]" />
          <div className="relative flex h-full flex-col overflow-hidden">
            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0" />
            <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
              <div className="absolute bottom-0 overflow-hidden">
                <Image
                  width={392}
                  height={570}
                  priority={true}
                  src="/hero-image-04.png"
                  alt="Portrait male wearing cap sitting"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative col-start-2 col-end-3 row-start-1 row-end-2 rounded-[0.625rem] bg-[#E0E0E0]">
          <div className="absolute inset-px rounded-lg bg-[#E0E0E0] max-lg:rounded-[0.625rem]" />
          <div className="relative flex h-full flex-col overflow-hidden">
            <div className="px-8 pt-8 sm:px-10 sm:pt-[0.3125rem]" />
            <div className="flex flex-1 items-center justify-center sm:px-[0.84375rem]">
              <Image
                width={399}
                height={145}
                quality={100}
                src="/hero-image-01.png"
                alt="Four stylish young women posing together in modern outfits"
                className="w-full max-lg:max-w-xs"
              />
            </div>
          </div>
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-3 text-center">
          <div className="mx-auto h-full max-w-[24.9375rem]">
            <h1 className="text-5xl font-medium tracking-[-0.04em] text-balance text-[#484848] not-italic sm:text-[5.6875rem] sm:leading-[5.6875rem]">
              ULTIMATE
            </h1>
            <h2
              className="text-5xl font-medium tracking-[-0.055em] text-balance text-white not-italic sm:text-[11.6875rem] sm:leading-[11.6875rem]"
              style={{ WebkitTextStroke: "1px #484848" }}
            >
              SALE
            </h2>
            <p className="text-lg font-normal tracking-widest text-pretty text-[#484848] uppercase not-italic sm:text-xl sm:leading-7.5">
              NEW COLLECTION
            </p>
            <Link
              href="/shop"
              className="mx-auto mt-[1.1875rem] block w-[51.87969925%] rounded-[0.625rem] bg-black px-3.5 py-[1.25rem] text-base leading-4 font-medium text-white shadow-[0px_20px_35px_rgba(0,0,0,0.15)] hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
        <div className="relative col-start-2 col-end-3 row-start-3 row-end-4 rounded-[0.625rem]">
          <div className="relative flex h-full flex-col overflow-hidden">
            <div className="@container flex flex-1 items-center">
              <Image
                width={426}
                height={150}
                src="/hero-image-03.png"
                alt="Two young women smiling and posing joyfully against a pink background"
                className="object-cover"
              />
            </div>
          </div>
          <div className="bg-(full-length-two-caucasian-young-elegant-women-evening-dress-raise-their-leg-unison-pink-background-beauty-emotions-people-concept.jpg) pointer-events-none absolute inset-px rounded-[0.625rem]" />
        </div>
        <div className="relative col-start-3 col-end-4 row-start-1 row-end-4 rounded-[0.625rem] bg-[#E0E0E0]">
          <div className="absolute inset-px rounded-lg bg-[#E0E0E0] max-lg:rounded-b-[2rem] lg:rounded-[0.625rem]" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0" />
            <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
              <div className="absolute bottom-0 left-[3.9375rem] overflow-hidden">
                <Image
                  width={249}
                  height={568}
                  src="/hero-image-02.png"
                  alt="Curly haired man with brown blouse posing"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
