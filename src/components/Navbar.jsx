import { useState } from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-black/5 dark:bg-black/40 dark:supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-semibold tracking-tight text-xl">
            <span className="text-gray-900 dark:text-white">dev.</span>
            <span className="text-indigo-600">folio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pl-3 border-l border-black/10 dark:border-white/10">
              <a
                href="mailto:you@example.com"
                aria-label="Email"
                className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </nav>

          <button
            className="md:hidden p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-2 py-2 rounded-md text-sm text-gray-800 hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
