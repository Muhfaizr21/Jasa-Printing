const Hero = () => {
  return (
    <section className="relative min-h-[700px] md:min-h-[820px] flex items-center bg-slate-50 overflow-hidden">
      {/* Background with Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Printing Studio"
          className="w-full h-full object-cover opacity-15 mix-blend-multiply"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD618tnfjqI2GoGppH3vLrwyU2gpKu_AUD_kip7JGUwYYVYxsur_ZoDHU-V9YfATs8Uns0ZD4EG3SfsyvH5tsjqI_hIyXqRQsWIR-akD6NQh8XEUhrcff8sc1Vdcu_iV9RlVBlH5jO3Kyuq-kSIE12deXxPaK2wuna9jGZr-bvXea3BEE8Qkic1rdN4TMOIabfvso5uKeVsoWiqI-UJ7HfQe4xAtLn1dHgSWdC4q6nw-vGM3sgfNw_V1B7S9I8ihLSYLR5tIYfXnB0"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black to-zinc-900/60 opacity-90 mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full py-24">
        <div className="max-w-3xl space-y-10 animate-fade-in">
          <h1 className="font-outfit text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[1.1]">
            Ciptakan Visi Anda <br />
            dengan Presisi Sempurna
          </h1>
          
          <p className="font-inter text-lg md:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed">
            Atelier Digital yang memadukan ketajaman teknologi dengan kemewahan 
            cetak kelas dunia. Kualitas eksklusif, hasil super cepat.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
            <a
              className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center hover:bg-secondary/90 transition-all shadow-xl hover:-translate-y-1 active:scale-95"
              href="#"
            >
              Mulai Pesan Sekarang
              <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
            </a>
            <a
              className="text-white font-inter font-medium px-8 py-4 inline-flex items-center justify-center hover:text-accent transition-all group"
              href="#"
            >
              Lihat Portofolio
              <div className="ml-2 w-0 group-hover:w-4 h-0.5 bg-accent transition-all duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
