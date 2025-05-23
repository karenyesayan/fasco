import Link from "next/link";
import { clsx } from "clsx";
import ChevronDownIcon from "../../public/icons/chevron-down.svg";
import { Navigation } from "../lib/definitions";

export default function Navbar({
  navigation,
  isNested,
}: {
  navigation: Navigation[];
  isNested?: boolean;
}) {
  return (
    <ul
      className={clsx(
        "flex-col",
        isNested
          ? "py-0 pr-0 group-hover:visible group-hover:opacity-100 min-[52.125rem]:invisible min-[52.125rem]:absolute min-[52.125rem]:top-full min-[52.125rem]:left-0 min-[52.125rem]:mt-2 min-[52.125rem]:w-screen min-[52.125rem]:max-w-7xl min-[52.125rem]:rounded-md min-[52.125rem]:bg-white min-[52.125rem]:opacity-0 min-[52.125rem]:shadow-xl min-[52.125rem]:transition-all min-[52.125rem]:duration-300 min-[52.125rem]:ease-in-out"
          : "flex min-[52.125rem]:box-border min-[52.125rem]:flex-row min-[52.125rem]:justify-center min-[52.125rem]:gap-8 min-[52.125rem]:px-0 xl:gap-[70px]",
      )}
    >
      {navigation.map(({ id, title, segment, children }) => (
        <li
          key={id}
          className={clsx(
            "group px-0 text-base leading-6 font-medium not-italic min-[52.125rem]:px-0 min-[52.125rem]:py-[0.1875rem] min-[52.125rem]:text-[0.8125rem] min-[52.125rem]:leading-[0.8125rem] min-[52.125rem]:font-normal lg:text-base lg:leading-6",
            isNested ? "pt-6 pb-0 text-gray-500" : "py-5 text-[#484848]",
          )}
        >
          {children ? (
            <button
              type="button"
              className="flex flex-row items-center gap-[5px] transition-[color] duration-200"
            >
              {title}
              <ChevronDownIcon className="hidden min-[53.3125rem]:block min-[53.3125rem]:h-[0.25875rem] min-[53.3125rem]:w-[0.42625rem]" />
            </button>
          ) : (
            <Link href={segment}>{title}</Link>
          )}
          {children && <Navbar navigation={children} isNested={true} />}
        </li>
      ))}
    </ul>
  );
}
