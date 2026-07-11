"use client";

import { useState } from "react";
import Link from "next/link";
import { BrainCircuit, Menu } from "lucide-react";
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "Interview Types", href: "#interview-types" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 hover:text-slate-950 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Open navigation menu</span>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full max-w-sm border-l border-slate-200 bg-white/95 p-0 backdrop-blur-xl"
      >
        <div className="flex h-full flex-col px-6 py-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-blue-600 to-violet-600 shadow-lg shadow-blue-500/20">
              <BrainCircuit className="h-5 w-5 text-white" />
            </div>

            <span className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-600 bg-clip-text text-lg font-semibold tracking-tight text-transparent">
              AI Mock Interview
            </span>
          </div>

          <nav
            aria-label="Mobile navigation"
            className="mt-8 flex flex-col gap-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3 border-t border-slate-200 pt-6">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <Button
                  variant="outline"
                  className="h-11 rounded-full border-slate-200 text-sm font-medium"
                >
                  Login
                </Button>
              </SignInButton>

              <SignUpButton mode="modal">
                <Button className="h-11 rounded-full bg-slate-950 text-sm font-medium text-white hover:bg-slate-800">
                  Get Started
                </Button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <div className="flex justify-start">
                <UserButton />
              </div>
            </Show>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}