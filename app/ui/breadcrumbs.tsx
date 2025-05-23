import Link from "next/link";
import { clsx } from "clsx";
import ChevronRightIcon from "../../public/icons/chevron-right.svg";
import { jost } from "./fonts";

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-[2.4375rem] block">
      <ol
        className={clsx(
          jost.className,
          "flex justify-center text-xl font-normal not-italic md:text-2xl",
        )}
      >
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={clsx(
              breadcrumb.active
                ? "text-base leading-6"
                : "text-[0.9375rem] leading-[1.40625rem]",
            )}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-[0.9375rem] inline-block">
                <ChevronRightIcon className="size-[0.5625rem]" />
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
