import { Mail, Phone, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-emerald-700">
              <MessageSquare className="h-4 w-4" /> We’re here to help
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Speak to a dedicated Umrah advisor
            </h2>
            <p className="mt-3 text-slate-600">
              Share your preferred dates, group size, and any special requirements. We’ll respond within 24 hours.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <a href="mailto:hello@umrahmodern.com" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-800">
                <Mail className="h-4 w-4 text-emerald-600" /> hello@umrahmodern.com
              </a>
              <a href="tel:+11234567890" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-800">
                <Phone className="h-4 w-4 text-emerald-600" /> +1 (123) 456-7890
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:outline-none"
                    placeholder="Tell us about your ideal Umrah"
                  />
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700">
                  Request consultation
                </button>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  ✓
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Thanks—your request is in.</h3>
                <p className="mt-2 text-slate-600">Our advisors will get back to you via email shortly.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
