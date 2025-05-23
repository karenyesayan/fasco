import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/ui/logo";
import SigninForm from "@/app/ui/sign-in/signin-form";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center overflow-hidden bg-white pb-24 lg:pb-0">
      <div className="mx-auto max-w-[120rem] lg:max-h-[67.3125rem] min-[137.5rem]:rounded-[0px_30px_30px_0px] min-[137.5rem]:border min-[137.5rem]:border-solid min-[137.5rem]:border-[#DBDBDB]">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 min-[120rem]:gap-x-5.5">
          <div className="max-w-none">
            <Image
              width={949}
              height={1077}
              priority={true}
              src="/signin-hero.jpg"
              alt="Stylish woman posing in front of a colorful graffiti wall, wearing sunglasses, a pink off-shoulder top, and a white skirt."
            />
          </div>
          <div className="relative px-4 lg:pt-4 lg:pr-8 min-[120rem]:pt-[5.73125rem] min-[120rem]:pl-[4.4375rem]">
            <div className="lg:max-w-[41.625rem]">
              <Logo size="lg" />
              <SigninForm />
              <Link
                href="#"
                className="right-[4.21875%] bottom-6.5 flex grow items-end justify-end pt-4 text-right text-xs leading-[1.125rem] font-normal text-black not-italic lg:absolute xl:py-0 2xl:text-base 2xl:leading-10"
              >
                FASCO Terms & Codnitions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
