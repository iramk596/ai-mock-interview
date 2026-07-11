"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const AccordionContext = React.createContext<{ value: string | null; onValueChange: (value: string) => void }>({
  value: null,
  onValueChange: () => undefined,
});

function Accordion({
  children,
  type,
  collapsible,
  defaultValue,
}: {
  children: React.ReactNode;
  type: "single";
  collapsible?: boolean;
  defaultValue?: string;
}) {
  const [value, setValue] = React.useState<string | null>(defaultValue ?? null);

  return (
    <AccordionContext.Provider value={{ value, onValueChange: setValue }}>
      <div data-slot="accordion">{children}</div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({ children, value, className }: { children: React.ReactNode; value: string; className?: string }) {
  const { value: activeValue } = React.useContext(AccordionContext);
  const isOpen = activeValue === value;

  return (
    <div data-state={isOpen ? "open" : "closed"} className={cn("w-full", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ value?: string; isOpen?: boolean }>, { value, isOpen });
        }
        return child;
      })}
    </div>
  );
}

function AccordionTrigger({ children, className, value, isOpen }: { children: React.ReactNode; className?: string; value?: string; isOpen?: boolean }) {
  const { onValueChange } = React.useContext(AccordionContext);

  return (
    <button
      type="button"
      onClick={() => value && onValueChange(isOpen ? "" : value)}
      className={cn("flex w-full items-center justify-between gap-4 text-left", className)}
    >
      <span>{children}</span>
      <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} />
    </button>
  );
}

function AccordionContent({ children, className, isOpen }: { children: React.ReactNode; className?: string; isOpen?: boolean }) {
  if (!isOpen) return null;

  return <div className={cn("overflow-hidden", className)}>{children}</div>;
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
