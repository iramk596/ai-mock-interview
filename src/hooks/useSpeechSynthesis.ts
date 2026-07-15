"use client";

import { useState } from "react";

export function useSpeechSynthesis() {
  const [speaking, setSpeaking] = useState(false);

  const speak = (
    text: string,
    onEnd?: () => void
  ) => {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.rate = 1;

    utterance.pitch = 1;

    utterance.volume = 1;

    utterance.lang = "en-US";

    utterance.onstart = () => {
      setSpeaking(true);
    };

    utterance.onend = () => {
      setSpeaking(false);

      onEnd?.();
    };

    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    window.speechSynthesis.cancel();

    setSpeaking(false);
  };

  return {
    speaking,
    speak,
    stop,
  };
}