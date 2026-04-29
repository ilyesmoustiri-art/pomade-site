'use client'

import { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import {
  Shield,
  Leaf,
  Sparkles,
  Hand,
  ChevronDown,
  MessageCircle,
  Menu,
  X,
  Star,
  Clock,
  Droplets,
  Award,
  Heart,
  ArrowLeft,
  Zap,
  Phone,
  MapPin,
  Mail,
  ArrowUp,
  Share2,
  User,
  Quote,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════════
   SVG SOCIAL ICONS (Instagram, X, TikTok, Snapchat)
   ═══════════════════════════════════════════════════════ */
function InstagramIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function XTwitterIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function TikTokIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.81a8.27 8.27 0 0 0 4.76 1.5V6.93a4.84 4.84 0 0 1-1-.24z" />
    </svg>
  )
}

function SnapchatIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.017 2C6.396 2 2.574 5.76 2.574 10.26c0 2.09 1.084 3.99 2.88 5.38-.037.084-.096.226-.143.357-.178.488-.244.876-.244 1.122 0 .542.332.78.628.78.116 0 .238-.032.358-.097.078-.04.273-.177.505-.402.34-.33.765-.516 1.163-.516.17 0 .33.024.472.067.41.124.746.38 1.008.674.622.703 1.325 1.09 2.063 1.09h.02c.737 0 1.44-.387 2.062-1.09.263-.295.6-.55 1.01-.674.141-.043.3-.067.47-.067.398 0 .824.186 1.164.516.232.225.427.362.505.402.12.065.242.097.358.097.297 0 .628-.238.628-.78 0-.246-.066-.634-.244-1.122-.047-.13-.106-.273-.143-.357 1.796-1.39 2.88-3.29 2.88-5.38C21.424 5.76 17.602 2 12.017 2z" />
    </svg>
  )
}

function FacebookIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════
   SPLASH / LOADING SCREEN
   ═══════════════════════════════════════════════════════ */
function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2800)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] bg-kernel flex items-center justify-center"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-32 h-32 rounded-full border-2 border-kernel-lighter/30 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'backOut' }}
            className="w-24 h-24 rounded-full border-2 border-kernel-100/20 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: 'backOut' }}
              className="w-16 h-16 rounded-full bg-kernel-lighter/10 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9, ease: 'easeOut' }}
              >
                <Leaf className="w-8 h-8 text-kernel-100" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center"
        >
          <h1 className="text-3xl font-bold text-kernel-100 tracking-wider">ثبات</h1>
        </motion.div>

        <motion.div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-kernel-lighter/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
            className="w-full h-full bg-kernel-100/60 rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════
   FLOATING PARTICLES (Hydration-Safe)
   ═══════════════════════════════════════════════════════ */
function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: 2 + ((i * 7 + 3) % 5), // deterministic pseudo-random
        x: ((i * 13 + 7) % 100),
        y: ((i * 17 + 11) % 100),
        duration: 6 + ((i * 3) % 8),
        delay: ((i * 5) % 4),
        opacity: 0.05 + ((i * 3) % 15) / 100,
      })),
    []
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-kernel-100"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════
   TEXT REVEAL (Word by Word - Arabic Safe)
   ═══════════════════════════════════════════════════════ */
