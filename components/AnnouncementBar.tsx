'use client';
import { useState, useEffect } from 'react';

const messages = [
  "🎁 Arrivages cette semaine · Venez avant que ça parte !",
  "⭐ 4 928 familles nous font confiance · Note 4.9/5 Google",
  "🌱 Jusqu'à -80% vs prix neuf · Jouets de qualité à prix mini",
];

export default function AnnouncementBar() {
  const [current, setCurrent] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-10 bg-coral flex items-center justify-center px-10">
      <p className="text-white text-xs md:text-sm font-bold font-nunito text-center">
        {messages[current]}
      </p>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-xl leading-none w-8 h-8 flex items-center justify-center"
        aria-label="Fermer le bandeau"
      >
        ×
      </button>
    </div>
  );
}
