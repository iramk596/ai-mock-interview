"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

type MonacoCodeEditorProps = {
  code: string;
  language: string;
  onChange: (value: string) => void;
};

export default function MonacoCodeEditor({
  code,
  language,
  onChange,
}: MonacoCodeEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [editorHeight, setEditorHeight] = useState(360);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(([entry]) => {
      const nextHeight = Math.floor(entry.contentRect.height);
      if (nextHeight > 0) {
        setEditorHeight((currentHeight) =>
          currentHeight === nextHeight ? currentHeight : nextHeight
        );
      }
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="h-full min-h-0 overflow-hidden">
      <Editor
        height={editorHeight}
        language={language}
        theme="vs-dark"
        value={code}
        onChange={(value) => onChange(value ?? "")}
        options={{
          automaticLayout: true,
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 14,
          minimap: { enabled: false },
          padding: { top: 16, bottom: 16 },
          scrollBeyondLastLine: false,
          scrollbar: {
            horizontal: "auto",
            horizontalScrollbarSize: 10,
            vertical: "auto",
            verticalScrollbarSize: 10,
          },
          wordWrap: "on",
        }}
      />
    </div>
  );
}
