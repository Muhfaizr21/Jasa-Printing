const Footer = () => {
  return (
    <footer className="bg-[#f6f3f2] dark:bg-slate-950 w-full border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="md:col-span-1 space-y-6">
          <div className="font-outfit italic text-2xl text-black dark:text-white">
            The Master Printmaker
          </div>
          <p className="font-inter text-sm leading-relaxed text-slate-500 dark:text-slate-400 max-w-xs">
            Karya Seni dalam Cetakan. Menghubungkan presisi digital dengan dunia cetak mewah yang taktil dan eksklusif.
          </p>
        </div>
        
        <div className="space-y-6">
          <h4 className="font-outfit font-bold text-lg text-black dark:text-white">Layanan</h4>
          <ul className="space-y-3">
            <li><a className="text-slate-500 dark:text-slate-400 hover:text-secondary transition-all" href="#">Korporat</a></li>
            <li><a className="text-slate-500 dark:text-slate-400 hover:text-secondary transition-all" href="#">Pemasaran</a></li>
            <li><a className="text-slate-500 dark:text-slate-400 hover:text-secondary transition-all" href="#">Kustom</a></li>
            <li><a className="text-slate-500 dark:text-slate-400 hover:text-secondary transition-all" href="#">Cetak Spesialis</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-outfit font-bold text-lg text-black dark:text-white">Legal</h4>
          <ul className="space-y-3">
            <li><a className="text-slate-500 dark:text-slate-400 hover:text-secondary transition-all" href="#">Ketentuan Layanan</a></li>
            <li><a className="text-slate-500 dark:text-slate-400 hover:text-secondary transition-all" href="#">Kebijakan Privasi</a></li>
            <li><a className="text-slate-500 dark:text-slate-400 hover:text-secondary transition-all" href="#">Aksesibilitas</a></li>
            <li><a className="text-slate-500 dark:text-slate-400 hover:text-secondary transition-all" href="#">Pengiriman & Retur</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-outfit font-bold text-lg text-black dark:text-white">Kontak</h4>
          <ul className="space-y-3 text-slate-500 dark:text-slate-400 text-sm">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">mail</span>
              hello@masterprintmaker.com
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">call</span>
              +62 (21) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">location_on</span>
              Artisan Way No. 123, Jakarta
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs uppercase tracking-widest">
        <p>© 2024 The Master Printmaker. Karya Seni dalam Cetakan.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-secondary transition-all">Instagram</a>
          <a href="#" className="hover:text-secondary transition-all">LinkedIn</a>
          <a href="#" className="hover:text-secondary transition-all">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
