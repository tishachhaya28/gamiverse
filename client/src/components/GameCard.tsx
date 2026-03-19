import Link from 'next/link';
import Image from 'next/image';

interface GameCardProps {
  title: string;
  slug: string;
  thumbnail: string;
}

export default function GameCard({ title, slug, thumbnail }: GameCardProps) {
  return (
    <Link href={`/game/${slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:ring-4 group-hover:ring-blue-50">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-primary border-b-[8px] border-b-transparent ml-1"></div>
             </div>
        </div>
      </div>
      <h3 className="mt-3 text-sm font-bold text-gray-800 line-clamp-1 group-hover:text-primary transition-colors pr-2">
        {title}
      </h3>
    </Link>
  );
}
