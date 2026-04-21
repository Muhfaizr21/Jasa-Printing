const DisciplineCard = ({ image, icon, title, description, items, price }) => (
  <div className="bg-white rounded-3xl p-8 hover:bg-slate-50 transition-all duration-500 group flex flex-col h-full shadow-sm hover:shadow-2xl relative overflow-hidden border border-black/5">
    <div className="h-56 -mx-8 -mt-8 mb-8 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
    </div>
    <div className="flex-grow space-y-4 relative z-10">
      <span className="material-symbols-outlined text-secondary text-4xl mb-2 block">
        {icon}
      </span>
      <h3 className="font-outfit text-3xl font-bold text-black">{title}</h3>
      <p className="font-inter text-slate-500 text-sm leading-relaxed">
        {description}
      </p>
      <ul className="font-inter text-sm text-slate-600 space-y-3 mt-6 pb-12">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-secondary">
              check
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="mt-auto pt-6 bg-white absolute bottom-8 left-8 right-8 border-t border-black/5">
      <p className="font-outfit text-xl font-bold text-black">
        Mulai dari <span className="text-secondary">{price}</span>
      </p>
    </div>
  </div>
);

const Disciplines = () => {
  return (
    <section className="py-32 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 animate-fade-in">
          <h2 className="font-outfit text-5xl md:text-6xl font-bold tracking-tighter text-black mb-6">
            Bidang Keahlian Kami
          </h2>
          <p className="font-inter text-slate-500 text-lg max-w-2xl leading-relaxed">
            Jelajahi pilihan layanan cetak terkurasi kami, dirancang khusus bagi profesional yang mengutamakan kesempurnaan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <DisciplineCard
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDi9KtoKK8GRMJgLy6MK6-ATOd9mtlwPSfWmenWhNWOYDlByWjfotNKd-aO0EJRJYpNmbHr3Fpnrpv5wLXAcBdrhV44OWQli06gnsRuMPNZ4R9gPpDasoJAjjXppfy-52f_e8yS3tG_0339WDWu1dKDvDUqExYBKmWDwuwE58N6f1nSKToPbr3HYha0kV_G6-rsLh5CETZKsj2ZAMH-ItmqeQJBbH66WMwryNfgz61dX5-pctWCf7poQWzEKQvQgRoGFX1Vu3-DlR8"
            icon="business_center"
            title="Korporat"
            description="Tunjukkan otoritas bisnis Anda dengan kartu nama premium, kop surat formal, dan brosur perusahaan yang eksklusif."
            items={["Kartu Nama Eksklusif", "Kop Surat & Amplop", "Brosur Perusahaan"]}
            price="Rp 2,5jt"
          />
          <DisciplineCard
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCGBBFmwDPpciziQeyS9WFI6GmtepvjN5pmYC0RBEKEjeD5Gck0SV8mlKcEzPdJIJBXo0cCRpQKPzkyWQVyPp0ghefFD8VdggjEuqV_EjkC4zvshDlAI3x31HdCu8d5fWntfVrZJ_VnWjcmc7MKLCxDPXF42_EahqxiQ6iQvhYroJtnSfdI6ToWBn_uOclELdCiO-D4nr-poDiXt4Jv-38NyC4KHsauEd5VHiOPEFl7qBDzlrpGrdgDSQtAshQ6geRZMGNEi6YVcx8"
            icon="campaign"
            title="Pemasaran"
            description="Curi perhatian dengan poster format besar, spanduk tahan lama, dan kampanye pemasaran langsung yang memikat."
            items={["Poster Format Besar", "Spanduk Acara", "Mailer Pemasaran"]}
            price="Rp 1,5jt"
          />
          <DisciplineCard
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuALZRj3s0_GIY_1p46SvjQJlsygnmlM2h29qVb-3QyNh3C34FCsWCQ5HmlQXBUO_WBaRnKmKyqGSCDdq8v_c8TAZ1BFtWtXUYmT2_zErXesxeNPgYbsr28mKRTCwvNf8sGSO4SQAbdLlkgvwg_jFybsQtdLbV6OphMh7oin_uoHameyza5lq43wAf2tsj6nhm_4jSum4fij9HAWhHK2W_emsZXq8r9A7a0sPc-GVQ5t-1SVQlDQX23Kr7qQ2hsshdr9sc5ATiSeBtU"
            icon="auto_awesome"
            title="Kustom"
            description="Untuk momen yang tak terlupakan. Undangan pernikahan besutan tangan, kemasan artistik, dan cetak foil mewah."
            items={["Undangan Pernikahan", "Kemasan Mewah", "Cetak Foil & Emboss"]}
            price="Rp 5jt"
          />
        </div>
      </div>
    </section>
  );
};

export default Disciplines;
