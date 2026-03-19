import { Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white py-16 sm:py-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20 pointer-events-none">
        <div className="aspect-square w-[400px] rounded-full bg-gradient-to-br from-blue-600 to-indigo-600" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            YOUR GAME ZONE. <span className="text-primary underline decoration-blue-100 decoration-8 underline-offset-4">ALWAYS ON.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 mb-10 leading-relaxed">
            Experience the best free-to-play HTML5 games in one place. No downloads, no hassle–just pure fun, instantly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-primary hover:bg-primary-dark shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              EXPLORE GAMES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
