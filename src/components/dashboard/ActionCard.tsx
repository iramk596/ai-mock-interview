import Link from "next/link";
import { ReactNode } from "react";

interface ActionCardProps {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  color: string;
}

export default function ActionCard({
  title,
  description,
  href,
  icon,
  color,
}: ActionCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${color} text-white transition-transform duration-300 group-hover:scale-110`}
      >
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>
    </Link>
  );
}