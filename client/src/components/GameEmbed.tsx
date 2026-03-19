export default function GameEmbed({ gameUrl, title }: { gameUrl: string; title: string }) {
  return (
    <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black ring-8 ring-blue-50">
      <iframe
        src={gameUrl}
        title={title}
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen
        allow="autoplay; fullscreen; gaming"
      />
    </div>
  );
}
