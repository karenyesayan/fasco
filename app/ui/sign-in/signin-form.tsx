"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSignIn } from "@clerk/nextjs";
import OauthSignIn from "@/app/ui/o-auth";
import Divider from "../divider";
import { showNotification } from "../notifications";
import { volkhov } from "@/app/ui/fonts";

export default function SigninForm() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoaded) return;

    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.push("/");
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      err.errors.forEach(({ longMessage }: { longMessage: string }) =>
        showNotification(longMessage, "light"),
      );
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full md:mt-6">
        <h2
          className={`${volkhov.className} text-xl leading-[1.875rem] font-normal text-black not-italic 2xl:mt-[5.15rem] 2xl:text-3xl 2xl:leading-10`}
        >
          Sign In To FASCO
        </h2>
        <OauthSignIn />
      </div>
      <Divider />
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="mt-4 sm:mx-auto sm:w-full xl:mt-[3.0625rem]"
      >
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <div className="md:mt-2">
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full border-b border-solid border-[#9D9D9D] bg-white py-[0.507rem] text-sm leading-[1.25rem] font-normal tracking-[0.08em] text-[#9D9D9D] not-italic placeholder:text-[#9D9D9D] focus:border-b focus:border-b-[#5B86E5] focus:outline-hidden 2xl:py-[0.1938rem] 2xl:text-base 2xl:leading-10"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className="mt-4 md:mt-[1.8125rem]">
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full border-b border-solid border-[#9D9D9D] bg-white py-[0.507rem] text-sm leading-[1.25rem] font-normal tracking-[0.08em] text-[#9D9D9D] not-italic placeholder:text-[#9D9D9D] focus:border-b focus:border-b-[#5B86E5] focus:outline-hidden 2xl:py-[0.1938rem] 2xl:text-base 2xl:leading-10"
            />
          </div>
        </div>

        <div className="mt-4 2xl:mt-11">
          <button
            type="submit"
            className="mx-auto flex w-full justify-center rounded-md bg-black px-3 py-[0.786rem] text-base leading-[1.4285rem] font-medium tracking-[0.08em] text-white not-italic shadow-[0px_20px_35px_rgba(0,0,0,0.15)] hover:bg-[#32383f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:rounded-[0.625rem] xl:w-[91.562%] 2xl:py-2.5 2xl:leading-10 2xl:font-semibold"
          >
            Sign in
          </button>
        </div>
        <div className="mt-4 2xl:mt-[1.1875rem]">
          <Link
            href="/sign-up"
            className="mx-auto flex w-full justify-center rounded-md border border-solid border-[#5B86E5] px-3 py-[0.736rem] text-base leading-[1.4285rem] font-medium tracking-[0.08em] text-[#5B86E5] not-italic shadow-xs hover:bg-[#5B86E5] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:rounded-lg xl:w-[91.562%] 2xl:py-[0.575rem] 2xl:leading-10 2xl:font-semibold"
          >
            Register Now
          </Link>
        </div>
      </form>
      <div className="mt-4 text-sm xl:text-right 2xl:mt-1.5">
        <Link
          href="/forgot-password"
          className="mr-[1.66125rem] text-sm leading-[1.3125rem] font-medium tracking-[0.08em] text-[#5B86E5] not-italic hover:text-indigo-500 2xl:text-base 2xl:leading-10 2xl:font-bold"
        >
          Forget Password?
        </Link>
      </div>
    </>
  );
}
