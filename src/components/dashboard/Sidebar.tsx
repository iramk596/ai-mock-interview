"use client";

import { BookOpen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Mic,
  Code2,
  BarChart3,
  Settings,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Interviews",
    href: "/dashboard/interviews",
    icon: Mic,
  },
  {
  title: "DSA Sheet",
  href: "/dashboard/dsa-sheet",
  icon: BookOpen,
  },
  {
    name: "Coding",
    href: "/dashboard/coding",
    icon: Code2,
  },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-64 min-h-screen border-r bg-white flex-col">
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold">AI Mock Interview</h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                pathname === item.href
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-100 text-slate-700"
              }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-4">
        <UserButton />
      </div>
    </aside>
  );
}