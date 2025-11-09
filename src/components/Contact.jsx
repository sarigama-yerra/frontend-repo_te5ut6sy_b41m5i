import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! I will get back to you shortly.');
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-8 left-1/4 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s build something great</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Have a project in mind or just want to say hi? Drop a message.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 text-left">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <textarea
            required
            name="message"
            placeholder="Tell me about your project..."
            rows={5}
            className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 transition"
          >
            <Mail className="h-4 w-4" /> Send Message
          </button>
          {status && <p className="text-sm text-emerald-600">{status}</p>}
        </form>
      </div>
    </section>
  );
}
