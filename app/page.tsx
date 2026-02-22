'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import OpenStatus from '@/components/OpenStatus';

const categoryColors = [
  'bg-peach',
  'bg-yellow/30',
  'bg-sage/20',
  'bg-coral/10',
  'bg-yellow/20',
  'bg-sage/20',
];

const categories = [
  { emoji: '🧸', title: 'Peluches & Poupées', desc: 'Des compagnons doux pour petits et grands' },
  { emoji: '🎲', title: 'Jeux de société', desc: 'Des soirées famille inoubliables' },
  { emoji: '📚', title: 'Livres jeunesse', desc: 'Des histoires à dévorer sous la couette' },
  { emoji: '🧩', title: 'Puzzles', desc: 'Des heures de concentration et de plaisir' },
  { emoji: '🎭', title: 'Déguisements', desc: 'Devenez un super-héros, une fée…' },
  { emoji: '🎨', title: 'Loisirs créatifs', desc: 'Kits neufs pour éveiller la créativité' },
];

const stats = [
  { emoji: '⭐', number: '4 928', label: 'Avis Google', bg: 'bg-yellow/40' },
  { emoji: '🧸', number: '1 000+', label: 'Jouets en stock', bg: 'bg-peach' },
  { emoji: '📦', number: 'Chaque jour', label: 'Arrivages', bg: 'bg-sage/30' },
  { emoji: '🎉', number: 'Depuis 2019', label: 'On régale Bourges', bg: 'bg-coral/20' },
];

const benefits = [
  { emoji: '💯', title: 'Tout inspecté', desc: 'Chaque jouet contrôlé avant la vente' },
  { emoji: '💰', title: 'Jusqu\'à -80% vs neuf', desc: 'La qualité sans le prix fort' },
  { emoji: '📦', title: 'Arrivages quotidiens', desc: 'Chaque visite est une nouvelle surprise' },
  { emoji: '🌱', title: 'Écolo & malin', desc: 'Moins de déchets, plus de bonheur' },
  { emoji: '🤝', title: 'Conseil de Cécilia', desc: 'Elle connaît chaque article par cœur' },
  { emoji: '🚗', title: 'Parking gratuit', desc: 'Facile d\'accès, idéal avec les enfants' },
];

const testimonials = [
  {
    text: "Véritable caverne d'Ali Baba ! Cécilia connaît parfaitement ses produits et conseille avec passion.",
    author: 'Marie L.',
    stars: 5,
    bg: 'bg-peach',
  },
  {
    text: 'Les jouets sont en très bon état et les prix sont imbattables. On revient à chaque anniversaire !',
    author: 'Thomas R.',
    stars: 5,
    bg: 'bg-yellow/25',
  },
  {
    text: 'Une boutique superbe, une gérante vraiment sympathique. Le paradis pour les enfants !',
    author: 'Sophie M.',
    stars: 5,
    bg: 'bg-sage/20',
  },
  {
    text: "J'y vais régulièrement avec mes enfants. Les jouets sont toujours impeccables — pièces complètes, bien nettoyés. Cécilia nous a trouvé un LEGO introuvable ailleurs pour pas cher. On ne repart jamais les mains vides !",
    author: 'Laurence D.',
    stars: 5,
    bg: 'bg-coral/10',
  },
];

const howItWorks = [
  {
    n: '1',
    emoji: '🚶',
    title: 'On vient',
    desc: '16 Rue Coursarlon, Bourges. Parking gratuit dans la rue.',
  },
  {
    n: '2',
    emoji: '🔍',
    title: 'On choisit',
    desc: 'Des centaines de jouets soigneusement sélectionnés vous attendent.',
  },
  {
    n: '3',
    emoji: '😄',
    title: 'On repart heureux',
    desc: 'Prix imbattables et arrivages quotidiens pour toujours trouver la perle rare.',
  },
];

