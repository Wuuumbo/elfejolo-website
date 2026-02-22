'use client';
import { useState, useEffect } from 'react';

function getParisStatus(): { isOpen: boolean; nextDay: string } {
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
    // Mardi/Mercredi : 10h–12h30 ou 14h30–18h30
    isOpen = (time >= 600 && time < 750) || (time >= 870 && time < 1110);
  } else if (day === 5 || day === 6) {
    // Vendredi/Samedi : 10h–18h30
    isOpen = time >= 600 && time < 1110;
  }

  const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const openDays = [2, 3, 5, 6];
  let nextDay = 'Mardi';
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    if (openDays.includes(d)) {
      nextDay = dayNames[d];
      break;
    }
  }

  return { isOpen, nextDay };
}

export default function OpenStatus() {
  const [status, setStatus] = useState<{ isOpen: boolean; nextDay: string } | null>(null);

  useEffect(() => {
    setStatus(getParisStatus());
    const timer = setInterval(() => setStatus(getParisStatus()), 60_000);
    return () => clearInterval(timer);
  }, []);

  if (!status) return null;

  if (status.isOpen) {
    return (
      <span className="inline-flex items-center gap-1.5 bg-sage/20 text-sage-dark text-xs font-bold px-3 py-1 rounded-full font-nunito">
        🟢 Ouvert maintenant
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full font-nunito">
      🔴 Fermé · Ouvre {status.nextDay} à 10h
    </span>
  );
}
