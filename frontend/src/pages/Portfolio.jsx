import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Signature Corporate Suite",
    category: "Korporat",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDi9KtoKK8GRMJgLy6MK6-ATOd9mtlwPSfWmenWhNWOYDlByWjfotNKd-aO0EJRJYpNmbHr3Fpnrpv5wLXAcBdrhV44OWQli06gnsRuMPNZ4R9gPpDasoJAjjXppfy-52f_e8yS3tG_0339WDWu1dKDvDUqExYBKmWDwuwE58N6f1nSKToPbr3HYha0kV_G6-rsLh5CETZKsj2ZAMH-ItmqeQJBbH66WMwryNfgz61dX5-pctWCf7poQWzEKQvQgRoGFX1Vu3-DlR8",
  },
  {
    id: 2,
    title: "Elevated Brand Launch",
    category: "Pemasaran",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGBBFmwDPpciziQeyS9WFI6GmtepvjN5pmYC0RBEKEjeD5Gck0SV8mlKcEzPdJIJBXo0cCRpQKPzkyWQVyPp0ghefFD8VdggjEuqV_EjkC4zvshDlAI3x31HdCu8d5fWntfVrZJ_VnWjcmc7MKLCxDPXF42_EahqxiQ6iQvhYroJtnSfdI6ToWBn_uOclELdCiO-D4nr-poDiXt4Jv-38NyC4KHsauEd5VHiOPEFl7qBDzlrpGrdgDSQtAshQ6geRZMGNEi6YVcx8",
  },
  {
    id: 3,
    title: "Velvet Foil Invitations",
    category: "Kustom",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALZRj3s0_GIY_1p46SvjQJlsygnmlM2h29qVb-3QyNh3C34FCsWCQ5HmlQXBUO_WBaRnKmKyqGSCDdq8v_c8TAZ1BFtWtXUYmT2_zErXesxeNPgYbsr28mKRTCwvNf8sGSO4SQAbdLlkgvwg_jFybsQtdLbV6OphMh7oin_uoHameyza5lq43wAf2tsj6nhm_4jSum4fij9HAWhHK2W_emsZXq8r9A7a0sPc-GVQ5t-1SVQlDQX23Kr7qQ2hsshdr9sc5ATiSeBtU",
  },
  {
    id: 4,
    title: "Monochrome Annual Report",
    category: "Korporat",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6tfy3vIvvPfJYPoNpZ6u1G76q-osI01YdySdgKJbVyM8huas9rzxmTBrKnzEAQbPcknoyhQBQt0T9RhHhiTlV2AOa2jMy8fjO1qVUQjjmVNA7sn0xwImSoJRaf6KfYlYaHFbX4uiQFaJcplj4XRYoeKBnu9z3l9EVGES0RPv4P9s4rK6mbaexdx1WKL3QQqTsO9Fup-cpPSG6HtzFEFIP9FjM29hxTbyQne8H9z0o6fb9OWVwUZxHkQ3aXqU55C_SeuVcE-dE37w",
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState("Semua");

  const categories = ["Semua", "Korporat", "Pemasaran", "Kustom"];
  const filteredProjects = filter === "Semua" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20 animate-fade-in">
          <span className="text-secondary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
            Koleksi Karya
          </span>
          <h1 className="font-outfit text-5xl md:text-7xl font-black text-black tracking-tighter mb-8 leading-none">
            Portofolio
          </h1>
          <p className="font-inter text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed">
            Pameran hasil cetak pilihan yang mencerminkan dedikasi kami terhadap kualitas dan estetika premium.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-4 mb-16 px-1 py-1 rounded-2xl">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-inter text-sm font-bold transition-all ${
                filter === cat 
                ? "bg-black text-white shadow-lg" 
                : "bg-white text-slate-400 hover:text-black border border-black/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer animate-fade-in"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                  <span className="bg-white/20 backdrop-blur-xl text-white px-4 py-1.5 rounded-full text-xs font-bold font-inter uppercase tracking-widest">
                    Detail Projek
                  </span>
                </div>
              </div>
              <div>
                <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h3 className="font-outfit text-2xl md:text-3xl font-bold text-black group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
