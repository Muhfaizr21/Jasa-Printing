const ProcessStep = ({ number, title, description, tags, image, reverse, stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
    <div className={`md:col-span-5 ${reverse ? 'md:order-2' : 'order-2 md:order-1'}`}>
      <div className="space-y-6 animate-fade-in">
        <span className="text-secondary font-outfit italic text-3xl">{number}.</span>
        <h2 className="text-4xl md:text-6xl font-outfit font-bold text-black">{title}</h2>
        <p className="font-inter text-slate-500 leading-relaxed text-lg lg:text-xl">
          {description}
        </p>
        
        {tags && (
          <div className="flex flex-wrap gap-3 pt-6">
            {tags.map(tag => (
              <span key={tag} className="bg-slate-100 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-slate-500 border border-black/5">
                {tag}
              </span>
            ))}
          </div>
        )}

        {stats && (
          <div className="pt-10 flex flex-col gap-6">
            {stats.map(stat => (
              <div key={stat.label} className="flex justify-between items-end border-b border-black/5 pb-4">
                <span className="font-inter text-slate-400 uppercase text-xs tracking-widest">{stat.label}</span>
                <span className="font-outfit text-2xl font-bold text-black">{stat.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    
    <div className={`md:col-span-7 ${reverse ? 'md:order-1' : 'order-1 md:order-2'} ${reverse ? '' : 'md:offset-1'}`}>
      <div className="aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl relative group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent group-hover:opacity-0 transition-opacity"></div>
      </div>
    </div>
  </div>
);

const Process = () => {
  return (
    <div className="bg-background pt-24">
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-24 md:py-40 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8 overflow-hidden">
            <h1 className="text-6xl md:text-9xl font-outfit font-bold tracking-tighter text-black leading-[0.9] animate-fade-in">
              Karya Kami,<br />
              <span className="text-secondary italic">Visi Anda.</span>
            </h1>
          </div>
          <div className="md:col-span-4 pb-4 animate-fade-in delay-1">
            <p className="text-xl text-slate-500 font-inter leading-relaxed max-w-md">
              Mengubah ide konsep tinggi menjadi realitas taktil melalui perpaduan teliti antara teknik warisan dan presisi digital.
            </p>
          </div>
        </div>
      </section>

      {/* Main Process Content */}
      <section className="bg-[#f6f3f2] py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-48">
          <ProcessStep
            number="01"
            title="Konsultasi"
            description="Setiap mahakarya dimulai dengan percakapan. Kami mendalami tujuan kreatif Anda, mengeksplorasi pilihan bahan katun terbaik, tinta metalik, dan sentuhan akhir kustom untuk mendefinisikan jiwa proyek Anda."
            tags={["Berat Kertas", "Kimia Tinta", "Keselarasan Visi"]}
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAR9b13k5Lo8ePWtrZ0tbS9jOZhUB0jIb8mwiNBDbCGahBYKubhJHNGE1Fvf8rpFc_tSGLgQxTYA06EZPe_kxl02lUpnB0jKNn03MWJgAquuyIpi-sRSP73m7VTc96TFcIYr7EDYs91NCIlBbmnj2JSfeplUMXAAxQzXLhV7Xta4d15NcM9JgHaJZmcGYpcRugY0WykH3YvMyhyxIaEJLEvH7ZJ9X-g4ty9FYo3HNUGTfEgDMOeLVP6N6-IW58lV3TeDqIZMYgL4ZE"
          />

          <ProcessStep
            number="02"
            title="Pra-cetak"
            description="Presisi adalah keyakinan kami. Ahli kami dengan teliti menyiapkan berkas Anda, menyesuaikan trapping, profil warna, dan penyelarasan pelat untuk memastikan niat digital diterjemahkan dengan sempurna ke bentuk fisik."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuB4oOXluLB89l2XppFNRHlMhsDzBkPvYecjjwheIQundrKAjBrZ8UDt6edPxcvBJWT10ERqUiTh9xud_l62LozQvfhtAraJsHlL_RPwotIAnk86D4LxKwhsYeySUHGa6D8ihCM9z9LmlIHrPYH3pWRzQPzN7keMFaJOHiCVwCtT6UM0Td8u0xAbVj3y7Z72ZgEDReL9hLMWXHPEeYCNe2gapfEYbjvFepLTIxBYBhIC90V-ZU80uf8o6uTckqQv0KuqSASaReRUJ00"
            reverse
          />

          <ProcessStep
            number="03"
            title="Impresi"
            description="Titik temu antara fisik dan etereal. Mesin cetak Heidelberg canggih kami membubuhkan tinta dengan konsistensi bedah, menciptakan kedalaman dan 'tekstur' yang mendefinisikan cetakan maestro sejati."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAcYUr212y-fQp8GyrbP3SzThcfRyu0YVEAXtmTeC4Pl4aDyx-v7xYR3upGQv08CwKi7RYfFucQuS7LgwMF-X7f_1SJGTAo3nWaLMmh_CTK6K5Q7zREtg5QEd6ip9FbDHQS4TJDZbrNpDTw6XqIdp1rCKKNhe8OwPokqmgEKmhSsznwwWdGIOnOWVkCtsK90AFgAJooR8Rz_qetblnRiYuiNF_7jMtMalb-yuv141gW7c24pMyONwS77db94CC8uLJOnqn4H2gOLo8"
            stats={[
              { label: "PENGATURAN TEKANAN", value: "1200 PSI" },
              { label: "DENSITAS TINTA", value: "99.8%" }
            ]}
          />

          <ProcessStep
            number="04"
            title="Penyempurnaan"
            description="Inspeksi tangan adalah gerbang terakhir. Setiap lembar dipotong dengan toleransi mikron, dibungkus tangan dengan tisu bebas asam, dan dikirim dalam kemasan arsip arang khas kami."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBQI2mjr-ZFgxKUHhavCfiGla8kJT9sGcCcxbSlr0xNgD3I38cEkQ1esZdfN_2CdIyjAqbxNvma9celktz7QFU43gnp2IeGxyy3igOy_gXjOLlPx_pmB-CWXD86vEM4WEPEGvUfNEpk0uXbJcMYhKf4EiovMvHJi63PONFm-nSDhbS7291MOkUKdNVoJCquNloTHqYe87pgHoT3c2wCaTK2JsyOU21vwoziFcOkE6APfkkBu8n1VDdJbBK0TAN3gX7dX9TFD0PqUkk"
            reverse
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white text-center px-6">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          <h3 className="text-5xl md:text-8xl font-outfit font-bold tracking-tighter text-black leading-none">
            Siap untuk memulai <br /> kesan Anda?
          </h3>
          <p className="text-slate-500 font-inter text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Bekerjasamalah dengan kami untuk menciptakan sesuatu yang abadi. Setiap proyek ditangani dengan penghormatan artisan dan keunggulan teknis.
          </p>
          <div className="pt-8">
            <a 
              className="inline-block bg-black text-white px-16 py-6 text-xl font-bold rounded-2xl hover:bg-zinc-800 transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
              href="#"
            >
              Mulai Projek Sekarang
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
