import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-[#030014] overflow-hidden selection:bg-purple-500/30 font-sans">
      {/* Background ambient light effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[40%] rounded-full bg-pink-600/20 blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
