const features = [
  "AI Video Interviews",
  "Peer Mock Interviews",
  "Weekly Reports",
  "Learning Roadmaps",
  "Coding Contest Arena",
];

export default function UpcomingFeatures() {
  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold">
        Coming Soon
      </h2>

      <p className="mt-2 text-slate-500">
        Features currently under development.
      </p>

      <div className="mt-6 space-y-3">

        {features.map((feature) => (
          <div
            key={feature}
            className="rounded-lg bg-slate-100 p-3"
          >
            🚀 {feature}
          </div>
        ))}

      </div>

    </section>
  );
}