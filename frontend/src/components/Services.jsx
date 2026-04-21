const Services = () => {
  return (
    <section className="py-32 bg-[#f6f3f2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <h2 className="font-outfit text-5xl md:text-6xl font-bold text-black tracking-tighter leading-tight">
            Layanan
            <br /> Atelier Kami
          </h2>
          <a
            className="font-inter font-bold text-secondary hover:text-black transition-all flex items-center group"
            href="#"
          >
            Lihat Katalog Lengkap
            <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Offset Printing (Large) */}
          <div className="md:col-span-8 h-[450px] bg-white rounded-3xl overflow-hidden relative group shadow-sm transition-all hover:shadow-2xl">
            <img
              alt="Cetak Offset"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6tfy3vIvvPfJYPoNpZ6u1G76q-osI01YdySdgKJbVyM8huas9rzxmTBrKnzEAQbPcknoyhQBQt0T9RhHhiTlV2AOa2jMy8fjO1qVUQjjmVNA7sn0xwImSoJRaf6KfYlYaHFbX4uiQFaJcplj4XRYoeKBnu9z3l9EVGES0RPv4P9s4rK6mbaexdx1WKL3QQqTsO9Fup-cpPSG6HtzFEFIP9FjM29hxTbyQne8H9z0o6fb9OWVwUZxHkQ3aXqU55C_SeuVcE-dE37w"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 w-full">
              <span className="bg-white/10 backdrop-blur-xl border border-white/10 text-white px-5 py-1.5 text-xs font-bold tracking-[0.2em] rounded-full mb-6 inline-block font-inter uppercase">
                Volume Tinggi
              </span>
              <h3 className="font-outfit text-4xl md:text-5xl font-bold text-white mb-4">
                Cetak Offset
              </h3>
              <p className="font-inter text-zinc-300 max-w-md text-lg leading-relaxed">
                Standar emas untuk cetak massal. Akurasi warna yang tak tertandingi dan konsistensi sempurna.
              </p>
            </div>
          </div>

          {/* Digital Printing */}
          <div className="md:col-span-4 h-[450px] bg-white rounded-3xl overflow-hidden relative group shadow-sm border border-black/5 hover:border-black/10 transition-all hover:shadow-xl">
            <div className="p-12 h-full flex flex-col">
              <div className="w-16 h-16 bg-[#f6f3f2] rounded-2xl flex items-center justify-center mb-auto group-hover:bg-secondary/10 transition-colors">
                <span className="material-symbols-outlined text-3xl text-slate-500 group-hover:text-secondary">
                  print
                </span>
              </div>
              <div>
                <h3 className="font-outfit text-3xl font-bold text-black mb-4">
                  Cetak Digital
                </h3>
                <p className="font-inter text-slate-500 leading-relaxed mb-8">
                  Sempurna untuk jumlah sedikit dan data variabel. Tajam, bersih, dan siap saat Anda membutuhkannya.
                </p>
                <a
                  className="inline-flex items-center text-sm font-bold text-secondary group/btn"
                  href="#"
                >
                  Pelajari Lebih Lanjut
                  <span className="material-symbols-outlined ml-2 text-lg group-hover/btn:translate-x-1 transition-transform">chevron_right</span>
                </a>
              </div>
            </div>
          </div>

          {/* Large Format */}
          <div className="md:col-span-12 min-h-[300px] bg-black rounded-3xl overflow-hidden relative group flex flex-col md:flex-row items-center p-12 md:p-0 transition-all hover:shadow-2xl">
            <div className="md:p-16 flex-1 z-10 text-center md:text-left">
              <h3 className="font-outfit text-4xl md:text-5xl font-bold text-white mb-6">Format Besar</h3>
              <p className="font-inter text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                Berikan kesan mendalam. Dari reproduksi seni rupa hingga grafis pameran yang megah, mesin format besar kami menghadirkan detail yang memukau.
              </p>
            </div>
            <div className="md:w-[400px] h-64 md:h-full relative overflow-hidden flex-shrink-0">
              <img
                alt="Detail cetak format besar"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8cbjrjfjl86458139YXf2Av5oKT4Ssf8lVzC3fH3nhzRqgKwvIGACW-qjUWIIc0OdeJSIA2ZTPysFFc6AdOKwYje9Yc43ULzDrp1imqCX9U7ptz7FOPIt517hzaODD2Aoj99DM1QqMR_5mzE9YADztBKACzfCCtgmmscw5OehUcqV3QuUYuBrzqLwuo2GIqhx9-rXIhd36DfB64qlTjZmOkmLsnUOEK6YlVuCezriw2HK1q4-42P2NL36YnMZ557ebcyFY3Q7SQU"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-transparent hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
