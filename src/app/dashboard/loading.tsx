export default function DashboardLoading() {
  return (
    <div className="space-y-6 p-8 animate-pulse">
      <div className="h-8 w-64 rounded bg-slate-200" />
      <div className="grid grid-cols-4 gap-4">
        <div className="h-28 rounded-xl bg-slate-200" />
        <div className="h-28 rounded-xl bg-slate-200" />
        <div className="h-28 rounded-xl bg-slate-200" />
        <div className="h-28 rounded-xl bg-slate-200" />
      </div>
    </div>
  );
}