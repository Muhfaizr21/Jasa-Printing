import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Process', path: '/process' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">
        <Link to="/" className="flex-shrink-0">
          <div className="text-xl md:text-2xl font-black font-outfit text-black uppercase tracking-tighter">
            The Master Printmaker
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${
                location.pathname === link.path 
                ? 'text-black border-b-2 border-secondary' 
                : 'text-slate-500'
              } pb-1 font-outfit tracking-tight text-lg transition-colors hover:text-secondary`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/contact" className="text-black font-inter font-medium hover:text-secondary transition-colors">
            Contact Us
          </Link>
          <button className="bg-black text-white px-6 py-2.5 rounded-lg font-medium hover:bg-zinc-800 transition-all shadow-sm active:scale-95">
            Start Order
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-black/10 animate-fade-in shadow-2xl">
          <div className="flex flex-col p-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-outfit font-bold text-black border-b border-black/5 pb-2"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 pt-4">
              <button className="bg-black text-white py-4 rounded-xl font-bold">
                Start Order
              </button>
              <button className="text-black font-bold py-4">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
