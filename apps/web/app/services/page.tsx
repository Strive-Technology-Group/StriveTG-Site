import React from 'react';
import { Metadata } from 'next';
import ServicesPage from '../components/ServicesPage';

export const metadata: Metadata = {
  title: 'Services | Strive Technology Group',
  description: 'Professional tech services for small businesses: Website Development & Hosting, Website Upkeep & Support, Search & Visibility Suite, Insight Analytics Pipelines, and AI Automation. Custom solutions designed for your business.',
};

export default function Services() {
  return <ServicesPage />;
}