export interface NavItem {
  label: string;
  href: string;
}

export interface HeroSlide {
  eyebrow: string;
  title: string;
  description: string;
  stats: string[];
}

export interface FeatureCard {
  title: string;
  description: string;
}

export interface LawCard {
  title: string;
  description: string;
}

export interface CompanyContact {
  title: string;
  subtitle: string;
  whatsappLink: string;
  phone: string;
  email: string;
  instagramHandle: string;
  instagramLink: string;
  mapEmbedUrl: string;
  businessHours: string[];
  addressLines: string[];
}
