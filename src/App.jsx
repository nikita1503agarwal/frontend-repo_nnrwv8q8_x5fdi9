import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Umrah Modern. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-900">Privacy</a>
          <a href="#" className="hover:text-slate-900">Terms</a>
          <a href="#contact" className="hover:text-slate-900">Support</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50/30 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
