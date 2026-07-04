'use client';

import { use } from 'react';
import { Hero } from '@/components/destination/Hero';
import { QuickFacts } from '@/components/destination/QuickFacts';
import { AISummary } from '@/components/destination/AISummary';
import { ImageGallery } from '@/components/destination/ImageGallery';
import { MapboxExperience } from '@/components/destination/MapboxExperience';
import { ExperiencesList } from '@/components/destination/ExperiencesList';
import { VerifiedOperators } from '@/components/destination/VerifiedOperators';
import { Weather } from '@/components/destination/Weather';
import { BestTimeToVisit } from '@/components/destination/BestTimeToVisit';
import { SafetyIntelligence } from '@/components/destination/SafetyIntelligence';
import { BookingSidebar } from '@/components/destination/BookingSidebar';
import { QandA } from '@/components/destination/QandA';
import { AIChatAssistant } from '@/components/destination/AIChatAssistant';

export default function DestinationPage({ params }: { params: Promise<{ id: string }> }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = use(params);

  // In a real app, we would fetch the destination details, weather, etc., using React Query here.
  // For the UI build, we will pass down mock data to the components to establish the cinematic feel.

  return (
    <div className="bg-black text-white min-h-screen relative font-sans">
      <Hero />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-12 relative">
        <div className="flex-1 space-y-24">
          <section id="ai-summary">
             <AISummary />
          </section>

          <section id="quick-facts">
             <QuickFacts />
          </section>

          <section id="gallery">
             <h2 className="text-3xl font-bold mb-8">Visual Story</h2>
             <ImageGallery />
          </section>

          <section id="map">
             <h2 className="text-3xl font-bold mb-8">Explore the Map</h2>
             <MapboxExperience />
          </section>

          <section id="experiences">
             <h2 className="text-3xl font-bold mb-8">Available Experiences</h2>
             <ExperiencesList />
          </section>

          <section id="operators">
             <h2 className="text-3xl font-bold mb-8">Verified Local Operators</h2>
             <VerifiedOperators />
          </section>

          <section id="weather-and-time">
             <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
               <Weather />
               <BestTimeToVisit />
             </div>
          </section>

          <section id="safety">
             <h2 className="text-3xl font-bold mb-8">Safety Intelligence</h2>
             <SafetyIntelligence />
          </section>

          <section id="q-and-a">
             <h2 className="text-3xl font-bold mb-8">Questions & Answers</h2>
             <QandA />
          </section>
        </div>

        <aside className="hidden lg:block w-[400px] flex-shrink-0 relative">
           <div className="sticky top-24">
             <BookingSidebar />
           </div>
        </aside>
      </div>

      <AIChatAssistant />
    </div>
  );
}
