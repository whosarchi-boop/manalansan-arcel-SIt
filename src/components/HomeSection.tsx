import React, { useState } from 'react';
import { Sparkles, Heart, ArrowRight, ShieldCheck, SunMedium, Smile, Activity, Download } from 'lucide-react';
import { CatImage, TabType } from '../types/cat';
import heroCatImg from '../assets/images/hero_healing_cat_1790406298126.jpg';
import buffCatImg from '../assets/images/buff_bodybuilder_cat_1790406307786.jpg';
import officeCatImg from '../assets/images/office_business_cat_1790406318308.jpg';
import gangCatImg from '../assets/images/gangster_cat_squad_1790406329009.jpg';
import loafCatImg from '../assets/images/serotonin_loaf_cat_1790406341083.jpg';

interface HomeSectionProps {
  onNavigate: (tab: TabType) => void;
  onOpenEmergencyMeow: () => void;
  isPurring: boolean;
  onTogglePurr: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  onNavigate,
  onOpenEmergencyMeow,
  isPurring,
  onTogglePurr
}) => {
  const [selectedMood, setSelectedMood] = useState<string>('anxious');

  const moodPrescriptions: Record<string, { catName: string; text: string; image: string; tag: string }> = {
    anxious: {
      catName: 'The Cozy Blanket Cocoon',
      text: 'Slow down. Breathe with this sleeping kitten. Your nervous system is safe right now.',
      image: heroCatImg,
      tag: 'Gentle Calming'
    },
    burntout: {
      catName: 'The Serotonin Bread Loaf',
      text: 'You have done enough today. Zero tasks required right now. Just rest like a loaf.',
      image: loafCatImg,
      tag: 'Guilt-Free Rest'
    },
    unmotivated: {
      catName: 'The Jacked Bodybuilder Boss',
      text: 'We do not chase success. Success chases us. Flex those mental muscles and stand tall!',
      image: buffCatImg,
      tag: 'Raw Motivation'
    },
    overwhelmed: {
      catName: 'Executive Support Specialist',
      text: 'Taking your support ticket. We have placed all worldly stress on permanent hold.',
      image: officeCatImg,
      tag: 'Humor Therapy'
    },
    bullied: {
      catName: 'The Corner Street Syndicate',
      text: 'The cat mafia in tiny fedoras is standing outside. Nobody messes with you today.',
      image: gangCatImg,
      tag: 'Emotional Armor'
    }
  };

  const activeRemedy = moodPrescriptions[selectedMood];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Context label */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
                <span>Arcel's DTQ Healing Project</span>
                <span aria-hidden="true">·</span>
                <span>Mental Health Sanctuary</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.1] text-balance">
                Literally Healing Images of Cats to{' '}
                <span className="text-amber-700 underline decoration-amber-300 decoration-wavy decoration-2">
                  Restore Your Mental Health
                </span>
              </h1>

              {/* Sub-prose */}
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
                When life feels overwhelming, heavy, or exhausting, words are often not enough. 
                Arcel’s Cat Sanctuary delivers scientifically proven visual serotonin: funny cats, 
                absurdly jacked motivators, and ultra-peaceful kittens designed to lift your spirits, 
                lower your cortisol, and remind you that you are not alone.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('product')}
                  className="px-6 py-3 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Browse Free High-Res Images</span>
                </button>

                <button
                  onClick={onOpenEmergencyMeow}
                  className="px-6 py-3 text-sm font-semibold text-stone-900 bg-amber-200 hover:bg-amber-300 border border-amber-300 rounded-xl transition-all cursor-pointer flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-800" />
                  <span>Emergency Serotonin Dose</span>
                </button>

                <button
                  onClick={onTogglePurr}
                  className="px-4 py-3 text-sm font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl border border-stone-200 transition-all cursor-pointer flex items-center gap-2"
                >
                  <Activity className="w-4 h-4 text-amber-600" />
                  <span>{isPurring ? 'Purr Sound Playing' : 'Start Purr Audio'}</span>
                </button>
              </div>

              {/* Trust/Evidence Bar */}
              <div className="pt-6 border-t border-stone-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Free High-Res Downloads</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Smile className="w-4 h-4 text-amber-600" />
                  <span>Instant Dopamine Boost</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>Community Cat Submissions Open</span>
                </div>
              </div>

            </div>

            {/* Right Featured Image Frame */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-200 to-orange-200 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border border-amber-200/60 shadow-xl bg-stone-900">
                  <img
                    src={heroCatImg}
                    alt="Healing sleeping kitten wrapped in a warm blanket"
                    className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                    <div className="text-xs text-amber-300 font-semibold uppercase tracking-wider mb-1">
                      Sanctuary Guardian #01
                    </div>
                    <h3 className="text-xl font-bold font-display text-white">
                      The Blanket Cocoon of Tranquility
                    </h3>
                    <p className="text-xs text-stone-300 mt-1">
                      Proven to lower heart rates within 30 seconds of observation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Prescription: How Are You Feeling Right Now? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-10 shadow-sm">
          
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              Interactive Cat Remedy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mt-1">
              Select What You Are Struggling With Today
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              Every mental state responds to a different feline energy. Click your current vibe to receive an immediate tailored cat prescription.
            </p>
          </div>

          {/* Mood Selectors (Buttons) */}
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              { id: 'anxious', label: 'Overthinking / Anxiety', icon: '🌀' },
              { id: 'burntout', label: 'Burnout / Low Battery', icon: '🔋' },
              { id: 'unmotivated', label: 'Imposter Syndrome / Doubts', icon: '💪' },
              { id: 'overwhelmed', label: 'Work Stress / Chaotic Day', icon: '💼' },
              { id: 'bullied', label: 'Feeling Fragile / Hurt', icon: '🛡️' },
            ].map((mood) => (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
                  selectedMood === mood.id
                    ? 'bg-stone-900 text-amber-300 shadow-sm'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                <span>{mood.icon}</span>
                <span>{mood.label}</span>
              </button>
            ))}
          </div>

          {/* Active Remedy Card */}
          <div className="mt-8 bg-stone-50 rounded-2xl p-6 border border-stone-200 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-56 h-48 rounded-xl overflow-hidden shadow-sm shrink-0 border border-stone-200 bg-stone-200">
              <img
                src={activeRemedy.image}
                alt={activeRemedy.catName}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-3 flex-1">
              <div className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                Remedy Protocol: {activeRemedy.tag}
              </div>
              <h3 className="text-xl font-bold text-stone-900">
                {activeRemedy.catName}
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">
                "{activeRemedy.text}"
              </p>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onNavigate('product')}
                  className="text-xs font-semibold text-stone-900 hover:text-amber-700 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Download this cat in 4K resolution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* The Science & Heart of Why Cat Images Heal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-stone-200 pt-16">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              The Therapeutic Formula
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900">
              Why Cat Pictures Are Actual Medicine
            </h2>
            <p className="text-stone-600 text-sm">
              Studies across universities (including Indiana University Media School) show that viewing cat content significantly boosts positive emotions and decreases negative emotions like anxiety, hopelessness, and guilt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <div className="text-sm font-semibold text-stone-400">01. The Purr Frequency</div>
              <h3 className="text-lg font-bold text-stone-900">20Hz to 140Hz Therapeutic Range</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                A cat's purr vibrates at frequencies known to stimulate muscle regeneration, reduce blood pressure, and ease breathing difficulties. Listening to purring releases endorphins in human brains.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <div className="text-sm font-semibold text-stone-400">02. Humor & Cognitive Relief</div>
              <h3 className="text-lg font-bold text-stone-900">Breaking Anxiety Spirals</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                When you see an orange cat looking completely jacked or an office cat taking a telephone call, your brain is forced to interrupt repetitive negative ruminations through genuine, spontaneous laughter.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-3">
              <div className="text-sm font-semibold text-stone-400">03. Judgment-Free Sanctuary</div>
              <h3 className="text-lg font-bold text-stone-900">Zero Expectation Space</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Cats do not care about your productivity metrics, unread emails, or social status. They simply exist with supreme confidence, giving you permission to just exist and rest.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Marquee Bento Preview of the 3 Key Hubs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Hub 1: About Us (Jacked Cat Team) */}
          <div
            onClick={() => onNavigate('about')}
            className="group cursor-pointer bg-amber-100/60 hover:bg-amber-100 rounded-3xl p-8 border border-amber-200 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                01 // ABOUT US_ARCEL
              </div>
              <h3 className="text-2xl font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                The Jacked Cat Philosophy
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                "We don't chase success. Success chases us." Meet Arcel's legendary muscular squad dedicated to lifting your expectations and looking jacked while doing it.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-2 text-xs font-semibold text-stone-900 group-hover:translate-x-1 transition-transform">
              <span>Read About Us & Our Mission</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Hub 2: Product (Free High Res Downloads) */}
          <div
            onClick={() => onNavigate('product')}
            className="group cursor-pointer bg-orange-100/50 hover:bg-orange-100 rounded-3xl p-8 border border-orange-200 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-orange-800">
                02 // WE SELL YOU PRODUCT
              </div>
              <h3 className="text-2xl font-bold text-stone-900 group-hover:text-orange-900 transition-colors">
                Free High-Res Downloads
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Download desktop wallpapers (4K), mobile lockscreens, and avatar stickers free of charge. No payment gates, no subscriptions—pure healing.
              </p>
            </div>
            <div className="pt-6 flex items-center gap-2 text-xs font-semibold text-stone-900 group-hover:translate-x-1 transition-transform">
              <span>Explore High-Res Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Hub 3: Contact & Submit */}
          <div
            onClick={() => onNavigate('contact')}
            className="group cursor-pointer bg-stone-900 hover:bg-stone-800 text-white rounded-3xl p-8 border border-stone-800 transition-all shadow-md flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                03 // CONTACT & SUBMIT
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                Send Us Your Cat Photos
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Have a hilarious or healing cat at home? Upload your photo to get featured in our Community Hall of Fame, or connect with Arcel on Telegram (09563952282).
              </p>
            </div>
            <div className="pt-6 flex items-center gap-2 text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>Submit Photo / Reach Out</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
