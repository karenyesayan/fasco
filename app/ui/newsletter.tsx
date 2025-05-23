import Image from "next/image";
import SubscribeForm from "./subscribe-form";
import { volkhov } from "./fonts";

export default function Newsletter() {
  return (
    <div className="w-full border-b border-solid border-b-[#D9D9D9]">
      <div className="mx-auto max-w-[89.5rem] px-6 pt-[9.375rem] pb-[3.0625rem] lg:px-4">
        <div className="relative isolate mx-auto overflow-hidden pt-16 md:pt-24 lg:flex lg:max-w-none lg:items-center lg:justify-center lg:gap-x-20 lg:pt-0">
          <div className="mt-16 h-[46.6875rem] lg:mt-0">
            <Image
              width={355}
              height={747}
              quality={100}
              src="/newsletter-banner-02.png"
              alt="Fashionable young man posing confidently in a mustard overcoat, beige turtleneck, light jeans, and white sneakers."
              className="absolute top-0 left-0 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
          <div className="max-w-xl text-center lg:max-w-[39.4375rem]">
            <h2
              className={`${volkhov.className} text-[2.875rem] leading-[3.6875rem] font-normal text-[#484848] not-italic`}
            >
              Subscribe To Our Newsletter
            </h2>
            <p className="mt-5 text-base leading-6.5 font-normal text-[#8A8A8A] not-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin
            </p>
            <SubscribeForm />
          </div>
          <div className="mt-16 h-[46.6875rem] lg:mt-0">
            <Image
              width={337}
              height={747}
              quality={100}
              src="/newsletter-banner-01.png"
              alt="Portrait young japanese woman"
              className="absolute top-0 right-0 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
