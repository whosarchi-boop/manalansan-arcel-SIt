/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TabType, CommunitySubmission } from './types/cat';
import { INITIAL_CATS } from './data/cats';
import { purrSynth } from './utils/audio';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { ProductSection } from './components/ProductSection';
import { ContactSection } from './components/ContactSection';
import { EmergencyMeowModal } from './components/EmergencyMeowModal';
import { Footer } from './components/Footer';

// Sample starting community cats
import loafCatImg from './assets/images/serotonin_loaf_cat_1790406341083.jpg';
import gangCatImg from './assets/images/gangster_cat_squad_1790406329009.jpg';

const DEFAULT_COMMUNITY_CATS: CommunitySubmission[] = [
  {
    id: 'comm-1',
    catName: 'Mochi the Round',
    ownerName: 'Chloe K.',
    story: 'Mochi sits right on my chest whenever I have panic attacks and purrs until my breathing normalizes.',
    imageUrl: loafCatImg,
    date: 'Sep 24, 2026',
    likes: 38
  },
  {
    id: 'comm-2',
    catName: 'Bandit & The Crew',
    ownerName: 'Marcus T.',
    story: 'Found these guys chilling on my porch during finals week. Their nonchalant attitude gave me instant courage.',
    imageUrl: gangCatImg,
    date: 'Sep 25, 2026',
    likes: 54
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [isPurring, setIsPurring] = useState<boolean>(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState<boolean>(false);
  const [communitySubmissions, setCommunitySubmissions] = useState<CommunitySubmission[]>(() => {
    try {
      const saved = localStorage.getItem('arcel_cat_submissions');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return DEFAULT_COMMUNITY_CATS;
  });

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTogglePurr = () => {
    const newState = purrSynth.toggle();
    setIsPurring(newState);
  };

  const handleAddSubmission = (submission: CommunitySubmission) => {
    const updated = [submission, ...communitySubmissions];
    setCommunitySubmissions(updated);
    try {
      localStorage.setItem('arcel_cat_submissions', JSON.stringify(updated));
    } catch {
      // ignore storage errors
    }
  };

  const handleLikeSubmission = (id: string) => {
    const updated = communitySubmissions.map((sub) => {
      if (sub.id === id) {
        return { ...sub, likes: sub.likes + 1 };
      }
      return sub;
    });
    setCommunitySubmissions(updated);
    try {
      localStorage.setItem('arcel_cat_submissions', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-stone-900 selection:bg-amber-200 selection:text-amber-900 font-sans">
      
      {/* Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        isPurring={isPurring}
        onTogglePurr={handleTogglePurr}
        onOpenEmergencyMeow={() => setIsEmergencyModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeSection
            onNavigate={handleTabChange}
            onOpenEmergencyMeow={() => setIsEmergencyModalOpen(true)}
            isPurring={isPurring}
            onTogglePurr={handleTogglePurr}
          />
        )}

        {activeTab === 'about' && (
          <AboutSection
            onNavigateToProducts={() => handleTabChange('product')}
          />
        )}

        {activeTab === 'product' && (
          <ProductSection
            cats={INITIAL_CATS}
            communitySubmissions={communitySubmissions}
            onOpenSubmit={() => handleTabChange('contact')}
          />
        )}

        {activeTab === 'contact' && (
          <ContactSection
            communitySubmissions={communitySubmissions}
            onAddSubmission={handleAddSubmission}
            onLikeSubmission={handleLikeSubmission}
          />
        )}
      </main>

      {/* Emergency Serotonin Modal */}
      <EmergencyMeowModal
        cats={INITIAL_CATS}
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
      />

      {/* Quiet Footer */}
      <Footer onNavigate={handleTabChange} />

    </div>
  );
}
