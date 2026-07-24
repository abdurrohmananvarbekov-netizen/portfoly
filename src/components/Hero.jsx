function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 relative pt-20 pb-10">
      <div className="text-center max-w-5xl mx-auto animate-fade-in-up">
        
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-panel mb-8 border-purple-500/30 text-sm font-medium text-purple-300 shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_25px_rgba(139,92,246,0.25)] transition-shadow cursor-default">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </span>
          Premium AI Design xizmati
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight leading-tight">
          AI Marketplace <br className="hidden md:block"/>
          <span className="text-gradient">
            Designer
          </span>
        </h1>

        <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Oddiy mahsulot rasmlarini sun'iy intellekt yordamida haridorlarni jalb qiluvchi 
          <span className="text-white font-medium"> premium marketplace vizuallariga</span> aylantiraman.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
          <a href="#portfolio" className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.3)] inline-flex justify-center items-center cursor-pointer">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10 flex items-center gap-2">
              Portfolio ko'rish
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>

          <a href="#contact" className="px-8 py-4 rounded-full font-semibold text-lg glass-panel hover:bg-white/10 transition-all hover:scale-105 active:scale-95 border border-gray-700 hover:border-gray-400 text-white shadow-[0_0_20px_rgba(0,0,0,0.3)] inline-flex justify-center items-center cursor-pointer">
            Bog'lanish
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero;
