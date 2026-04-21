import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Fine Art Print',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Terima kasih! Pesan Anda telah kami terima.');
  };

  return (
    <div className="bg-background pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-8xl font-outfit font-bold tracking-tighter text-black mb-8 leading-none">
            Mari Ciptakan <br />
            <span className="text-secondary italic">Sesuatu yang Luar Biasa.</span>
          </h1>
          <p className="font-inter text-xl text-slate-500 max-w-2xl leading-relaxed">
            Apakah Anda memiliki berkas yang siap cetak atau butuh konsultasi mengenai jenis kertas dan sentuhan akhir, atelier kami siap menghidupkan visi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Form Section */}
          <div className="lg:col-span-7 bg-white p-8 md:p-16 rounded-[40px] border border-black/5 shadow-2xl animate-fade-in">
            <h2 className="text-3xl font-outfit font-bold text-black mb-10">Konsultasi Projek</h2>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400" htmlFor="name">Nama Lengkap</label>
                  <input
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-base text-black font-inter focus:ring-2 focus:ring-secondary transition-all outline-none"
                    id="name"
                    type="text"
                    placeholder="Contoh: Budi Santoso"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400" htmlFor="email">Alamat Email</label>
                  <input
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-base text-black font-inter focus:ring-2 focus:ring-secondary transition-all outline-none"
                    id="email"
                    type="email"
                    placeholder="budi@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400">Jenis Projek</label>
                <div className="flex flex-wrap gap-3">
                  {['Fine Art Print', 'Alat Tulis', 'Penjilidan Buku', 'Lainnya'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({...formData, projectType: type})}
                      className={`px-6 py-2.5 rounded-full font-inter text-sm font-bold transition-all border ${
                        formData.projectType === type 
                        ? "bg-black text-white shadow-lg border-black" 
                        : "bg-transparent text-slate-400 border-black/10 hover:border-black/30"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400" htmlFor="details">Detail Projek</label>
                <textarea
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-base text-black font-inter focus:ring-2 focus:ring-secondary transition-all outline-none resize-none"
                  id="details"
                  rows="4"
                  placeholder="Ceritakan tentang preferensi kertas, dimensi, dan jumlah..."
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                ></textarea>
              </div>

              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400">Unggah Berkas</label>
                <div className="border-2 border-dashed border-black/10 rounded-3xl p-10 flex flex-col items-center justify-center bg-slate-50 hover:bg-white hover:border-secondary transition-all cursor-pointer group">
                  <span className="material-symbols-outlined text-5xl text-slate-300 group-hover:text-secondary mb-3 transition-colors">cloud_upload</span>
                  <p className="text-sm font-inter text-slate-500 text-center">
                    Tarik dan lepas berkas di sini, atau <span className="text-secondary font-bold">pilih berkas</span>
                  </p>
                  <p className="text-[10px] font-inter text-slate-400 mt-2 uppercase tracking-[0.2em]">Mendukung PDF, TIFF, JPG (Maks 500MB)</p>
                </div>
              </div>

              <div className="pt-6">
                <button
                  className="w-full md:w-auto bg-black text-white px-12 py-5 rounded-2xl font-bold font-inter text-lg hover:bg-zinc-800 transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
                  type="submit"
                >
                  Kirim Pesanan
                  <span className="material-symbols-outlined text-[20px]">arrow_forward_ios</span>
                </button>
              </div>
            </form>
          </div>

          {/* Info Section */}
          <div className="lg:col-span-5 space-y-12 animate-fade-in delay-1">
            <div className="bg-[#f6f3f2] p-10 rounded-[40px] space-y-10">
              <h3 className="text-3xl font-outfit font-bold text-black">Studio Atelier</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <span className="material-symbols-outlined text-secondary text-2xl">location_on</span>
                  <div>
                    <p className="font-outfit text-xl font-bold text-black mb-2">The Master Printmaker Studio</p>
                    <p className="font-inter text-slate-500 leading-relaxed">
                      Artisan Way No. 123, Lantai 4<br />
                      Distrik Kreatif<br />
                      Jakarta Selatan, DKI Jakarta 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="material-symbols-outlined text-secondary text-2xl">call</span>
                  <p className="font-inter text-slate-500 font-bold">+62 (21) 123-4567</p>
                </div>
                <div className="flex items-center gap-6">
                  <span className="material-symbols-outlined text-secondary text-2xl">mail</span>
                  <a className="font-inter text-slate-500 hover:text-black transition-colors border-b border-black/10 pb-1" href="mailto:hello@masterprintmaker.com">
                    hello@masterprintmaker.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-[40px] overflow-hidden h-72 bg-slate-200 relative shadow-2xl group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmeGL7jYNqrRtcz3Y4Qp5MVlOBl1pjC5ySqLcucxzlnYEgJxSdKEIeERN3i0eYg4CohBrd-BhHXVrY_GbDNdvlApG50eMjvNZgPtqOHa4AGcAXeIaAck9PvzG-qfHzf2xXIEJwFViYhjCun274NsYg2KugVlqGrmm4jV1NDvVX3URWToA-qbhm8BHmljVhxYmrafmdj0pCZ8VP8gvwoMMeobzPNC2Lgx4JWVYeztyxXAAVexUye0KBoulhhLGID7V3RQG2UHXDbUs" 
                alt="Map"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              <button className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg">
                <span className="text-xs font-bold text-black uppercase tracking-widest">Lihat di Google Maps</span>
              </button>
            </div>

            <div className="pt-10 border-t border-black/5">
              <h4 className="font-outfit font-bold text-2xl text-black mb-6">Jam Operasional</h4>
              <ul className="space-y-4 text-slate-500 font-inter">
                <li className="flex justify-between items-center bg-slate-50 p-4 rounded-xl">
                  <span>Senin – Jumat</span> 
                  <span className="font-bold text-black">09:00 – 18:00</span>
                </li>
                <li className="flex justify-between items-center p-4 rounded-xl opacity-50">
                  <span>Sabtu – Minggu</span> 
                  <span className="italic">Hanya dengan Janji Temu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
