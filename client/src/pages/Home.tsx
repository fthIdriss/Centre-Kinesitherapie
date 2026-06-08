import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Star, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

/**
 * Cabinet Hlioui Iskander - Professional Physiotherapy Website
 * Design: Dark Navy (#001F3F) & Gold (#D4AF37) brand colors
 * Typography: Playfair Display (headings), Inter (body)
 * Layout: Professional hero with diagonal accent, modern sections
 * Animation: Scroll-triggered fade-in, parallax, and staggered reveals
 */

// Intersection Observer Hook for Scroll Animations
const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [ref, isInView] as const;
};

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation refs
  const [heroRef, heroInView] = useInView();
  const [servicesRef, servicesInView] = useInView();
  const [aboutRef, aboutInView] = useInView();
  const [whyRef, whyInView] = useInView();
  const [testimonialsRef, testimonialsInView] = useInView();
  const [galleryRef, galleryInView] = useInView();
  const [contactRef, contactInView] = useInView();

  const testimonials = [
    {
      name: "Med Basly",
      text: "Grand merci pour votre accompagnement, votre patience et votre écoute. Votre travail fait vraiment la différence, et je ressens une nette amélioration grâce à vous. Je recommande vivement!",
      rating: 5,
    },
    {
      name: "Ghada Sbouai",
      text: "Un super Kiné! Merci à Skander qui a su soulager mes douleurs cervicales, dorsales lombaires alors que je souffrais depuis plus d'un an. Vraiment très à l'écoute, je la recommande vivement!",
      rating: 5,
    },
    {
      name: "KAMMOUN ASMA",
      text: "Prise en charge rapide, équipe professionnel et à l'écoute! Résultat plus que parfait. Reprise de la mobilité dès la première séance. Je recommande vivement le cabinet!",
      rating: 5,
    },
    {
      name: "Mohamed Mannai",
      text: "Kinésithérapeute d'un grand professionnalisme, à l'écoute et doté d'une excellente maîtrise technique. La prise en charge est rigoureuse, personnalisée et orientée vers des résultats concrets.",
      rating: 5,
    },
    {
      name: "Othmen Hadouej",
      text: "Excellent kinésithérapeute, très professionnel, jamais en retard, à l'écoute de ses patients. Il applique une méthode qui va au delà du simple massage.",
      rating: 5,
    },
  ];

  const services = [
    {
      title: "Rééducation Fonctionnelle",
      description: "Récupération après blessure avec une approche personnalisée",
      icon: "🏃",
    },
    {
      title: "Kinésithérapie Sportive",
      description: "Prise en charge complète des blessures sportives et athlètes",
      icon: "⚽",
    },
    {
      title: "Rééducation Post-Traumatique",
      description: "Suivi après fractures ou interventions chirurgicales",
      icon: "🔧",
    },
    {
      title: "Massage Thérapeutique",
      description: "Techniques manuelles avancées pour soulager les douleurs",
      icon: "💆",
    },
  ];

  const whyChooseUs = [
    "Accompagnement personnalisé",
    "Techniques modernes",
    "Suivi professionnel",
    "Cabinet accueillant",
  ];

  const handleWhatsApp = () => {
    const message = "Bonjour, je souhaite prendre rendez-vous.";
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/21671960100?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-4">
            <img
              src="/manus-storage/8e1e606a-41cf-4f6e-b8ef-069f28fd61df_removalai_preview_05da2dd9.png"
              alt="Cabinet Hlioui Logo"
              className="w-14 h-14"
            />
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>Cabinet Hlioui</h1>
              <p className="text-xs text-muted-foreground">Kinésithérapie</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-sm hover:text-accent transition">
              Services
            </a>
            <a href="#about" className="text-sm hover:text-accent transition">
              À Propos
            </a>
            <a href="#gallery" className="text-sm hover:text-accent transition">
              Galerie
            </a>
            <a href="#contact" className="text-sm hover:text-accent transition">
              Contact
            </a>
          </nav>
          <Button
            onClick={handleWhatsApp}
            className="button-gold text-sm"
          >
            Rendez-vous
          </Button>
        </div>
      </header>

      {/* Hero Section - Image Only Full Screen */}
      <section ref={heroRef} className="relative overflow-hidden h-screen min-h-screen bg-gray-900">
        <div className="absolute inset-0 w-full h-full" style={{ willChange: 'transform' }}>
          <img
            src="/manus-storage/mainimg_8d183b5f.png"
            alt="Physiotherapy Treatment"
            className="w-full h-full object-cover"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              perspective: '1000px',
            }}
            loading="eager"
          />
        </div>
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
      </section>

      {/* Services Section with Staggered Card Animation */}
      <section id="services" ref={servicesRef} className="py-20 lg:py-32 bg-white">
        <div className="container">
          <div 
            className="text-center mb-16 transition-all duration-1000"
            style={{
              opacity: servicesInView ? 1 : 0,
              transform: servicesInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Nos Services</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Une gamme complète de services thérapeutiques adaptés à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                style={{
                  opacity: servicesInView ? 1 : 0,
                  transform: servicesInView ? "translateY(0)" : "translateY(40px)",
                  transitionDelay: `${idx * 100}ms`,
                  transition: "all 0.7s ease-out",
                }}
              >
                <Card
                  className="p-6 border-0 bg-secondary hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group h-full"
                >
                  <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
                  <h3 className="text-lg mb-3 text-primary group-hover:text-accent transition" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image Parallax */}
      <section id="about" ref={aboutRef} className="py-20 lg:py-32 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              className="transition-all duration-1000"
              style={{
                opacity: aboutInView ? 1 : 0,
                transform: aboutInView ? "translateX(0)" : "translateX(-50px)",
              }}
            >
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>À Propos</h2>
              <div className="w-24 h-1 bg-accent mb-6"></div>
              <p className="text-lg mb-6 leading-relaxed text-white/90">
                Cabinet spécialisé en kinésithérapie et rééducation fonctionnelle. Nous accompagnons nos patients dans leur récupération physique grâce à une approche personnalisée et professionnelle.
              </p>
              <p className="text-lg mb-8 leading-relaxed text-white/90">
                Avec des techniques modernes et un suivi rigoureux, nous nous engageons à vous offrir les meilleurs soins pour votre bien-être et votre mobilité.
              </p>
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
            <div 
              className="relative transition-all duration-1000"
              style={{
                opacity: aboutInView ? 1 : 0,
                transform: aboutInView ? `translateX(0) translateY(${scrollY * 0.2}px)` : `translateX(50px) translateY(${scrollY * 0.2}px)`,
              }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663743332657/Uic2o6jsLW2y4JgPyh8HVE/gallery-professional-fXTFTAb8SLa56obygYU3u.webp"
                alt="Iskander - Physiotherapist"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Staggered Items */}
      <section ref={whyRef} className="py-20 lg:py-32 bg-secondary">
        <div className="container">
          <div 
            className="transition-all duration-1000"
            style={{
              opacity: whyInView ? 1 : 0,
              transform: whyInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <h2 className="text-4xl md:text-5xl text-center mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Pourquoi Nous Choisir?</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-16"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, idx) => (
              <div
                key={idx}
                style={{
                  opacity: whyInView ? 1 : 0,
                  transform: whyInView ? "translateY(0)" : "translateY(40px)",
                  transitionDelay: `${idx * 100}ms`,
                  transition: "all 0.7s ease-out",
                }}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <span className="text-2xl text-accent">✓</span>
                </div>
                <p className="text-lg text-primary" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 lg:py-32 bg-white">
        <div className="container">
          <div 
            className="transition-all duration-1000"
            style={{
              opacity: testimonialsInView ? 1 : 0,
              transform: testimonialsInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <h2 className="text-4xl md:text-5xl text-center mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Témoignages</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-secondary px-6 py-3 rounded-full">
                <span className="text-2xl">⭐</span>
                <span className="font-bold text-lg text-primary">4.9</span>
                <span className="text-foreground/70">basé sur 4,942 avis Google</span>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card 
              className="p-8 md:p-12 border-0 bg-primary text-white text-center transition-all duration-700"
              style={{
                opacity: testimonialsInView ? 1 : 0,
                transform: testimonialsInView ? "scale(1)" : "scale(0.95)",
              }}
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg md:text-xl mb-6 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-accent mb-8" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                — {testimonials[currentTestimonial].name}
              </p>

              <div className="flex justify-center gap-2 flex-wrap">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${
                      idx === currentTestimonial
                        ? "bg-accent text-primary font-semibold scale-110"
                        : "bg-white/20 text-white/70 hover:bg-white/30"
                    }`}
                    title={`Avis de ${testimonials[idx].name}`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section with Image Reveal Animation */}
      <section id="gallery" ref={galleryRef} className="py-20 lg:py-32 bg-secondary">
        <div className="container">
          <div 
            className="transition-all duration-1000"
            style={{
              opacity: galleryInView ? 1 : 0,
              transform: galleryInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <h2 className="text-4xl md:text-5xl text-center mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Galerie</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-16"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663743332657/Uic2o6jsLW2y4JgPyh8HVE/gallery-reception-Bd93Jd8r8kMDhpun2hTuYN.webp", title: "Réception" },
              { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663743332657/Uic2o6jsLW2y4JgPyh8HVE/gallery-treatment-room-Czj9jMy7o4TRqB8phH7zrk.webp", title: "Salle de Traitement" },
              { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663743332657/Uic2o6jsLW2y4JgPyh8HVE/gallery-equipment-2e4GBcbXDNiCx2b6VRVisA.webp", title: "Équipement Moderne" },
              { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663743332657/Uic2o6jsLW2y4JgPyh8HVE/gallery-professional-fXTFTAb8SLa56obygYU3u.webp", title: "Notre Équipe" },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  opacity: galleryInView ? 1 : 0,
                  transform: galleryInView ? "translateY(0)" : "translateY(40px)",
                  transitionDelay: `${idx * 100}ms`,
                  transition: "all 0.7s ease-out",
                }}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer h-64 md:h-72"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/60 transition-colors flex items-end p-4">
                  <p className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 lg:py-32 bg-white">
        <div className="container">
          <div 
            className="transition-all duration-1000"
            style={{
              opacity: contactInView ? 1 : 0,
              transform: contactInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <h2 className="text-4xl md:text-5xl text-center mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Nous Contacter</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-16"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Phone, title: "Téléphone", content: "+216 71 960 100" },
              { icon: Mail, title: "Email", content: "contact@cabinet-hlioui.tn" },
              { icon: MapPin, title: "Adresse", content: "Sahabi 4, 03\n3100 Rue Argentine\nKairouan 3100" },
              { icon: Clock, title: "Horaires", content: "Lun-Ven: 8h-18h\nSam: 8h-13h" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    opacity: contactInView ? 1 : 0,
                    transform: contactInView ? "translateY(0)" : "translateY(40px)",
                    transitionDelay: `${idx * 100}ms`,
                    transition: "all 0.7s ease-out",
                  }}
                  className="text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>{item.title}</h3>
                  <p className="text-foreground/70 whitespace-pre-line text-sm">{item.content}</p>
                </div>
              );
            })}
          </div>

          <div 
            className="mt-16 bg-secondary p-8 rounded-lg transition-all duration-1000"
            style={{
              opacity: contactInView ? 1 : 0,
              transform: contactInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg mb-6 text-foreground/70">
                Prêt à commencer votre parcours de récupération?
              </p>
              <Button
                onClick={handleWhatsApp}
                className="button-gold text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
              >
                Prendre Rendez-vous via WhatsApp
                <ChevronRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-accent text-primary shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-40 font-bold text-2xl animate-bounce"
        title="Contacter via WhatsApp"
      >
        💬
      </button>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/manus-storage/8e1e606a-41cf-4f6e-b8ef-069f28fd61df_removalai_preview_05da2dd9.png"
                  alt="Cabinet Hlioui Logo"
                  className="w-12 h-12"
                />
                <div>
                  <p className="font-display text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Cabinet Hlioui</p>
                  <p className="text-xs text-white/70">Kinésithérapie</p>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Votre bien-être, notre priorité.
              </p>
            </div>

            <div>
              <h4 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Liens Rapides</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#services" className="hover:text-accent transition">Services</a></li>
                <li><a href="#about" className="hover:text-accent transition">À Propos</a></li>
                <li><a href="#gallery" className="hover:text-accent transition">Galerie</a></li>
                <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Nous Suivre</h4>
              <div className="flex gap-4">
                <a href="https://www.google.com/maps/place/Centre+Hlioui+Iskander" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition" title="Google Maps">
                  📍
                </a>
                <a href="https://www.instagram.com/cabinet_hlioui_iskander/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition" title="Instagram">
                  📷
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
