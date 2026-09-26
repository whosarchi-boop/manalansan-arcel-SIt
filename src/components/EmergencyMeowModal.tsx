import React, { useState } from 'react';
import { Sparkles, RefreshCw, Download, X, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CatImage } from '../types/cat';
import { MENTAL_HEALTH_AFFIRMATIONS } from '../data/cats';
import { downloadCatImage } from '../utils/download';

interface EmergencyMeowModalProps {
  cats: CatImage[];
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyMeowModal: React.FC<EmergencyMeowModalProps> = ({
  cats,
  isOpen,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [affirmationIndex, setAffirmationIndex] = useState(0);

  if (!isOpen || cats.length === 0) return null;

  const currentCat = cats[currentIndex % cats.length];
  const currentAffirmation = MENTAL_HEALTH_AFFIRMATIONS[affirmationIndex % MENTAL_HEALTH_AFFIRMATIONS.length];

  const handleNextDose = () => {
    setCurrentIndex((prev) => (prev + 1) % cats.length);
    setAffirmationIndex((prev) => (prev + 1) % MENTAL_HEALTH_AFFIRMATIONS.length);
    confetti({
      particleCount: 30,
      spread: 45,
      origin: { y: 0.6 },
      colors: ['#fbbf24', '#f59e0b', '#38bdf8']
    });
  };

  const handleDownload = () => {
    downloadCatImage(currentCat.src, `emergency-serotonin-${currentCat.id}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-200 flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-amber-400 text-stone-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 fill-stone-950" />
            <span className="font-extrabold text-sm uppercase tracking-wider">
              Emergency Dopamine Dispenser
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-stone-900 hover:text-stone-700 p-1 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cat Visual Frame */}
        <div className="relative aspect-4/3 bg-stone-950 overflow-hidden">
          <img
            src={currentCat.src}
            alt={currentCat.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md text-amber-300 text-xs px-2.5 py-1 rounded-md font-mono border border-stone-700">
            {currentAffirmation.badge}
          </div>
        </div>

        {/* Affirmation & Details */}
        <div className="p-6 space-y-4">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
              {currentCat.title}
            </div>
            <p className="text-stone-800 text-sm font-medium leading-relaxed italic">
              "{currentAffirmation.quote}"
            </p>
          </div>

          <div className="text-xs text-stone-500 bg-stone-50 p-3 rounded-xl border border-stone-100 flex items-center gap-2">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0" />
            <span>Reminder: You are human, you are trying your best, and cats are always on your side.</span>
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handleNextDose}
              className="flex-1 py-3 px-4 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold text-xs rounded-xl shadow transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Another Cat Dose</span>
            </button>

            <button
              onClick={handleDownload}
              className="py-3 px-4 bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold text-xs rounded-xl border border-amber-300 transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span>Save Image</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