function TextReveal({
  text,
  className = '',
  delay = 0,
  stagger = 0.1,
}: {
  text: string
  className?: string
  delay?: number
  stagger?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const words = text.split(' ')

  return (
    <div ref={ref} className={className}>
      {words.map((word, wordIdx) => (
        <motion.span
          key={wordIdx}
          initial={{ y: '100%', opacity: 0 }}
          animate={isInView ? { y: '0%', opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: delay + wordIdx * stagger,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════
   ANIMATED SECTION WRAPPER
   ═══════════════════════════════════════════════════════ */
function FadeSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: -50 },
    right: { y: 0, x: 50 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, ...directions[direction] }
      }
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════
   MAGNETIC BUTTON
   ═══════════════════════════════════════════════════════ */
function MagneticButton({
  children,
  className = '',
  href = '',
}: {
  children: React.ReactNode
  className?: string
  href: string
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      x.set((e.clientX - centerX) * 0.25)
      y.set((e.clientY - centerY) * 0.25)
    },
    [x, y]
  )

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.a>
  )
}

/* ═══════════════════════════════════════════════════════
   3D TILT CARD
   ═══════════════════════════════════════════════════════ */
function TiltCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      rotateY.set(((e.clientX - centerX) / (rect.width / 2)) * 8)
      rotateX.set(-((e.clientY - centerY) / (rect.height / 2)) * 8)
    },
    [rotateX, rotateY]
  )

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0)
    rotateY.set(0)
  }, [rotateX, rotateY])

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════
   COUNTER ANIMATION
   ═══════════════════════════════════════════════════════ */
function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2,
}: {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = target
    const increment = end / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [isInView, target, duration])

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

/* ═══════════════════════════════════════════════════════
   MARQUEE TICKER
   ═══════════════════════════════════════════════════════ */
function Marquee() {
  const items = [
    'ثبات طبيعي',
    'نواة التمر',
    'بدون مواد كيميائية',
    'مظهر لا يُنسى',
    'منتج فاخر',
    'طبيعي 100%',
  ]

  return (
    <div className="py-5 bg-kernel overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-kernel-100/40 text-lg md:text-xl font-light tracking-[0.2em] uppercase flex items-center gap-12"
          >
            {item}
            <Sparkles className="w-3 h-3 text-kernel-100/20" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════
   CONSTANTS & SOCIAL LINKS
   ═══════════════════════════════════════════════════════ */
const WHATSAPP_LINK = 'https://wa.me/966500000000'

const SOCIAL_LINKS = [
  { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com/thabat', color: 'hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-500' },
  { name: 'X (Twitter)', icon: XTwitterIcon, href: 'https://x.com/thabat', color: 'hover:bg-gray-900' },
  { name: 'TikTok', icon: TikTokIcon, href: 'https://tiktok.com/@thabat', color: 'hover:bg-black' },
  { name: 'Snapchat', icon: SnapchatIcon, href: 'https://snapchat.com/add/thabat', color: 'hover:bg-yellow-400' },
  { name: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com/thabat', color: 'hover:bg-blue-600' },
]

/* ═══════════════════════════════════════════════════════
   SCROLL PROGRESS BAR
   ═══════════════════════════════════════════════════════ */
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 0.95], ['0%', '100%'])

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 h-[3px] bg-kernel z-[60] origin-right"
      style={{ scaleX }}
    />
  )
}

/* ═══════════════════════════════════════════════════════
   FLOATING SOCIAL SIDEBAR
   ═══════════════════════════════════════════════════════ */
function SocialSidebar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
        >
          {SOCIAL_LINKS.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 3.5 + i * 0.1 }}
              whileHover={{ scale: 1.15, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`w-11 h-11 rounded-full bg-kernel/90 backdrop-blur-sm text-kernel-50 flex items-center justify-center shadow-lg transition-colors duration-300 ${social.color}`}
              title={social.name}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ═══════════════════════════════════════════════════════
   FLOATING WHATSAPP BUTTON
   ═══════════════════════════════════════════════════════ */
function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 left-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl group"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-[#25D366]/30"
          />
          <MessageCircle className="w-8 h-8 text-white relative z-10" />
          {/* Tooltip */}
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute left-20 bg-white text-kernel text-sm font-medium px-4 py-2 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            تواصل معنا
            <span className="absolute top-1/2 -translate-y-1/2 right-[-6px] w-3 h-3 bg-white rotate-45" />
          </motion.span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}

/* ═══════════════════════════════════════════════════════
   BACK TO TOP BUTTON
   ═══════════════════════════════════════════════════════ */
function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-kernel text-kernel-50 rounded-full flex items-center justify-center shadow-xl hover:bg-kernel-light transition-colors"
          aria-label="العودة للأعلى"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

