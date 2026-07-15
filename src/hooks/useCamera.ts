"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type PermissionState = "idle" | "granted" | "denied";

export function useCamera() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const streamRef = useRef<MediaStream | null>(null);

  const [permission, setPermission] =
    useState<PermissionState>("idle");

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const startCamera = useCallback(async () => {
    // Already running
    if (streamRef.current) return;

    try {
      setIsLoading(true);
      setError("");

      const mediaStream =
        await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "user",
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
          audio: true,
        });

      streamRef.current = mediaStream;

      setPermission("granted");

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error(err);

      setPermission("denied");

      setError(
        "Unable to access camera or microphone."
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (
      permission === "granted" &&
      videoRef.current &&
      streamRef.current
    ) {
      videoRef.current.srcObject = streamRef.current;
    }
  }, [permission]);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current
        .getTracks()
        .forEach((track) => track.stop());

      streamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setPermission("idle");
  }, []);

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  return {
    videoRef,
    stream: streamRef.current,
    permission,
    isLoading,
    error,
    startCamera,
    stopCamera,
  };
}