import Link from "next/link";
import { BrainCircuit, GitBranch, LinkIcon, Send } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Interview Types", "How It Works", "Pricing"],
  Company: ["About", "Careers", "Blog", "Contact"],
  Resources: ["Help Center", "Privacy", "Terms", "Security"],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="max-w-sm">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-blue-600 to-violet-600 shadow-lg shadow-blue-500/20">
              <BrainCircuit className="h-5 w-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-600 bg-clip-text text-lg font-semibold tracking-tight text-transparent">
              AI Mock Interview
            </span>
          </Link>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Premium AI-powered interview prep for ambitious professionals looking to perform at their best.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#" aria-label="GitHub" className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-950">
              <GitBranch className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-950">
              <LinkIcon className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-950">
              <Send className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid flex-1 gap-8 sm:grid-cols-3">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="transition hover:text-slate-950">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