const faqs = [
  {
    q: 'Où se trouve ElfeJolo à Bourges ?',
    a: '16 Rue Coursarlon, 18000 Bourges. Parking gratuit dans la rue. Facilement accessible en voiture et à pied depuis le centre-ville.',
  },
  {
    q: 'Quels sont les horaires d\'ouverture ?',
    a: 'Mardi et mercredi : 10h–12h30 puis 14h30–18h30. Vendredi et samedi : 10h–18h30. Fermé lundi, jeudi et dimanche.',
  },
  {
    q: 'Les jouets sont-ils vraiment en bon état ?',
    a: 'Absolument. Cécilia inspecte personnellement chaque article. Seuls les jouets en très bon état, nettoyés et vérifiés, sont mis en vente. Les puzzles ont leurs pièces comptées, les jeux de société sont complets.',
  },
  {
    q: 'Comment vendre ou déposer mes jouets chez ElfeJolo ?',
    a: 'Apportez vos jeux et jouets en boutique durant les heures d\'ouverture. Cécilia les évalue sur place et propose soit un rachat immédiat, soit une mise en dépôt-vente. Vous pouvez appeler le 06 73 88 32 26 avant pour les gros volumes.',
  },
  {
    q: 'Y a-t-il du parking à proximité ?',
    a: 'Oui ! Stationnement gratuit dans la rue Coursarlon. Idéal quand vous venez avec des cartons à déposer ou que vous repartez avec de belles trouvailles.',
  },
  {
    q: 'Quels moyens de paiement acceptez-vous ?',
    a: 'Carte bancaire, espèces, chèques et paiement mobile sans contact (NFC).',
  },
];

