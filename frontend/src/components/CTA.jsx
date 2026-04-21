const CTA = () => {
  return (
    <section className="py-40 bg-black relative overflow-hidden">
      {/* Structural Grid Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:6rem_6rem]"></div>
        <div className="absolute inset-0 bg-radial-gradient from-secondary/10 to-transparent"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-fade-in">
        <h2 className="font-outfit text-5xl md:text-8xl font-bold text-white mb-10 tracking-tighter leading-tight">
          Siap Mewujudkan Ide Anda?
        </h2>
        <p className="font-inter text-zinc-400 text-xl md:text-2xl mb-16 font-light leading-relaxed">
          Hidupkan visi Anda dengan kualitas presisi yang luar biasa.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            className="bg-secondary text-white px-12 py-5 rounded-2xl font-bold text-xl inline-flex items-center justify-center hover:bg-secondary/90 transition-all shadow-2xl hover:scale-105 active:scale-95"
            href="#"
          >
            Mulai Pesan Sekarang
            <span className="material-symbols-outlined ml-3">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
