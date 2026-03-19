export default function DeveloperPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black text-gray-900 mb-8 uppercase tracking-tight">For Developers</h1>
      <div className="prose prose-lg text-gray-600 leading-relaxed">
        <p className="mb-6">
          Are you a game developer looking to reach millions of players? Gamiverse is the perfect platform to showcase your HTML5 creations.
        </p>
        <p className="mb-8">
          We partner with leading game distribution networks and independent developers to bring fresh, engaging content to our audience every single day.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
             <h3 className="font-black text-gray-900 mb-4 uppercase tracking-tighter">Submit Your Game</h3>
             <p className="text-sm">Get featured on our homepage and reach a global audience. We provide easy integration and transparent analytics.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
             <h3 className="font-black text-gray-900 mb-4 uppercase tracking-tighter">Developer Tools</h3>
             <p className="text-sm">Access our SDKs and documentation to optimize your games for web and mobile platforms.</p>
          </div>
        </div>

        <button className="mt-12 bg-primary text-white font-bold px-10 py-5 rounded-full hover:bg-primary-dark shadow-xl transition-all">
          CONTACT PARTNERSHIP TEAM
        </button>
      </div>
    </div>
  );
}
