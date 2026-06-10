import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.31a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.9 2.9 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.96-.1z"/>
  </svg>
);

const ThreadsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.215-3.522-1.697-2.016-2.578-4.932-2.578-8.35 0-3.418.881-6.334 2.578-8.35 1.881-2.317 4.634-3.498 8.215-3.522h.007c2.052.013 3.922.572 5.563 1.66l-1.555 1.828c-1.274-.79-2.748-1.249-4.008-1.261h-.007c-2.928.02-5.119.906-6.547 2.635-1.315 1.565-1.986 3.773-1.986 6.61 0 2.837.671 5.045 1.986 6.61 1.428 1.729 3.619 2.615 6.547 2.635h.007c1.26-.012 2.734-.471 4.008-1.261l1.555 1.828c-1.641 1.088-3.511 1.647-5.563 1.66zm0-3.5c-2.275-.016-3.95-.728-5.017-2.12-.819-.977-1.238-2.65-1.238-4.88 0-2.23.419-3.903 1.238-4.88 1.067-1.392 2.742-2.104 5.017-2.12h.007c.802.008 1.632.191 2.461.545l-.861 1.012c-.567-.23-1.159-.35-1.6-.35h-.007c-1.556.012-2.698.524-3.428 1.555-.583.87-.88 2.162-.88 3.838 0 1.676.297 2.968.88 3.838.73 1.031 1.872 1.543 3.428 1.555h.007c.441 0 1.033-.12 1.6-.35l.861 1.012c-.829.354-1.659.537-2.461.545h-.007z"/>
  </svg>
);

// Service SVG Icons
const RunnerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13" cy="4" r="1"/><path d="M7 21l3-6 2 2 3-5"/><path d="M14 21l-2-4-2 1-3-4"/><path d="M5 9l4-2 2 2 3-1 2 2"/>
  </svg>
);

const SportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
  </svg>
);

const BoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"/>
  </svg>
);

const HandsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
  </svg>
);

// ─── Intersection Observer Hook ─────────────────────────────────────────────

const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsInView(true); observer.unobserve(entry.target); }
    }, { threshold: 0.1, ...options });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, isInView] as const;
};

