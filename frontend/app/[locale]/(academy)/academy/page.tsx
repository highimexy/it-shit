export default function AcademyDashboard() {
  return (
    <div className="p-10 lg:p-20">
      <h1 className="mb-4 font-serif text-4xl font-bold tracking-tighter lg:text-6xl">
        Welcome Back.
      </h1>
      <p className="mb-12 font-mono text-sm opacity-60">Pick up where you left off.</p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Przykładowa Karta Kursu */}
        <div className="border-foreground/10 bg-foreground/5 hover:bg-foreground/10 rounded-2xl border p-6 transition-colors">
          <div className="mb-2 font-mono text-xs opacity-50">MODULE 01</div>
          <h2 className="mb-4 text-xl font-bold">QA Fundamentals</h2>
          <div className="bg-background mb-2 h-2 w-full rounded-full">
            <div className="bg-primary h-2 w-[45%] rounded-full"></div>
          </div>
          <div className="text-right font-mono text-[10px] opacity-50">45% COMPLETED</div>
        </div>
      </div>
    </div>
  )
}
