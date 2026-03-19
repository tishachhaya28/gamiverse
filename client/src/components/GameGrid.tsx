import GameCard from './GameCard';

interface Game {
  _id: string;
  title: string;
  slug: string;
  thumbnail: string;
}

interface GameGridProps {
  games: Game[];
}

export default function GameGrid({ games }: GameGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8">
      {games.map((game) => (
        <GameCard 
          key={game._id}
          title={game.title}
          slug={game.slug}
          thumbnail={game.thumbnail}
        />
      ))}
    </div>
  );
}
