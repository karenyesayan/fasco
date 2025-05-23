"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Drawer from "./drawer";
import Logo from "./logo";
import { CloseButton, BurgerButton } from "./buttons";
import Navbar from "./navbar";
import Toolbar from "./toolbar";

const navigation = [
  [
    {
      id: 0,
      title: "Home",
      segment: "/",
    },
    {
      id: 1,
      title: "Deals",
      segment: "#",
    },
    {
      id: 2,
      title: "New Arrivals",
      segment: "#",
    },
    {
      id: 3,
      title: "Packages",
      segment: "#",
    },
  ],
  [
    {
      id: 0,
      title: "Home",
      segment: "/",
    },
    {
      id: 1,
      title: "Shop",
      segment: "shop",
    },
    {
      id: 2,
      title: "Products",
      segment: "products",
    },
    {
      id: 3,
      title: "Pages",
      segment: "pages",
      children: [
        {
          id: 4,
          title: "Cart",
          segment: "cart",
        },
      ],
    },
  ],
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      const menu = menuRef.current;
      const windowHeight = window.scrollY;

      if (windowHeight > 200) {
        menu?.classList.remove("fadeInUp");
      } else {
        menu?.classList.add("fadeInUp");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="box 3xl:h-[12.375rem] relative flex h-16 flex-wrap items-center justify-between min-[52.125rem]:overflow-visible min-[52.125rem]:pb-2">
      <Drawer isOpen={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Logo size="md" />
        <CloseButton onToggle={setMobileMenuOpen} />
        <nav className="mt-2 space-y-10 border-t border-gray-200 px-4 pt-[1.2rem] pb-3">
          <Navbar navigation={navigation[pathname === "/" ? 0 : 1]} />
        </nav>
      </Drawer>
      <BurgerButton onToggle={setMobileMenuOpen} />
      <Logo size="md" />
      <nav ref={menuRef} className="hidden bg-white min-[52.125rem]:block">
        <Navbar navigation={navigation[pathname === "/" ? 0 : 1]} />
      </nav>
      <Toolbar />
    </header>
  );
}
