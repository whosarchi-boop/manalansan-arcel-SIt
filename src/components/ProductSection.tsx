import React, { useState } from 'react';
import { Download, Eye, Sparkles, Filter, Check, Heart, Monitor, Smartphone, User, ArrowDownToLine } from 'lucide-react';
import { CatImage, CommunitySubmission } from '../types/cat';
import { downloadCatImage } from '../utils/download';

interface ProductSectionProps {
  cats: CatImage[];
  communitySubmissions: CommunitySubmission[];
  onOpenSubmit: () => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  cats,
  communitySubmissions,
  onOpenSubmit
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCat, setSelectedCat] = useState<CatImage | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [formatChoice, setFormatChoice] = useState<'original' | 'wallpaper-desktop' | 'wallpaper-mobile' | 'avatar'>('original');

  // Convert community submissions into displayable cat images if any
  const communityAsCats: CatImage[] = communitySubmissions.map((sub) => ({
    id: `comm-${sub.id}`,
    title: sub.catName,
    tagline: sub.story,
    category: 'community' as const,
    src: sub.imageUrl,
    resolution: 'Community Uploaded HD',
    healingMetric: '+100% Wholesome Community Love',
    quote: sub.story,
    author: `Submitted by ${sub.ownerName}`,
    downloadsCount: 42 + sub.likes,
    tags: ['Community Cat', 'Real Healer', 'Visitor Favorite']
  }));

  const allAvailableCats = [...cats, ...communityAsCats];

  const filteredCats = activeCategory === 'all'
    ? allAvailableCats
    : allAvailableCats.filter((c) => c.category === activeCategory);

  const handleDownload = async (cat: CatImage, format: 'original' | 'wallpaper-desktop' | 'wallpaper-mobile' | 'avatar' = 'original') => {
    setDownloadingId(cat.id);
    try {
      await downloadCatImage(cat.src, `arcel-cat-${cat.id}`, { format });
    } finally {
      setTimeout(() => setDownloadingId(null), 800);
    }
  };

  return (
    <div className="space-y-12 pb-20 pt-6">
      
      {/* Product Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sky-100/70 border border-sky-300/80 rounded-3xl p-6 sm:p-12 relative overflow-hidden shadow-sm">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-sky-900 uppercase">
              <span>PRODUCT_ARCEL</span>
              <span aria-hidden="true">·</span>
              <span>FREE HIGH-RES REPOSITORY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-900 font-display">
              "WE SELL YOU PRODUCT"
            </h1>

            <div className="inline-flex items-center gap-2 bg-stone-900 text-amber-300 px-3.5 py-1.5 rounded-xl font-bold text-sm">
              <Sparkles className="w-4 h-4 fill-amber-300" />
              <span>OFFICIAL PRICE: $0.00 (100% FREE FOREVER)</span>
            </div>

            <p className="text-base text-stone-700 leading-relaxed font-medium">
              You wanted products? Here is our entire high-resolution inventory of therapeutic, 
              humorous, and stress-crushing felines. Download them in pristine 4K resolution for your 
              desktop wallpaper, phone lockscreen, digital avatar, or print them for your study wall.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenSubmit}
                className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow cursor-pointer flex items-center gap-2"
              >
                <span>Have a Cat? Add to This Catalog</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Filter Tabs & Inventory Counts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-stone-200/70 rounded-xl">
            {[
              { id: 'all', label: 'All Inventory' },
              { id: 'healing', label: 'Cozy & Healing' },
              { id: 'jacked', label: 'Buff & Jacked' },
              { id: 'derp', label: 'Office & Derp' },
              { id: 'gang', label: 'Street Syndicate' },
              { id: 'community', label: `Community (${communitySubmissions.length})` },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-stone-500 font-mono">
            SHOWING {filteredCats.length} HEALING PRODUCTS
          </div>
        </div>
      </section>

      {/* Product Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCats.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              {/* Image Preview with Lightbox Trigger */}
              <div className="relative aspect-4/3 overflow-hidden bg-stone-950 cursor-pointer" onClick={() => setSelectedCat(cat)}>
                <img
                  src={cat.src}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Resolution Pill */}
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-sm text-stone-200 text-[10px] font-mono px-2.5 py-1 rounded-md border border-stone-700">
                  {cat.resolution}
                </div>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <span className="bg-white text-stone-900 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect & Crop</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-amber-700">{cat.healingMetric}</span>
                    <span className="text-stone-400 font-mono text-[11px]">PRICE: $0.00</span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-stone-600 text-xs leading-relaxed line-clamp-2">
                    "{cat.quote}"
                  </p>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedCat(cat)}
                    className="text-xs font-semibold text-stone-600 hover:text-stone-900 flex items-center gap-1 cursor-pointer py-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Options</span>
                  </button>

                  <button
                    onClick={() => handleDownload(cat, 'original')}
                    disabled={downloadingId === cat.id}
                    className="px-3.5 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg shadow-sm transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 disabled:opacity-50"
                  >
                    <ArrowDownToLine className="w-3.5 h-3.5 text-amber-400" />
                    <span>{downloadingId === cat.id ? 'Downloading...' : 'Free Download'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox / High-Res Download Modal */}
      {selectedCat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-stone-200 flex flex-col md:flex-row max-h-[90vh]">
            
            {/* Visual Area */}
            <div className="md:w-3/5 bg-stone-950 flex items-center justify-center relative p-2 overflow-hidden">
              <img
                src={selectedCat.src}
                alt={selectedCat.title}
                className="max-h-[60vh] md:max-h-[85vh] w-auto object-contain rounded-lg"
              />
            </div>

            {/* Modal Controls */}
            <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    Product Specification
                  </span>
                  <button
                    onClick={() => setSelectedCat(null)}
                    className="text-stone-400 hover:text-stone-900 text-sm font-semibold p-1 cursor-pointer"
                  >
                    ✕ Close
                  </button>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-stone-900 font-display">
                    {selectedCat.title}
                  </h3>
                  <div className="text-xs text-stone-500 font-mono mt-0.5">
                    Original Resolution: {selectedCat.resolution}
                  </div>
                </div>

                <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-200 text-xs text-amber-900">
                  <div className="font-bold">Serotonin Guarantee:</div>
                  <div className="mt-0.5">{selectedCat.healingMetric}</div>
                </div>

                <p className="text-stone-600 text-xs leading-relaxed italic">
                  "{selectedCat.quote}"
                </p>

                {/* Aspect Ratio / Preset Choices */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-700 block">
                    Choose Download Preset:
                  </label>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setFormatChoice('original')}
                      className={`p-2.5 rounded-xl text-xs font-medium border text-left flex items-center gap-2 cursor-pointer ${
                        formatChoice === 'original'
                          ? 'border-stone-900 bg-stone-900 text-white'
                          : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      <div>
                        <div className="font-semibold">Original 4K</div>
                        <div className="text-[10px] opacity-80">Full Fidelity</div>
                      </div>
                    </button>

                    <button
                      onClick={() => setFormatChoice('wallpaper-desktop')}
                      className={`p-2.5 rounded-xl text-xs font-medium border text-left flex items-center gap-2 cursor-pointer ${
                        formatChoice === 'wallpaper-desktop'
                          ? 'border-stone-900 bg-stone-900 text-white'
                          : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <Monitor className="w-3.5 h-3.5 shrink-0" />
                      <div>
                        <div className="font-semibold">16:9 PC</div>
                        <div className="text-[10px] opacity-80">3840 × 2160</div>
                      </div>
                    </button>

                    <button
                      onClick={() => setFormatChoice('wallpaper-mobile')}
                      className={`p-2.5 rounded-xl text-xs font-medium border text-left flex items-center gap-2 cursor-pointer ${
                        formatChoice === 'wallpaper-mobile'
                          ? 'border-stone-900 bg-stone-900 text-white'
                          : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5 shrink-0" />
                      <div>
                        <div className="font-semibold">9:16 Phone</div>
                        <div className="text-[10px] opacity-80">1080 × 1920</div>
                      </div>
                    </button>

                    <button
                      onClick={() => setFormatChoice('avatar')}
                      className={`p-2.5 rounded-xl text-xs font-medium border text-left flex items-center gap-2 cursor-pointer ${
                        formatChoice === 'avatar'
                          ? 'border-stone-900 bg-stone-900 text-white'
                          : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <User className="w-3.5 h-3.5 shrink-0" />
                      <div>
                        <div className="font-semibold">1:1 Avatar</div>
                        <div className="text-[10px] opacity-80">1024 × 1024</div>
                      </div>
                    </button>
                  </div>
                </div>

              </div>

              {/* Big Download Action */}
              <div className="space-y-2 pt-4 border-t border-stone-100">
                <button
                  onClick={() => handleDownload(selectedCat, formatChoice)}
                  disabled={downloadingId === selectedCat.id}
                  className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm rounded-xl shadow transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                >
                  <ArrowDownToLine className="w-4 h-4" />
                  <span>
                    {downloadingId === selectedCat.id ? 'Generating High-Res Image...' : 'Download Free Preset (.jpg)'}
                  </span>
                </button>
                <div className="text-[11px] text-center text-stone-400 font-mono">
                  No watermark · 100% Free · Unlimited usage
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
