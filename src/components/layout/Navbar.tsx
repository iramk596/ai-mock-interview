"use client";

import Link from "next/link";
import { BrainCircuit } from "lucide-react";
import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import Container from "./Container";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "Interview Types", href: "#interview-types" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/70 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 rounded-full px-2 py-1 transition hover:bg-zinc-50"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-blue-600 to-violet-600 shadow-lg shadow-blue-500/20">
              <BrainCircuit className="h-5 w-5 text-white" />
            </div>

            <span className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-600 bg-clip-text text-lg font-semibold tracking-tight text-transparent">
              AI Mock Interview
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 md:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Authentication */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-2 md:flex">
              <Show when="signed-out">
                <SignInButton mode="modal">
                  <Button
                    variant="ghost"
                    className="rounded-full px-4 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                  >
                    Login
                  </Button>
                </SignInButton>

                <SignUpButton mode="modal">
                  <Button className="rounded-full bg-slate-950 px-4 text-sm font-medium text-white shadow-sm shadow-slate-950/10 hover:bg-slate-800">
                    Get Started
                  </Button>
                </SignUpButton>
              </Show>

              <Show when="signed-in">
                <UserButton />
              </Show>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}