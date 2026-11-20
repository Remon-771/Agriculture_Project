'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/landing/Navbar';
import { Footer, ProductsSection } from '@/components/landing/Sections';

function AgricultureProductsContent() {
  const searchParams = useSearchParams();
  const category = searchParams?.get('category') || undefined;
  const isAgricultureGroup = searchParams?.get('group') === 'agriculture';
  const heading = category || (isAgricultureGroup ? 'Agriculture Products' : 'Agriculture Product');

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-forest">
        <Navbar />
        <div className="container mx-auto px-4 pb-10 pt-28 text-center">
          <div className="section-subheading">AgriculMS Marketplace</div>
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
            {heading}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            {category
              ? `Browse only ${category.toLowerCase()} uploaded by sellers across the marketplace.`
              : isAgricultureGroup
                ? 'Browse agriculture products uploaded from vendor dashboards, including seeds, fertilizer, pesticide, medicine, and equipment.'
              : 'Browse farmer-ready products uploaded by sellers across the marketplace.'}
          </p>
        </div>
      </div>
      <ProductsSection
        eyebrow="Latest Products List"
        heading={heading}
        category={category}
        group={isAgricultureGroup ? 'agriculture' : undefined}
        showViewAll={false}
      />
      <Footer />
    </main>
  );
}

export default function AgricultureProductsPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-gray-50" />}>
      <AgricultureProductsContent />
    </Suspense>
  );
}


