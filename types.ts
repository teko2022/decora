export type EventType = 
  | 'wedding' 
  | 'engagement' 
  | 'bride_room' 
  | 'kosha_backdrop' 
  | 'tables_flowers' 
  | 'photo_corner' 
  | 'custom_event';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  emoji: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  badge?: string;
  category: EventType;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'wedding' | 'engagement' | 'bride_room' | 'kosha' | 'flowers' | 'photocorner';
  categoryLabel: string;
  imageUrl: string;
  description: string;
  tags: string[];
  date?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  eventType: string;
  city: string;
  comment: string;
  rating: number;
  avatarUrl: string;
  eventDate: string;
  serviceUsed: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  likes: string;
  comments: string;
  caption: string;
  tag: string;
  isVideo?: boolean;
}

export interface ContactFormData {
  name: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  budgetRange: string;
  additionalDetails: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  metric?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
