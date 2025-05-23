import { useState, useEffect } from "react";

export function useClickOutside(
  ref: React.RefObject<null | HTMLInputElement>,
  callback: React.Dispatch<React.SetStateAction<boolean>>,
) {
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback(false);
      }
    }

    window.addEventListener("mousedown", handleClickOutside);

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback]);
}

export function usePreventBodyScroll(isOpen: boolean) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }, [isOpen]);
}

export function useCountdown(initialTime: number) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const days = String(Math.floor(timeLeft / (24 * 3600))).padStart(2, "0");
  const hours = String(Math.floor((timeLeft % (3600 * 24)) / 3600)).padStart(
    2,
    "0",
  );
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(Math.floor(timeLeft % 60)).padStart(2, "0");

  useEffect(() => {
    let id = null;

    if (timeLeft > 0) {
      id = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
    }
    return () => {
      if (id) clearInterval(id);
    };
  }, [timeLeft]);

  return [days, hours, minutes, seconds];
}
