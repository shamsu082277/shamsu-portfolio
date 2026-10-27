import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f1d] text-[#cbd5e1] px-4">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl bg-[#111a2e] border border-white/5 shadow-2xl">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-2xl font-bold">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white">Page Not Found</h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-[#0a0f1d] font-bold text-sm transition-colors"
        >
          <span>Return Home</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

