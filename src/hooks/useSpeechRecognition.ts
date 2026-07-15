"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export function useSpeechRecognition() {
  const recognitionRef = useRef<any>(null);

  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    const SpeechRecognitionAPI =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognitionAPI) {
      setSupported(false);
      return;
    }

    const recognition = new SpeechRecognitionAPI();

    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      console.log("🎤 Speech Recognition Started");
      setListening(true);
    };

    recognition.onend = () => {
      console.log("🛑 Speech Recognition Ended");
      setListening(false);
    };

    recognition.onresult = (event: any) => {
      let text = "";

      for (let i = 0; i < event.results.length; i++) {
        text += event.results[i][0].transcript + " ";
      }

      console.log("📝 Transcript:", text.trim());

      setTranscript(text.trim());
    };

    recognition.onerror = (event: any) => {
      switch (event.error) {
        case "aborted":
        case "no-speech":
        case "audio-capture":
          return;

        default:
          console.error(
            "Speech Recognition Error:",
            event.error
          );
      }
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, []);

  const startListening = () => {
    if (!recognitionRef.current) return;

    console.log("▶ Starting Speech Recognition");

    try {
      recognitionRef.current.abort();
    } catch {}

    setTimeout(() => {
      try {
        recognitionRef.current.start();
      } catch (err) {
        console.log("Recognition already running");
      }
    }, 200);
  };

  const stopListening = () => {
    if (!recognitionRef.current) return;

    console.log("⏹ Stopping Speech Recognition");

    try {
      recognitionRef.current.stop();
    } catch {}
  };

  const resetTranscript = () => {
    setTranscript("");
  };

  return {
    transcript,
    listening,
    supported,
    startListening,
    stopListening,
    resetTranscript,
  };
}