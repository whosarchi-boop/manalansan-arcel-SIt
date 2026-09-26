import { CatImage } from '../types/cat';

import buffCatImg from '../assets/images/buff_bodybuilder_cat_1790406307786.jpg';
import gangCatImg from '../assets/images/gangster_cat_squad_1790406329009.jpg';
import heroCatImg from '../assets/images/hero_healing_cat_1790406298126.jpg';
import officeCatImg from '../assets/images/office_business_cat_1790406318308.jpg';
import loafCatImg from '../assets/images/serotonin_loaf_cat_1790406341083.jpg';

export const INITIAL_CATS: CatImage[] = [
  {
    id: 'cat-jacked',
    title: 'The Bodybuilder Boss',
    tagline: 'We don\'t chase success. Success chases us.',
    category: 'jacked',
    src: buffCatImg,
    resolution: '3840 × 2880 (4K UHD)',
    healingMetric: '+99% Raw Confidence',
    quote: 'Dedicated to lifting your expectations, solving problems, and looking absolutely jacked while doing it.',
    author: 'Arcel Paws Gym',
    downloadsCount: 1420,
    tags: ['Gym Motivation', 'Alpha Energy', 'No Excuses', 'Paws of Steel']
  },
  {
    id: 'cat-gang',
    title: 'The Corner Street Syndicate',
    tagline: 'Coolest crew on the block. Ready to defend your peace.',
    category: 'gang',
    src: gangCatImg,
    resolution: '3840 × 2880 (4K UHD)',
    healingMetric: '+95% Emotional Armor',
    quote: 'Nobody messes with our business or your mental health while we are on shift.',
    author: 'Downtown Syndicate',
    downloadsCount: 1890,
    tags: ['Street Vibe', 'Cowboy Cat', 'Mafia Attitude', 'Zero Stress']
  },
  {
    id: 'cat-office',
    title: 'Executive Support Specialist',
    tagline: 'Taking your emergency serotonin calls 24/7.',
    category: 'derp',
    src: officeCatImg,
    resolution: '3840 × 2880 (4K UHD)',
    healingMetric: '+100% Work Stress Relief',
    quote: 'Please hold while I transfer you to the department of unconditional affection.',
    author: 'Arcel Corporate Support',
    downloadsCount: 2310,
    tags: ['Office Humor', 'Customer Care', 'Necktie Professional', 'Workday Healer']
  },
  {
    id: 'cat-healing',
    title: 'The Blanket Cocoon of Tranquility',
    tagline: 'Pure, gentle, slow-breathing morning peace.',
    category: 'healing',
    src: heroCatImg,
    resolution: '3840 × 2160 (4K UHD)',
    healingMetric: '-85% Cortisol / Anxiety',
    quote: 'Wrap yourself in kindness today. You have survived every single hard day so far.',
    author: 'Sanctuary Ward',
    downloadsCount: 3120,
    tags: ['Cozy Therapy', 'Sleep Aid', 'Morning Sunlight', 'Safe Space']
  },
  {
    id: 'cat-loaf',
    title: 'The Serotonin Bread Loaf',
    tagline: 'Tucked paws, big eyes, zero worries in the world.',
    category: 'healing',
    src: loafCatImg,
    resolution: '3000 × 3000 (Square HD)',
    healingMetric: '+98% Instant Dopamine',
    quote: 'Just looking at these paws releases more serotonin than a cup of warm tea.',
    author: 'Loaf Laboratory',
    downloadsCount: 2780,
    tags: ['Loaf Check', 'Boba Eyes', 'Pure Innocence', 'Heart Warmer']
  }
];

export const MENTAL_HEALTH_AFFIRMATIONS = [
  {
    cat: 'The Jacked Cat',
    quote: 'You carried heavy emotional weights today. That takes serious mental muscle. Be proud.',
    badge: 'Strength Boost'
  },
  {
    cat: 'The Office Cat',
    quote: 'Reminder from HR: You do not need to solve the entire universe today. Drink some water and breathe.',
    badge: 'Pacing Reminder'
  },
  {
    cat: 'The Street Cat Syndicate',
    quote: 'Whatever made you anxious earlier has no authority over your worth. We got your back.',
    badge: 'Protection Aura'
  },
  {
    cat: 'The Sleeping Kitten',
    quote: 'Rest is not a reward you have to earn. It is a biological necessity. Go soft on yourself.',
    badge: 'Gentle Comfort'
  },
  {
    cat: 'The Serotonin Loaf',
    quote: 'Sending you a virtual forehead boop and three steady purrs. Everything will be okay.',
    badge: 'Instant Hug'
  }
];
