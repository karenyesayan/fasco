"use client";

import { useState } from "react";
import CheckCircleIcon from "../../public/icons/check-circle.svg";

export default function SubscribeForm() {
  const [isSent, setIsSent] = useState(false);

  if (isSent) {
    return (
      <p
        data-success-message="true"
        className="mt-6 flex items-center justify-center gap-1.5 pb-[9.5rem] text-base leading-6.5 font-normal text-[#8A8A8A] not-italic"
      >
        <CheckCircleIcon className="text-[#484848]" />
        Thanks for subscribing!
      </p>
    );
  }

  return (
    <div className="mt-7.5 flex justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsSent(true);
        }}
        className="flex grow flex-col gap-7.5"
      >
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          required
          placeholder="michael@ymail.com"
          autoComplete="email"
          className="min-w-0 flex-auto bg-white px-3.5 py-7.5 text-base font-normal text-[#8A8A8A] not-italic shadow-[0px_163px_80px_rgba(0,0,0,0.04),0px_105.648px_46.8519px_rgba(0,0,0,0.0303704),0px_62.7852px_25.4815px_rgba(0,0,0,0.0242963),0px_32.6px_13px_rgba(0,0,0,0.02),0px_13.2815px_6.51852px_rgba(0,0,0,0.0157037),0px_3.01852px_3.14815px_rgba(0,0,0,0.00962963)] placeholder:text-[#8A8A8A] focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-[1.375rem] sm:leading-6.5"
        />
        <button
          type="submit"
          className="flex-none self-center rounded-[0.625rem] bg-black px-[2.78rem] py-5 text-base leading-[100%] font-normal text-white not-italic shadow-[0px_20px_35px_rgba(0,0,0,0.15)] hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  );
}
