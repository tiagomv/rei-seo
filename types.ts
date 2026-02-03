import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  isNew?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

export interface PlanItem {
  name: string;
  price: string;
  period: string;
  focus: string;
  icon: LucideIcon;
  features: string[];
  isPopular?: boolean;
  checkoutUrl: string;
}

export interface BeforeAfterImage {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
}