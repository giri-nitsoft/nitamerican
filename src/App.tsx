import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Search, FileText, Settings, TrendingUp, Mail, Globe, MapPin } from 'lucide-react';

// Animation variants
const fadeInUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } }
};

const fadeInRight: any = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "circOut" } }
};

const fadeInLeft: any = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "circOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const App = () => {
  return (
    <div className="bg-black text-white antialiased scroll-smooth selection:bg-blue-500/30">
      {/* Cinematic Noise Overlay */}
      <div className="noise-bg" />

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 flex justify-between items-center">
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl md:text-2xl font-black tracking-tighter hover:opacity-80 transition flex items-center gap-2"
          >
            NIT <span className="text-blue-500">AMERICAN</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10 text-[11px] font-black tracking-[0.2em] text-gray-400">
            <a href="#about" className="hover:text-white transition duration-300">ABOUT</a>
            <a href="#brands" className="hover:text-white transition duration-300">BRANDS</a>
            <a href="#service" className="hover:text-white transition duration-300">SERVICE</a>
            <a href="#contact" className="px-6 py-2.5 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition duration-300 tracking-[0.1em]">
              CONTACT
            </a>
          </div>

          {/* Mobile Nav Toggle (Simple for now) */}
          <div className="md:hidden flex items-center">
            <a href="#contact" className="text-[10px] font-black tracking-widest px-4 py-2 border border-white/20 rounded-full">
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-50 grayscale"
            alt="City Connection"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black z-10" />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-blue-400 font-black tracking-[0.4em] mb-6 text-xs md:text-sm uppercase"
          >
            Gateway to Asia for US Brands
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[120px] font-black mb-10 tracking-tight md:tracking-[-0.05em] leading-[1.0] md:leading-[0.85]"
          >
            CONNECTING<br />
            <span className="text-gradient">US TRENDS</span><br />
            TO ASIA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12"
          >
            Bringing California trends to the heart of Asia.<br />
            NIT AMERICAN is your strategic partner for expanding brand value across borders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#brands" className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/20">
              EXPLORE PORTFOLIO
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-30"
        >
          <div className="w-px h-12 bg-white mx-auto" />
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-20">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <ScrollReveal variants={fadeInRight}>
              <div className="flex items-center mb-10">
                <div className="h-px w-16 bg-blue-500 mr-4" />
                <span className="text-blue-500 font-black tracking-[0.3em] text-xs uppercase">About Us</span>
              </div>
              <h2 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[72px] font-black mb-10 leading-[1.1] md:leading-[0.9] tracking-tighter">
                Global Vision,<br />Local Action.
              </h2>
              <div className="space-y-10 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                <p>
                  <span className="text-white font-black text-xl md:text-2xl block mb-4 tracking-tight">Dual HQ System</span>
                  Our US branch, <strong className="text-white font-bold decoration-blue-500/30 decoration-4 underline-offset-4">NIT AMERICAN</strong>, sources the latest trend brands directly from Irvine, California.
                </p>
                <p>
                  Our strategic partner in Korea, <strong className="text-white font-bold decoration-purple-500/30 decoration-4 underline-offset-4">NITSOFT</strong>, ensures flawless execution through IT expertise and distribution infrastructure.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variants={fadeInLeft}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
                <div className="relative bg-zinc-900/40 backdrop-blur-2xl rounded-[2rem] p-12 border border-white/10 shadow-3xl">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 mb-16 relative">
                    <div className="text-center w-full md:w-1/3">
                      <div className="text-4xl md:text-5xl mb-4 drop-shadow-lg">🇺🇸</div>
                      <div className="font-black text-xl md:text-2xl tracking-tight">USA</div>
                      <div className="text-[10px] text-gray-500 tracking-widest uppercase mt-1">Irvine, CA</div>
                    </div>
                    <div className="hidden md:block flex-1 px-4 relative">
                      <div className="h-px bg-white/10 w-full" />
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 -translate-y-1/2 blur-[2px] opacity-40 animate-pulse" />
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-900 border border-white/10 px-4 py-1 rounded-full text-[9px] text-blue-400 font-black tracking-widest uppercase">
                        CONNECT
                      </div>
                    </div>
                    <div className="text-center w-full md:w-1/3">
                      <div className="text-4xl md:text-5xl mb-4 drop-shadow-lg">🇰🇷</div>
                      <div className="font-black text-xl md:text-2xl tracking-tight">KOREA</div>
                      <div className="text-[10px] text-gray-500 tracking-widest uppercase mt-1">Seoul</div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <p className="text-sm text-gray-400 leading-relaxed">
                          <span className="text-white font-bold">NIT AMERICAN</span> leads US operations & networking in California.
                        </p>
                      </div>
                    </div>
                    <div className="bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0" />
                        <p className="text-sm text-gray-400 leading-relaxed">
                          Strategic partnership with <span className="text-white font-bold">NITSOFT</span> for Asian market expansion.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal variants={fadeInUp}>
            <div className="text-center mb-16 md:mb-24">
              <span className="text-blue-600 font-black tracking-[0.4em] text-xs uppercase block mb-4">Portfolio</span>
              <h2 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[80px] font-black tracking-tighter leading-none">OUR BRANDS</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10">
            <BrandCard
              image="https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop"
              category="SURF & STREET"
              name="MAUI & SONS"
              description="A global lifestyle brand capturing the free surf culture and street vibe of California."
              accentColor="blue"
            />
            <BrandCard
              image="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop"
              category="RETRO & ATHLEISURE"
              name="LA GEAR"
              description="An iconic sneakers and athleisure brand reimagining 80s and 90s retro vibes for the modern era."
              accentColor="purple"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="service" className="py-40 bg-zinc-900 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal variants={fadeInUp}>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 border-b border-white/5 pb-12 md:pb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-blue-500 font-black tracking-[0.4em] text-xs uppercase block mb-4">One-Stop Solution</span>
                <h2 className="text-[9vw] sm:text-[7vw] md:text-[5vw] lg:text-[64px] font-black tracking-tight leading-[1.1] md:leading-[0.9]">From Discovery<br />To Expansion</h2>
              </div>
              <p className="text-gray-400 max-w-sm lg:text-right font-light text-base md:text-lg">
                Beyond simple brokerage, we provide integrated solutions covering the entire process from brand discovery to market settlement.
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5"
          >
            <ServiceItem
              num="01"
              title="Discovery"
              subtitle="Trend Sourcing"
              icon={<Search className="w-6 h-6" />}
              desc="We proactively discover trendy US brands based on local data."
            />
            <ServiceItem
              num="02"
              title="Licensing"
              subtitle="Exclusive Contract"
              icon={<FileText className="w-6 h-6" />}
              desc="We secure exclusive licenses and design optimal contract structures with legal review."
            />
            <ServiceItem
              num="03"
              title="Infra"
              subtitle="Full Operation"
              icon={<Settings className="w-6 h-6" />}
              desc="We build all necessary infrastructure for distribution including logistics, customs, and CS."
            />
            <ServiceItem
              num="04"
              title="Expansion"
              subtitle="Localization"
              icon={<TrendingUp className="w-6 h-6" />}
              desc="We execute rebranding strategies and expand online/offline channels tailored for Asian markets."
            />
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="bg-black pt-24 md:pt-40 pb-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 lg:gap-32 mb-24 md:mb-40">
          <ScrollReveal variants={fadeInRight}>
            <h2 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[72px] font-black mb-12 tracking-tighter leading-tight">Ready to<br />Connect?</h2>
            <div className="space-y-8">
              <div className="group p-8 bg-zinc-900/50 rounded-3xl border border-white/5 hover:border-blue-500/50 transition-all cursor-default">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-blue-500 font-black tracking-widest text-[10px] uppercase">USA HQ</span>
                </div>
                <p className="text-2xl font-black text-white mb-2">Irvine, California</p>
                <p className="text-gray-500 text-sm flex items-center gap-2">
                  <MapPin className="w-3 h-3" /> Strategic Sourcing & Licensing Center
                </p>
              </div>
              <div className="group p-8 bg-zinc-900/50 rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all cursor-default">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-purple-500 font-black tracking-widest text-[10px] uppercase">KOREA Partner</span>
                </div>
                <p className="text-2xl font-black text-white mb-2">Seoul, Rep. of KOREA</p>
                <p className="text-gray-500 text-sm flex items-center gap-2">
                  <Globe className="w-3 h-3" /> Marketing & Distribution Hub
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variants={fadeInLeft}>
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-12">Trusted Partners</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'NITSOFT', url: 'https://www.nitsoft.co.kr/' },
                    { name: 'BGI', url: 'https://www.brandgroupinternational.com/' },
                    { name: 'ERUDA MKT', url: 'https://e-ruda.net/home' },
                    { name: 'STCOMM', url: 'https://www.stcomm.kr/' }
                  ].map((p) => (
                    <a
                      key={p.name}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-20 bg-zinc-900/50 border border-white/5 flex items-center justify-center text-gray-400 font-black text-sm hover:border-white/20 hover:text-white transition-all cursor-pointer tracking-widest rounded-xl decoration-none"
                    >
                      {p.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-20">
                <p className="text-gray-500 font-black tracking-widest text-[10px] uppercase mb-6 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Business Inquiry
                </p>
                <a
                  href="mailto:contact@nitamerican.com"
                  className="text-3xl md:text-5xl font-black text-white hover:text-blue-500 transition-colors underline decoration-white/10 underline-offset-[12px] decoration-1 hover:decoration-blue-500/50"
                >
                  contact@nitamerican.com
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 font-black tracking-widest uppercase">
          <p>&copy; 2025 NIT AMERICAN. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Connecting Global Brands to Local Markets</p>
        </div>
      </footer>
    </div>
  );
};

// Helper Components
const ScrollReveal = ({ children, variants }: { children: React.ReactNode, variants: any }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const BrandCard = ({ image, category, name, description, accentColor, delay = 0 }: any) => {
  const accentClasses = accentColor === 'blue' ? 'text-blue-400' : 'text-purple-400';

  return (
    <ScrollReveal variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay } } }}>
      <div className="group relative overflow-hidden h-[700px] bg-zinc-100 cursor-pointer rounded-2xl">
        <div className="absolute inset-0 bg-black/40 z-10 transition-opacity group-hover:opacity-20" />
        <img
          src={image}
          className="w-full h-full object-cover transition duration-[2s] ease-out group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
          alt={name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-20 opacity-80" />

        <div className="absolute bottom-0 left-0 p-8 md:p-12 z-30 w-full transform translate-y-6 md:translate-y-0 group-hover:translate-y-0 transition duration-700">
          <div className="overflow-hidden">
            <p className={`${accentClasses} font-black tracking-[0.4em] text-[10px] uppercase mb-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100`}>
              {category}
            </p>
          </div>
          <h3 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[48px] font-black text-white italic mb-4 md:mb-6 tracking-tighter">{name}</h3>
          <p className="text-gray-300 text-base md:text-lg max-w-sm opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 font-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
};

const ServiceItem = ({ num, title, subtitle, icon, desc }: any) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-zinc-900 p-12 hover:bg-zinc-800 transition duration-700 group cursor-default"
    >
      <div className="flex justify-between items-start mb-12">
        <div className="text-blue-600 text-xs font-black tracking-[0.3em] uppercase">{num} {title}</div>
        <div className="text-white/20 group-hover:text-blue-500 transition-colors duration-500">
          {icon}
        </div>
      </div>
      <div className="h-14 w-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
        <div className="text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-black mb-4 text-white tracking-tight">{subtitle}</h3>
      <p className="text-sm text-gray-500 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-500">{desc}</p>
    </motion.div>
  );
};

export default App;
