import { Menu, X, Phone, MapPin, Moon } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Packages', href: '#packages' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <Moon className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight text-slate-900">Umrah Modern</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+11234567890" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
              <Phone className="h-4 w-4" />
              <span>Talk to an Advisor</span>
            </a>
            <a href="#packages" className="inline-flex items-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">
              Start Your Journey
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50">
                  {n.label}
                </a>
              ))}
              <a href="tel:+11234567890" className="mt-2 inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-slate-700">
                <Phone className="h-4 w-4" /> Call an Advisor
              </a>
              <a href="#packages" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-3 py-2 font-medium text-white">
                Start Your Journey
              </a>
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                <MapPin className="h-3.5 w-3.5" /> Offices in Jeddah • Riyadh • Kuala Lumpur
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
