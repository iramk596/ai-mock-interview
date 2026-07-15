"use client";

import { useEffect, useState } from "react";

export function useInterviewTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(seconds / 60);

  const remaining = seconds % 60;

  const formatted =
    `${String(minutes).padStart(2, "0")}:${String(
      remaining
    ).padStart(2, "0")}`;

  return formatted;
}