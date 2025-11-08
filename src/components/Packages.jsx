import { Plane, Hotel, Users, Shield, Star } from 'lucide-react';

const packages = [
  {
    name: 'Essential Umrah',
    price: '$1,599',
    desc: 'Thoughtful essentials for a meaningful pilgrimage',
    perks: ['Direct flights', '3-star hotel near Haram', 'Group support', 'Visa processing'],
    highlight: false,
  },
  {
    name: 'Executive Umrah',
    price: '$2,399',
    desc: 'Comfort-first plan for busy professionals',
    perks: ['Premium airlines', '4-star hotel walking distance', 'Private airport transfers', 'Guided ziyarat'],
    highlight: true,
  },
  {
    name: 'Family Umrah',
    price: '$1,999',
    desc: 'Balanced itinerary with family-friendly care',
    perks: ['Flexible rooms', 'Kid-friendly scheduling', 'Dedicated group leader', 'Medical support access'],
    highlight: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="relative py-20">
      <div className="absolute inset-x-0 -z-[1] top-0 h-64 bg-gradient-to-b from-emerald-50/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-emerald-700">
            <Star className="h-4 w-4" /> Packages curated for you
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Choose a plan that fits your journey
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Transparent pricing, clear inclusions, and flexible add-ons. No hidden fees.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl border ${pkg.highlight ? 'border-emerald-300 bg-emerald-50/50' : 'border-slate-200 bg-white'} p-6 shadow-sm`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 right-4 inline-flex rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </div>
              )}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-900">{pkg.name}</h3>
                <span className="text-2xl font-bold text-emerald-700">{pkg.price}</span>
              </div>
              <p className="mt-2 text-slate-600">{pkg.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {pkg.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-emerald-600" /> {perk}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-medium ${pkg.highlight ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                Enquire now
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-600">
          <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
            <Plane className="h-4 w-4 text-emerald-600" /> IATA-approved partners
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
            <Hotel className="h-4 w-4 text-emerald-600" /> Handpicked hotels
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
            <Users className="h-4 w-4 text-emerald-600" /> Small group sizes
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
            <Shield className="h-4 w-4 text-emerald-600" /> Full insurance options
          </div>
        </div>
      </div>
    </section>
  );
}
