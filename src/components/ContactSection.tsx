import React, { useState } from 'react';
import { Phone, Send, Upload, Image as ImageIcon, Heart, Check, Copy, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CommunitySubmission } from '../types/cat';
import officeCatImg from '../assets/images/office_business_cat_1790406318308.jpg';

interface ContactSectionProps {
  communitySubmissions: CommunitySubmission[];
  onAddSubmission: (submission: CommunitySubmission) => void;
  onLikeSubmission: (id: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  communitySubmissions,
  onAddSubmission,
  onLikeSubmission,
}) => {
  const [copiedTg, setCopiedTg] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form states
  const [catName, setCatName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [story, setStory] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const tgNumber = '09563952282';
  const emailAddress = 'whosarchi@gmail.com';

  const handleCopyTg = () => {
    navigator.clipboard.writeText(tgNumber);
    setCopiedTg(true);
    setTimeout(() => setCopiedTg(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!catName.trim() || !story.trim()) return;

    setIsSubmitting(true);

    const newSub: CommunitySubmission = {
      id: Date.now().toString(),
      catName: catName.trim(),
      ownerName: ownerName.trim() || 'Anonymous Cat Lover',
      story: story.trim(),
      imageUrl: previewUrl || officeCatImg,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      likes: 1,
    };

    setTimeout(() => {
      onAddSubmission(newSub);
      setIsSubmitting(false);
      setSuccessMessage(true);

      // Trigger celebration
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#fbbf24', '#34d399']
      });

      // Reset form
      setCatName('');
      setOwnerName('');
      setStory('');
      setPreviewUrl(null);

      setTimeout(() => setSuccessMessage(false), 6000);
    }, 500);
  };

  return (
    <div className="space-y-16 pb-20 pt-6">
      
      {/* Contact Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-100/70 border border-emerald-300/80 rounded-3xl p-6 sm:p-12 relative overflow-hidden shadow-sm">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-900 uppercase">
              <span>CONTACT US_ARCEL</span>
              <span aria-hidden="true">·</span>
              <span>COMMUNITY DESK</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-900 font-display">
              CONTACT US
            </h1>

            <p className="text-base sm:text-lg text-stone-800 font-semibold leading-relaxed">
              HERE'S MY TG NUMBER: <span className="font-mono text-stone-950 bg-emerald-200/80 px-2 py-0.5 rounded">{tgNumber}</span>
            </p>

            <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-medium">
              Want your cat featured on this site to help heal thousands of people who struggle with 
              mental health? Send me your cat image below or message me directly on Telegram!
            </p>

            {/* Quick Contact Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopyTg}
                className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow cursor-pointer flex items-center gap-2"
              >
                {copiedTg ? <Check className="w-4 h-4 text-emerald-400" /> : <Phone className="w-4 h-4 text-amber-400" />}
                <span>{copiedTg ? 'TG Number Copied!' : `Copy TG (${tgNumber})`}</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 bg-white hover:bg-stone-50 text-stone-900 border border-emerald-300 font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-sm cursor-pointer flex items-center gap-2"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <MessageSquare className="w-4 h-4 text-emerald-700" />}
                <span>{copiedEmail ? 'Email Copied!' : `Copy Email (${emailAddress})`}</span>
              </button>

              <a
                href={`https://t.me/+${tgNumber.replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-sm flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Open Telegram Chat</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Main 2-Column: Office Cat Receptionist & Cat Submission Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Cat Receptionist */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-950 aspect-4/3 relative">
              <img
                src={officeCatImg}
                alt="Cat in necktie holding telephone receiver"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-stone-900/90 backdrop-blur-md text-amber-300 text-xs px-3 py-1.5 rounded-lg border border-stone-700 font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>OPERATOR ON DUTY</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-stone-900 font-display">
                Executive Desk of Arcel
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                "Our phones are always off the hook for cat submissions. If your feline has a 
                funny resting face, a derpy pose, or therapeutic cuddle abilities, submit them here. 
                They will be proudly posted on our site to lift someone’s spirits."
              </p>

              <div className="pt-2 text-xs font-mono text-stone-500 space-y-1">
                <div>TELEGRAM: {tgNumber}</div>
                <div>EMAIL: {emailAddress}</div>
                <div>RESPONSE TIME: Usually within 1–2 naps</div>
              </div>
            </div>
          </div>

          {/* Right Column: Submission Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm">
            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Submission Portal
              </span>
              <h2 className="text-2xl font-bold text-stone-900">
                Send Me Your Cat Image to Post It Here
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm">
                Fill in the details below. Once submitted, your cat will appear right here in the Community Healing Wall!
              </p>
            </div>

            {successMessage && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs sm:text-sm flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <span className="font-bold">Meow-velous!</span> Your cat was successfully added to 
                  the Community Gallery! Thank you for sharing the healing joy.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Photo Upload Area */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Cat Photo
                </label>
                
                {previewUrl ? (
                  <div className="relative rounded-2xl overflow-hidden border-2 border-stone-200 aspect-16/9 bg-stone-100 max-h-56">
                    <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setPreviewUrl(null)}
                      className="absolute top-2 right-2 bg-stone-900/80 text-white text-xs px-2.5 py-1 rounded-md hover:bg-stone-900 cursor-pointer"
                    >
                      Change Photo
                    </button>
                  </div>
                ) : (
                  <label className="border-2 border-dashed border-stone-300 hover:border-amber-400 rounded-2xl p-6 text-center flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors bg-stone-50 hover:bg-amber-50/50">
                    <Upload className="w-8 h-8 text-stone-400" />
                    <div className="text-xs font-semibold text-stone-700">
                      Click to choose cat photo or drag and drop here
                    </div>
                    <div className="text-[11px] text-stone-400">
                      PNG, JPG, WEBP up to 10MB
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              {/* Form Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Cat's Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={catName}
                    onChange={(e) => setCatName(e.target.value)}
                    placeholder="e.g. Barnaby, Sir Fluff, Luna"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm focus:border-stone-900 focus:ring-1 focus:ring-stone-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Your Name / Handle
                  </label>
                  <input
                    type="text"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    placeholder="e.g. @yourtg or Arcel's Friend"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm focus:border-stone-900 focus:ring-1 focus:ring-stone-900 focus:outline-none"
                  />
                </div>
              </div>

              {/* Story / Superpower */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Healing Superpower or Funny Story *
                </label>
                <textarea
                  required
                  rows={3}
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  placeholder="Tell us what makes this cat healing! (e.g. 'He sits on my lap whenever I feel overwhelmed and purrs like a tractor.')"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm focus:border-stone-900 focus:ring-1 focus:ring-stone-900 focus:outline-none resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold text-xs sm:text-sm rounded-xl shadow transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4 fill-amber-300" />
                  <span>{isSubmitting ? 'Posting Your Cat...' : 'Post Cat to Site Now'}</span>
                </button>

                <a
                  href={`https://t.me/+${tgNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
                    `Hi Arcel! I want to submit my cat ${catName || ''} to your healing cat project!`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto text-center px-4 py-3 text-stone-700 hover:text-stone-950 font-medium text-xs sm:text-sm rounded-xl border border-stone-200 hover:bg-stone-50 transition-colors"
                >
                  Or Send Directly via Telegram
                </a>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* Live Community Submissions Hall of Fame */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Community Healing Wall
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
            Cats Sent in by Supporters
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm max-w-2xl">
            Real pets from our community bringing unconditional warmth and laughs to anyone who needs it today.
          </p>
        </div>

        {communitySubmissions.length === 0 ? (
          <div className="bg-white rounded-2xl border border-stone-200 p-8 text-center text-stone-500 text-sm">
            Be the very first to send a cat image to Arcel using the form above!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communitySubmissions.map((sub) => (
              <div
                key={sub.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-4/3 bg-stone-100 overflow-hidden">
                    <img
                      src={sub.imageUrl}
                      alt={sub.catName}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-xs text-stone-400">
                      <span>Submitted by {sub.ownerName}</span>
                      <span>{sub.date}</span>
                    </div>
                    <h3 className="font-bold text-stone-900 text-lg">{sub.catName}</h3>
                    <p className="text-stone-600 text-xs leading-relaxed italic">
                      "{sub.story}"
                    </p>
                  </div>
                </div>

                <div className="p-4 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => onLikeSubmission(sub.id)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                    <span>{sub.likes} Love Boops</span>
                  </button>
                  <span className="text-[11px] text-stone-400 font-mono">STATUS: FEATURED</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};
