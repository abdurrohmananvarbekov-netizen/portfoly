const works = [
  {
    name: "Parfyumeriyalar",
    category: "Product Design",
    imgBefore: "/image3.1.png",
    imgAfter: "/image3.2.png",
  },
  {
    name: "Kiyimlar",
    category: "Product Design",
    imgBefore: "/image4.1.png",
    imgAfter: "/image4.2.png",
  },
  {
    name: "Aksessuarlar",
    category: "Product Design",
    imgBefore: "/image1.1.png",
    imgAfter: "/image1.2.png",
  },
  {
    name: "Bolalar oyinchoqlari",
    category: "Product Design",
    imgBefore: "/image2.1.png",
    imgAfter: "/image2.2.png",
  }
]

function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"></div>

      <div className="flex flex-col md:flex-row justify-between items-end mb-16 max-w-6xl mx-auto gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Mening <span className="text-gradient">Portfolio</span> ishim
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl">
            Oddiy suratlardan tortib, sun'iy intellekt orqali qayta ishlangan yuqori sifatli vizuallargacha.
          </p>
        </div>
        <a
          href="https://t.me/Abdurrokhman_A"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-colors font-medium inline-block cursor-pointer"
        >
          Barchasini ko'rish
        </a>
      </div>

      <div className="flex flex-col gap-16 max-w-6xl mx-auto">
        {works.map((work, index) => (
          <div
            key={index}
            className="glass-panel rounded-[2rem] p-5 sm:p-6 hover:shadow-[0_0_40px_rgba(139,92,246,0.1)] transition-shadow duration-500"
          >
            {/* Yonma-yon rasmlar */}
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-4 sm:gap-6">

              {/* BEFORE — oq fon */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-200" style={{ aspectRatio: '210/297' }}>
                <img
                  src={work.imgBefore}
                  alt={work.name + " oddiy holat"}
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full text-white font-medium text-sm shadow-lg">
                  Oddiy holat
                </div>
              </div>

              {/* AFTER — premium */}
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-[0_0_30px_rgba(139,92,246,0.15)] group bg-black" style={{ aspectRatio: '210/297' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
                <img
                  src={work.imgAfter}
                  alt={work.name + " premium holat"}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-purple-500/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-purple-400/50 text-white font-medium text-sm z-20 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                  Premium holat ✨
                </div>
              </div>

            </div>

            {/* Mahsulot nomi */}
            <div className="mt-5 px-1 flex items-center gap-3">
              <div>
                <span className="text-purple-400 font-medium text-xs uppercase tracking-widest">
                  {work.category}
                </span>
                <h3 className="text-2xl font-bold text-white font-heading mt-0.5">
                  {work.name}
                </h3>
              </div>
              <div className="ml-auto flex items-center gap-2 text-gray-400 text-sm">
                <span>Oddiy</span>
                <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="text-purple-300">Premium AI</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio;
