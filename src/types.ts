/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type NavTab = 
  | 'home' 
  | 'about' 
  | 'industries' 
  | 'velocity-re' 
  | 'case-studies' 
  | 'contact'
  |'ai-solutions';

export interface CaseStudyData {
  id: 'tab-a' | 'tab-b' | 'tab-c' | 'tab-d';
  tabLabel: string;
  category: 'DBMG Consulting' | 'Retail Residential' | 'Private Pocket Listings' | 'Commercial Property';
  title: string;
  valueOrScale: string;
  primaryMetric: string;
  secondaryMetric: string;
  summary: string;
  challenge: string;
  strategy: string;
  frameworkApplication: string[];
  auditedResults: {
    label: string;
    value: string;
    subtext: string;
  }[];
  confidentialityNote?: string;
}

export interface IndustryData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  challenges: string[];
  solutions: string[];
  impactMetric: string;
  metricLabel: string;
}

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  programTrack: 'DBMG Strategic Consulting' | 'Velocity RE Real Estate Program';
  message: string;
  requiresNda: boolean;
}
