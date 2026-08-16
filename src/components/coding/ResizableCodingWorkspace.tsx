"use client";

import { useRef, useState, type CSSProperties, type ReactNode } from "react";
import { GripVertical } from "lucide-react";

type ResizableCodingWorkspaceProps = {
  leftPanel: ReactNode;
  rightPanel: ReactNode;
};

type WorkspaceStyle = CSSProperties & {
  "--coding-panel-columns": string;
};

const MIN_LEFT_PANEL_WIDTH = 30;
const MAX_LEFT_PANEL_WIDTH = 70;

export default function ResizableCodingWorkspace({
  leftPanel,
  rightPanel,
}: ResizableCodingWorkspaceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [leftPanelWidth, setLeftPanelWidth] = useState(42);

  const updateWidth = (clientX: number) => {
    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const nextWidth = ((clientX - bounds.left) / bounds.width) * 100;
    setLeftPanelWidth(Math.min(MAX_LEFT_PANEL_WIDTH, Math.max(MIN_LEFT_PANEL_WIDTH, nextWidth)));
  };

  const style: WorkspaceStyle = {
    "--coding-panel-columns": `${leftPanelWidth}% 12px minmax(0, 1fr)`,
  };

  return (
    <div
      ref={containerRef}
      className="grid min-h-0 flex-1 gap-4 xl:h-full xl:grid-cols-[var(--coding-panel-columns)] xl:gap-0"
      style={style}
    >
      <div className="min-h-0 xl:h-full">{leftPanel}</div>

      <div className="hidden items-stretch justify-center xl:flex">
        <button
          type="button"
          role="separator"
          aria-label="Resize problem and editor panels"
          aria-orientation="vertical"
          aria-valuemin={MIN_LEFT_PANEL_WIDTH}
          aria-valuemax={MAX_LEFT_PANEL_WIDTH}
          aria-valuenow={Math.round(leftPanelWidth)}
          onPointerDown={(event) => event.currentTarget.setPointerCapture(event.pointerId)}
          onPointerMove={(event) => {
            if (event.currentTarget.hasPointerCapture(event.pointerId)) {
              updateWidth(event.clientX);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              const adjustment = event.key === "ArrowLeft" ? -2 : 2;
              setLeftPanelWidth((width) =>
                Math.min(MAX_LEFT_PANEL_WIDTH, Math.max(MIN_LEFT_PANEL_WIDTH, width + adjustment))
              );
            }
          }}
          className="group flex w-full cursor-col-resize touch-none items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
        >
          <span className="flex h-12 w-1 items-center justify-center rounded-full bg-slate-800 transition group-hover:w-2 group-hover:bg-violet-400/70">
            <GripVertical className="size-4 text-slate-500 opacity-0 transition group-hover:opacity-100" />
          </span>
        </button>
      </div>

      <div className="min-h-0 min-w-0 xl:h-full">{rightPanel}</div>
    </div>
  );
}
