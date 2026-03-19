"use client";

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import GameEmbed from '@/components/GameEmbed';
import { Play, Share2, Maximize2, Info } from 'lucide-react';
import { fetchGameBySlug } from '@/lib/api';
import { Game } from '@/types';

export default function GameDetailPage({ params }: { params: { slug: string } }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ['game', params.slug],
    queryFn: () => fetchGameBySlug(params.slug),
    enabled: !!params.slug,
  });

  const game = data?.data;

  if (isLoading) return <div className="p-20 text-center animate-pulse text-gray-400 font-bold uppercase tracking-widest">Entering the Gamiverse...</div>;
  if (!game) return <div className="p-20 text-center text-red-500 font-bold">GAME NOT FOUND</div>;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Game Player Area */}
        <div className="mb-12">
          {isPlaying ? (
            <GameEmbed gameUrl={game.gameUrl} title={game.title} />
          ) : (
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer" onClick={() => setIsPlaying(true)}>
              <img 
                src={game.thumbnail} 
                alt={game.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/30">
                <button className="bg-primary hover:bg-primary-dark text-white p-8 rounded-full shadow-2xl transform transition-transform group-hover:scale-110">
                  <Play size={48} className="fill-current ml-2" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Game Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-black text-gray-900 mb-6 tracking-tight uppercase">
              {game.title}
            </h1>
            
            <div className="flex gap-4 mb-8">
               <button className="flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold px-6 py-3 rounded-2xl transition-all">
                  <Share2 size={20} />
                  <span>Share</span>
               </button>
               <button className="flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold px-6 py-3 rounded-2xl transition-all">
                  <Maximize2 size={20} />
                  <span>Full Screen</span>
               </button>
            </div>

            <div className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100/50">
               <div className="flex items-center space-x-2 text-primary mb-4">
                  <Info size={20} />
                  <span className="font-bold uppercase tracking-wider text-sm">How to Play</span>
               </div>
               <p className="text-gray-600 leading-relaxed text-lg italic">
                 {game.description}
               </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {game.tags.map((tag: any) => (
                <span key={tag._id} className="bg-gray-100 text-gray-600 px-5 py-2 rounded-full font-bold text-sm border border-gray-200 hover:border-primary hover:text-primary transition-all cursor-pointer">
                  #{tag.name.toUpperCase()}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar / Ads Placeholder */}
          <div className="space-y-8">
            <div className="aspect-[3/4] bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 italic">
               Advertisement Space
            </div>
            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
               <h3 className="font-black text-primary uppercase tracking-tight mb-4">Related Games</h3>
               <p className="text-sm text-gray-500 italic">More games coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
