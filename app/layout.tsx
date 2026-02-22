import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileBar from '@/components/MobileBar';
import AnnouncementBar from '@/components/AnnouncementBar';

export const metadata: Metadata = {
  title: {
    template: '%s | ElfeJolo – Jouets Seconde Main Bourges',
    default: 'ElfeJolo – Jouets & Livres de Seconde Main à Bourges',
  },
  description:
    "Boutique jouets, jeux et livres d'occasion à Bourges · +1 000 articles · arrivages quotidiens · 4.9★ 4 928 avis Google · 16 Rue Coursarlon · ☎ 06 73 88 32 26",
  keywords:
    'jouets seconde main Bourges, jeux occasion Bourges, livres enfants Bourges, ElfeJolo, boutique jouets Bourges, déguisements enfants',
  authors: [{ name: 'ElfeJolo' }],
  openGraph: {
    title: 'ElfeJolo – Jouets & Livres de Seconde Main à Bourges',
    description:
      "La caverne d'Ali Baba des jouets à Bourges ! Jeux, jouets, puzzles, livres et déguisements de seconde main. Arrivages quotidiens. 4.9★ 4 928 avis.",
    url: 'https://elfejolo.fr',
    siteName: 'ElfeJolo',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ElfeJolo – Jouets de Seconde Main à Bourges',
    description: 'La boutique incontournable de jouets, jeux et livres de seconde main à Bourges.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://elfejolo.fr',
  },
};

const jsonLdStore = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'ElfeJolo',
  description: 'Boutique de jouets, jeux et livres de seconde main à Bourges.',
  url: 'https://elfejolo.fr',
  telephone: '+33673883226',
  priceRange: '€',
  hasMap: 'https://maps.google.com/maps?q=Elfe+Jolo+16+Rue+Coursarlon+Bourges',
  areaServed: 'Bourges',
  slogan: 'La boutique magique de jouets de seconde main à Bourges',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card, Check',
  foundingDate: '2019',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '16 Rue Coursarlon',
    addressLocality: 'Bourges',
    postalCode: '18000',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.0804,
    longitude: 2.3964,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday'],
      opens: '10:00',
      closes: '12:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday'],
      opens: '14:30',
      closes: '18:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday'],
      opens: '10:00',
      closes: '18:30',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '4928',
    bestRating: '5',
  },
  sameAs: [
    'https://www.facebook.com/elfejolo',
    'https://www.instagram.com/elfejolo',
  ],
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Où se trouve ElfeJolo à Bourges ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '16 Rue Coursarlon, 18000 Bourges. Parking gratuit dans la rue. Facilement accessible en voiture et à pied depuis le centre-ville.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels sont les horaires d\'ouverture ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mardi et mercredi : 10h–12h30 puis 14h30–18h30. Vendredi et samedi : 10h–18h30. Fermé lundi, jeudi et dimanche.',
      },
    },
    {
      '@type': 'Question',
      name: 'Les jouets sont-ils vraiment en bon état ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolument. Cécilia inspecte personnellement chaque article. Seuls les jouets en très bon état, nettoyés et vérifiés, sont mis en vente. Les puzzles ont leurs pièces comptées, les jeux de société sont complets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment vendre ou déposer mes jouets chez ElfeJolo ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Apportez vos jeux et jouets en boutique durant les heures d\'ouverture. Cécilia les évalue sur place et propose soit un rachat immédiat, soit une mise en dépôt-vente. Vous pouvez appeler le 06 73 88 32 26 avant pour les gros volumes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Y a-t-il du parking à proximité ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui ! Stationnement gratuit dans la rue Coursarlon. Idéal quand vous venez avec des cartons à déposer ou que vous repartez avec de belles trouvailles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels moyens de paiement acceptez-vous ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Carte bancaire, espèces, chèques et paiement mobile sans contact (NFC).',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdStore) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body>
        <AnnouncementBar />
        <Navbar />
        <main className="mt-10 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
