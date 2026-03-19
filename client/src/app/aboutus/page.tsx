export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black text-gray-900 mb-8 uppercase tracking-tight">About Gamiverse</h1>
      <div className="prose prose-lg text-gray-600 leading-relaxed">
        <p className="mb-6">
          Welcome to **Gamiverse**, your ultimate destination for high-quality, free-to-play HTML5 games. Inspired by the best in the industry, we aim to provide a seamless gaming experience directly in your browser.
        </p>
        <p className="mb-6">
          Our mission is to bring joy to millions of players worldwide by offering a diverse catalog of games—from action-packed adventures to relaxing puzzles—all without the need for downloads or installations.
        </p>
        <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 mt-12">
           <h3 className="text-primary font-bold mb-4 uppercase tracking-wider">Why Gamiverse?</h3>
           <ul className="list-disc pl-5 space-y-2 font-medium">
             <li>Instant access to 100+ curated titles</li>
             <li>Cross-platform support (Desktop & Mobile)</li>
             <li>Optimized for speed and performance</li>
             <li>Always free, always fun</li>
           </ul>
        </div>
      </div>
    </div>
  );
}
