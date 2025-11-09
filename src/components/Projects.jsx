import { useEffect, useState } from 'react';

const projectsData = [
  {
    title: 'Realtime Collab Board',
    description: 'Multiplayer whiteboard with cursor presence, comments, and WebRTC screenshare.',
    tags: ['React', 'WebRTC', 'Socket.io'],
    link: '#',
  },
  {
    title: 'AI Doc Summarizer',
    description: 'Upload PDFs and get concise summaries with semantic search for citations.',
    tags: ['Next.js', 'OpenAI', 'Pinecone'],
    link: '#',
  },
  {
    title: 'E-commerce Starter',
    description: 'Headless storefront with Stripe, Sanity CMS, and serverless functions.',
    tags: ['Stripe', 'Sanity', 'Vercel'],
    link: '#',
  },
];

function Tag({ label }) {
  return (
    <span className="inline-flex items-center rounded-full bg-black/5 dark:bg-white/10 px-2 py-0.5 text-xs text-gray-700 dark:text-gray-300">
      {label}
    </span>
  );
}

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="projects" className="relative py-20 border-t border-black/5 dark:border-white/10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-16 right-1/3 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">A few things I loved building recently.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-md border border-black/10 dark:border-white/10 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10">
            Get in touch
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-black/10 dark:border-white/10 p-5 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 transition bg-white/70 dark:bg-zinc-900/70 backdrop-blur">
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-indigo-500/20 via-cyan-500/20 to-fuchsia-500/20" />
              <h3 className="mt-4 text-lg font-semibold group-hover:text-indigo-600 transition-colors">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
