"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import {
  Shield,
  Sparkles,
  Leaf,
  Heart,
  Star,
  Droplets,
  Clock,
  Award,
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Gem,
  Zap,
  Eye,
} from "lucide-react";

/* ───── Social Icons ───── */
function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}
function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ───── 3D Product ───── */
function Product3D() {
  return (
    <div className="relative w-72 h-72 sm:w-[340px] sm:h-[340px] mx-auto">
      <div className="w-full h-full relative" style={{ perspective: "1200px" }}>
        <motion.div
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-8 rounded-full bg-gradient-to-br from-beige via-white to-marron-50 shadow-2xl flex items-center justify-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="text-center">
              <Image src="/logo.png" alt="Datélys" width={120} height={120} className="mx-auto mb-4" />
              <p className="text-marron-lighter text-sm font-medium tracking-wider">by I&C</p>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full border border-marron-100/20" style={{ transform: "rotateX(70deg)" }} />
          <div className="absolute inset-3 rounded-full border border-gold/15" style={{ transform: "rotateX(70deg) rotateY(45deg)" }} />
        </motion.div>
      </div>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-44 h-4 bg-marron/5 rounded-full blur-xl" />
    </div>
  );
}

/* ───── Fade In ───── */
function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const WHATSAPP_NUMBER = "213555123456";
const WHATSAPP_MSG = encodeURIComponent("Bonjour, je souhaite commander la crème Datélys by I&C");

const socialLinks = [
  { icon: <InstagramIcon />, label: "Instagram", href: "https://instagram.com/datelys" },
  { icon: <FacebookIcon />, label: "Facebook", href: "https://facebook.com/datelys" },
  { icon: <TikTokIcon />, label: "TikTok", href: "https://tiktok.com/@datelys" },
  { icon: <WhatsAppIcon />, label: "WhatsApp", href: `https://wa.me/${WHATSAPP_NUMBER}` },
];

