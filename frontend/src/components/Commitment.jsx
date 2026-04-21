const Commitment = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 animate-fade-in">
            <h2 className="font-outfit text-5xl md:text-6xl font-black tracking-tighter leading-tight text-black">
              Presisi di Setiap <br /> <span className="text-secondary italic">Tetes Tinta.</span>
            </h2>
            <p className="font-inter text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
              Dari ketegasan kartu nama korporat hingga kehangatan undangan pernikahan eksklusif, 
              kami memadukan akurasi digital dengan sentuhan seni berkualitas tinggi.
            </p>
            <div className="pt-4">
               <div className="h-0.5 w-24 bg-secondary"></div>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-[450px] w-full rounded-3xl overflow-hidden bg-slate-100 shadow-2xl">
            <img 
              alt="Detail mesin cetak" 
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADgnfs-XJtfoCE0_9YgvUUpFKBSwhpuXNFeW_aDnI2GZ7fcfqnRZ56ATfQJfcenrnBfDejP9Rpv-IeedLOngzQgGh43jwi21Q5tGbjFt2u5r1lDYBA4USQlyfwFXfopXmBdmuhefNGeogUxOFmpA-NJxwJVViCpDHvF-lZsaYw2XRv6FJVHLBLsaIp0NZAtTT7HE18H5pkTqDzbfLQuf7Oyh_-18tXK0JmnMBXqSJECKnVsS6cf86d11qaUi7eT3bXIgwNHoEKGrk" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