/* ═══════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 3, ease: 'easeOut' }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-10 h-10 rounded-full bg-kernel flex items-center justify-center"
          >
            <Leaf className="w-5 h-5 text-kernel-50" />
          </motion.div>
          <span className="text-xl font-bold text-kernel tracking-wide">
            ثبات
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {['قصتنا', 'المميزات', 'المنتج', 'الاستخدام', 'آراء العملاء'].map((text, i) => (
            <motion.a
              key={text}
              href={`#${['story', 'features', 'products', 'howto', 'reviews'][i]}`}
              whileHover={{ y: -2 }}
              className="relative text-sm text-kernel-lighter hover:text-kernel transition-colors duration-300"
            >
              {text}
              <motion.span
                className="absolute -bottom-1 right-0 left-0 h-0.5 bg-kernel rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-kernel hover:bg-kernel-light text-kernel-50 rounded-full px-6 py-2.5 transition-all duration-300 hover:shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            اطلب الآن
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-kernel p-2"
          aria-label="القائمة"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/98 backdrop-blur-xl border-t border-kernel-100 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {['قصتنا', 'المميزات', 'المنتج', 'الاستخدام', 'آراء العملاء'].map((text, i) => (
                <motion.a
                  key={text}
                  href={`#${['story', 'features', 'products', 'howto', 'reviews'][i]}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-kernel-lighter hover:text-kernel py-2 transition-colors"
                >
                  {text}
                </motion.a>
              ))}

              {/* Social links in mobile menu */}
              <div className="flex items-center gap-4 pt-4 border-t border-kernel-100">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-kernel/10 flex items-center justify-center text-kernel hover:bg-kernel hover:text-kernel-50 transition-all"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-kernel hover:bg-kernel-light text-kernel-50 rounded-full w-full py-2.5 mt-2 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                اطلب الآن
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

/* ═══════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════ */
function HeroSection() {
  const { scrollYProgress } = useScroll()
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: 'url(/hero-bg.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>

      <FloatingParticles />

      <motion.div style={{ y: textY, opacity }} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="mb-6"
        >
          <span className="inline-block text-kernel-100/90 text-sm md:text-base tracking-[0.4em] uppercase font-light">
            من قلب الطبيعة
          </span>
        </motion.div>

        <TextReveal
          text="ثبات طبيعي. مظهر لا يُنسى."
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
          delay={3.2}
          stagger={0.04}
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.5 }}
          className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          مستخلص نقي من نواة التمر، صُنع ليعكس أصالتك الطبيعية ويمنحك ثباتًا يدوم طوال اليوم
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            href={WHATSAPP_LINK}
            className="bg-kernel-50 text-kernel hover:bg-white rounded-full px-10 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-2xl inline-flex items-center"
          >
            <MessageCircle className="w-5 h-5 ml-2" />
            اطلب الآن
          </MagneticButton>
          <motion.a
            href="#story"
            whileHover={{ y: -3 }}
            className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm"
          >
            اكتشف المزيد
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   STATS / COUNTER SECTION
   ═══════════════════════════════════════════════════════ */
