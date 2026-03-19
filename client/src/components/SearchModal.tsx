"use client";

import { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search, X, Play } from 'lucide-react';
import Link from 'next/link';

import { searchGames } from '@/lib/api';

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const { data, isLoading: loading } = useQuery({
    queryKey: ['search', query],
    queryFn: () => searchGames(query),
    enabled: query.length > 1,
    placeholderData: (previousData: any) => previousData,
  });

  const results = data?.data || [];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 sm:px-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-md" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 border border-white/20">
        <div className="p-8 border-b border-gray-50 flex items-center space-x-6 bg-gray-50/50">
          <Search className="text-primary animate-pulse" size={28} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search our 100+ premium games..."
            className="flex-grow text-xl bg-transparent border-none outline-none focus:ring-0 text-gray-900 font-medium placeholder-gray-400 tracking-tight"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="p-3 hover:bg-white rounded-full text-gray-400 hover:text-red-500 transition-all shadow-sm">
            <X size={24} />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-6">
          {loading ? (
            <div className="py-20 text-center text-primary font-black animate-pulse uppercase tracking-widest">Searching the Gamiverse...</div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {results.map((game: any) => (
                <Link 
                  key={game._id} 
                  href={`/game/${game.slug}`} 
                  onClick={onClose}
                  className="flex items-center p-4 hover:bg-primary/5 rounded-[2rem] transition-all group"
                >
                  <img src={game.thumbnail} alt={game.title} className="w-16 h-16 rounded-2xl object-cover mr-6 shadow-md transition-transform group-hover:scale-110" />
                  <div className="flex-grow">
                    <h4 className="font-black text-gray-900 group-hover:text-primary transition-colors text-lg uppercase tracking-tight">{game.title}</h4>
                    <span className="text-[10px] text-primary font-black uppercase tracking-[0.2em]">Play Now Instantly</span>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 border border-gray-50">
                    <Play size={16} className="text-primary fill-current ml-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          ) : query.length > 1 ? (
            <div className="py-20 text-center">
               <div className="text-gray-300 mb-2 font-black text-5xl opacity-20">?!</div>
               <div className="text-gray-400 italic font-bold">No games found for "{query}"</div>
            </div>
          ) : (
            <div className="py-20 text-center">
                <Search size={48} className="mx-auto text-gray-100 mb-4" />
                <p className="text-gray-300 italic font-semibold">Start typing to explore...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
