const services = [
  {
    title: "Marketplace rasmlar",
    text: "Uzum Market, Wildberries va Ozon uchun premium product images",
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "AI Design",
    text: "AI yordamida realistik va kreativ mahsulot sahnalari",
    icon: (
      <svg className="w-8 h-8 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Reklama bannerlar",
    text: "Instagram va online savdo uchun reklama dizaynlar",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    )
  }
]

function Services() {
  return (
    <section className="px-6 py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-heading">
          Men taklif etadigan <span className="text-gradient">Xizmatlar</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Zamonaviy texnologiyalar orqali sizning biznesingiz uchun eng yaxshi vizual yechimlar.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {services.map((item, index) => (
          <div 
            key={index}
            className="group glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(139,92,246,0.1)] cursor-default relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 shadow-inner">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3 font-heading text-white group-hover:text-purple-300 transition-colors">
              {item.title}
            </h3>

            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services;
