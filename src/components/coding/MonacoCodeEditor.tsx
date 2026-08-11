"use client";

import Editor from "@monaco-editor/react";

interface MonacoCodeEditorProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
}

export default function MonacoCodeEditor({
  language,
  value,
  onChange,
}: MonacoCodeEditorProps) {
  return (
    <div className="h-full overflow-hidden rounded-xl border border-slate-700">
      <Editor
        height="100%"
        language={language}
        theme="vs-dark"
        value={value}
        onChange={(v) => onChange(v || "")}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          automaticLayout: true,
          scrollBeyondLastLine: false,
          roundedSelection: true,
          padding: { top: 16 },
        }}
      />
    </div>
  );
}