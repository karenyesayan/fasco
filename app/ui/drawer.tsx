"use client";

import { useRef } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { useClickOutside, usePreventBodyScroll } from "../lib/hooks";

export default function Drawer({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  const drawerRef = useRef(null);

  useClickOutside(drawerRef, onClose);

  usePreventBodyScroll(isOpen);

  if (!isOpen && !drawerRef.current) {
    return null;
  }

  return (
    <>
      <div
        className={clsx(
          "relative transition-all duration-300 lg:hidden",
          isOpen ? "z-40" : "z-[-1]",
        )}
        role="dialog"
        aria-modal="true"
      >
        <div
          className={clsx({
            "fixed top-0 left-0 z-10 h-full w-full bg-white opacity-60 transition-opacity duration-300":
              isOpen,
          })}
          aria-hidden="true"
        ></div>

        <div className="fixed inset-0 z-40 flex">
          <div
            ref={drawerRef}
            className={clsx(
              "relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pt-[0.8375rem] pb-12 transition duration-300 ease-in-out data-closed:-translate-x-full",
              isOpen
                ? "animate-[slide-in_300ms] shadow-xl"
                : "-translate-x-full animate-[slide-out_300ms]",
            )}
          >
            {children}
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <Link
                  href="/sign-in"
                  className="-m-2 block p-2 font-medium text-[#484848]"
                >
                  Sign in
                </Link>
              </div>
              <div className="flow-root">
                <Link
                  href="/sign-up"
                  className="-m-2 block p-2 font-medium text-[#484848]"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