function FloatingEmoji({ emoji, className }: { emoji: string; className: string }) {
  return (
    <div className={`absolute select-none pointer-events-none ${className}`}>
      {emoji}
    </div>
  );
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [ctaTitle, setCtaTitle] = useState('On vous attend ! 🎉');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const now = new Date();
    const fmt = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Paris',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    const parts = fmt.formatToParts(now);
    const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
    const weekdayMap: Record<string, number> = {
      Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
    };
    const day = weekdayMap[get('weekday')] ?? -1;
    const h = parseInt(get('hour')) % 24;
    const m = parseInt(get('minute'));
    const time = h * 60 + m;

    let isOpen = false;
    if (day === 2 || day === 3) {
      isOpen = (time >= 600 && time < 750) || (time >= 870 && time < 1110);
    } else if (day === 5 || day === 6) {
      isOpen = time >= 600 && time < 1110;
    }
    setCtaTitle(isOpen ? '⏰ On vous attend aujourd\'hui !' : '📅 On vous attend dès mardi à 10h !');
  }, []);

  return (
    <div className="overflow-hidden">
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cream pt-20"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, #FFE5D9 0%, #FFF8F0 60%)',
        }}
      >
        {/* Background blobs */}
        <div
          className="absolute top-20 right-10 w-64 h-64 bg-yellow/30 blob animate-float"
          style={{ filter: 'blur(40px)' }}
        />
        <div
          className="absolute bottom-20 left-10 w-80 h-80 bg-sage/20 blob-2 animate-float-delay"
          style={{ filter: 'blur(50px)' }}
        />

        {/* Floating emojis */}
        <FloatingEmoji emoji="🧸" className="top-32 left-[8%] animate-float text-5xl" />
        <FloatingEmoji emoji="🎲" className="top-48 right-[10%] animate-float-delay text-4xl" />
        <FloatingEmoji emoji="📚" className="bottom-40 left-[15%] animate-float-delay2 text-4xl" />
        <FloatingEmoji emoji="🌟" className="top-24 right-[30%] animate-float text-3xl" />
        <FloatingEmoji emoji="🎠" className="bottom-32 right-[15%] animate-float-delay2 text-4xl" />
        <FloatingEmoji emoji="🎈" className="top-36 left-[35%] animate-float-delay text-3xl" />
        <FloatingEmoji emoji="🌈" className="bottom-48 right-[35%] animate-float text-3xl" />
        <FloatingEmoji emoji="⭐" className="top-20 left-[55%] animate-float-delay2 text-2xl" />
        <FloatingEmoji emoji="🎀" className="bottom-24 left-[40%] animate-float-delay text-3xl" />
        <FloatingEmoji emoji="🦄" className="top-56 right-[22%] animate-float text-3xl" />

        {/* Hero content */}
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-coral/20 rounded-full px-5 py-2 mb-8 shadow-sm"
          >
            <span className="text-xl">🏆</span>
            <span className="text-brown font-bold text-sm font-nunito">
              N°1 jouets seconde main à Bourges · <strong>4.9★</strong> · <strong>4 928 avis</strong>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-5xl md:text-7xl lg:text-8xl font-fredoka text-brown mb-3 leading-tight text-shadow"
            style={{ fontFamily: 'Fredoka One, cursive' }}
          >
            La boutique de jouets
            <br />
            <span className="text-coral">N°1</span> à Bourges
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="text-sm md:text-base text-brown font-bold font-nunito mb-4 tracking-wide"
          >
            1 000+ trésors · arrivages chaque jour · prix imbattables
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg md:text-xl text-brown-light font-nunito max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Vos enfants méritent de beaux jouets sans vider votre budget.{' '}
            <span className="font-bold text-coral">Cécilia sélectionne chaque article à la main.</span>{' '}
            Venez, vous allez adorer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/catalogue"
              className="px-8 py-4 bg-coral text-white rounded-full text-lg font-bold hover:bg-coral-dark transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-coral/30 font-nunito"
            >
              🧸 Voir le catalogue — ça part vite !
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-brown border-2 border-brown/10 rounded-full text-lg font-bold hover:border-coral hover:text-coral transition-all duration-200 hover:scale-105 shadow-sm font-nunito"
            >
              📍 Venir en boutique (parking gratuit)
            </Link>
          </motion.div>

          {/* Address pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-2 bg-white/70 backdrop-blur px-5 py-3 rounded-full text-sm text-brown-light font-nunito border border-brown/5"
          >
            <OpenStatus />
            <span className="text-brown/30 hidden sm:inline">·</span>
            <span>📍 16 Rue Coursarlon, Bourges</span>
            <span className="text-brown/30 hidden sm:inline">·</span>
            <span>🚗 Parking gratuit</span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-brown/20 flex items-start justify-center p-1.5">
            <div className="w-1 h-3 bg-coral rounded-full animate-[float_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* ─── CHIFFRES CLÉS ─── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`${s.bg} reveal opacity-0 translate-y-8 transition-all rounded-3xl p-6 text-center border border-white/80`}
                style={{ transitionDuration: `${500 + i * 100}ms` }}
              >
                <div className="text-4xl mb-2">{s.emoji}</div>
                <div
                  className="font-fredoka text-2xl md:text-3xl text-brown mb-1"
                  style={{ fontFamily: 'Fredoka One, cursive' }}
                >
                  {s.number}
                </div>
                <div className="text-brown-light text-sm font-nunito font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POURQUOI ELFEJOLO ─── */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-block bg-coral/10 text-coral px-4 py-1 rounded-full text-sm font-bold font-nunito mb-4">
              ✨ Nos engagements
            </span>
            <h2
              className="text-4xl md:text-5xl font-fredoka text-brown"
              style={{ fontFamily: 'Fredoka One, cursive' }}
            >
              Ce qui nous rend <span className="text-coral">uniques</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`reveal opacity-0 translate-y-8 transition-all bg-white rounded-3xl p-6 md:p-8 border border-brown/5 shadow-sm hover:shadow-lg hover:-translate-y-1 text-center`}
                style={{ transitionDuration: `${500 + i * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl mb-3">{b.emoji}</div>
                <h3
                  className="font-fredoka text-lg md:text-xl text-brown mb-1"
                  style={{ fontFamily: 'Fredoka One, cursive' }}
                >
                  {b.title}
                </h3>
                <p className="text-brown-light text-sm font-nunito">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-block bg-yellow/30 text-brown px-4 py-1 rounded-full text-sm font-bold font-nunito mb-4">
              ✨ Qu'est-ce qu'on trouve chez ElfeJolo ?
            </span>
            <h2
              className="text-4xl md:text-5xl font-fredoka text-brown"
              style={{ fontFamily: 'Fredoka One, cursive' }}
            >
              Une caverne d'<span className="text-coral">Ali Baba</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat, i) => (
              <div
                key={cat.title}
                className={`${categoryColors[i % categoryColors.length]} card-shine reveal opacity-0 translate-y-8 transition-all rounded-3xl p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 cursor-default border border-white/80 group`}
                style={{ transitionDuration: `${600 + i * 100}ms` }}
              >
                <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {cat.emoji}
                </div>
                <h3
                  className="font-fredoka text-lg md:text-xl text-brown mb-2"
                  style={{ fontFamily: 'Fredoka One, cursive' }}
                >
                  {cat.title}
                </h3>
                <p className="text-brown-light text-sm font-nunito leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/catalogue"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-coral/20 text-brown rounded-full font-bold text-lg hover:border-coral hover:text-coral transition-all duration-200 hover:scale-105 font-nunito shadow-sm"
            >
              Voir les 13 catégories →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── COMMENT ÇA MARCHE ─── */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-block bg-coral/10 text-coral px-4 py-1 rounded-full text-sm font-bold font-nunito mb-4">
              🗺️ Super simple
            </span>
            <h2
              className="text-4xl md:text-5xl font-fredoka text-brown"
              style={{ fontFamily: 'Fredoka One, cursive' }}
            >
              Comment ça <span className="text-coral">marche</span> ?
            </h2>
          </div>

          <div className="relative grid md:grid-cols-3 gap-6">
            <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-coral via-yellow to-sage" />

            {howItWorks.map((step, i) => (
              <div
                key={step.n}
                className="reveal opacity-0 translate-y-8 transition-all bg-white rounded-3xl p-8 border border-brown/5 shadow-sm text-center"
                style={{ transitionDuration: `${600 + i * 150}ms` }}
              >
                <div className="w-12 h-12 bg-coral text-white rounded-full flex items-center justify-center font-fredoka text-xl mx-auto mb-4 relative z-10" style={{ fontFamily: 'Fredoka One, cursive' }}>
                  {step.n}
                </div>
                <div className="text-4xl mb-3">{step.emoji}</div>
                <h3
                  className="font-fredoka text-xl text-brown mb-2"
                  style={{ fontFamily: 'Fredoka One, cursive' }}
                >
                  {step.title}
                </h3>
                <p className="text-brown-light text-sm font-nunito leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT BANNER ─── */}
      <section
        className="py-24 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FF8C6B 0%, #FFD166 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="text-[200px] font-fredoka absolute -top-10 -left-10 text-white select-none" style={{ fontFamily: 'Fredoka One, cursive' }}>
            ✨
          </div>
          <div className="text-[150px] font-fredoka absolute -bottom-10 -right-10 text-white select-none" style={{ fontFamily: 'Fredoka One, cursive' }}>
            🧸
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <h2
              className="text-4xl md:text-5xl font-fredoka text-white mb-6 text-shadow"
              style={{ fontFamily: 'Fredoka One, cursive' }}
            >
              Cécilia vous accueille avec le sourire 🌸
            </h2>
            <p className="text-white/90 text-lg md:text-xl font-nunito leading-relaxed mb-8 max-w-2xl mx-auto">
              ElfeJolo, c'est avant tout une aventure humaine. Née du désir de donner une seconde
              vie aux jouets, la boutique est devenue <strong>la référence jeunesse de Bourges</strong>.
              Des produits soigneusement sélectionnés, des conseils personnalisés selon l'âge,
              et une ambiance chaleureuse qui fait revenir.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['🌱 Ouverte depuis 2019', '⭐ 4.9/5 sur Google', '🔍 Sélection rigoureuse'].map((badge) => (
                <span key={badge} className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold font-nunito border border-white/30">
                  {badge}
                </span>
              ))}
            </div>

            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 bg-white text-coral px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-nunito"
            >
              Découvrir notre histoire →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── DÉPÔT-VENTE ─── */}
      <section
        className="py-24 px-4"
        style={{ background: 'linear-gradient(135deg, #6BCB77 0%, #52A85D 100%)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="text-6xl mb-6">♻️</div>
            <h2
              className="text-4xl md:text-5xl font-fredoka text-white mb-6 text-shadow"
              style={{ fontFamily: 'Fredoka One, cursive' }}
            >
              Vos jouets méritent une <strong className="underline decoration-white/40">seconde vie</strong> !
            </h2>
            <p className="text-white/90 text-lg font-nunito leading-relaxed mb-10 max-w-2xl mx-auto">
              Déposez vos jeux et jouets en boutique — Cécilia les rachète ou les met en dépôt-vente.
              Simple, rapide, écolo. Votre armoire se désencombre et vos jouets font de nouveaux heureux 🌱
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0673883226"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-sage-dark rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-nunito"
              >
                📞 Appeler Cécilia
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white border-2 border-white/50 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-200 hover:scale-105 font-nunito"
              >
                🕐 Voir les horaires
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-block bg-sage/20 text-sage-dark px-4 py-1 rounded-full text-sm font-bold font-nunito mb-4">
              ⭐ Avis clients
            </span>
            <h2
              className="text-4xl md:text-5xl font-fredoka text-brown"
              style={{ fontFamily: 'Fredoka One, cursive' }}
            >
              Plus de <span className="text-coral">4 928 familles</span> nous font confiance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`${t.bg} reveal opacity-0 translate-y-8 transition-all rounded-3xl p-8 border border-white/80 hover:shadow-lg hover:-translate-y-1`}
                style={{ transitionDuration: `${600 + i * 150}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j} className="star text-2xl">★</span>
                  ))}
                </div>
                <p className="text-brown-light font-nunito leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/60 rounded-full flex items-center justify-center text-lg">
                    😊
                  </div>
                  <span className="font-bold text-brown font-nunito">{t.author}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <div className="inline-flex items-center gap-3 bg-yellow/20 px-8 py-4 rounded-full">
                <span className="text-2xl">⭐</span>
                <div className="font-nunito">
                  <span className="font-bold text-brown text-lg">Note moyenne de </span>
                  <span className="font-bold text-coral text-xl">4.9/5</span>
                  <div className="text-brown-light text-xs">Basé sur 4 928 avis vérifiés</div>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/ElfeJolo/@47.0804,2.3964"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coral font-bold font-nunito text-sm hover:underline"
              >
                Voir tous les avis Google →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="inline-block bg-yellow/30 text-brown px-4 py-1 rounded-full text-sm font-bold font-nunito mb-4">
              ❓ On répond à tout
            </span>
            <h2
              className="text-4xl md:text-5xl font-fredoka text-brown"
              style={{ fontFamily: 'Fredoka One, cursive' }}
            >
              Questions fréquentes sur <span className="text-coral">ElfeJolo</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="reveal opacity-0 translate-y-8 transition-all bg-white border border-brown/10 rounded-2xl overflow-hidden"
                style={{ transitionDuration: `${500 + i * 80}ms` }}
              >
                <button
                  className="w-full text-left px-6 py-5 flex justify-between items-center font-bold text-brown font-nunito hover:bg-peach/30 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-coral text-2xl leading-none flex-shrink-0 font-light">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-brown-light font-nunito leading-relaxed text-sm border-t border-brown/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="reveal opacity-0 translate-y-8 transition-all duration-700 rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #FF8C6B 0%, #FFD166 100%)' }}
          >
            <div className="absolute top-4 right-6 text-5xl opacity-40 animate-float">🌟</div>
            <div className="absolute bottom-4 left-6 text-4xl opacity-40 animate-float-delay">🎈</div>
            <div className="absolute top-8 left-10 text-3xl opacity-30 animate-float-delay2">🎀</div>
            <div className="absolute bottom-8 right-12 text-3xl opacity-30 animate-float">🦄</div>

            <div className="mb-4 flex justify-center">
              <OpenStatus />
            </div>

            <h2
              className="text-4xl md:text-6xl font-fredoka text-white mb-4 text-shadow"
              style={{ fontFamily: 'Fredoka One, cursive' }}
            >
              {ctaTitle}
            </h2>
            <p className="text-white/90 font-nunito text-lg mb-8 max-w-xl mx-auto">
              Arrivages traités chaque matin · Parking gratuit · 4.9★ sur Google
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0673883226"
                className="px-8 py-4 bg-white text-coral rounded-full text-lg font-bold transition-all duration-200 hover:scale-105 shadow-lg font-nunito animate-[pulseCoral_2s_ease-in-out_infinite]"
              >
                📞 06 73 88 32 26
              </a>
              <a
                href="https://www.facebook.com/elfejolo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brown text-white rounded-full text-lg font-bold hover:opacity-90 transition-all duration-200 hover:scale-105 font-nunito"
              >
                📲 Suivez-nous sur Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