function StatsSection() {
  const stats = [
    { value: 100, suffix: '%', label: 'طبيعي', icon: Leaf },
    { value: 24, suffix: 'h', label: 'ثبات يدوم', icon: Clock },
    { value: 5000, suffix: '+', label: 'عميل سعيد', icon: Heart },
    { value: 0, suffix: '', label: 'مواد كيميائية', icon: Shield },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeSection key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-kernel-50/50 transition-colors"
              >
                <stat.icon className="w-7 h-7 text-kernel mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-kernel mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-kernel-lighter text-sm">{stat.label}</p>
              </motion.div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   STORY SECTION
   ═══════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section id="story" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          borderRadius: ['30%', '50%', '30%'],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-kernel/[0.03]"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          borderRadius: ['40%', '30%', '40%'],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-32 -left-32 w-80 h-80 bg-kernel/[0.04]"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeSection>
          <div className="text-center max-w-3xl mx-auto">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: '60px' }}
              viewport={{ once: true }}
              className="block h-px bg-kernel mx-auto mb-8"
            />
            <span className="inline-block text-kernel-lighter text-sm tracking-[0.2em] uppercase font-light mb-6">
              القصة
            </span>
            <TextReveal
              text="من نواة التمر إلى ثبات لا ينتهي"
              className="text-3xl md:text-5xl font-bold text-kernel mb-8 leading-tight"
              stagger={0.03}
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-kernel-lighter leading-loose mb-6"
            >
              مستخلص من نواة التمر، ليمنحك ثباتًا طبيعيًا وأناقة تدوم. كل قطرة تحمل
              قرونًا من التراث والعناية بالشعر، مُصنّعة بعناية فائقة لتقدم لك تجربة
              فريدة تجمع بين الأصالة والجودة العصرية.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl text-kernel-lighter leading-loose"
            >
              اخترنا نواة التمر لأنها كنز طبيعي غني بالعناصر المغذية التي تعمل على
              تقوية الشعر وتثبيته بشكل آمن وفعّال، دون أي مواد كيميائية ضارة.
            </motion.p>
          </div>
        </FadeSection>

        <FadeSection delay={0.3}>
          <div className="flex items-center justify-center mt-16">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '64px' }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="h-px bg-kernel-100"
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="mx-4 w-3 h-3 rounded-full bg-kernel"
            />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '64px' }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="h-px bg-kernel-100"
            />
          </div>
        </FadeSection>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   FEATURES SECTION (3D Tilt Cards)
   ═══════════════════════════════════════════════════════ */
const features = [
  {
    icon: Clock,
    title: 'ثبات طويل',
    description:
      'تركيبة متطورة تضمن ثباتًا يدوم طوال اليوم دون الحاجة لإعادة التطبيق، حتى في أقسى الظروف.',
  },
  {
    icon: Shield,
    title: 'بدون ضرر',
    description:
      'خالٍ من المواد الكيميائية الضارة، يحافظ على صحة شعرك ويساهم في تغذيته بكل أمان.',
  },
  {
    icon: Leaf,
    title: 'مظهر طبيعي',
    description:
      'مستخلص نقي 100% من نواة التمر، يمنحك لمعانًا وملمسًا طبيعيًا لا يُضاهى.',
  },
  {
    icon: Hand,
    title: 'سهل الاستخدام',
    description:
      'قوام كريمي سلس يُوزَّع بسهولة تامة، يذوب بين أصابعك ويُشكِّل بلمسة واحدة.',
  },
]

function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeSection>
          <div className="text-center mb-16">
            <span className="inline-block text-kernel-lighter text-sm tracking-[0.2em] uppercase font-light mb-6">
              لماذا ثبات؟
            </span>
            <TextReveal
              text="مميزات تجعله مختلفًا"
              className="text-3xl md:text-5xl font-bold text-kernel"
              stagger={0.04}
            />
          </div>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FadeSection key={index} delay={index * 0.12}>
              <TiltCard className="perspective-[1000px]">
                <div className="group border-none shadow-sm hover:shadow-2xl transition-all duration-500 bg-kernel-50/50 hover:bg-white rounded-2xl overflow-hidden cursor-default">
                  <div className="p-8 md:p-10">
                    <div className="flex items-start gap-5">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="flex-shrink-0 w-14 h-14 rounded-2xl bg-kernel/10 group-hover:bg-kernel flex items-center justify-center transition-all duration-500"
                        style={{ transform: 'translateZ(30px)' }}
                      >
                        <feature.icon className="w-7 h-7 text-kernel group-hover:text-kernel-50 transition-colors duration-500" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-kernel mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-kernel-lighter leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   CREAM PRODUCT SHOWCASE
   ═══════════════════════════════════════════════════════ */
