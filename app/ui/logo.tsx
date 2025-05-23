import Link from "next/link";
import { clsx } from "clsx";
import { volkhov } from "./fonts";

export default function Logo({ size }: { size: string }) {
  const sizes: { [key: string]: string } = {
    sm: "md:text-4xl 2xl:leading-[100%] text-2xl 2xl:text-[2rem]",
    md: "md:text-4xl 2xl:leading-[100%] text-[1.55rem] 2xl:text-[3.25rem]",
    lg: "hidden text-4xl sm:flex 2xl:text-[4.16228125rem] 2xl:leading-[4.16228125rem]",
  };

  return (
    <Link
      className={clsx(
        volkhov.className,
        "font-normal text-[#484848] not-italic",
        { "ml-4 flex min-[53.3125rem]:ml-0": size === "md" },
      )}
      href="/"
    >
      <span className={sizes[size]}>FASCO</span>
    </Link>
  );
}
