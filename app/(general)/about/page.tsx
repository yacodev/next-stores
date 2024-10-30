import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO description',
  keywords: ['about page', 'nextjs'],
};

export default function AboutPage() {
  return <span className='text-7xl'> About page</span>;
}
