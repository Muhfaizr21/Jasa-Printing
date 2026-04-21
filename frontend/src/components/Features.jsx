const FeatureCard = ({ icon, title, description, delay }) => (
  <div className={`bg-[#f6f3f2] hover:bg-white p-10 rounded-2xl transition-all duration-500 border border-transparent hover:border-black/5 group animate-fade-in ${delay} hover:shadow-xl hover:-translate-y-2`}>
    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary/10 transition-colors shadow-sm">
      <span className="material-symbols-outlined text-3xl text-slate-600 group-hover:text-secondary">
        {icon}
      </span>
    </div>
    <h3 className="font-outfit text-2xl font-bold text-black mb-4">{title}</h3>
    <p className="font-inter text-slate-500 leading-relaxed text-sm md:text-base">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 items-start">
          <div className="lg:col-span-1 lg:sticky lg:top-32">
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-black mb-8 tracking-tighter leading-tight">
              Standar Sang
              <br /> Maestro
            </h2>
            <p className="text-slate-500 font-inter text-lg leading-relaxed">
              Kami tidak sekadar mencetak; kami berkarya. Setiap hasil adalah bukti kualitas, kecepatan, dan dedikasi penuh.
            </p>
          </div>
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="speed"
              title="Kecepatan Tanpa Banding"
              description="Alur kerja digital kami yang optimal memastikan proyek Anda selesai dengan cepat tanpa mengurangi kualitas sedikit pun."
            />
            <FeatureCard
              icon="verified"
              title="Kualitas Tak Tersaingi"
              description="Kami hanya menggunakan bahan kertas premium dan tinta mutakhir untuk menghasilkan karya yang terlihat dan terasa istimewa."
              delay="delay-1"
            />
            <FeatureCard
              icon="support_agent"
              title="Dukungan Ahli"
              description="Dari persiapan berkas hingga pengiriman akhir, tim ahli cetak kami siap memandu Anda di setiap langkah."
              delay="delay-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
