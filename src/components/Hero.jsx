import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[86vh] flex items-center overflow-hidden">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200">
            <span className="h-2 w-2 rounded-full bg-green-500" /> Open to opportunities
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Software Engineer crafting modern, interactive web experiences
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
            I build clean, fast, and accessible web apps with React, TypeScript, and Node — blending delightful UX with solid engineering.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-500 transition">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/10 px-4 py-2 text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition">
              Contact Me
            </a>
          </div>
        </div>

        {/* Spline 3D scene */}
        <div className="relative h-[380px] sm:h-[420px] md:h-[520px] lg:h-[560px] w-full rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Subtle top gradient to improve contrast for UI over 3D */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/70 dark:from-zinc-900/70 to-transparent" />
        </div>
      </div>
    </section>
  );
}