function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const productY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const productRotate = useTransform(scrollYProgress, [0, 1], [-5, 5])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])

  return (
    <section id="products" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <FadeSection>
          <div className="text-center mb-16">
            <span className="inline-block text-kernel-lighter text-sm tracking-[0.2em] uppercase font-light mb-6">
              المنتج
            </span>
            <TextReveal
              text="كريمة ثبات الفاخرة"
              className="text-3xl md:text-5xl font-bold text-kernel"
              stagger={0.04}
            />
          </div>
        </FadeSection>

        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeSection direction="right" delay={0.2}>
            <motion.div
              style={{ y: productY, rotate: productRotate, scale }}
              className="relative"
            >
              <div className="relative mx-auto w-72 md:w-80 lg:w-96">
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 60px rgba(62,39,35,0.1)',
                      '0 0 100px rgba(62,39,35,0.2)',
                      '0 0 60px rgba(62,39,35,0.1)',
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-4 rounded-full bg-kernel/10 blur-3xl"
                />
                <motion.img
                  src="/cream-product.png"
                  alt="كريمة ثبات - مستخلص نواة التمر"
                  className="relative w-full h-auto rounded-3xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 bg-kernel text-kernel-50 text-xs font-bold px-3 py-2 rounded-full shadow-lg"
                >
                  <Zap className="w-3 h-3 inline-block ml-1" />
                  جديد
                </motion.div>
              </div>
            </motion.div>
          </FadeSection>

          <FadeSection direction="left" delay={0.4}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-kernel mb-4">
                  كريمة التصفيف الطبيعية
                </h3>
                <p className="text-kernel-lighter leading-loose text-lg">
                  تركيبة كريمية فاخرة مستخلصة من نواة التمر الملكي، تمنح شعرك ثباتًا
                  استثنائيًا وملمسًا طبيعيًا ناعمًا يدوم طوال اليوم.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Leaf, text: 'مكونات طبيعية 100% من نواة التمر' },
                  { icon: Droplets, text: 'تركيبة كريمية غنية وغير لزجة' },
                  { icon: Shield, text: 'لا يترك أثرًا أو بقايا على الشعر' },
                  { icon: Sparkles, text: 'رائحة طبيعية خفيفة ومنعشة' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-kernel/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-kernel" />
                    </div>
                    <span className="text-kernel-lighter">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <FadeSection delay={0.8}>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <MagneticButton
                    href={WHATSAPP_LINK}
                    className="bg-kernel text-kernel-50 hover:bg-kernel-light rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl inline-flex items-center justify-center"
                  >
                    <MessageCircle className="w-5 h-5 ml-2" />
                    اطلب الآن
                  </MagneticButton>
                  <motion.a
                    href="#features"
                    whileHover={{ x: -5 }}
                    className="text-kernel hover:text-kernel-light transition-colors inline-flex items-center gap-2 font-medium"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    المميزات
                  </motion.a>
                </div>
              </FadeSection>
            </div>
          </FadeSection>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   HOW TO USE SECTION
   ═══════════════════════════════════════════════════════ */
function HowToUseSection() {
  const steps = [
    {
      step: '01',
      title: 'اغسل شعرك',
      description: 'اغسل شعرك بالشامبو وجففه جيدًا بالمنشفة حتى يصبح رطبًا وليس مبللاً تمامًا.',
      icon: Droplets,
    },
    {
      step: '02',
      title: 'خذ كمية مناسبة',
      description: 'ضع كمية بحجم حبة البازلاء من كريمة ثبات على أطراف أصابعك وافركها بلطف.',
      icon: Hand,
    },
    {
      step: '03',
      title: 'وزع على الشعر',
      description: 'وزع الكريمة بالتساوي على شعرك من الجذور حتى الأطراف مع التدليك بحركات دائرية.',
      icon: Sparkles,
    },
    {
      step: '04',
      title: 'صفف كما تريد',
      description: 'صفف شعرك بالشكل المفضل لك واتركه يجف طبيعيًا أو استخدم مجفف الشعر للثبات الأقصى.',
      icon: Award,
    },
  ]

  return (
    <section id="howto" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          borderRadius: ['40%', '55%', '40%'],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-72 h-72 bg-kernel/[0.03]"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeSection>
          <div className="text-center mb-16">
            <span className="inline-block text-kernel-lighter text-sm tracking-[0.2em] uppercase font-light mb-6">
              سهل الاستخدام
            </span>
            <TextReveal
              text="طريقة الاستخدام في 4 خطوات"
              className="text-3xl md:text-5xl font-bold text-kernel"
              stagger={0.04}
            />
          </div>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <FadeSection key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -left-4 w-8 border-t-2 border-dashed border-kernel-100/50" />
                )}

                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 text-center h-full">
                  {/* Step number */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-full bg-kernel flex items-center justify-center text-kernel-50 font-bold text-xl"
                  >
                    {item.step}
                  </motion.div>

                  <item.icon className="w-8 h-8 text-kernel mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-kernel mb-3">{item.title}</h3>
                  <p className="text-kernel-lighter text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   TESTIMONIALS / REVIEWS SECTION
   ═══════════════════════════════════════════════════════ */
function TestimonialsSection() {
  const reviews = [
    {
      name: 'أحمد محمد',
      location: 'الرياض',
      rating: 5,
      text: 'منتج رائع! جربت العديد من منتجات التصفيف لكن ثبات مختلف تمامًا. الثبات يدوم طوال اليوم والشعر يبدو طبيعيًا جدًا.',
      initials: 'أم',
    },
    {
      name: 'خالد العتيبي',
      location: 'جدة',
      rating: 5,
      text: 'أخيراً وجدت منتج طبيعي يعطيني الثبات اللي أبحث عنه. الرائحة خفيفة ومميزة والتركيبة ما تسبب أي ضرر للشعر.',
      initials: 'خع',
    },
    {
      name: 'سعود الشمري',
      location: 'الدمام',
      rating: 5,
      text: 'الكريمة سهلة الاستخدام جدًا ونتائجها تظهر من أول استخدام. أنصح فيها بشدة لكل اللي يبون مظهر أنيق وثبات طويل.',
      initials: 'سش',
    },
    {
      name: 'فهد القحطاني',
      location: 'مكة المكرمة',
      rating: 4,
      text: 'جودة عالية وثبات ممتاز. حبيت إنه طبيعي وبدون مواد كيميائية. صار المنتج الأساسي عندي للتصفيف اليومي.',
      initials: 'فق',
    },
    {
      name: 'عبدالله الحربي',
      location: 'المدينة المنورة',
      rating: 5,
      text: 'أفضل منتج تصفيف استخدمته! الثبات يستمر لأكثر من 24 ساعة والشعر يبدو صحي ولامع. شكرًا ثبات!',
      initials: 'عح',
    },
    {
      name: 'مازن الدوسري',
      location: 'الخبر',
      rating: 5,
      text: 'طلبت الكريمة وكنت متشكك فيها، بس بعد ما استخدمتها صرت من أكبر المعجبين بيها. التوصيل كان سريع أيضًا.',
      initials: 'مد',
    },
  ]

  return (
    <section id="reviews" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <FadeSection>
          <div className="text-center mb-16">
            <span className="inline-block text-kernel-lighter text-sm tracking-[0.2em] uppercase font-light mb-6">
              آراء عملائنا
            </span>
            <TextReveal
              text="ماذا يقولون عن ثبات؟"
              className="text-3xl md:text-5xl font-bold text-kernel"
              stagger={0.04}
            />
          </div>
        </FadeSection>

        {/* Average rating summary */}
        <FadeSection delay={0.2}>
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-6 h-6 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <p className="text-kernel-lighter text-lg">
              تقييم <span className="font-bold text-kernel">4.9</span> من أصل 5
              <span className="mx-2">|</span>
              <span className="font-bold text-kernel">+5000</span> عميل سعيد
            </p>
          </div>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <FadeSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-kernel-50/40 rounded-2xl p-6 md:p-8 hover:bg-white hover:shadow-xl transition-all duration-500 group h-full flex flex-col"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-kernel-100/40 mb-4 group-hover:text-kernel/20 transition-colors" />

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-kernel-100/30'
                      }`}
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-kernel-lighter leading-relaxed mb-6 flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-kernel-100/30">
                  <div className="w-10 h-10 rounded-full bg-kernel flex items-center justify-center text-kernel-50 text-sm font-bold">
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-bold text-kernel text-sm">{review.name}</p>
                    <p className="text-kernel-lighter text-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {review.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   PRODUCT GALLERY (with hover reveal)
   ═══════════════════════════════════════════════════════ */
function GallerySection() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <FadeSection>
          <div className="text-center mb-16">
            <span className="inline-block text-kernel-lighter text-sm tracking-[0.2em] uppercase font-light mb-6">
              معرض الصور
            </span>
            <TextReveal
              text="شاهد بنفسك"
              className="text-3xl md:text-5xl font-bold text-kernel"
              stagger={0.04}
            />
          </div>
        </FadeSection>

        <FadeSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/product.png', label: 'عبوة ثبات' },
              { src: '/cream-product.png', label: 'كريمة ثبات' },
              { src: '', label: 'قريبًا', sublabel: 'منتجات جديدة قادمة' },
            ].map((item, i) => (
              <FadeSection key={i} delay={0.2 + i * 0.15}>
                <motion.div
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 aspect-[3/4] cursor-pointer"
                >
                  {item.src ? (
                    <>
                      <img
                        src={item.src}
                        alt={item.label}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-kernel/80 via-kernel/20 to-transparent flex items-end p-8"
                      >
                        <div className="text-white">
                          <h4 className="text-xl font-bold mb-1">{item.label}</h4>
                          <p className="text-white/70 text-sm">عرض التفاصيل</p>
                        </div>
                      </motion.div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-kernel flex items-center justify-center">
                      <div className="text-center p-8">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                          className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-dashed border-kernel-lighter/30 flex items-center justify-center"
                        >
                          <Sparkles className="w-8 h-8 text-kernel-100/30" />
                        </motion.div>
                        <p className="text-kernel-100/60 text-sm font-light">
                          {item.label}
                        </p>
                        <p className="text-kernel-100/30 text-xs mt-2">
                          {item.sublabel}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </FadeSection>
            ))}
          </div>
        </FadeSection>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   QUALITY BADGES
   ═══════════════════════════════════════════════════════ */
function QualitySection() {
  const badges = [
    { icon: Leaf, label: '100% طبيعي' },
    { icon: Droplets, label: 'بدون مواد كيميائية' },
    { icon: Star, label: 'جودة عالية' },
    { icon: Shield, label: 'آمن على الشعر' },
  ]

  return (
    <section className="py-16 bg-kernel relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <FadeSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex flex-col items-center text-center gap-3 py-4"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <badge.icon className="w-8 h-8 text-kernel-100" />
                </motion.div>
                <span className="text-kernel-100 text-sm font-medium tracking-wide">
                  {badge.label}
                </span>
              </motion.div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   CTA SECTION
   ═══════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: 'url(/hero-bg.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-kernel/80 to-kernel/95" />

      <FloatingParticles />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <FadeSection>
          <motion.div
            animate={{
              boxShadow: [
                '0 0 30px rgba(255,255,255,0.05)',
                '0 0 60px rgba(255,255,255,0.1)',
                '0 0 30px rgba(255,255,255,0.05)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block p-1 rounded-3xl mb-8"
          >
            <Award className="w-12 h-12 text-kernel-100" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            جاهز لتجربة الثبات الطبيعي؟
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            اطلب عبر واتساب الآن واحصل على منتجك مباشرة. نوصلك أينما كنت.
          </p>
          <MagneticButton
            href={WHATSAPP_LINK}
            className="bg-white text-kernel hover:bg-kernel-50 rounded-full px-12 py-7 text-lg font-bold transition-all duration-300 hover:shadow-2xl inline-flex items-center"
          >
            <MessageCircle className="w-5 h-5 ml-2" />
            اطلب الآن عبر WhatsApp
          </MagneticButton>
        </FadeSection>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════
   FOOTER (Enhanced with Social Links)
   ═══════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="bg-kernel text-kernel-100">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 rounded-full bg-kernel-lighter/20 flex items-center justify-center"
              >
                <Leaf className="w-5 h-5 text-kernel-100" />
              </motion.div>
              <span className="text-2xl font-bold text-kernel-100">ثبات</span>
            </div>
            <p className="text-kernel-100/60 text-sm leading-relaxed mb-6">
              مستخلص طبيعي من نواة التمر، صُنع بعناية ليمنحك ثباتًا وأناقة تدوم طوال اليوم. منتج فاخر 100% طبيعي.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-kernel-lighter/15 flex items-center justify-center text-kernel-100/70 hover:bg-kernel-lighter/30 hover:text-kernel-100 transition-all duration-300"
                  title={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-kernel-100 font-bold mb-6 text-lg">روابط سريعة</h4>
            <ul className="space-y-3">
              {[
                { text: 'قصتنا', href: '#story' },
                { text: 'المميزات', href: '#features' },
                { text: 'المنتج', href: '#products' },
                { text: 'طريقة الاستخدام', href: '#howto' },
                { text: 'آراء العملاء', href: '#reviews' },
              ].map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-sm text-kernel-100/60 hover:text-kernel-100 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-kernel-lighter/40" />
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-kernel-100 font-bold mb-6 text-lg">تواصل معنا</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-kernel-100/60 hover:text-kernel-100 transition-colors duration-300 flex items-center gap-3"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  واتساب: +966 50 000 0000
                </a>
              </li>
              <li>
                <a
                  href="tel:+966500000000"
                  className="text-sm text-kernel-100/60 hover:text-kernel-100 transition-colors duration-300 flex items-center gap-3"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  هاتف: +966 50 000 0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@thabat.com"
                  className="text-sm text-kernel-100/60 hover:text-kernel-100 transition-colors duration-300 flex items-center gap-3"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  info@thabat.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-kernel-100/60">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                المملكة العربية السعودية
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-kernel-100 font-bold mb-6 text-lg">اشترك معنا</h4>
            <p className="text-sm text-kernel-100/60 mb-4 leading-relaxed">
              تابعنا على مواقع التواصل الاجتماعي لتكون أول من يعرف عن العروض والمنتجات الجديدة.
            </p>
            <div className="space-y-3">
              <MagneticButton
                href={WHATSAPP_LINK}
                className="bg-[#25D366] text-white hover:bg-[#128C7E] rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 inline-flex items-center w-full justify-center"
              >
                <MessageCircle className="w-4 h-4 ml-2" />
                تواصل عبر واتساب
              </MagneticButton>
            </div>
            <div className="mt-4">
              <MagneticButton
                href="https://instagram.com/thabat"
                className="bg-gradient-to-l from-purple-600 to-pink-500 text-white rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 inline-flex items-center w-full justify-center"
              >
                <InstagramIcon className="w-4 h-4 ml-2" />
                تابعنا على انستغرام
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-kernel-lighter/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-kernel-100/40">
            &copy; {new Date().getFullYear()} ثبات. جميع الحقوق محفوظة.
          </p>

          {/* Social links row for mobile */}
          <div className="flex items-center gap-4 md:hidden">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-kernel-lighter/15 flex items-center justify-center text-kernel-100/60"
              >
                <social.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-kernel-100/40 hover:text-kernel-100/70 transition-colors"
            >
              سياسة الخصوصية
            </a>
            <a
              href="#"
              className="text-xs text-kernel-100/40 hover:text-kernel-100/70 transition-colors"
            >
              الشروط والأحكام
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ═══════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════ */
export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const handleSplashComplete = useCallback(() => setShowSplash(false), [])

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>

      <ScrollProgressBar />
      <SocialSidebar />
      <FloatingWhatsApp />
      <BackToTop />

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <Marquee />
          <StorySection />
          <StatsSection />
          <FeaturesSection />
          <ProductShowcase />
          <HowToUseSection />
          <TestimonialsSection />
          <QualitySection />
          <GallerySection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  )
}