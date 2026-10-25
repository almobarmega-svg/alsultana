export interface DressItem {
  id: string;
  title: string;
  category: 'evening' | 'abaya' | 'suit' | 'caftan' | 'cocktail';
  categoryLabel: string;
  priceEstimate: number; // in SAR/AED
  durationDays: number;
  fabric: string;
  fabricOrigin: string;
  image: string;
  description: string;
  tailoringDetails: string[];
  recommendedOccasion: string;
  availableColors: { name: string; hex: string }[];
  isFeatured?: boolean;
}

export interface CustomTailoringOrder {
  id: string;
  garmentType: string;
  fabricSource: 'from_atelier' | 'client_provided';
  fabricType: string;
  measurementsType: 'standard' | 'custom';
  standardSize?: string;
  customMeasurements: {
    bust?: number;
    waist?: number;
    hips?: number;
    shoulder?: number;
    sleeve?: number;
    totalLength?: number;
  };
  embroideryLevel: 'none' | 'subtle' | 'luxury_hand';
  notes: string;
  customerName: string;
  customerPhone: string;
  city: string;
  estimatedPrice: number;
  estimatedDays: number;
  createdAt: string;
}

export interface AppointmentBooking {
  id: string;
  customerName: string;
  customerPhone: string;
  date: string;
  timeSlot: string;
  serviceType: string;
  notes?: string;
}

export interface FabricItem {
  id: string;
  name: string;
  description: string;
  season: string;
  bestFor: string;
  swatchColor: string;
  drapeQuality: string;
}

export interface ClientReview {
  id: string;
  author: string;
  occasion: string;
  city: string;
  rating: number;
  comment: string;
  dressChosen: string;
}
