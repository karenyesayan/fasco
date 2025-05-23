import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import Search from "./search";
import UserIcon from "../../public/icons/user.svg";
import StarIcon from "../../public/icons/star.svg";
import ShoppingBagIcon from "../../public/icons/shopping-bag.svg";

export default function Toolbar() {
  const { isSignedIn } = useAuth();

  return (
    <div className="ml-auto flex items-center min-[53.3125rem]:ml-0">
      {/* Search */}
      <div className="flex">
        <Search />
      </div>

      {/* Profile */}
      <div className="hidden min-[53.3125rem]:ml-7.5 min-[53.3125rem]:flex">
        <Link
          href={isSignedIn ? "/account" : "/sign-in"}
          className="group flex items-center text-gray-700 hover:text-gray-800"
        >
          <span className="sr-only">Open profile</span>
          <UserIcon
            aria-hidden="true"
            className="size-5 shrink-0 text-[#484848] group-hover:text-gray-500"
          />
        </Link>
      </div>

      {/* favorites */}
      <div className="hidden min-[53.3125rem]:ml-6.5 min-[53.3125rem]:flex">
        <Link
          href="/favourites"
          className="group flex items-center text-gray-700 hover:text-gray-800"
        >
          <span className="sr-only">View favorites</span>
          <StarIcon
            aria-hidden="true"
            className="size-5 shrink-0 text-[#484848] group-hover:text-gray-500"
          />
        </Link>
      </div>

      {/* Cart */}
      <div className="ml-4 flow-root min-[53.3125rem]:ml-6.5">
        <Link href="/cart" className="group flex items-center">
          <span className="sr-only">Items in cart, view bag</span>
          <ShoppingBagIcon
            aria-hidden="true"
            className="size-5 shrink-0 text-[#484848] group-hover:text-gray-500"
          />
        </Link>
      </div>
    </div>
  );
}
