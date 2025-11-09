export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              I’m a web engineer focused on building delightful products with clean architecture
              and thoughtful UX. I enjoy working across the stack with a strong affinity for
              frontend performance, accessibility, and design systems.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-black/10 dark:border-white/10 p-4 bg-white/70 dark:bg-zinc-900/70 backdrop-blur">
                <p className="font-semibold">Core</p>
                <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>React + TypeScript</li>
                  <li>Node + FastAPI</li>
                  <li>Postgres + MongoDB</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 dark:border-white/10 p-4 bg-white/70 dark:bg-zinc-900/70 backdrop-blur">
                <p className="font-semibold">Tools</p>
                <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Tailwind, Radix UI</li>
                  <li>Jest, Playwright</li>
                  <li>Docker, CI/CD</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-gradient-to-br from-indigo-500/10 via-cyan-500/10 to-fuchsia-500/10">
            <p className="text-sm uppercase tracking-wide text-gray-600 dark:text-gray-300">Values</p>
            <ul className="mt-3 space-y-3 text-gray-800 dark:text-gray-100">
              <li className="leading-relaxed">• Clarity over cleverness</li>
              <li className="leading-relaxed">• Accessible by default</li>
              <li className="leading-relaxed">• Measure, then optimize</li>
              <li className="leading-relaxed">• Collaboration and craft</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
