import React from 'react';
import { Heart, Sparkles, Phone, Mail } from 'lucide-react';
import { TabType } from '../types/cat';

interface FooterProps {
  onNavigate: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-900 border-t border-stone-800 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-2">
            <h3 className="text-lg font-bold text-amber-400 font-display">
              Arcel's Cat Sanctuary
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Dedicated to lifting spirits and boosting mental health through high-resolution therapeutic 
              and humorous feline imagery. Built with love, laughter, and the biggest paws in the business.
            </p>
            <div className="text-xs text-amber-500/80 font-mono">
              "We don't chase success. Success chases us." 😼
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-stone-200 uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Home & Healing Science
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  About Us & The Jacked Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('product')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Product (Free 4K Downloads)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Contact & Submit Cat Photo
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-stone-200 uppercase tracking-wider">
              Arcel's Direct Lines
            </div>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-mono">TG: 09563952282</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>whosarchi@gmail.com</span>
              </div>
              <div className="text-[11px] text-stone-500 pt-1">
                Submissions open 24/7 to cats worldwide.
              </div>
            </div>
          </div>

        </div>

        {/* Mental Health Support Notice & Copyright */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Arcel Paws Project. Dedicated to healing mental health.
          </div>
          <div className="text-stone-400 text-center sm:text-right">
            If you are going through a severe crisis, please remember you are never alone. Reach out to local support helplines or trusted people.
          </div>
        </div>

      </div>
    </footer>
  );
};
