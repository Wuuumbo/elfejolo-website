import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catalogue Jouets Seconde Main Bourges | 13 Catégories – ElfeJolo',
  description:
    '13 catégories de jouets d\'occasion à Bourges : peluches, jeux, LEGO, puzzles… Tout inspecté. Arrivages quotidiens. Jusqu\'à -80% vs neuf. 16 Rue Coursarlon.',
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
      name: 'Catalogue',
      item: 'https://elfejolo.fr/catalogue',
    },
  ],
};

const items = [
  { emoji: '🧸', name: 'Peluches & Poupées', condition: 'Très bon état', badge: 'Populaire', color: 'bg-peach' },
  { emoji: '🎲', name: 'Jeux de société', condition: 'Complets & vérifiés', badge: 'Coup de cœur', color: 'bg-yellow/30' },
  { emoji: '📚', name: 'Livres jeunesse', condition: 'Comme neufs', badge: null, color: 'bg-sage/20' },
  { emoji: '🧩', name: 'Puzzles', condition: 'Pièces vérifiées', badge: null, color: 'bg-coral/10' },
  { emoji: '🎭', name: 'Déguisements', condition: 'Lavés & prêts', badge: 'Nouveauté', color: 'bg-yellow/20' },
  { emoji: '🚗', name: 'Véhicules & circuits', condition: 'Testés & fonctionnels', badge: null, color: 'bg-sage/20' },
  { emoji: '🎨', name: 'Loisirs créatifs', condition: 'Articles neufs', badge: '✨ Neuf', color: 'bg-peach' },
  { emoji: '🪆', name: "Jouets d'éveil", condition: 'Hygiénisés', badge: null, color: 'bg-coral/10' },
  { emoji: '🎠', name: 'Jeux en bois', condition: 'Sélection premium', badge: 'Qualité', color: 'bg-yellow/20' },
  { emoji: '🎵', name: 'Instruments musicaux', condition: 'Testés & accordés', badge: null, color: 'bg-sage/20' },
  { emoji: '🏃', name: 'Jeux de plein air', condition: 'Prêts à jouer', badge: null, color: 'bg-peach' },
  { emoji: '🔬', name: 'Jeux scientifiques', condition: 'Complets & vérifiés', badge: null, color: 'bg-yellow/30' },
  { emoji: '🧱', name: 'Constructions & LEGO', condition: 'Pièces vérifiées', badge: 'Populaire', color: 'bg-coral/10' },
];

export default function CataloguePage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-coral/10 text-coral px-4 py-1 rounded-full text-sm font-bold font-nunito mb-4">
            🔥 Nouveaux arrivages traités chaque matin
          </span>
          <h1
            className="text-5xl md:text-6xl font-fredoka text-brown mb-4"
            style={{ fontFamily: 'Fredoka One, cursive' }}
          >
            Jouets de Seconde Main à Bourges —{' '}
            <span className="text-coral">Notre Sélection</span>
          </h1>
          <p className="text-brown-light font-nunito text-lg max-w-2xl mx-auto mb-4">
            13 catégories · +1 000 articles inspectés · Prix jusqu'à -80% vs neuf.
            Ça change tous les jours !
          </p>
          <span className="inline-block bg-yellow/30 text-brown px-4 py-1.5 rounded-full text-sm font-bold font-nunito">
            13 catégories · Arrivages chaque jour
          </span>
        </div>

        {/* Note: no e-commerce */}
        <div className="bg-yellow/20 border border-yellow rounded-2xl p-6 mb-12 flex items-start gap-4 max-w-2xl mx-auto">
          <span className="text-3xl">💛</span>
          <div>
            <p className="font-bold text-brown font-nunito">Boutique physique uniquement</p>
            <p className="text-brown-light text-sm font-nunito mt-1">
              Nous ne vendons pas en ligne. Retrouvez-nous au <strong>16 Rue Coursarlon à Bourges</strong>,
              ou suivez nos <strong>arrivages sur Facebook</strong> pour ne rien rater !
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((item) => (
            <div
              key={item.name}
              className={`${item.color} card-shine rounded-3xl p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-white/80 relative overflow-hidden group`}
            >
              {item.badge && (
                <span className="absolute top-4 right-4 bg-coral text-white text-xs font-bold px-2.5 py-1 rounded-full font-nunito">
                  {item.badge}
                </span>
              )}
              <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {item.emoji}
              </div>
              <h2
                className="font-fredoka text-xl text-brown mb-1"
                style={{ fontFamily: 'Fredoka One, cursive' }}
              >
                {item.name}
              </h2>
              <p className="text-brown-light text-sm font-nunito">{item.condition}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-white rounded-3xl p-10 border border-brown/5 shadow-sm">
          <div className="text-5xl mb-4">🎉</div>
          <h2
            className="font-fredoka text-3xl text-brown mb-3"
            style={{ fontFamily: 'Fredoka One, cursive' }}
          >
            Suivez nos arrivages en temps réel
          </h2>
          <p className="text-brown-light font-nunito mb-6 max-w-md mx-auto">
            Chaque jour de nouveaux trésors arrivent en boutique. Suivez notre page Facebook pour être les premiers informés !
          </p>
          <a
            href="https://www.facebook.com/elfejolo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-coral text-white rounded-full font-bold text-lg hover:bg-coral-dark transition-all duration-200 hover:scale-105 font-nunito shadow-lg"
          >
            Voir les derniers arrivages →
          </a>
        </div>
      </div>
    </div>
  );
}
