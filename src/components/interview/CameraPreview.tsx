"use client";

import Webcam from "react-webcam";
import { Camera } from "lucide-react";

export default function CameraPreview() {
  return (
    <div className="rounded-3xl border border-slate-700 bg-white/5 p-6 backdrop-blur-xl">

      <div className="mb-4 flex items-center gap-2">

        <Camera className="h-5 w-5 text-indigo-400" />

        <h2 className="text-lg font-semibold text-white">
          You
        </h2>

      </div>

      <div className="overflow-hidden rounded-2xl">

        <Webcam
          audio={false}
          mirrored
          className="aspect-video w-full rounded-2xl object-cover"
        />

      </div>

    </div>
  );
}