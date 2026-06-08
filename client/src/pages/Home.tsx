import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Star, ChevronRight } from "lucide-react";
import { useState } from "react";

/**
 * Cabinet Hlioui Iskander - Professional Physiotherapy Website
 * Design: Dark Navy (#001F3F) & Gold (#D4AF37) brand colors
 * Typography: Playfair Display (headings), Inter (body)
 * Layout: Modern, professional, with alternating image-text sections
 */

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-gold-accent text-xl font-bold">
              HI
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>Cabinet Hlioui</h1>
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

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left: Text Content */}
          <div className="bg-primary text-white flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                Cabinet Hlioui Iskander
              </h1>
              <p className="text-lg md:text-xl mb-4 font-light">
                Kinésithérapie & Rééducation Fonctionnelle
              </p>
              <p className="text-accent text-lg md:text-xl mb-8" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                L'expertise en mouvement, votre bien-être au quotidien.
              </p>
              <p className="text-white/90 mb-8 leading-relaxed">
                Prise en charge personnalisée pour votre bien-être et votre récupération. Nous accompagnons nos patients avec une approche professionnelle et bienveillante.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleWhatsApp}
                  className="button-gold"
                >
                  Prendre Rendez-vous
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-96 lg:h-auto min-h-96 lg:min-h-screen">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663743332657/Uic2o6jsLW2y4JgPyh8HVE/hero-physiotherapy-NKmkDfqmuCKyxNwcb34L5G.webp"
              alt="Physiotherapy session"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent"></div>
          </div>
        </div>

        {/* Diagonal Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-10 transform rotate-45"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Nos Services</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Une gamme complète de services thérapeutiques adaptés à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="p-6 border-0 bg-secondary hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg mb-3 text-primary group-hover:text-accent transition" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
            <div className="relative">
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

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl text-center mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Pourquoi Nous Choisir?</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow"
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
      <section className="py-20 lg:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl text-center mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Témoignages</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary px-6 py-3 rounded-full">
              <span className="text-2xl">⭐</span>
              <span className="font-bold text-lg text-primary">4.9</span>
              <span className="text-foreground/70">basé sur 4,942 avis Google</span>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-12 border-0 bg-primary text-white text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg md:text-xl mb-6 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-accent mb-8" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                - {testimonials[currentTestimonial].name}
              </p>

              <div className="flex justify-center gap-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentTestimonial ? "bg-accent w-8" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 lg:py-32 bg-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl text-center mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Galerie</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer h-64 md:h-72">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663743332657/Uic2o6jsLW2y4JgPyh8HVE/gallery-reception-Bd93Jd8r8kMDhpun2hTuYN.webp"
                alt="Reception"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/60 transition-colors flex items-end p-4">
                <p className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Réception</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer h-64 md:h-72">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663743332657/Uic2o6jsLW2y4JgPyh8HVE/gallery-treatment-room-Czj9jMy7o4TRqB8phH7zrk.webp"
                alt="Treatment Room"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/60 transition-colors flex items-end p-4">
                <p className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Salle de Traitement</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer h-64 md:h-72">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663743332657/Uic2o6jsLW2y4JgPyh8HVE/gallery-equipment-2e4GBcbXDNiCx2b6VRVisA.webp"
                alt="Equipment"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/60 transition-colors flex items-end p-4">
                <p className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Équipement Moderne</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer h-64 md:h-72">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663743332657/Uic2o6jsLW2y4JgPyh8HVE/gallery-professional-fXTFTAb8SLa56obygYU3u.webp"
                alt="Professional"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/60 transition-colors flex items-end p-4">
                <p className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Notre Équipe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl text-center mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Nous Contacter</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Téléphone</h3>
              <p className="text-foreground/70">+216 71 960 100</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Email</h3>
              <p className="text-foreground/70">contact@cabinet-hlioui.tn</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Adresse</h3>
              <p className="text-foreground/70">
                Sahabi 4, 03<br />
                3100 Rue Argentine<br />
                Kairouan 3100
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" size={24} />
              </div>
              <h3 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Horaires</h3>
              <p className="text-foreground/70">Lun-Ven: 8h-18h<br />Sam: 8h-13h</p>
            </div>
          </div>

          <div className="mt-16 bg-secondary p-8 rounded-lg">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg mb-6 text-foreground/70">
                Prêt à commencer votre parcours de récupération?
              </p>
              <Button
                onClick={handleWhatsApp}
                className="button-gold text-lg px-8 py-6"
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
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-accent text-primary shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-40 font-bold text-2xl"
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
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xl font-bold">
                  HI
                </div>
                <div>
                  <p className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Cabinet Hlioui</p>
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
                <a href="https://www.instagram.com/cabinet_hlioui_iskander/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition">
                  f
                </a>
                <a href="https://www.instagram.com/cabinet_hlioui_iskander/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition">
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
