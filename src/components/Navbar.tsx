import React from 'react';
import { Volume2, VolumeX, Sparkles, Heart } from 'lucide-react';
import { TabType } from '../types/cat';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  isPurring: boolean;
  onTogglePurr: () => void;
  onOpenEmergencyMeow: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  isPurring,
  onTogglePurr,
  onOpenEmergencyMeow,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => setActiveTab('home')}
          className="text-left group flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md"
        >
          <span className="text-xl font-bold tracking-tight text-amber-400 group-hover:text-amber-300 transition-colors font-display">
            Arcel's Cat Sanctuary
          </span>
          <span className="text-xs text-stone-400 font-mono hidden sm:inline">
            // DTQ HEALING
          </span>
        </button>

        {/* Zone 2: 4 clean navigation links matching user draft links */}
        <nav className="flex items-center gap-1 sm:gap-6 text-xs sm:text-sm font-medium">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
              activeTab === 'home'
                ? 'text-amber-400 font-semibold bg-stone-800/80'
                : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
            }`}
          >
            HOME
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
              activeTab === 'about'
                ? 'text-amber-400 font-semibold bg-stone-800/80'
                : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
            }`}
          >
            ABOUT US
          </button>
          <button
            onClick={() => setActiveTab('product')}
            className={`px-2.5 py-1.5 rounded-md transition-colors cursor-pointer flex items-center gap-1 ${
              activeTab === 'product'
                ? 'text-amber-400 font-semibold bg-stone-800/80'
                : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
            }`}
          >
            <span>PRODUCT</span>
            <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1 py-0.2 rounded border border-amber-500/30">
              FREE HD
            </span>
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-2.5 py-1.5 rounded-md transition-colors cursor-pointer ${
              activeTab === 'contact'
                ? 'text-amber-400 font-semibold bg-stone-800/80'
                : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
            }`}
          >
            CONTACT
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Ambient Purr Synthesizer Toggle */}
          <button
            onClick={onTogglePurr}
            title={isPurring ? 'Pause cat purr audio' : 'Play healing synthesized cat purr (25Hz - 60Hz)'}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
              isPurring
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-sm animate-pulse'
                : 'bg-stone-800 text-stone-300 border-stone-700 hover:border-stone-500 hover:text-white'
            }`}
          >
            {isPurring ? <Volume2 className="w-3.5 h-3.5 text-amber-400" /> : <VolumeX className="w-3.5 h-3.5 text-stone-400" />}
            <span className="hidden md:inline">{isPurring ? 'Purring Active' : 'Healing Purr'}</span>
          </button>

          {/* Emergency Serotonin Button */}
          <button
            onClick={onOpenEmergencyMeow}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all cursor-pointer active:scale-95 whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 fill-stone-900" />
            <span className="hidden sm:inline">Emergency Dopamine</span>
            <span className="sm:hidden">Dopamine</span>
          </button>
        </div>

      </div>
    </header>
  );
};
