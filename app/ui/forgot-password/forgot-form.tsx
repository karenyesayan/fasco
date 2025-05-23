"use client";

import React, { useEffect, useState } from "react";
import { useAuth, useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";
import { showNotification } from "../notifications";
import { volkhov } from "../fonts";

export default function ForgotForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [successfulCreation, setSuccessfulCreation] = useState(false);
  const [codeVerified, setCodeVerified] = useState(false);

  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { isLoaded, signIn, setActive } = useSignIn();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/");
    }
  }, [isSignedIn, router]);

  if (!isLoaded) {
    return null;
  }

  async function create(e: React.FormEvent) {
    e.preventDefault();
    await signIn
      ?.create({
        strategy: "reset_password_email_code",
        identifier: email,
      })
      .then(() => {
        setSuccessfulCreation(true);
      })
      .catch((err) => {
        console.error("error", err.errors[0].longMessage);
        showNotification(err.errors[0].longMessage, "light");
      });
  }

  async function verify(e: React.FormEvent) {
    e.preventDefault();
    await signIn
      ?.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code,
      })
      .then((result) => {
        if (result.status === "needs_new_password") {
          setCodeVerified(true);
        } else {
          console.log(result);
        }
      })
      .catch((err) => {
        console.error("error", err.errors[0].longMessage);
        showNotification(err.errors[0].longMessage, "light");
      });
  }

  async function reset(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
      showNotification("Passwords do not match", "light");
      return;
    }

    await signIn
      ?.resetPassword({
        password,
      })
      .then((result) => {
        if (result.status === "complete") {
          setActive({ session: result.createdSessionId });
        } else {
          console.log(result);
        }
      })
      .catch((err) => {
        console.error("error", err.errors[0].longMessage);
        showNotification(err.errors[0].longMessage, "light");
      });
  }

  return (
    <div>
      <h1
        className={clsx(
          volkhov.className,
          "text-xl leading-[1.875rem] font-normal text-black not-italic 2xl:text-3xl 2xl:leading-10",
          !successfulCreation
            ? "md:mt-6 2xl:mt-[12.3375rem]"
            : codeVerified
              ? "md:mt-6 md:mb-2.5 2xl:mt-[15.4rem]"
              : "md:mt-6 md:mb-2.5 2xl:mt-[16.2125rem]",
        )}
      >
        {!successfulCreation
          ? "Forget Password"
          : codeVerified
            ? "Enter Your New Password"
            : "Enter The Confirmation Code"}
      </h1>
      <form
        onSubmit={!successfulCreation ? create : codeVerified ? reset : verify}
        className="mt-4 flex grid-cols-2 grid-rows-3 flex-col gap-x-4.5 gap-y-4 sm:mx-auto sm:w-full md:grid 2xl:gap-y-4 min-[120rem]:mt-[3.4375rem]"
      >
        {!successfulCreation && (
          <>
            <div className="w-full self-start">
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
            <div className="w-full self-start">
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
            <div className="w-full self-start">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full border-b border-solid border-[#9D9D9D] bg-white py-[0.507rem] text-sm leading-[1.25rem] font-normal tracking-[0.08em] text-[#9D9D9D] not-italic placeholder:text-[#9D9D9D] focus:border-b focus:border-b-[#5B86E5] focus:outline-hidden 2xl:py-[0.1938rem] 2xl:text-base 2xl:leading-10"
                />
              </div>
            </div>
            <div className="w-full self-start">
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
            <div className="col-span-2">
              <button className="mx-auto flex w-full justify-center rounded-md bg-black px-3 py-[0.786rem] text-base leading-[1.4285rem] font-medium tracking-[0.08em] text-white not-italic shadow-[0px_20px_35px_rgba(0,0,0,0.15)] hover:bg-[#32383f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:rounded-[0.625rem] xl:w-[91.562%] 2xl:py-2.5 2xl:leading-10 2xl:font-semibold">
                Send Confirmation Code
              </button>
            </div>
          </>
        )}

        {successfulCreation && !codeVerified && (
          <>
            <div className="col-span-2 w-full self-start">
              <label htmlFor="code" className="sr-only">
                Verification code
              </label>
              <div>
                <input
                  id="code"
                  name="code"
                  type="text"
                  value={code}
                  placeholder="Confirmation Code"
                  onChange={(e) => setCode(e.target.value)}
                  className="block w-full border-b border-solid border-[#9D9D9D] bg-white py-[0.507rem] text-sm leading-[1.25rem] font-normal tracking-[0.08em] text-[#9D9D9D] not-italic placeholder:text-[#9D9D9D] focus:border-b focus:border-b-[#5B86E5] focus:outline-hidden 2xl:py-[0.1938rem] 2xl:text-base 2xl:leading-10"
                />
              </div>
            </div>
            <div className="col-span-2">
              <button className="mx-auto flex w-full justify-center rounded-md bg-black px-3 py-[0.786rem] text-base leading-[1.4285rem] font-medium tracking-[0.08em] text-white not-italic shadow-[0px_20px_35px_rgba(0,0,0,0.15)] hover:bg-[#32383f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:rounded-[0.625rem] xl:w-[91.562%] 2xl:py-2.5 2xl:leading-10 2xl:font-semibold">
                Recover Account
              </button>
            </div>
          </>
        )}

        {successfulCreation && codeVerified && (
          <>
            <div className="col-span-2 w-full self-start">
              <label htmlFor="password" className="sr-only">
                New password
              </label>
              <div>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="New Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full border-b border-solid border-[#9D9D9D] bg-white py-[0.507rem] text-sm leading-[1.25rem] font-normal tracking-[0.08em] text-[#9D9D9D] not-italic placeholder:text-[#9D9D9D] focus:border-b focus:border-b-[#5B86E5] focus:outline-hidden 2xl:py-[0.1938rem] 2xl:text-base 2xl:leading-10"
                />
              </div>
            </div>
            <div className="col-span-2 mt-0.5 w-full self-start">
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm new password
              </label>
              <div>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  placeholder="Confirmation Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full border-b border-solid border-[#9D9D9D] bg-white py-[0.507rem] text-sm leading-[1.25rem] font-normal tracking-[0.08em] text-[#9D9D9D] not-italic placeholder:text-[#9D9D9D] focus:border-b focus:border-b-[#5B86E5] focus:outline-hidden 2xl:py-[0.1938rem] 2xl:text-base 2xl:leading-10"
                />
              </div>
            </div>
            <div className="col-span-2 mt-0.5">
              <button className="mx-auto flex w-full justify-center rounded-md bg-black px-3 py-[0.786rem] text-base leading-[1.4285rem] font-medium tracking-[0.08em] text-white not-italic shadow-[0px_20px_35px_rgba(0,0,0,0.15)] hover:bg-[#5B86E5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:rounded-lg xl:w-[91.562%] 2xl:py-2.5 2xl:leading-10 2xl:font-semibold">
                Submit
              </button>
            </div>
          </>
        )}
      </form>
      {!successfulCreation && (
        <p className="mt-[1.1875rem] text-left text-sm leading-[1.3125rem] font-medium tracking-[0.08em] text-black not-italic xl:text-center 2xl:text-base 2xl:leading-10 2xl:font-normal">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-[#5B86E5] hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      )}
    </div>
  );
}
