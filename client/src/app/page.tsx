"use client";

import { useQuery } from "@tanstack/react-query";
import HeroSection from "@/components/HeroSection";
import GameGrid from "@/components/GameGrid";
import { fetchGames } from "@/lib/api";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['games', 1, 50],
    queryFn: () => fetchGames(1, 50),
  });

  const games = data?.data || [];

  return (
    <div className="bg-white pb-20">
      <HeroSection />
      
      <section id="games" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight uppercase">Featured Games</h2>
            <div className="h-1.5 w-12 bg-primary mt-2 rounded-full"></div>
          </div>
          <button className="text-primary font-bold text-sm hover:underline">VIEW ALL</button>
        </div>
        
        {isLoading ? (
          <div className="py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-100 animate-pulse text-gray-400">
            Loading games...
          </div>
        ) : games.length > 0 ? (
          <GameGrid games={games} />
        ) : (
          <div className="py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-100 italic text-gray-400">
            No games found. Did you run the seed script?
          </div>
        )}
      </section>
    </div>
  );
}
