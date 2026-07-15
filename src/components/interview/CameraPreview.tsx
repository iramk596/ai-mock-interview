"use client";

import { useEffect } from "react";
import { Camera, CameraOff, Loader2 } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { useCamera } from "@/hooks/useCamera";

export default function CameraPreview() {
  const {
    videoRef,
    permission,
    error,
    isLoading,
    startCamera,
  } = useCamera();

  useEffect(() => {
    startCamera();
  }, [startCamera]);

  return (
    <Card className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">

      <div className="relative aspect-video">

        {/* Live Camera */}
        {permission === "granted" && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="h-full w-full object-cover"
          />
        )}

        {/* Loading */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950">
            <Loader2 className="mb-4 h-10 w-10 animate-spin text-indigo-400" />

            <p className="text-sm text-slate-300">
              Starting camera...
            </p>
          </div>
        )}

        {/* Waiting / Permission Denied */}
        {!isLoading && permission !== "granted" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950">

            <CameraOff className="mb-4 h-12 w-12 text-slate-500" />

            <p className="mb-6 text-center text-sm text-slate-300">
              {error || "Waiting for camera permission..."}
            </p>

            <Button
              onClick={startCamera}
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:opacity-90"
            >
              <Camera className="mr-2 h-4 w-4" />
              Enable Camera
            </Button>

          </div>
        )}

      </div>
    </Card>
  );
}