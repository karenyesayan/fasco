import Link from "next/link";
import Image from "next/image";
import Copyright from "../copyright";
import LockIcon from "../../../public/icons/lock.svg";
import ChevronDownIcon from "../../../public/icons/chevron-down.svg";
import { volkhov } from "../fonts";

export default function CheckoutForm() {
  return (
    <div className="w-full border-b border-solid border-[rgba(0,0,0,0.39)]">
      <h1
        className={`${volkhov.className} border-b border-solid border-[rgba(0,0,0,0.39)] pb-[2.6875rem] text-center text-[2.625rem] leading-8 font-normal text-black capitalize not-italic`}
      >
        FASCO Demo Checkout
      </h1>
      <div className="flex">
        <div className="flex flex-[1_1_50%] justify-end">
          <form className="mt-[5.0625rem] mr-[2.0625rem]">
            <div className="flex max-w-[37.9375rem] flex-col gap-6.5">
              <div className="flex items-end justify-between">
                <h2
                  className={`${volkhov.className} text-[2.875rem] leading-[3.6875rem] font-normal text-[#484848] not-italic`}
                >
                  Contact
                </h2>
                <p className="text-right text-base leading-6 font-normal text-[#484848] not-italic">
                  Have an account?{" "}
                  <Link
                    href="/sign-up"
                    className="text-[#1456FF] hover:text-indigo-500"
                  >
                    Create Account
                  </Link>
                </p>
              </div>
              <div>
                <label htmlFor="contact-email-address" className="sr-only">
                  Email Address
                </label>
                <div>
                  <input
                    id="contact-email-address"
                    name="contact-email-address"
                    type="email"
                    placeholder="Email Address"
                    autoComplete="email"
                    className="box-border w-full border border-solid border-[#8A8A8A] px-[1.6875rem] py-[1.419rem] text-base leading-6 font-normal text-[#8A8A8A] not-italic"
                  />
                </div>
              </div>
            </div>
            <div className="mt-[3.75rem] max-w-[37.9375rem]">
              <h2
                className={`${volkhov.className} text-[2.875rem] leading-[3.6875rem] font-normal text-[#484848] not-italic`}
              >
                Delivery
              </h2>
              <div className="mt-6.5 grid grid-cols-2 gap-x-3 gap-y-4">
                <div className="col-span-2 w-full">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <div className="relative">
                    <select
                      id="country"
                      name="country"
                      defaultValue=""
                      autoComplete="country-name"
                      className="ease box-border w-full cursor-pointer appearance-none border border-solid border-[#8A8A8A] bg-transparent py-[1.419rem] pr-[1.875rem] pl-[1.6875rem] text-base leading-6 font-normal text-[#8A8A8A] not-italic shadow-sm transition duration-300 placeholder:text-[#8A8A8A] hover:border-slate-400 focus:border-slate-400 focus:shadow-md focus:outline-none"
                    >
                      <option value="">Country / Region</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                    </select>
                    <ChevronDownIcon className="absolute top-8 right-7.5 ml-1 h-2 w-3 text-[#484848]" />
                  </div>
                </div>

                <div>
                  <label htmlFor="first-name" className="sr-only">
                    First Name
                  </label>
                  <div>
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      placeholder="First Name"
                      autoComplete="given-name"
                      className="box-border w-full border border-solid border-[#8A8A8A] px-[1.6875rem] py-[1.419rem] text-base leading-6 font-normal text-[#8A8A8A] not-italic"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="sr-only">
                    Last name
                  </label>
                  <div>
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      placeholder="Last Name"
                      autoComplete="family-name"
                      className="box-border w-full border border-solid border-[#8A8A8A] px-3.5 py-[1.419rem] text-base leading-6 font-normal text-[#8A8A8A] not-italic"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label htmlFor="address" className="sr-only">
                    Address
                  </label>
                  <div>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Address"
                      autoComplete="address-line1"
                      className="box-border w-full border border-solid border-[#8A8A8A] px-[1.6875rem] py-[1.419rem] text-base leading-6 font-normal text-[#8A8A8A] not-italic"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="city" className="sr-only">
                    City
                  </label>
                  <div>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="City"
                      autoComplete="address-level2"
                      className="box-border w-full border border-solid border-[#8A8A8A] px-[1.6875rem] py-[1.419rem] text-base leading-6 font-normal text-[#8A8A8A] not-italic"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="postal-code" className="sr-only">
                    Postal code
                  </label>
                  <div>
                    <input
                      id="postal-code"
                      name="postal-code"
                      type="text"
                      placeholder="Postal Code"
                      autoComplete="postal-code"
                      className="box-border w-full border border-solid border-[#8A8A8A] px-3.5 py-[1.419rem] text-base leading-6 font-normal text-[#8A8A8A] not-italic"
                    />
                  </div>
                </div>
                <div className="mt-2.5 flex items-center">
                  <div className="flex h-8 items-center">
                    <input
                      id="save"
                      type="checkbox"
                      defaultValue=""
                      className="box-border h-8 w-8 rounded-sm inset-ring-3 inset-ring-black focus:inset-ring-3 focus:inset-ring-black"
                    />
                  </div>
                  <label
                    htmlFor="save"
                    className="ms-2.5 text-base leading-[2.625rem] font-normal text-[#8A8A8A] capitalize not-italic"
                  >
                    Save This Info for future
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-[3.75rem] max-w-[37.9375rem]">
              <h2
                className={`${volkhov.className} text-[2.875rem] leading-[3.6875rem] font-normal text-[#484848] not-italic`}
              >
                Payment
              </h2>

              <div className="mt-4 w-full">
                <label htmlFor="payment-type" className="sr-only">
                  Credit card
                </label>
                <div className="relative">
                  <select
                    id="payment-type"
                    name="payment-type"
                    className="ease box-border w-full cursor-pointer appearance-none border border-solid border-[#8A8A8A] bg-transparent py-[1.419rem] pr-[1.875rem] pl-[1.6875rem] text-base leading-6 font-normal text-[#484848] not-italic shadow-sm transition duration-300 placeholder:text-[#484848] hover:border-slate-400 focus:border-slate-400 focus:shadow-md focus:outline-none"
                  >
                    <option value="Card">Credit card</option>
                    <option value="PayPal">PayPal</option>
                    <option value="eTransfer">eTransfer</option>
                  </select>
                  <ChevronDownIcon className="absolute top-8 right-7.5 ml-1 h-2 w-3 text-[#484848]" />
                </div>
              </div>
              <div className="bg-[#F5F5F5]">
                <div className="mx-auto grid max-w-[35.4375rem] grid-cols-2 gap-x-[0.3125rem] gap-y-[0.4375rem] pt-4.5">
                  <div className="col-span-2">
                    <label htmlFor="input-group-1" className="sr-only">
                      Card number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="input-group-1"
                        placeholder="Card Number"
                        className="box-border block w-full rounded border border-solid border-[#8A8A8A] bg-white p-2.5 py-[1.294rem] ps-[1.3125rem] text-base leading-6 font-normal text-[#8A8A8A] not-italic focus:border-blue-500 focus:ring-blue-500"
                      />
                      <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3.5">
                        <LockIcon className="h-[1.3125rem] w-4 text-gray-500" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="expiration-date" className="sr-only">
                      Expiration date
                    </label>
                    <div>
                      <input
                        id="expiration-date"
                        name="expiration-date"
                        type="text"
                        placeholder="Expiration Date "
                        autoComplete="cc-exp"
                        className="box-border w-full rounded border border-solid border-[#8A8A8A] bg-white px-[1.3125rem] py-[1.294rem] text-base leading-6 font-normal text-[#8A8A8A] not-italic"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="cvc" className="sr-only">
                      CVC
                    </label>
                    <div>
                      <input
                        id="cvc"
                        name="cvc"
                        type="text"
                        placeholder="Security Code"
                        className="box-border w-full rounded border border-solid border-[#8A8A8A] bg-white px-[1.3125rem] py-[1.294rem] text-base leading-6 font-normal text-[#8A8A8A] not-italic"
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="name-on-card" className="sr-only">
                      Card Holder Name
                    </label>
                    <div>
                      <input
                        id="name-on-card"
                        name="name-on-card"
                        type="text"
                        placeholder="Card Holder Name"
                        autoComplete="cc-name"
                        className="box-border w-full rounded border border-solid border-[#8A8A8A] bg-white px-[1.3125rem] py-[1.294rem] text-base leading-6 font-normal text-[#8A8A8A] not-italic"
                      />
                    </div>
                  </div>
                  <div className="mt-[0.5625rem] mb-7 flex items-center">
                    <div className="flex h-8 items-center">
                      <input
                        id="save-settings"
                        type="checkbox"
                        defaultValue=""
                        className="box-border h-8 w-8 rounded-sm inset-ring-3 inset-ring-black"
                      />
                    </div>
                    <label
                      htmlFor="save-settings"
                      className="ms-2.5 text-base leading-[2.625rem] font-normal text-[#8A8A8A] capitalize not-italic"
                    >
                      Save This Info for future
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[1.8125rem] max-w-[37.9375rem]">
              <button
                type="submit"
                className="rounded-[0.625rem] bg-black px-[16.845rem] py-[1.563rem] text-base leading-[100%] font-normal text-nowrap text-white not-italic shadow-[0px_20px_35px_rgba(0,0,0,0.15)]"
              >
                Pay Now
              </button>
              <div className="flex h-[6.0625rem] items-center justify-center">
                <Copyright />
              </div>
            </div>
          </form>
        </div>
        <div className="flex-[1_1_50%] bg-[#f5f5f5]">
          <div className="mt-[3.25rem] ml-[5.125rem] flex max-w-[34.875rem] flex-col gap-[1.3125rem]">
            <ul className="mt-3">
              <li className="flex flex-row items-center gap-[1.3125rem]">
                <div className="size-[8.5625rem] shrink-0 overflow-hidden">
                  <Image
                    width={137}
                    height={137}
                    alt="Front of men's Basic Tee in black."
                    src="https://i.imgur.com/eA2GzDn.png"
                    className="size-full object-cover"
                  />
                </div>
                <div className="grow">
                  <div>
                    <div className="flex flex-col gap-[5px]">
                      <h4
                        className={`${volkhov.className} text-lg leading-[1.4375rem] font-normal text-black capitalize not-italic`}
                      >
                        <Link href="#">Mini dress with ruffled straps</Link>
                      </h4>
                      <div className="flex justify-between">
                        <p className="text-base leading-6 font-normal text-[#484848] not-italic">
                          Red
                        </p>
                        <p className="text-base leading-6 font-normal text-[#484848] not-italic">
                          $100.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <form>
              <label htmlFor="discount-code" className="sr-only">
                Discount code
              </label>
              <div className="flex justify-between">
                <input
                  id="discount-code"
                  name="discount-code"
                  type="text"
                  placeholder="Discount code"
                  className="w-[68.10035842%] bg-white py-[1.469rem] text-base leading-6 font-normal text-[#484848] not-italic placeholder:pl-7 placeholder:text-[#484848]"
                />
                <button
                  type="submit"
                  className="rounded-[0.625rem] bg-black px-[3.614rem] text-base leading-[100%] font-normal text-white not-italic shadow-[0px_20px_35px_rgba(0,0,0,0.15)]"
                >
                  Apply
                </button>
              </div>
            </form>
            <dl className="flex flex-col gap-3">
              <div className="flex justify-between">
                <dt className="text-base leading-6 font-normal text-[#484848] not-italic">
                  Subtotal
                </dt>
                <dd className="text-base leading-6 font-normal text-[#484848] not-italic">
                  $100.00
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-base leading-6 font-normal text-[#484848] not-italic">
                  Shipping
                </dt>
                <dd className="text-base leading-6 font-normal text-[#484848] not-italic">
                  $40.00
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-base leading-6 font-normal text-[#484848] not-italic">
                  Total
                </dt>
                <dd className="text-base leading-6 font-normal text-black not-italic">
                  $140.00
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
