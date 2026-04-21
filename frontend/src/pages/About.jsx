const ValueCard = ({ icon, title, description, dark }) => (
  <div className={`p-12 flex flex-col justify-between min-h-[400px] rounded-3xl transition-all duration-500 hover:-translate-y-2 ${dark ? 'bg-black text-white' : 'bg-slate-50 text-black border border-black/5 hover:bg-white hover:shadow-2xl'}`}>
    <span className="material-symbols-outlined text-5xl text-secondary">{icon}</span>
    <div>
      <h3 className="font-outfit text-3xl font-bold mb-4">{title}</h3>
      <p className={`font-inter leading-relaxed ${dark ? 'text-zinc-400' : 'text-slate-500'}`}>
        {description}
      </p>
    </div>
  </div>
);

const ArtisanCard = ({ name, role, image, mt }) => (
  <div className={`space-y-6 animate-fade-in ${mt ? 'md:mt-16' : ''}`}>
    <div className="aspect-[3/4] bg-slate-100 rounded-3xl overflow-hidden group">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
      />
    </div>
    <div>
      <h4 className="font-outfit text-2xl font-bold text-black">{name}</h4>
      <p className="font-inter text-xs uppercase tracking-[0.2em] text-secondary font-bold">
        {role}
      </p>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-32">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover grayscale opacity-20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWcbalPaj4yzCjfXf7gcYSuPnknl0gWHbWR9bxqx8_Jc4buFN80XzT3d-gSfF8KqDCZRq9xt2eF5FCj-pwioL2RtjkcPFCHfm-AzT3ZqZXcO5lCH03_ct1ZSaTfuLRUBVnSGfgPs6Gn8MOCEChgmF9OF52fJhN8G_gZUSCTANYEPtljCWDutT39qSSO6vgLGkXBV_9pB5NCMc1zEtef7_s0OOk5OOxlCcwAH47lRAm_E9092ek5F2oR8ik8vf6sBIPOuushqaE9qg" 
            alt="Atelier Background"
          />
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/90 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <span className="font-inter uppercase tracking-[0.4em] text-secondary text-sm font-bold mb-8 block animate-fade-in">
              BERDIRI SEJAK 1894
            </span>
            <h1 className="font-outfit text-6xl md:text-9xl font-bold text-black tracking-tighter leading-[0.85] mb-10 animate-fade-in">
              Warisan dalam <br />
              <span className="italic text-secondary">Setiap Impresi.</span>
            </h1>
            <p className="font-inter text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed animate-fade-in delay-1">
              Di mana bobot tradisi bertemu dengan presisi digital masa depan. Kami adalah arsitek keabadian fisik di era yang serba cepat ini.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 bg-[#f6f3f2]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-12 xl:col-span-5 space-y-10 animate-fade-in">
            <h2 className="font-outfit text-5xl md:text-7xl font-bold text-black leading-none">
              Alkimia Tinta
            </h2>
            <div className="space-y-8 font-inter text-lg md:text-xl text-slate-500 leading-relaxed">
              <p>
                Selama lebih dari satu abad, keluarga kami telah mempraktikkan seni impresi yang sakral. Apa yang dimulai di sebuah bengkel kecil di London telah berkembang menjadi standar global untuk pencetakan digital dan tradisional kelas atas.
              </p>
              <p>
                Kami tidak meninggalkan keahlian tangan demi teknologi; kami menggunakan teknologi untuk memperkuatnya. Setiap berkas digital diperlakukan dengan penghormatan yang sama seperti rangkaian huruf timah, memastikan jiwa pengrajin tetap hadir dalam setiap serat kertas.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-12 xl:col-start-7 xl:col-span-6 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl group">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS-sUbjlgY2sVy9yz64O8aSbF1XxgQETDsSDWJNydBYXEzua9jOklvwQsqvAUIiGqrFk3H9cv97wQSmXTABsUsVLiqVHxsecq62vU2pG8Yj_wkM35HeYTS8OHzbbKj5pNOKofsZ0zYbWh7OtDeAQQ5KMDgygjxGdUqUMWm-6dlyeopP9oN9GEzpPpWWJjACgEbrxtTIbkvRdA_OVZPC6jsiTO-qIgMeoxwI3WC1nJT5b-tImVa-jn-bFvI9mgGpVvlgBW7_iesGhM" 
                alt="Crafting"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-black text-white p-12 rounded-3xl max-w-sm hidden md:block animate-fade-in shadow-2xl">
              <p className="font-outfit italic text-3xl font-light">
                "Presisi adalah satu-satunya bahasa yang kami kuasai dengan fasih."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values: Bento Grid */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20 text-center">
            <h2 className="font-outfit text-5xl md:text-8xl font-black text-black tracking-tighter">
              Filosofi Utama
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon="architecture"
              title="Presisi Tanpa Kompromi"
              description="Kami mengukur dalam mikron. Peralatan kami dikalibrasi setiap hari untuk memastikan reproduksi warna tetap setia pada niat asli sang seniman."
            />
            <ValueCard 
              icon="eco"
              title="Tanggung Jawab Etis"
              description="Kemewahan tidak seharusnya mengorbankan bumi. Kami menggunakan kertas bersertifikat FSC, tinta berbasis sayuran, dan sistem filtrasi air loop tertutup."
              dark
            />
            <ValueCard 
              icon="history_edu"
              title="Warisan Kualitas"
              description="Setiap proyek yang keluar dari atelier kami adalah perwakilan nama kami. Kami tidak mengirimkan sesuatu yang 'cukup baik'—kami hanya mengirimkan kesempurnaan."
            />
          </div>
        </div>
      </section>

      {/* Meet the Artisans */}
      <section className="py-40 bg-[#f6f3f2]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-10">
            <h2 className="font-outfit text-5xl md:text-8xl font-black text-black tracking-tighter leading-none max-w-2xl">
              Pikiran di Balik Mesin
            </h2>
            <p className="font-inter text-xl text-slate-500 max-w-sm leading-relaxed">
              Kolektif master printer, ahli warna, dan teknisi struktural yang berdedikasi pada visi Anda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <ArtisanCard 
              name="Julian Vane"
              role="CHIEF MASTER PRINTER"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuA7MiZM3o80s-93JzI-SgRBUObX-Yxt-d-rfpd6sAkBSo7unRjV3tsg3TFf1Ih6bGlH_xpWI2u77CJ7CAq4scwJvf3USd2y1KZA4fQK3aozvE95AlhGOddCsJiTVLHxivBqqR6_bJFmKzE4_v2bDNc9vg6oImrXrF-4rZLIOkruZBaTLTbIcMkfkoRHgAzxCdIHVoFnZTcxwrLhvoaeX1TaBLjuBsrSMdlRL4zlqv0F2U6YLYt4uxvVywtyO4eGB9oCLJ2zYlPFSeI"
            />
            <ArtisanCard 
              name="Elena Rossi"
              role="HEAD OF COLOR SCIENCE"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBogPU0jgBfXEifQMnRmH542NCWALIyuTFs480i8zjaFlgl2x8Qb600tm3X-kyq4B-JUFr04GzM62IXrQzHywh_ChMfUu7bilU7J0kIqAxQrHBYBt_HwrKoXP8xv9kpBQ3GgDRotnno1IXc7E-mlb2jDGmpcEqXsp6z22i56cgpGP2q8oceIxqg2F9VxW4Ltze6JUXLaxiSaLHgGUU0w5Sy5j93UOZECPtT7VF5cHLTHBS9fzSwlAeputM_BQ4uy6Fbvpmfx0CGySM"
              mt
            />
            <ArtisanCard 
              name="Marcus Thorne"
              role="STRUCTURAL ENGINEER"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuB6sGPPSXhQMUj1B73jV936zanmzP7_xjLglDQVjvqGS--J2M2j3LRHxlJyJ-XjdnPoVbFaMGpXy1oOxe1YRs3exdUYvcdGXPCIKj1-1hlm-8D7TUmOIQi0CfVm404-kJSn4PQFuFFacjvMhhPIuhnW-iJ1leg-T-tMIjhGpkDS2oNZTDYP-4v95oChyoBtZMA7Ns83WK8EZ3ojruoXbPKTRO3bLsWb_IL3EyBt3_YQMaUJO3h2fCoK2hX_W_4RpL-wlAMxhZX9icw"
            />
            <ArtisanCard 
              name="Sarah Jenkins"
              role="ATELIER DIRECTOR"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuAn_Tq9Z3rmtY6suq4AeH_x42oTXXJXVCV-DYoO3ysNP-M8mCfiCpb94qvi0RZgZ3ztlShUc3pi8Qemdyh-vwi_lygoQzpjtFDBddEKNIhlkUcuHUsF6H7alrTn4JDdsXAD4LEcqI8pcYn4zzVt7H68SrGNvDKzxS9eDOohOTpGIuuGBjZoHIC6h7OBrmeS4dpDzE0uJTwpYaqc23O2-BkUHbo2HKiB6R5ZeIr9ACbcEM8f6IR6lmPLQmKR9er9MxRtVb9MoN-nLXs"
              mt
            />
          </div>
        </div>
      </section>

      {/* The Atelier Gallery */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-baseline gap-4">
            <h2 className="font-outfit text-5xl md:text-7xl font-black text-black tracking-tighter">Di Dalam Atelier</h2>
            <span className="font-inter text-xs tracking-[0.5em] text-slate-400 font-bold">JAKARTA — NEW YORK — TOKYO</span>
          </div>
          <div className="grid grid-cols-12 gap-6 h-auto md:h-[900px]">
            <div className="col-span-12 md:col-span-8 rounded-3xl overflow-hidden shadow-sm">
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXL4LPVqXzN25usVun6yj7Ad0BApH7iiDo8P2R1HHyDUGLUcLdZKz9UqspeF3aJxNb-wtlqMi3XVWeEmppLSNO7toGymZ7trTnUIKRHaYNIkvSob1P4D7_4D87vlF-XBcKV3UA0V2h748GfDwascgA9SMsAhb5qcoiLxzhzz-fzXHWnMKRXtwamNUnKyb6PbXRqYSybQhM2ctDKG9t9ysC8FovfL9T_NHsRi2OHdkzwopczvyFHL3RNsmfvMZXxqVK-HeR5pLIRT8" 
                alt="The Workshop"
              />
            </div>
            <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
              <div className="h-1/2 rounded-3xl overflow-hidden shadow-sm">
                <img 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCHzp2nca4aMYkfLT_7ijpc1kPgwo0I1Q0faO35G1ByY2eDn4ztsMKwT9WANrfrewmcSQHnRDIMF1xO6cOLqaVQEUJWfD0cDGdk2WgvUnty7sF0tUhMxrXD2RYqBA1m5gzp8hayV6pO5qV3zPHYhE7XV3rGT0GY7R6JQPc9x5UYB9KEoz_qA-uGk0bB1HAas6Iyf185jdadzcIkWDDUBJFpxZKk5tnRPainJiCdqUennj-t3vwjjAd_4c5xNssxIjTVbMGV1S33D8" 
                  alt="Textures"
                />
              </div>
              <div className="h-1/2 rounded-3xl overflow-hidden shadow-sm">
                <img 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCZ7FINJg0G3LaYS8ZNXtHf5TAj1xObRiyB2EB2tnnN7TFnkEoi_FYynLo0wrL6GPrmvKVdYrBOi2yxK-CZJM4HeRT34bwpV332OuJucsquwwgIpxn0L7bE-qj7V7pBzSe4rtemk9oScBrdb8aA4QHPCKUmSrsH9MTh_rGcRhsbmFafH8tuADKmmoJO4NU2KjTfiOiGZl-A9DfkQTHf5hwfPTni9A6BzacMIcPVB8nE3SuD7AF_QQsH4KB-xChypNN3_V0y5k1bQU" 
                  alt="Detail"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <h2 className="font-outfit text-6xl md:text-9xl font-bold text-white mb-16 tracking-tighter leading-none animate-fade-in">
            Mulai Mahakarya <br />
            <span className="text-secondary italic">Anda Berikutnya.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8 animate-fade-in delay-1">
            <button className="bg-secondary text-white px-16 py-6 rounded-2xl text-xl font-bold hover:scale-105 transition-all shadow-2xl active:scale-95">
              Hubungi Kami Sekarang
            </button>
            <button className="border-2 border-white/20 text-white px-16 py-6 rounded-2xl text-xl font-bold hover:bg-white/10 transition-all active:scale-95">
              Minta Spesifikasi Teknis
            </button>
          </div>
        </div>
        
        {/* Background grid decor */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
