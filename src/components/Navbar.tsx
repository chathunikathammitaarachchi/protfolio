import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'top-4 left-0 right-0 max-w-5xl mx-auto rounded-full bg-[#0B1121]/80 backdrop-blur-md shadow-lg border border-white/10 py-3 px-6' 
          : 'top-0 bg-transparent py-6'
      }`}
    >
      <div className={`mx-auto ${scrolled ? 'w-full' : 'max-w-7xl px-4 sm:px-6 lg:px-8'}`}>
        <div className="flex items-center justify-between h-full">
          <div className="flex-shrink-0 flex items-center">
            <span className={`font-bold text-lg md:text-xl tracking-tight ${scrolled ? 'text-white' : 'bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'}`}>
              Chathunika Thammitaarachchi
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    scrolled ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-300 hover:text-cyan-400'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a 
                href="#contact"
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                    scrolled 
                    ? 'bg-cyan-600/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-600/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]' 
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                Let's Talk
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-slate-300 hover:bg-slate-800 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`absolute top-full left-0 w-full bg-[#0B1121]/95 backdrop-blur-xl shadow-2xl border-t border-slate-800 transition-all duration-300 ease-in-out md:hidden overflow-hidden ${isOpen ? 'max-h-96 opacity-100 rounded-b-3xl mt-2' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-4 pb-8 space-y-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block w-full text-center px-3 py-3 rounded-2xl text-lg font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 w-3/4 text-center"
            >
                Let's Talk
            </a>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
