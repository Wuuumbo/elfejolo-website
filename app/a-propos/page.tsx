import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "L'Histoire d'ElfeJolo | Boutique Jouets Bourges depuis 2019",
  description:
    'ElfeJolo fondée par Cécilia en 2019 : la référence jouets seconde main à Bourges. 4.9/5 sur Google, 4 928 avis, 1 000+ articles. Découvrez notre histoire.',
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Accueil',
      item: 'https://elfejolo.fr/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Notre histoire',
      item: 'https://elfejolo.fr/a-propos',
    },
  ],
};

const values = [
  {
    emoji: '🌍',
    title: 'Éco-responsable',
    desc: "Donner une seconde vie aux jouets, c'est préserver notre planète. Chaque achat chez ElfeJolo est un geste pour l'environnement.",
    bg: 'bg-sage/20',
  },
  {
    emoji: '💛',
    title: 'Sélection rigoureuse',
    desc: 'Chaque article est soigneusement inspecté. Seuls les produits en très bon état rejoignent nos rayons.',
    bg: 'bg-yellow/25',
  },
  {
    emoji: '🤝',
    title: 'Conseil personnalisé',
    desc: 'Cécilia connaît parfaitement ses produits et vous guide vers le bon choix pour le bon âge.',
    bg: 'bg-peach',
  },
  {
    emoji: '💰',
    title: 'Prix accessibles',
    desc: 'La qualité ne devrait pas être un luxe. Chez ElfeJolo, les prix sont toujours compétitifs.',
    bg: 'bg-coral/10',
  },
];

const timeline = [
  { year: '2019', label: 'Ouverture de la boutique', emoji: '🎉', color: 'bg-coral' },
  { year: '2020', label: 'Cap des 1 000 articles', emoji: '🧸', color: 'bg-yellow' },
  { year: '2022', label: 'Lancement du dépôt-vente', emoji: '🌱', color: 'bg-sage' },
  { year: '2024', label: '4 928 avis Google ⭐ 4.9/5', emoji: '⭐', color: 'bg-coral' },
];

export default function AProposPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-sage/20 text-sage-dark px-4 py-1 rounded-full text-sm font-bold font-nunito mb-4">
            ✨ Notre histoire
          </span>
          <h1
            className="text-5xl md:text-6xl font-fredoka text-brown mb-4"
            style={{ fontFamily: 'Fredoka One, cursive' }}
          >
            L'Histoire d'ElfeJolo — La Boutique Jouets de{' '}
            <span className="text-coral">Bourges depuis 2019</span>
          </h1>
        </div>

        {/* Story */}
        <div
          className="rounded-[3rem] p-10 md:p-16 mb-16 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #FFF8F0, #FFE5D9)' }}
        >
          <div className="absolute top-6 right-8 text-7xl opacity-20 select-none">🧚</div>
          <div className="max-w-3xl">
            <div className="text-5xl mb-6">🌱</div>
            <h2
              className="font-fredoka text-3xl text-brown mb-6"
              style={{ fontFamily: 'Fredoka One, cursive' }}
            >
              De la maison à la boutique
            </h2>
            <div className="space-y-4 text-brown-light font-nunito text-lg leading-relaxed">
              <p>
                Tout a commencé dans un garage. <strong className="text-brown">Cécilia</strong>, passionnée
                par l'enfance et soucieuse de l'environnement, a eu une idée simple mais belle :
                donner une seconde vie aux jouets de ses propres enfants plutôt que de les jeter.
              </p>
              <p>
                Rapidement, le bouche-à-oreille a fait son œuvre. Les voisins apportaient leurs jouets,
                les amis cherchaient les bons plans… Le garage est devenu trop petit.
              </p>
              <p>
                C'est ainsi qu'<strong className="text-coral">ElfeJolo</strong> a ouvert ses portes
                au <strong className="text-brown">16 Rue Coursarlon à Bourges</strong>, dans un quartier
                qu'elle adore pour son charme et son dynamisme. Depuis, la boutique est devenue
                <em> « la référence jeunesse de Bourges »</em>, avec une note de <strong className="text-coral">4.9/5</strong> sur Google.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2
            className="font-fredoka text-4xl text-brown text-center mb-10"
            style={{ fontFamily: 'Fredoka One, cursive' }}
          >
            Notre <span className="text-coral">parcours</span>
          </h2>
          <div className="relative">
            <div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 rounded-full md:-translate-x-0.5"
              style={{ background: 'linear-gradient(to bottom, #FF8C6B, #FFD166, #6BCB77)' }}
            />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-center gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-20 md:pl-0`}>
                    <div
                      className={`inline-block bg-white rounded-2xl px-6 py-4 shadow-sm border border-brown/5 ${
                        i % 2 === 0 ? '' : 'md:ml-0'
                      }`}
                    >
                      <div className="text-2xl mb-1">{item.emoji}</div>
                      <div className="font-fredoka text-2xl text-coral" style={{ fontFamily: 'Fredoka One, cursive' }}>
                        {item.year}
                      </div>
                      <div className="font-nunito text-brown font-bold text-sm">{item.label}</div>
                    </div>
                  </div>
                  <div
                    className={`absolute left-6 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-4 border-white ${item.color} shadow-md`}
                  />
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2
            className="font-fredoka text-4xl text-brown text-center mb-10"
            style={{ fontFamily: 'Fredoka One, cursive' }}
          >
            Nos <span className="text-coral">valeurs</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className={`${v.bg} rounded-3xl p-8 border border-white/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex gap-5 items-start`}
              >
                <span className="text-5xl">{v.emoji}</span>
                <div>
                  <h3
                    className="font-fredoka text-xl text-brown mb-2"
                    style={{ fontFamily: 'Fredoka One, cursive' }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-brown-light font-nunito leading-relaxed text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div
          className="rounded-3xl p-10 text-center mb-16"
          style={{ background: 'linear-gradient(135deg, #6BCB77, #52A85D)' }}
        >
          <div className="text-5xl mb-4">💬</div>
          <blockquote className="text-white text-xl md:text-2xl font-nunito italic leading-relaxed max-w-2xl mx-auto mb-4">
            &ldquo;Une amie est venue avec une peluche remplie d'amour venant de votre boutique
            pour apporter de la douceur et du réconfort à une petite fille plâtrée.&rdquo;
          </blockquote>
          <cite className="text-white/70 font-nunito text-sm">— Un avis client Google</cite>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2
            className="font-fredoka text-3xl text-brown mb-4"
            style={{ fontFamily: 'Fredoka One, cursive' }}
          >
            Venez écrire la suite avec nous 🎉
          </h2>
          <p className="text-brown-light font-nunito mb-8">
            Rendez-nous visite, apportez vos jouets à vendre, ou suivez nos arrivages sur Facebook.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-coral text-white rounded-full font-bold text-lg hover:bg-coral-dark transition-all hover:scale-105 font-nunito shadow-lg"
            >
              📍 Nous trouver
            </Link>
            <a
              href="https://www.facebook.com/elfejolo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brown text-white rounded-full font-bold text-lg hover:opacity-90 transition-all hover:scale-105 font-nunito"
            >
              📲 Suivre sur Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
