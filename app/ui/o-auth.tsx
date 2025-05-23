"use client";

import * as React from "react";
import { useSignIn } from "@clerk/nextjs";
import { OAuthStrategy } from "@clerk/types";
import { showNotification } from "./notifications";
import GoogleIcon from "../../public/icons/google.svg";
import AppleIcon from "../../public/icons/apple.svg";

export default function OauthSignIn() {
  const { signIn } = useSignIn();

  if (!signIn) return null;

  const signInWith = (strategy: OAuthStrategy) => {
    return signIn
      .authenticateWithRedirect({
        strategy,
        redirectUrl: "/sign-up/sso-callback",
        redirectUrlComplete: "/",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err: any) => {
        err.errors.forEach(({ longMessage }: { longMessage: string }) =>
          showNotification(longMessage, "light"),
        );
        console.error(err, null, 2);
      });
  };

  return (
    <div className="mt-6 flex flex-col justify-between gap-4 lg:flex-row 2xl:mt-[1.8125rem] 2xl:gap-16">
      <button
        onClick={() => signInWith("oauth_google")}
        className="flex w-full items-center justify-center gap-[0.8125rem] rounded-lg border border-solid border-[#5B86E5] px-7.5 py-[0.419rem] hover:bg-[rgb(249,250,250)] 2xl:px-[2.093rem]"
      >
        <GoogleIcon className="size-6 2xl:size-9" />
        <span className="truncate text-xs leading-[1.4285rem] font-normal tracking-[0.08em] text-black not-italic 2xl:text-base 2xl:leading-10">
          Sign in with Google
        </span>
      </button>
      <button
        onClick={() => signInWith("oauth_apple")}
        className="flex w-full items-center justify-center gap-[0.8125rem] rounded-lg border border-solid border-[#5B86E5] px-7.5 py-[0.419rem] hover:bg-[rgb(249,250,250)] 2xl:px-[2.093rem]"
      >
        <AppleIcon className="size-6 2xl:size-9" />
        <span className="truncate text-xs leading-[1.4285rem] font-normal tracking-[0.08em] not-italic 2xl:text-base 2xl:leading-10">
          Sign in with Apple
        </span>
      </button>
    </div>
  );
}
