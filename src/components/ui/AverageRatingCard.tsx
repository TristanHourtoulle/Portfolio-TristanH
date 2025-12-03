'use client';

import { Star } from 'lucide-react';

interface AverageRatingCardProps {
  rating: number;
  totalClients: number;
}

export function AverageRatingCard({ rating, totalClients }: AverageRatingCardProps) {
  return (
    <div className="bg-card-bg rounded-2xl p-6 border-2 border-gray-300/10 dark:border-gray-500/10 h-full flex flex-col items-center justify-center text-center transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:border-primary-blue/20">
      <h4 className="font-semibold text-text-dark mb-4">Note Moyenne</h4>
      <div className="flex items-center gap-2 mb-2">
        <Star className="w-8 h-8 fill-primary-blue text-primary-blue" />
        <span className="text-3xl font-bold text-primary-blue">{rating}/5</span>
      </div>
      <p className="text-sm text-text-light">sur +{totalClients} clients</p>
    </div>
  );
}