/* ═══════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════ */
export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const productY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const productOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const navLinks = [
    { href: "#hero", label: "Accueil" },
    { href: "#about", label: "Produit" },
    { href: "#benefits", label: "Avantages" },
    { href: "#testimonials", label: "Avis" },
    { href: "#contact", label: "Contact" },
  ];

  const benefits = [
    { icon: <Shield className="w-6 h-6" />, title: "Anti-microbienne", desc: "Protection avancée contre les bactéries pour une peau propre et saine toute la journée." },
    { icon: <Sparkles className="w-6 h-6" />, title: "Anti-âge", desc: "Combat efficacement les rides et les signes de vieillissement pour une peau jeune et éclatante." },
    { icon: <Leaf className="w-6 h-6" />, title: "100% Naturelle", desc: "Extraits végétaux purs, sans produits chimiques nocifs ni conservateurs artificiels." },
    { icon: <Heart className="w-6 h-6" />, title: "Tous types de peau", desc: "Formule équilibrée adaptée aux peaux grasses, sèches et sensibles." },
    { icon: <Droplets className="w-6 h-6" />, title: "Hydratation 24h", desc: "Hydratation intense grâce à l&apos;acide hyaluronique et l&apos;huile d&apos;argan naturelles." },
    { icon: <Clock className="w-6 h-6" />, title: "Résultats rapides", desc: "Résultats visibles dès la première semaine. Peau plus douce et plus lumineuse." },
  ];

  const ingredients = [
    { name: "Huile de noyaux de dattes", desc: "Riche en antioxydants et nutriments essentiels pour la peau", icon: <Gem className="w-5 h-5" /> },
    { name: "Poudre de noyaux de dattes", desc: "Exfoliant naturel doux qui renouvelle les cellules de la peau", icon: <Sparkles className="w-5 h-5" /> },
    { name: "Acide hyaluronique", desc: "Comble les rides et redonne volume et jeunesse à la peau", icon: <Droplets className="w-5 h-5" /> },
    { name: "Huile d&apos;argan", desc: "Hydrate en profondeur et offre un éclat naturel et sain", icon: <Leaf className="w-5 h-5" /> },
  ];

  const testimonials = [
    { name: "Sarah A.", text: "Datélys a transformé ma peau ! Après deux semaines, j&apos;ai remarqué une énorme différence. Ma peau est plus douce et plus éclatante.", rating: 5 },
    { name: "Nour M.", text: "La meilleure crème que j&apos;ai utilisée. Naturelle et efficace, les résultats sont apparus rapidement. Je la recommande vivement !", rating: 5 },
    { name: "Fatima A.", text: "Un produit incroyable ! Peau de bébé après un mois d&apos;utilisation régulière. L&apos;hydratation dure vraiment toute la journée.", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* ═══ NAVBAR ═══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-marron-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Datélys" width={36} height={36} className="rounded-full" />
            <div className="leading-none">
              <span className="text-lg font-bold text-marron tracking-wide">Datélys</span>
              <span className="block text-[10px] text-gold font-medium tracking-widest uppercase">by I&C</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-marron-lighter hover:text-marron transition-colors">{l.label}</a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
            >
              <WhatsAppIcon size={16} />
              Commander
            </a>
          </div>

          <button className="md:hidden text-marron" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenu && (
          <div className="md:hidden bg-cream/95 backdrop-blur-md border-b border-marron-50 px-4 py-4 space-y-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileMenu(false)} className="block text-marron-lighter hover:text-marron py-2">{l.label}</a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 text-white px-5 py-3 rounded-full text-sm font-medium w-full"
              onClick={() => setMobileMenu(false)}
            >
              <WhatsAppIcon size={16} />
              Commander
            </a>
          </div>
        )}
      </nav>

      {/* ═══ HERO ═══ */}
      <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-beige/60 via-cream to-cream" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <FadeIn>
                <span className="inline-flex items-center gap-2 bg-white/70 border border-marron-50 rounded-full px-4 py-1.5 text-xs text-marron-lighter font-medium mb-6">
                  <Award className="w-3.5 h-3.5 text-gold" />
                  Beauté naturelle inspirée de la nature
                </span>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-marron leading-tight mb-4">
                  Crème Anti-Âge
                  <br />
                  <span className="text-gold">Naturelle</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-gold font-medium tracking-wider uppercase mb-4">
                  Datélys by I&C
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-base text-marron-lighter mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Formulée à partir d&apos;ingrédients naturels soigneusement sélectionnés, notamment l&apos;huile et la poudre de noyaux de dattes, reconnues pour leurs propriétés riches en antioxydants et en nutriments essentiels.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
                  >
                    <WhatsAppIcon size={18} />
                    Commander via WhatsApp
                  </a>
                  <a href="#about" className="text-sm text-marron-lighter hover:text-marron transition-colors border-b border-marron-100 pb-0.5">
                    Découvrir
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="mt-12 flex items-center justify-center lg:justify-start gap-10">
                  {[
                    { num: "5K+", label: "Clientes satisfaites" },
                    { num: "100%", label: "Naturelle" },
                    { num: "4.9", label: "Évaluation" },
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl font-bold text-marron">{s.num}</div>
                      <div className="text-xs text-marron-lighter mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* 3D Product */}
            <motion.div style={{ y: productY, opacity: productOpacity }} className="order-1 lg:order-2 flex justify-center">
              <Product3D />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5 text-marron-lighter/40" />
          </motion.div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1">
              <FadeIn>
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-beige to-marron-50 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-36 h-36 mx-auto mb-5 relative"
                    >
                      <div className="absolute inset-0 rounded-full border-2 border-dashed border-marron-100/40" />
                      <div className="absolute inset-3 rounded-full border border-gold/30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image src="/logo.png" alt="Datélys" width={100} height={100} />
                      </div>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-marron">Datélys</h3>
                    <p className="text-marron-lighter text-sm mt-1">Crème Anti-Âge Naturelle</p>
                    <p className="text-gold text-xs mt-1 font-medium tracking-wider">by I&C</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="order-1 lg:order-2">
              <FadeIn>
                <span className="text-gold text-xs font-medium tracking-widest uppercase mb-3 block">Notre Produit</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-3xl sm:text-4xl font-bold text-marron mb-5 leading-tight">
                  Une beauté naturelle<br />inspirée de la nature
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-marron-lighter leading-relaxed mb-5 text-[15px]">
                  Notre crème anti-âge est formulée à partir d&apos;ingrédients naturels soigneusement sélectionnés, notamment l&apos;huile et la poudre de noyaux de dattes, reconnues pour leurs propriétés riches en antioxydants et en nutriments essentiels pour la peau.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-marron-lighter leading-relaxed mb-8 text-[15px]">
                  Chaque ingrédient a été choisi avec le plus grand soin pour garantir l&apos;efficacité maximale et la sécurité. Datélys n&apos;est pas simplement un produit cosmétique, c&apos;est une expérience de luxe complète qui redonne vitalité et jeunesse à votre peau.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-2">
                  {["Laboratoire", "100% Naturel", "Résultats prouvés", "Sans parabènes"].map((tag) => (
                    <span key={tag} className="bg-beige text-marron px-4 py-1.5 rounded-full text-xs font-medium">{tag}</span>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BENEFITS ═══ */}
      <section id="benefits" className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-gold text-xs font-medium tracking-widest uppercase mb-3 block">Avantages</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-marron mb-4">Pourquoi Datélys ?</h2>
              <p className="text-marron-lighter max-w-lg mx-auto text-[15px]">Une formule avancée conçue avec soin pour offrir à votre peau tout ce dont elle a besoin</p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="bg-white rounded-2xl p-6 h-full border border-marron-50 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-beige flex items-center justify-center text-marron-lighter mb-4">{b.icon}</div>
                  <h3 className="text-base font-bold text-marron mb-2">{b.title}</h3>
                  <p className="text-marron-lighter text-sm leading-relaxed">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INGREDIENTS ═══ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-gold text-xs font-medium tracking-widest uppercase mb-3 block">Ingrédients</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-marron mb-4">La pureté de la nature</h2>
              <p className="text-marron-lighter max-w-lg mx-auto text-[15px]">Les meilleurs ingrédients naturels pour des résultats optimaux</p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ingredients.map((ing, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center bg-cream rounded-2xl p-6 border border-marron-50 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-beige flex items-center justify-center text-marron-lighter">{ing.icon}</div>
                  <h3 className="font-bold text-marron mb-2 text-[15px]">{ing.name}</h3>
                  <p className="text-marron-lighter text-sm leading-relaxed">{ing.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section id="testimonials" className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-gold text-xs font-medium tracking-widest uppercase mb-3 block">Témoignages</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-marron mb-4">Ce que disent nos clientes</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-marron-50 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-marron-lighter text-sm leading-relaxed flex-1 mb-5">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-beige flex items-center justify-center">
                      <span className="text-marron font-bold text-xs">{t.name.charAt(0)}</span>
                    </div>
                    <span className="font-medium text-marron text-sm">{t.name}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHATSAPP CTA ═══ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-marron to-marron-light rounded-3xl p-10 sm:p-14 text-cream">
            <Image src="/logo.png" alt="Datélys" width={80} height={80} className="mx-auto mb-6 rounded-full bg-white/10 p-2" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Prête à essayer Datélys ?</h2>
            <p className="text-cream/70 mb-8 text-[15px] leading-relaxed">
              Commandez votre crème Datélys maintenant via WhatsApp et nous vous livrons en un temps record. Livraison dans toutes les wilayas d&apos;Algérie.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-green-500 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-green-400 transition-colors shadow-lg"
            >
              <WhatsAppIcon size={20} />
              Commander via WhatsApp
            </a>
            <p className="text-cream/40 text-xs mt-4">Livraison gratuite pour les commandes de plus de 3000 DA</p>
          </div>
        </FadeIn>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-gold text-xs font-medium tracking-widest uppercase mb-3 block">Contact</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-marron mb-4">Nous sommes là pour vous</h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: <Phone className="w-5 h-5" />, title: "Téléphone", value: "+213 555 123 456", href: "tel:+213555123456" },
              { icon: <Mail className="w-5 h-5" />, title: "Email", value: "contact@datelys.dz", href: "mailto:contact@datelys.dz" },
              { icon: <MapPin className="w-5 h-5" />, title: "Adresse", value: "Alger, Algérie", href: "#" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <a href={item.href} className="block text-center bg-white rounded-2xl p-6 border border-marron-50 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 mx-auto mb-3 rounded-xl bg-beige flex items-center justify-center text-marron-lighter">{item.icon}</div>
                  <h4 className="font-medium text-marron text-sm mb-1">{item.title}</h4>
                  <p className="text-marron-lighter text-sm">{item.value}</p>
                </a>
              </FadeIn>
            ))}
          </div>

          {/* Social Media */}
          <FadeIn delay={0.3}>
            <div className="flex items-center justify-center gap-4 mt-12">
              <span className="text-sm text-marron-lighter mr-2">Suivez-nous :</span>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-beige flex items-center justify-center text-marron-lighter hover:bg-marron hover:text-cream transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-marron text-cream py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Image src="/logo.png" alt="Datélys" width={32} height={32} className="rounded-full" />
                <div className="leading-none">
                  <span className="text-lg font-bold tracking-wide">Datélys</span>
                  <span className="block text-[10px] text-gold font-medium tracking-widest uppercase">by I&C</span>
                </div>
              </div>
              <p className="text-cream/50 text-sm leading-relaxed">Crème anti-âge naturelle à base de noyaux de dattes. Qualité exceptionnelle au coeur de la nature algérienne.</p>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-sm text-cream/70">Liens</h4>
              <ul className="space-y-2">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-cream/50 hover:text-cream transition-colors text-sm">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-sm text-cream/70">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-cream/50 text-sm">
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  +213 555 123 456
                </li>
                <li className="flex items-center gap-2 text-cream/50 text-sm">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  contact@datelys.dz
                </li>
                <li className="flex items-center gap-2 text-cream/50 text-sm">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  Alger, Algérie
                </li>
              </ul>

              <div className="flex gap-2 mt-4">
                {socialLinks.map((s) => (
                  <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center text-cream/50 hover:bg-cream/20 hover:text-cream transition-colors">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-cream/10 pt-6 text-center">
            <p className="text-cream/30 text-xs">&copy; {new Date().getFullYear()} Datélys by I&C. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* ═══ FLOATING WHATSAPP ═══ */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon size={26} />
      </a>
    </div>
  );
}
