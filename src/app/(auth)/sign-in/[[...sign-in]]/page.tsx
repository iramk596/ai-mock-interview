import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_55%),linear-gradient(135deg,_#020617,_#111827)] px-4 py-16">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <SignIn
          routing="path"
          path="/sign-in"
          signUpUrl="/sign-up"
        />
      </div>
    </main>
  );
}
