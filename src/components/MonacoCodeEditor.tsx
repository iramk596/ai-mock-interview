"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

type MonacoCodeEditorProps = {
  initialCode: string;
  language?: string;
};

export default function MonacoCodeEditor({
  initialCode,
  language = "typescript",
}: MonacoCodeEditorProps) {
  const [code, setCode] = useState(initialCode);

  return (
    <Editor
      height="70vh"
      language={language}
      theme="vs-dark"
      value={code}
      onChange={(value) => setCode(value || "")}
      options={{
        fontSize: 14,
        minimap: { enabled: false },
        automaticLayout: true,
        wordWrap: "on",
        scrollBeyondLastLine: false,
        fontFamily: "JetBrains Mono, monospace",
      }}
    />
  );
}