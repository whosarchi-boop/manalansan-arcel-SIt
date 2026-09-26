export type TabType = 'home' | 'about' | 'product' | 'contact';

export interface CatImage {
  id: string;
  title: string;
  tagline: string;
  category: 'healing' | 'jacked' | 'derp' | 'gang' | 'community';
  src: string;
  resolution: string;
  healingMetric: string;
  quote: string;
  author?: string;
  downloadsCount: number;
  tags: string[];
}

export interface CommunitySubmission {
  id: string;
  catName: string;
  story: string;
  imageUrl: string;
  ownerName: string;
  date: string;
  likes: number;
}
