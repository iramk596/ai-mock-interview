"use client";

import { useEffect, useState } from "react";

export function useMicrophone() {
  const [hasPermission, setHasPermission] =
    useState(false);

  useEffect(() => {
    async function requestMic() {
      try {
        await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

        setHasPermission(true);
      } catch {
        setHasPermission(false);
      }
    }

    requestMic();
  }, []);

  return hasPermission;
}