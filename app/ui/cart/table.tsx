"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { volkhov, poppins } from "../fonts";

const products = [
  {
    id: 1,
    name: "Mini dress with ruffled straps",
    href: "#",
    color: "Red",
    price: "$14.90",
    quantity: 1,
    imageSrc: "https://i.imgur.com/RxJdasM.png",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
];

export default function ProductsTable() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={`${volkhov.className} box flex flex-col`}>
      <table className="hidden min-w-full divide-y divide-[rgba(0,0,0,0.39)] border-b border-solid border-[rgba(0,0,0,0.39)] text-gray-900 md:table">
        <thead className="rounded-lg text-left text-[1.375rem] leading-8 font-normal text-black capitalize not-italic">
          <tr>
            <th scope="col" className="py-[2.09375rem] pr-4 font-normal">
              Product
            </th>
            <th
              scope="col"
              className="py-[2.09375rem] pr-3 pl-[2.3125rem] font-normal"
            >
              Price
            </th>
            <th
              scope="col"
              className="py-[2.09375rem] pr-3 pl-[0.1245rem] text-center font-normal"
            >
              Quantity
            </th>
            <th
              scope="col"
              className="px-3 py-[2.09375rem] text-right font-normal"
            >
              Total
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {products?.map((product) => (
            <tr
              key={product.id}
              className="w-full border-b text-[1.375rem] leading-8 font-normal text-black capitalize not-italic last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
            >
              <td className="w-[23.625rem] pt-[2.1875rem] pr-3 pb-[2.6875rem]">
                <div className="flex">
                  <div className="h-[14.0625rem] w-[10.5rem] shrink-0 overflow-hidden">
                    <Image
                      width={168}
                      height={225}
                      priority={true}
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="ml-5.5 text-[1.375rem] leading-7 font-normal text-black capitalize not-italic">
                    <h3>
                      <Link href={product.href}>{product.name}</Link>
                    </h3>
                    <p
                      className={`${poppins.className} mt-3.5 leading-[2.625rem] text-[#8A8A8A]`}
                    >
                      Color : {product.color}
                    </p>
                    <button
                      type="button"
                      className={`${poppins.className} mt-3.5 leading-[2.625rem] text-[#8A8A8A] underline hover:text-indigo-500`}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </td>
              <td className="pt-[2.1875rem] pr-3 pb-[2.6875rem] pl-[2.3125rem] align-baseline whitespace-nowrap">
                {product.price}
              </td>
              <td
                className={`${poppins.className} px-3 pt-[2.1875rem] pb-[2.6875rem] align-baseline whitespace-nowrap`}
              >
                <div className="flex flex-1 items-end justify-center text-sm">
                  <div
                    className="box-border inline-block rounded-[0.21875rem] border border-solid border-[#8A8A8A] bg-white px-[0.575rem] py-[0.0535rem]"
                    data-hs-input-number=""
                  >
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="inline-flex w-[0.9375rem] items-center justify-center gap-x-2 bg-white text-[1.5640625rem] leading-[2.375rem] font-medium text-neutral-900 capitalize not-italic hover:bg-gray-50 focus:bg-gray-50 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50"
                        tabIndex={-1}
                        aria-label="Decrease"
                        data-hs-input-number-decrement=""
                        onClick={() => setQuantity((quantity) => quantity - 1)}
                      >
                        -
                      </button>
                      <input
                        className="w-[4.125rem] border-0 bg-transparent p-0 text-center text-[1.5640625rem] leading-[2.375rem] font-normal text-[#8A8A8A] capitalize not-italic focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        style={{ MozAppearance: "textfield" }}
                        type="number"
                        aria-roledescription="Number field"
                        data-hs-input-number-input=""
                        readOnly
                        value={String(quantity).padStart(2, "0")}
                      />
                      <button
                        type="button"
                        className="inline-flex w-[1.125rem] items-center justify-center gap-x-2 bg-white text-[1.5640625rem] leading-[2.375rem] font-medium text-neutral-900 capitalize not-italic hover:bg-gray-50 focus:bg-gray-50 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50"
                        tabIndex={-1}
                        aria-label="Increase"
                        data-hs-input-number-increment=""
                        onClick={() => setQuantity((quantity) => quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-3 pt-[2.1875rem] pb-[2.6875rem] text-right align-baseline whitespace-nowrap">
                $14.90
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full max-w-[38.125rem] self-end pt-[1.9375rem]">
        <div className="mb-5 flex items-center">
          <div className="flex h-5 items-center">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="h-8 w-8 border-none inset-ring-3 inset-ring-black focus:ring-3 focus:ring-blue-300"
            />
          </div>
          <label
            htmlFor="terms"
            className={`${poppins.className} ms-[0.8125rem] text-[1.375rem] leading-[2.625rem] font-normal text-[#8A8A8A] capitalize not-italic`}
          >
            For{" "}
            <Link href="#" className="text-black">
              $10.00
            </Link>{" "}
            Please Wrap The Product
          </label>
        </div>
        <div className="flex justify-between border-t border-[rgba(0,0,0,0.39)] pt-[2.825rem] text-[1.375rem] leading-8 font-normal text-black capitalize not-italic">
          <p>Subtotal</p>
          <p>$100.00</p>
        </div>
        <div className="mt-[1.8125rem]">
          <Link
            href="/checkout"
            className={`${poppins.className} flex items-center justify-center rounded-[0.625rem] bg-black px-6 py-[1.5625rem] text-base leading-4 font-normal text-white not-italic shadow-[0px_20px_35px_rgba(0,0,0,0.15)] hover:bg-indigo-700`}
          >
            Checkout
          </Link>
        </div>
        <div className="mt-3.5 flex justify-center text-center text-sm text-gray-500">
          <button
            type="button"
            className="text-[1.375rem] leading-8 font-normal text-black capitalize not-italic underline hover:text-indigo-500"
          >
            View Cart
          </button>
        </div>
      </div>
    </div>
  );
}
