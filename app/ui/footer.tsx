import Link from "next/link";
import Logo from "./logo";
import Copyright from "./copyright";

const links = [
  {
    id: 0,
    title: "Support Center",
    segment: "#",
  },
  {
    id: 1,
    title: "Invoicing",
    segment: "#",
  },
  {
    id: 2,
    title: "Contract",
    segment: "#",
  },
  {
    id: 3,
    title: "Careers",
    segment: "#",
  },
  {
    id: 4,
    title: "Blog",
    segment: "#",
  },
  {
    id: 5,
    title: "FAQ,s",
    segment: "#",
  },
];

export default function Footer() {
  return (
    <footer className="box py-7.5">
      <div className="flex flex-col min-[52.125rem]:gap-[3.125rem]">
        <div className="w-full sm:flex sm:flex-row sm:items-center sm:justify-between">
          <Logo size="sm" />
          <NavLinks />
        </div>
        <Copyright />
      </div>
    </footer>
  );
}

function NavLinks() {
  return (
    <ul className="mt-4 mb-6 flex flex-wrap items-center gap-x-4 text-sm font-medium text-[#484848] not-italic sm:mt-0 sm:mb-0 sm:gap-9.5 sm:text-base sm:leading-6 sm:font-normal">
      {links.map(({ id, title, segment }) => (
        <li key={id}>
          <Link className="hover:underline" href={segment}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
