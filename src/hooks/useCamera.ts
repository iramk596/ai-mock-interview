"use client";

import { useEffect, useState } from "react";

export function useCamera() {
  const [hasPermission, setHasPermission] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function requestCamera() {
      try {
        await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        setHasPermission(true);
      } catch {
        setHasPermission(false);
      } finally {
        setLoading(false);
      }
    }

    requestCamera();
  }, []);

  return {
    hasPermission,
    loading,
  };
}