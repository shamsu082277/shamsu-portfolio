"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-[#0a0f1d] text-[#cbd5e1] p-4">
        <div className="max-w-md w-full text-center space-y-4 p-8 rounded-2xl bg-[#111a2e] border border-white/5 shadow-2xl">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xl font-bold">
            !
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-white">Application Error</h2>
            <p className="text-sm text-slate-400">An unexpected system error occurred.</p>
          </div>
          <button
            type="button"
            onClick={() => reset()}
            className="px-5 py-2 rounded-lg bg-emerald-400 text-[#0a0f1d] font-bold text-sm hover:bg-emerald-300 transition-colors"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}

