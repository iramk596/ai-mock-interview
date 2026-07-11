export default function TrustedBy() {
  const brands = [
    { name: "Google", accent: "from-slate-900 to-slate-700" },
    { name: "Microsoft", accent: "from-slate-800 to-slate-600" },
    { name: "Amazon", accent: "from-slate-900 to-slate-700" },
    { name: "OpenAI", accent: "from-slate-800 to-slate-600" },
    { name: "Vercel", accent: "from-slate-900 to-slate-700" },
    { name: "GitHub", accent: "from-slate-800 to-slate-600" },
  ];

  return (
    <section className="border-t border-slate-200/80 bg-white/70 px-6 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-slate-200/80 bg-slate-50/80 px-6 py-8 shadow-[0_10px_60px_rgba(15,23,42,0.04)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="max-w-md">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            Trusted by modern teams
          </p>
          <p className="mt-2 text-xl font-semibold text-slate-900 sm:text-2xl">
            Built for professionals who want the same caliber of prep used by top product and engineering teams.
          </p>
        </div>

        <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/70"
            >
              <div className="flex items-center gap-3">
                <div className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${brand.accent}`} />
                <span className="text-base font-semibold tracking-wide text-slate-700 transition-colors duration-300 group-hover:text-slate-950">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
