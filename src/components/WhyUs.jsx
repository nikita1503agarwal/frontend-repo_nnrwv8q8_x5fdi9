import { Compass, HeartHandshake, ShieldCheck, Clock } from 'lucide-react';

const points = [
  {
    title: 'Faithful and Professional',
    desc: 'Licensed, insured, and compliant. We pair spiritual integrity with operational excellence.',
    icon: ShieldCheck,
  },
  {
    title: 'Guidance that resonates',
    desc: 'Pre-departure seminars and on-trip mentorship led by qualified scholars attuned to modern life.',
    icon: Compass,
  },
  {
    title: 'Transparent by design',
    desc: 'Clear pricing, documented itineraries, and live support channels. No last-minute surprises.',
    icon: HeartHandshake,
  },
  {
    title: 'Time-smart itineraries',
    desc: 'Optimized schedules for busy professionals with optional extensions and city stopovers.',
    icon: Clock,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              A contemporary Islamic approach to Umrah
            </h2>
            <p className="mt-4 text-slate-600">
              We honor the Sunnah while embracing modern comfort and clarity. Every touchpoint—from booking to tawaf—is designed for ease, focus, and ihsan.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((p) => (
                <div key={p.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl border border-slate-200 bg-[url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800">
              Ethical travel standards • 24/7 support • Women-friendly groups
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
