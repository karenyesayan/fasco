import Image from "next/image";

export default function Brands() {
  return (
    <div className="relative mt-[1.6875rem] w-full shadow-[0px_20px_52.2889px_rgba(68,68,68,0.04)]">
      <div className="box py-24 sm:pt-[5.3125rem] sm:pb-[5.125rem]">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-0 lg:mx-0 lg:max-w-none lg:grid-cols-[repeat(5,12.25rem)] lg:justify-between">
          <Image
            width={196}
            height={33}
            alt="Chanel"
            src="/logos/chanel.png"
            className="col-span-2 max-h-9 object-contain lg:col-span-1"
          />
          <Image
            width={196}
            height={25}
            alt="Louis Vuitton"
            src="/logos/louis-vuitton.png"
            className="col-span-2 max-h-9 object-contain lg:col-span-1"
          />
          <Image
            width={196}
            height={32}
            alt="Prada"
            src="/logos/prada.png"
            className="col-span-2 max-h-9 object-contain lg:col-span-1"
          />
          <Image
            width={196}
            height={33}
            alt="Calvin Klein"
            src="/logos/calvin-klein.png"
            className="col-span-2 max-h-9 object-contain sm:col-start-2 lg:col-span-1"
          />
          <Image
            width={184}
            height={27}
            alt="Denim"
            src="/logos/denim.png"
            className="col-span-2 col-start-2 max-h-9 object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}