// ─── Main Component ─────────────────────────────────────────────────────────

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: string) => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate testimonials every 6s with smooth transitions
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % 5);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const [heroRef, heroInView] = useInView();
  const [servicesRef, servicesInView] = useInView();
  const [aboutRef, aboutInView] = useInView();
  const [whyRef, whyInView] = useInView();
  const [testimonialsRef, testimonialsInView] = useInView();
  const [contactRef, contactInView] = useInView();

  const testimonials = [
    { name: "Med Basly", text: "Grand merci pour votre accompagnement, votre patience et votre écoute. Votre travail fait vraiment la différence, et je ressens une nette amélioration grâce à vous. Je recommande vivement!", rating: 5 },
    { name: "Ghada Sbouai", text: "Un super Kiné! Merci à Skander qui a su soulager mes douleurs cervicales, dorsales lombaires alors que je souffrais depuis plus d'un an. Vraiment très à l'écoute, je la recommande vivement!", rating: 5 },
    { name: "KAMMOUN ASMA", text: "Prise en charge rapide, équipe professionnel et à l'écoute! Résultat plus que parfait. Reprise de la mobilité dès la première séance. Je recommande vivement le cabinet!", rating: 5 },
    { name: "Mohamed Mannai", text: "Kinésithérapeute d'un grand professionnalisme, à l'écoute et doté d'une excellente maîtrise technique. La prise en charge est rigoureuse, personnalisée et orientée vers des résultats concrets.", rating: 5 },
    { name: "Othmen Hadouej", text: "Excellent kinésithérapeute, très professionnel, jamais en retard, à l'écoute de ses patients. Il applique une méthode qui va au delà du simple massage.", rating: 5 },
  ];

  const services = [
    { title: "Rééducation Fonctionnelle", description: "Récupération après blessure avec une approche personnalisée", Icon: RunnerIcon },
    { title: "Kinésithérapie Sportive", description: "Prise en charge complète des blessures sportives et athlètes", Icon: SportIcon },
    { title: "Rééducation Post-Traumatique", description: "Suivi après fractures ou interventions chirurgicales", Icon: BoneIcon },
    { title: "Massage Thérapeutique", description: "Techniques manuelles avancées pour soulager les douleurs", Icon: HandsIcon },
  ];

  const whyChooseUs = [
    { text: "Accompagnement personnalisé", detail: "Chaque patient bénéficie d'un plan de soin sur mesure" },
    { text: "Techniques modernes", detail: "Équipement et méthodes de pointe" },
    { text: "Suivi professionnel", detail: "Évaluation continue des progrès" },
    { text: "Cabinet accueillant", detail: "Espace confortable et serein" },
  ];

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Bonjour, je souhaite prendre rendez-vous.");
    window.open(`https://wa.me/21621806322?text=${msg}`, "_blank");
  };

  const isScrolled = scrollY > 60;

  return (
    <div className="min-h-screen bg-white overflow-hidden">

      {/* ── Navigation ── */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-white shadow-sm py-3"}`}>
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/manus-storage/8e1e606a-41cf-4f6e-b8ef-069f28fd61df_removalai_preview_05da2dd9.png" alt="Cabinet Hlioui Logo" className="w-12 h-12 object-contain" />
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold text-primary leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Cabinet Hlioui</h1>
              <p className="text-xs text-muted-foreground tracking-wider uppercase">Kinésithérapie</p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Services","À Propos","Contact"].map(label => (
              <a key={label} href={`#${label === "À Propos" ? "about" : label === "Contact" ? "contact" : "services"}`}
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all hover:after:w-full">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button onClick={handleWhatsApp} className="button-gold text-sm hidden md:flex items-center gap-2">
              <span>Rendez-vous</span>
            </Button>
            {/* Mobile hamburger */}
            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {menuOpen ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-4">
            {[["services","Services"],["about","À Propos"],["contact","Contact"]].map(([href, label]) => (
              <a key={href} href={`#${href}`} className="text-sm font-medium py-1 hover:text-accent transition-colors" onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <Button onClick={handleWhatsApp} className="button-gold w-full">Rendez-vous</Button>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative overflow-hidden h-[480px] md:h-[580px] lg:h-[680px]">
        <img
          src="/manus-storage/mainimg_d8472b49.png"
          alt="Physiotherapy Treatment"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ transform: `translateY(${scrollY * 0.2}px) scale(1.1)`, willChange: "transform" }}
          loading="eager"
        />
        {/* Subtle gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
        {/* Hero text */}
        <div className="relative h-full flex items-center">
          <div className="container">
            <div style={{ opacity: heroInView ? 1 : 0, transform: heroInView ? "translateY(0)" : "translateY(20px)", transition: "all 1s ease-out" }}>
              <p className="text-accent text-sm tracking-widest uppercase mb-3 font-medium">Cabinet Hlioui Iskander</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                Kinésithérapie<br />& Rééducation
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-md">Votre bien-être, notre priorité. Une prise en charge personnalisée et professionnelle.</p>
              <Button onClick={handleWhatsApp} className="bg-accent hover:bg-accent/90 text-primary font-semibold px-4 md:px-8 py-3 md:py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-1 md:gap-3 hover:scale-105 active:scale-95 text-xs md:text-base whitespace-nowrap md:whitespace-normal">
                <WhatsAppIcon />
                <span>Prendre Rendez-vous</span>
              </Button>
            </div>
          </div>
        </div>
        {/* Scroll hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 text-xs tracking-widest uppercase animate-bounce">
          <span>Défiler</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" ref={servicesRef} className="py-20 lg:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16 transition-all duration-1000" style={{ opacity: servicesInView ? 1 : 0, transform: servicesInView ? "translateY(0)" : "translateY(30px)" }}>
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Nos Services</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Une gamme complète de services thérapeutiques adaptés à vos besoins</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.Icon;
              return (
                <div key={idx} style={{ opacity: servicesInView ? 1 : 0, transform: servicesInView ? "translateY(0)" : "translateY(40px)", transitionDelay: `${idx * 100}ms`, transition: "all 0.7s ease-out" }}>
                  <Card className="p-6 border-0 bg-secondary hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group h-full">
                    <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300"><Icon /></div>
                    <h3 className="text-lg mb-3 text-primary group-hover:text-accent transition" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{service.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{service.description}</p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" ref={aboutRef} className="py-20 lg:py-32 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div style={{ opacity: aboutInView ? 1 : 0, transform: aboutInView ? "translateX(0)" : "translateX(-50px)", transition: "all 1s ease-out" }}>
              <h2 className="text-4xl md:text-5xl mb-6 text-accent" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>À Propos</h2>
              <div className="w-24 h-1 bg-accent mb-6"></div>
              <p className="text-lg mb-6 leading-relaxed text-white/90">Cabinet spécialisé en kinésithérapie et rééducation fonctionnelle. Nous accompagnons nos patients dans leur récupération physique grâce à une approche personnalisée et professionnelle.</p>
              <p className="text-lg mb-8 leading-relaxed text-white/90">Avec des techniques modernes et un suivi rigoureux, nous nous engageons à vous offrir les meilleurs soins pour votre bien-être et votre mobilité.</p>
              <div className="flex gap-4">
                <div className="flex-1">
                  <p className="text-accent text-2xl" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>100%</p>
                  <p className="text-sm text-white/70">Personnalisé</p>
                </div>
                <div className="flex-1">
                  <p className="text-accent text-2xl" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>20+</p>
                  <p className="text-sm text-white/70">Années d'expérience</p>
                </div>
              </div>
            </div>
            <div style={{ opacity: aboutInView ? 1 : 0, transform: aboutInView ? "translateX(0)" : "translateX(50px)", transition: "all 1s ease-out" }} className="relative">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663743332657/Uic2o6jsLW2y4JgPyh8HVE/gallery-professional-fXTFTAb8SLa56obygYU3u.webp" alt="Iskander - Physiotherapist" className="rounded-lg shadow-2xl w-full" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section ref={whyRef} className="py-20 lg:py-32 bg-secondary">
        <div className="container">
          <div style={{ opacity: whyInView ? 1 : 0, transform: whyInView ? "translateY(0)" : "translateY(30px)", transition: "all 1s ease-out" }}>
            <h2 className="text-4xl md:text-5xl text-center mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Pourquoi Nous Choisir?</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-16"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} style={{ opacity: whyInView ? 1 : 0, transform: whyInView ? "translateY(0)" : "translateY(40px)", transitionDelay: `${idx * 100}ms`, transition: "all 0.7s ease-out" }} className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 text-accent">
                  <CheckIcon />
                </div>
                <p className="text-lg text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{item.text}</p>
                <p className="text-sm text-foreground/60">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section ref={testimonialsRef} className="py-20 lg:py-32 bg-primary text-white">
        <div className="container">
          <div style={{ opacity: testimonialsInView ? 1 : 0, transform: testimonialsInView ? "translateY(0)" : "translateY(30px)", transition: "all 1s ease-out" }}>
            <h2 className="text-4xl md:text-5xl text-center mb-4 text-accent" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Témoignages</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
                <span className="text-2xl">⭐</span>
                <span className="font-bold text-lg text-accent">4.9</span>
                <span className="text-white/80">basé sur 4,942 avis Google</span>
              </div>
            </div>
          </div>
          <div className="w-full relative">
            <div ref={carouselRef} className="flex gap-6 overflow-x-auto pb-4 px-4 md:px-0 snap-x snap-mandatory scroll-smooth" style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}>
              {testimonials.map((testimonial, idx) => (
                <div key={idx} style={{ opacity: testimonialsInView ? 1 : 0, transform: testimonialsInView ? "translateY(0)" : "translateY(40px)", transitionDelay: `${idx * 100}ms`, transition: "all 0.7s ease-out" }} className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-accent snap-start text-foreground">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-primary text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>{testimonial.name}</p>
                      <p className="text-xs text-foreground/60">Avis Google</p>
                    </div>
                    <GoogleIcon />
                  </div>
                </div>
              ))}
            </div>
            {/* Navigation buttons */}
            <button onClick={() => scrollCarousel('left')} className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-accent hover:bg-accent/90 text-primary rounded-full items-center justify-center shadow-lg transition-all hover:scale-110 z-10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button onClick={() => scrollCarousel('right')} className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-accent hover:bg-accent/90 text-primary rounded-full items-center justify-center shadow-lg transition-all hover:scale-110 z-10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
          <div className="mt-8 text-center">
              <a href="https://www.google.com/maps/place/Centre+Hlioui+Iskander" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors text-sm font-medium">
                <GoogleIcon />
                <span>Voir tous les 4,942 avis sur Google</span>
              </a>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" ref={contactRef} className="py-20 lg:py-32 bg-white">
        <div className="container">
          <div style={{ opacity: contactInView ? 1 : 0, transform: contactInView ? "translateY(0)" : "translateY(30px)", transition: "all 1s ease-out" }}>
            <h2 className="text-4xl md:text-5xl text-center mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Nous Contacter</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-16"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { Icon: PhoneIcon, title: "Téléphone", content: "+216 21 806 322" },
              { Icon: MapPinIcon, title: "Adresse", content: "Sahabi 4, 03\n3100 Rue Argentine\nKairouan 3100" },
              { Icon: ClockIcon, title: "Horaires", content: "Lun-Ven: 8h-18h\nSam: 8h-13h" },
              { Icon: MailIcon, title: "Email", content: "hlioui.iskander@gmail.com" },
            ].map((item, idx) => {
              const Icon = item.Icon;
              return (
              <div key={idx} style={{ opacity: contactInView ? 1 : 0, transform: contactInView ? "translateY(0)" : "translateY(40px)", transitionDelay: `${idx * 100}ms`, transition: "all 0.7s ease-out" }} className="text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                  <Icon />
                </div>
                <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{item.title}</h3>
                <p className="text-foreground/70 whitespace-pre-line text-sm">{item.content}</p>
              </div>
            );
            })}  
          </div>
          <div style={{ opacity: contactInView ? 1 : 0, transform: contactInView ? "translateY(0)" : "translateY(30px)", transition: "all 1s ease-out" }} className="mt-16 bg-secondary p-8 rounded-lg">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg mb-6 text-foreground/70">Prêt à commencer votre parcours de récupération?</p>
              <Button onClick={handleWhatsApp} className="bg-accent hover:bg-accent/90 text-primary font-semibold px-6 md:px-10 py-3 md:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 md:gap-3 hover:scale-105 active:scale-95 text-sm md:text-base">
                <WhatsAppIcon />
                <span>Prendre Rendez-vous</span>
                <span className="hidden md:inline"><ChevronRightIcon /></span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Floating WhatsApp Button ── */}
      <button onClick={handleWhatsApp} className="fixed bottom-8 right-8 md:bottom-12 md:right-12 px-4 md:px-6 py-3 md:py-4 rounded-full bg-accent text-primary shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 z-40 font-semibold text-sm md:text-base animate-bounce whitespace-nowrap" title="Contacter via WhatsApp">
        <WhatsAppIcon />
        <span className="hidden sm:inline">Nous Contacter</span>
      </button>

      {/* ── Footer ── */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/manus-storage/8e1e606a-41cf-4f6e-b8ef-069f28fd61df_removalai_preview_05da2dd9.png" alt="Cabinet Hlioui Logo" className="w-12 h-12" />
                <div>
                  <p className="font-display text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Cabinet Hlioui</p>
                  <p className="text-xs text-white/70">Kinésithérapie</p>
                </div>
              </div>
              <p className="text-white/70 text-sm">Votre bien-être, notre priorité.</p>
            </div>
            <div>
              <h4 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Liens Rapides</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#services" className="hover:text-accent transition">Services</a></li>
                <li><a href="#about" className="hover:text-accent transition">À Propos</a></li>
                <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Nous Suivre</h4>
              <div className="flex gap-4">
                <a href="https://www.google.com/maps/place/Centre+Hlioui+Iskander" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition" title="Google Maps">
                  <MapPinIcon />
                </a>
                <a href="https://www.instagram.com/cabinet_hlioui_iskander/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition" title="Instagram">
                  <InstagramIcon />
                </a>
                <a href="https://www.tiktok.com/@iskender.hlioui" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition" title="TikTok">
                  <TikTokIcon />
                </a>
                <a href="https://www.threads.com/@cabinet_hlioui_iskander" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition" title="Threads">
                  <ThreadsIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2026 Cabinet Hlioui Iskander. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
