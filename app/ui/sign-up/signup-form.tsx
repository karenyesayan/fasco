"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";
import OauthSignIn from "@/app/ui/o-auth";
import Divider from "../divider";
import { showNotification } from "../notifications";
import { volkhov } from "../fonts";

export default function SignupForm() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [verifying, setVerifying] = React.useState(false);
  const [code, setCode] = React.useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoaded) return;

    if (password !== confirmPassword) {
      showNotification("Passwords do not match", "light");
      return;
    }

    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setVerifying(true);
    } catch (err: any) {
      err.errors.forEach(({ longMessage }: { longMessage: string }) =>
        showNotification(longMessage, "light"),
      );
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoaded) return;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.push("/");
      } else {
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err: any) {
      err.errors.forEach(({ longMessage }: { longMessage: string }) =>
        showNotification(longMessage, "light"),
      );
      console.error("Error:", JSON.stringify(err, null, 2));
    }
  };

  if (verifying) {
    return (
      <>
        <h2
          className={`${volkhov.className} text-xl leading-[1.875rem] font-normal text-black not-italic sm:mx-auto sm:w-full md:mt-6 2xl:mt-[16.2125rem] 2xl:text-3xl 2xl:leading-10`}
        >
          Enter The Verification Code
        </h2>
        <form onSubmit={handleVerify}>
          <div className="min-[120rem]:mt-[4.0625rem]">
            <label htmlFor="code" className="sr-only">
              Enter your verification code
            </label>
            <div>
              <input
                id="code"
                name="code"
                value={code}
                placeholder="Confirmation Code"
                onChange={(e) => setCode(e.target.value)}
                className="block w-full border-b border-solid border-[#9D9D9D] bg-white py-[0.507rem] text-sm leading-[1.25rem] font-normal tracking-[0.08em] text-[#9D9D9D] not-italic placeholder:text-[#9D9D9D] focus:border-b focus:border-b-[#5B86E5] focus:outline-hidden 2xl:py-[0.1938rem] 2xl:text-base 2xl:leading-10"
              />
            </div>
          </div>
          <div className="col-span-2 mt-4 2xl:mt-[1.8125rem] 2xl:mb-[16.1875rem]">
            <button
              type="submit"
              className="mx-auto flex w-full justify-center rounded-md bg-black px-3 py-[0.786rem] text-base leading-[1.4285rem] font-medium tracking-[0.08em] text-white not-italic shadow-[0px_20px_35px_rgba(0,0,0,0.15)] hover:bg-[#32383f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:rounded-[0.625rem] xl:w-[91.562%] 2xl:py-2.5 2xl:leading-10 2xl:font-semibold"
            >
              Verify
            </button>
          </div>
        </form>
      </>
    );
  }

  return (
    <>
      <div className="sm:mx-auto sm:w-full md:mt-6">
        <h2
          className={`${volkhov.className} text-xl leading-[1.875rem] font-normal text-black not-italic 2xl:mt-[5.15rem] 2xl:text-3xl 2xl:leading-10`}
        >
          Create Account
        </h2>
        <OauthSignIn />
      </div>
      <Divider />
      <form
        onSubmit={handleSubmit}
        className="mt-4 flex grid-cols-2 grid-rows-3 flex-col gap-x-4.5 gap-y-4 sm:mx-auto sm:w-full md:grid 2xl:gap-y-[1.8125rem] min-[120rem]:mt-[4.1875rem]"
      >
        <div>
          <label htmlFor="firstName" className="sr-only">
            First Name
          </label>
          <div>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              className="block w-full border-b border-solid border-[#9D9D9D] bg-white py-[0.507rem] text-sm leading-[1.25rem] font-normal tracking-[0.08em] text-[#9D9D9D] not-italic placeholder:text-[#9D9D9D] focus:border-b focus:border-b-[#5B86E5] focus:outline-hidden 2xl:py-[0.1938rem] 2xl:text-base 2xl:leading-10"
            />
          </div>
        </div>
        <div>
          <label htmlFor="lastName" className="sr-only">
            Last Name
          </label>
          <div>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              className="block w-full border-b border-solid border-[#9D9D9D] bg-white py-[0.507rem] text-sm leading-[1.25rem] font-normal tracking-[0.08em] text-[#9D9D9D] not-italic placeholder:text-[#9D9D9D] focus:border-b focus:border-b-[#5B86E5] focus:outline-hidden 2xl:py-[0.1938rem] 2xl:text-base 2xl:leading-10"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <div>
            <input
              id="email"
              type="email"
              name="email"
              value={emailAddress}
              placeholder="Email Address"
              onChange={(e) => setEmailAddress(e.target.value)}
              className="block w-full border-b border-solid border-[#9D9D9D] bg-white py-[0.507rem] text-sm leading-[1.25rem] font-normal tracking-[0.08em] text-[#9D9D9D] not-italic placeholder:text-[#9D9D9D] focus:border-b focus:border-b-[#5B86E5] focus:outline-hidden 2xl:py-[0.1938rem] 2xl:text-base 2xl:leading-10"
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone Number
          </label>
          <div>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={phoneNumber}
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="block w-full border-b border-solid border-[#9D9D9D] bg-white py-[0.507rem] text-sm leading-[1.25rem] font-normal tracking-[0.08em] text-[#9D9D9D] not-italic placeholder:text-[#9D9D9D] focus:border-b focus:border-b-[#5B86E5] focus:outline-hidden 2xl:py-[0.1938rem] 2xl:text-base 2xl:leading-10"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full border-b border-solid border-[#9D9D9D] bg-white py-[0.507rem] text-sm leading-[1.25rem] font-normal tracking-[0.08em] text-[#9D9D9D] not-italic placeholder:text-[#9D9D9D] focus:border-b focus:border-b-[#5B86E5] focus:outline-hidden 2xl:py-[0.1938rem] 2xl:text-base 2xl:leading-10"
            />
          </div>
        </div>
        <div>
          <label htmlFor="confirmPassword" className="sr-only">
            Confirm Password
          </label>
          <div>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full border-b border-solid border-[#9D9D9D] bg-white py-[0.507rem] text-sm leading-[1.25rem] font-normal tracking-[0.08em] text-[#9D9D9D] not-italic placeholder:text-[#9D9D9D] focus:border-b focus:border-b-[#5B86E5] focus:outline-hidden 2xl:py-[0.1938rem] 2xl:text-base 2xl:leading-10"
            />
          </div>
        </div>
        <div className="col-span-2 mt-4 2xl:mt-[0.9375rem]">
          <button
            type="submit"
            className="mx-auto flex w-full justify-center rounded-md bg-black px-3 py-[0.786rem] text-base leading-[1.4285rem] font-medium tracking-[0.08em] text-white not-italic shadow-[0px_20px_35px_rgba(0,0,0,0.15)] hover:bg-[#32383f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:rounded-[0.625rem] xl:w-[86.33633634%] 2xl:py-2.5 2xl:leading-10 2xl:font-semibold"
          >
            Create Account
          </button>
        </div>
      </form>
      <p className="mt-[1.1875rem] text-left text-sm leading-[1.3125rem] font-medium tracking-[0.08em] text-black not-italic xl:text-center 2xl:text-base 2xl:leading-10 2xl:font-normal">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-[#5B86E5] hover:text-indigo-500">
          Login
        </Link>
      </p>
    </>
  );
}
