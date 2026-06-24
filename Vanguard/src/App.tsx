import { useState, useEffect } from 'react';
import { ArrowUpRight, Award, Crown, X } from 'lucide-react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [times, setTimes] = useState({ nyc: '--:--', lon: '--:--', tok: '--:--' });

  // Navigation hover states for the sliding cylindrical glass pill
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pillStyle, setPillStyle] = useState({
    left: 0,
    width: 0,
    height: 0,
    top: 0,
    opacity: 0,
  });

  const navLinks = ['Projects', 'Studio', 'Offerings', 'Inquire'];

  // Update clock timezones every second
  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const options = (tz: string) => ({
        timeZone: tz,
        hour: '2-digit' as const,
        minute: '2-digit' as const,
        hour12: false,
      });
      setTimes({
        nyc: now.toLocaleTimeString('en-US', options('America/New_York')),
        lon: now.toLocaleTimeString('en-US', options('Europe/London')),
        tok: now.toLocaleTimeString('en-US', options('Asia/Tokyo')),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseEnterNav = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    const el = e.currentTarget;
    setPillStyle({
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight,
      top: el.offsetTop,
      opacity: 1,
    });
    setHoveredIndex(index);
  };

  const handleMouseLeaveNav = () => {
    setPillStyle((prev) => ({ ...prev, opacity: 0 }));
    setHoveredIndex(null);
  };

  return (
    <div className="relative w-screen h-screen min-h-screen overflow-hidden bg-black text-white font-inter select-none">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay Vignette for Readability */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/45 to-black/70 z-10" />

      {/* Main Content Layout */}
      <div className="relative z-20 flex flex-col h-full justify-between">
        
        {/* Navbar */}
        <header className="flex items-center justify-between w-full px-6 sm:px-10 lg:px-16 py-4 lg:py-5">
          {/* Logo */}
          <div className="font-podium text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white select-none hover:opacity-80 transition-opacity duration-300 cursor-pointer">
            VANGUARD
          </div>

          {/* Desktop Nav Links with Sliding Cylindrical Glass Pill */}
          <nav
            onMouseLeave={handleMouseLeaveNav}
            className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-1.5 py-0.5 backdrop-blur-md relative animate-fade-in"
          >
            {/* Sliding Pill Indicator */}
            <div
              className="absolute rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 ease-out pointer-events-none z-0"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
                height: pillStyle.height,
                top: pillStyle.top,
                opacity: pillStyle.opacity,
              }}
            />
            {navLinks.map((link, index) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onMouseEnter={(e) => handleMouseEnterNav(e, index)}
                className={`relative z-10 text-[11px] lg:text-xs tracking-[0.15em] uppercase font-semibold py-1.5 px-4 lg:px-5 transition-all duration-300 block transform ${
                  hoveredIndex === index
                    ? 'scale-110 text-white'
                    : hoveredIndex !== null
                    ? 'text-white/40 scale-95'
                    : 'text-white/80'
                }`}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action (Cylindrical Glass Pill with Sliding Reveal Zoom) */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 bg-white/5 border border-white/15 px-6 py-2.5 rounded-full text-xs tracking-widest uppercase hover:border-white/30 transition-all duration-300 font-semibold backdrop-blur-md overflow-hidden group"
            >
              {/* Inner sliding glass fill */}
              <span className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-full z-0" />
              
              <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                GET IN TOUCH
                <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>

          {/* Mobile Hamburguer Menu */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col items-end space-y-1.5 focus:outline-none cursor-pointer group p-1"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-0.5 bg-white transition-all duration-300 group-hover:translate-y-[-2px]" />
            <div className="w-6 h-0.5 bg-white transition-all duration-300" />
            <div className="w-4 h-0.5 bg-white transition-all duration-300 group-hover:translate-y-[2px]" />
          </button>
        </header>

        {/* Hero Content Section */}
        <main className="flex-grow flex items-center px-6 sm:px-10 lg:px-16 py-2">
          <div className="max-w-4xl text-left flex flex-col justify-center">
            
            {/* Tagline */}
            <div className="animate-fade-up inline-flex items-center gap-2 mb-4 lg:mb-5">
              <Crown className="w-4 h-4 text-white/70" />
              <span className="text-white/70 text-xs sm:text-sm tracking-[0.3em] uppercase font-inter font-semibold">
                World-Class Digital Collective
              </span>
            </div>

            {/* Main Heading with Mask-Reveal Text Animations */}
            <h1 className="font-podium text-white uppercase leading-[0.92] tracking-tight text-[clamp(2.5rem,6.8vw,5.5rem)] select-none">
              <span className="block overflow-hidden pb-1">
                <span className="block animate-reveal-up" style={{ animationDelay: '0.2s' }}>Design.</span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="block animate-reveal-up" style={{ animationDelay: '0.35s' }}>Disrupt.</span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="block animate-reveal-up" style={{ animationDelay: '0.5s' }}>Conquer.</span>
              </span>
            </h1>

            {/* Subtext */}
            <p className="animate-fade-up-delay-2 text-white/70 text-xs sm:text-sm md:text-base font-inter leading-relaxed max-w-md mt-4 lg:mt-5">
              We build fierce brand identities<br />
              that don't just turn heads -- <span className="font-bold text-white font-inter">they lead.</span>
            </p>

            {/* CTA Row */}
            <div className="animate-fade-up-delay-3 mt-5 lg:mt-6 flex flex-wrap items-center gap-4 sm:gap-6">
              <button className="group inline-flex items-center gap-2 bg-black hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 px-5 sm:px-7 py-3 text-[11px] sm:text-xs tracking-widest uppercase transition-all duration-300 font-bold shadow-lg shadow-black/40">
                SEE OUR WORK
                <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <div className="hidden sm:flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg py-1.5 px-4 backdrop-blur-sm">
                <Award className="w-8 h-8 text-white/50" />
                <div className="text-left font-inter text-white/60 text-xs tracking-wider uppercase leading-tight">
                  <div>Top-Rated</div>
                  <div className="font-semibold text-white/80">Brand Studio</div>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="animate-fade-up-delay-4 mt-6 lg:mt-8 flex flex-wrap gap-6 sm:gap-12 lg:gap-16">
              {[
                { value: '250+', label: 'Brands Transformed' },
                { value: '95%', label: 'Client Retention' },
                { value: '10+', label: 'Years in the Game' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold font-inter tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1 font-inter font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </main>

        {/* Premium Hub Footer with Timezones */}
        <footer className="w-full px-6 sm:px-10 lg:px-16 py-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] text-white/40 uppercase tracking-[0.2em]">
          <div>
            © {new Date().getFullYear()} VANGUARD. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-4 sm:gap-6 md:gap-8 font-mono">
            <div>NYC <span className="text-white ml-1 font-semibold">{times.nyc}</span></div>
            <div>LON <span className="text-white ml-1 font-semibold">{times.lon}</span></div>
            <div>TOK <span className="text-white ml-1 font-semibold">{times.tok}</span></div>
          </div>
        </footer>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Overlay Navbar */}
        <div className="flex items-center justify-between w-full px-6 sm:px-10 py-5">
          <div className="font-podium text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
            VANGUARD
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-white/80 focus:outline-none transition-colors"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Centered navigation links */}
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 flex-grow">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                transitionDelay: `${i * 80 + 100}ms`,
              }}
              className={`font-podium text-4xl sm:text-5xl text-white uppercase tracking-wide hover:text-white/70 transition-all duration-500 transform ${
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
              }`}
            >
              {link}
            </a>
          ))}

          {/* Staggered CTA in Mobile Menu */}
          <div className="mt-8">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                transitionDelay: `${navLinks.length * 80 + 100}ms`,
              }}
              className={`relative inline-flex items-center gap-2 bg-white/5 border border-white/15 px-8 py-4 rounded-full text-xs tracking-widest uppercase transition-all duration-500 transform font-semibold backdrop-blur-md overflow-hidden group ${
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
              }`}
            >
              {/* Inner sliding glass fill */}
              <span className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-full z-0" />
              
              <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                GET IN TOUCH
                <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>
        </div>

        {/* Overlay Footer spacing */}
        <div className="py-8" />
      </div>
    </div>
  );
}

export default App;
