function Contact() {
  return (
    <section id="contact" className="px-6 py-32 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative glass-panel rounded-[3rem] p-10 md:p-16 text-center overflow-hidden">
          {/* Inner glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Mahsulotingiz uchun <br className="hidden md:block"/>
              <span className="text-gradient">premium AI dizayn</span> kerakmi?
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Sotuvlaringizni oshiruvchi, raqobatchilardan ajralib turadigan professional vizuallarga buyurtma bering.
            </p>
            
            <a
              href="https://t.me/Abdurrokhman_A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] cursor-pointer"
            >
              <svg className="w-6 h-6 text-[#0088cc]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.896-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram orqali yozish
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
