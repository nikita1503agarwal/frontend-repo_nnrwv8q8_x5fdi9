import Spline from '@splinetool/react-spline';
import { Check, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28">
      <div className="absolute inset-0 h-[560px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white/40 to-white pointer-events-none" />
        <div className="h-full" style={{ width: '100%', height: '100%' }}>
          <Spline scene="https://prod.spline.design/M6kZgg4WmhwqFQ4b/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="py-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/60 px-3 py-1 text-emerald-700 backdrop-blur">
              <Sparkles className="h-4 w-4" /> Trusted Umrah for Modern Muslims
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Journey to the Haramain, with ease and integrity
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">
              We craft seamless, spiritually-centered Umrah experiences for millennials and young professionals—combining faith, comfort, and clarity every step of the way.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#packages" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-emerald-700">
                Explore Packages
              </a>
              <a href="#why-us" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-800 font-medium hover:bg-slate-50">
                Why Choose Us
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
              {['Licensed by Saudi Authorities', 'Transparent, All-In Pricing', 'Dedicated Ustaadh Guidance', 'Flexible Payment Plans'].map((f) => (
                <li key={f} className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" /> {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-[520px] lg:h-[640px] rounded-3xl overflow-hidden border border-slate-200/70 bg-white/60 backdrop-blur">
            <iframe
              title="Makkah"
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/4h8wEw8jQxE?autoplay=0&mute=1&controls=0&modestbranding=1&rel=0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
