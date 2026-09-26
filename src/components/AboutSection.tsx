import React, { useState } from 'react';
import { Dumbbell, Trophy, Heart, Sparkles, Award, Zap, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import buffCatImg from '../assets/images/buff_bodybuilder_cat_1790406307786.jpg';
import officeCatImg from '../assets/images/office_business_cat_1790406318308.jpg';
import gangCatImg from '../assets/images/gangster_cat_squad_1790406329009.jpg';
import loafCatImg from '../assets/images/serotonin_loaf_cat_1790406341083.jpg';

interface AboutSectionProps {
  onNavigateToProducts: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigateToProducts }) => {
  const [reps, setReps] = useState<number>(142);
  const [hasFlexed, setHasFlexed] = useState<boolean>(false);

  const handleFlexRep = () => {
    setReps((prev) => prev + 1);
    setHasFlexed(true);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#f59e0b', '#d97706', '#ef4444']
    });
  };

  return (
    <div className="space-y-16 pb-20 pt-6">
      
      {/* Top Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-100/70 border border-amber-300/80 rounded-3xl p-6 sm:p-12 relative overflow-hidden shadow-sm">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-amber-900 uppercase">
              <span>ABOUT US_ARCEL</span>
              <span aria-hidden="true">·</span>
              <span>THE MISSION</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-900 font-display">
              "We Don't Chase Success.{' '}
              <span className="text-amber-800 underline decoration-amber-400 decoration-wavy">
                Success Chases Us.
              </span>{' '}
              😼"
            </h1>

            <p className="text-base sm:text-lg text-stone-700 font-medium leading-relaxed">
              We are a team of highly skilled professionals dedicated to lifting your expectations, 
              solving problems, and looking absolutely jacked while doing it. Our mission is simple: 
              deliver excellence, maintain a strong presence, and make sure nobody messes with your 
              peace or our business. We believe in teamwork, confidence, and having the biggest paws 
              in the industry.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={handleFlexRep}
                className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold text-xs sm:text-sm rounded-xl transition-all shadow cursor-pointer flex items-center gap-2 active:scale-95"
              >
                <Dumbbell className="w-4 h-4 text-amber-400" />
                <span>Spot the Buff Cat ({reps} Reps Logged!)</span>
              </button>

              <button
                onClick={onNavigateToProducts}
                className="px-5 py-2.5 bg-white hover:bg-stone-100 text-stone-900 border border-amber-300 font-semibold text-xs sm:text-sm rounded-xl transition-all cursor-pointer"
              >
                Download Buff Cat in 4K
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Marquee Featured Card: The Jacked Bodybuilder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-sm">
          
          {/* Buff Cat Visual */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-amber-300 shadow-lg relative bg-stone-950">
              <img
                src={buffCatImg}
                alt="Muscular orange tabby cat bodybuilder"
                className="w-full h-auto object-cover max-h-[500px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-amber-400 text-stone-950 font-black text-xs px-3 py-1.5 rounded-lg shadow uppercase tracking-wide">
                BIGGEST PAWS IN THE INDUSTRY
              </div>
            </div>
          </div>

          {/* Buff Cat Story & Bio */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                Executive Leadership
              </div>
              <h2 className="text-3xl font-extrabold text-stone-900 font-display">
                Sir Paws-a-Lot
              </h2>
              <p className="text-stone-500 text-xs font-mono">
                HEAD OF HEAVY LIFTING & EMOTIONAL RESILIENCE
              </p>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              When Arcel founded this sanctuary, the objective was crystal clear: people fighting 
              depression, anxiety, and burnout don’t need empty platitudes. They need something so 
              audaciously hilarious, so powerfully confident, that it shatters their depressive fog.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Sir Paws-a-Lot bench-presses negative self-talk for breakfast. With 24-inch pythons of pure 
              fluff, he reminds you every single morning that you have survived 100% of your worst days.
            </p>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-100">
              <div>
                <div className="text-2xl font-black text-stone-900 font-display tabular-nums">
                  100%
                </div>
                <div className="text-xs text-stone-500">Free Serotonin</div>
              </div>
              <div>
                <div className="text-2xl font-black text-amber-700 font-display tabular-nums">
                  0 Lbs
                </div>
                <div className="text-xs text-stone-500">Excuses Allowed</div>
              </div>
              <div>
                <div className="text-2xl font-black text-stone-900 font-display tabular-nums">
                  24/7
                </div>
                <div className="text-xs text-stone-500">Healing Shift</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* The 4-Corner Sanctuary Roster */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
            Meet The Entire Department
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
            Arcel's Certified Healing Board of Directors
          </h2>
          <p className="text-stone-600 text-sm max-w-2xl">
            Each feline specialist handles a distinct wing of psychological rehabilitation and joyful disruption.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Buff Cat */}
          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="h-40 rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                <img src={buffCatImg} alt="Buff Cat" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-base">Sir Paws-a-Lot</h3>
                <div className="text-xs text-amber-700 font-medium">Head of Heavy Lifting</div>
              </div>
              <p className="text-stone-600 text-xs leading-relaxed">
                Specializes in destroying imposter syndrome through sheer feline mass and unwavering swagger.
              </p>
            </div>
            <div className="text-[11px] text-stone-400 font-mono">ROLE: CONFIDENCE COACH</div>
          </div>

          {/* Card 2: Office Phone Cat */}
          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="h-40 rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                <img src={officeCatImg} alt="Office Cat" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-base">Agent Mittens</h3>
                <div className="text-xs text-amber-700 font-medium">Chief Operator & Support</div>
              </div>
              <p className="text-stone-600 text-xs leading-relaxed">
                Taking direct calls on TG (09563952282). Listens patiently and transfers all anxiety to trash bin.
              </p>
            </div>
            <div className="text-[11px] text-stone-400 font-mono">ROLE: STRESS RESOLUTION</div>
          </div>

          {/* Card 3: Gangster Cat Squad */}
          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="h-40 rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                <img src={gangCatImg} alt="Gang Cat" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-base">Downtown Syndicate</h3>
                <div className="text-xs text-amber-700 font-medium">Personal Security Detail</div>
              </div>
              <p className="text-stone-600 text-xs leading-relaxed">
                Equipped with tiny fedoras and street wisdom to guard your boundaries against toxic energy.
              </p>
            </div>
            <div className="text-[11px] text-stone-400 font-mono">ROLE: BOUNDARY DEFENSE</div>
          </div>

          {/* Card 4: Serotonin Loaf */}
          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="h-40 rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                <img src={loafCatImg} alt="Loaf Cat" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-base">Butterscotch Loaf</h3>
                <div className="text-xs text-amber-700 font-medium">Head of Soft Rest</div>
              </div>
              <p className="text-stone-600 text-xs leading-relaxed">
                Zero moving parts. 100% warmth. Teaches the ancient Taoist art of doing absolutely nothing.
              </p>
            </div>
            <div className="text-[11px] text-stone-400 font-mono">ROLE: DEEP SLEEP AID</div>
          </div>

        </div>
      </section>

      {/* The Sanctuary Manifesto */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 sm:p-12 border border-stone-800">
          <div className="max-w-3xl space-y-8">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                ARCEL PAWS // CORE DOCTRINE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
                The 3 Unbreakable Healing Decrees
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                  01
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Laughter is Real Biomechanical Medicine</h3>
                  <p className="text-stone-300 text-sm mt-1 leading-relaxed">
                    A hearty laugh triggered by an absurdly muscular cat releases dopamine, increases oxygen intake, and stimulates heart, lungs, and muscles, decreasing physical tension for up to 45 minutes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                  02
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">No Price Tags on Human Well-Being</h3>
                  <p className="text-stone-300 text-sm mt-1 leading-relaxed">
                    While our page says "WE SELL YOU PRODUCT", every single cat photograph in ultra-high resolution is 100% free of charge. Your smile is the only currency accepted here.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                  03
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Community Paws Stand Together</h3>
                  <p className="text-stone-300 text-sm mt-1 leading-relaxed">
                    Anyone can send Arcel their cat photo. Every cat on this earth has the superpower to make a stranger feel less alone in the dark.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
