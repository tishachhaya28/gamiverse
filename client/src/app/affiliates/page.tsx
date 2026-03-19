export default function AffiliatesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black text-gray-900 mb-8 uppercase tracking-tight">Affiliate Program</h1>
      <div className="prose prose-lg text-gray-600 leading-relaxed">
        <p className="mb-6">
          Join the Gamiverse Affiliate Program and earn by sharing our platform with your audience. We offer competitive rates and easy-to-use marketing tools.
        </p>
        
        <div className="space-y-6 mt-12 text-gray-700">
           <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-primary p-3 rounded-xl font-black">01</div>
              <div>
                 <h4 className="font-bold text-gray-900">Sign Up</h4>
                 <p className="text-sm">Apply for our program and get approved within 48 hours.</p>
              </div>
           </div>
           <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-primary p-3 rounded-xl font-black">02</div>
              <div>
                 <h4 className="font-bold text-gray-900">Promote</h4>
                 <p className="text-sm">Share your unique link on your website, blog, or social media.</p>
              </div>
           </div>
           <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-primary p-3 rounded-xl font-black">03</div>
              <div>
                 <h4 className="font-bold text-gray-900">Earn</h4>
                 <p className="text-sm">Get paid for every new player you bring to the Gamiverse.</p>
              </div>
           </div>
        </div>

        <div className="mt-16 p-10 bg-gray-900 rounded-[3rem] text-white text-center">
           <h2 className="text-3xl font-black mb-4 uppercase">Ready to join?</h2>
           <p className="text-gray-400 mb-8">Start your journey with the fastest growing game portal.</p>
           <button className="bg-white text-gray-900 font-bold px-12 py-4 rounded-full hover:bg-gray-100 transition-colors">
              APPLY NOW
           </button>
        </div>
      </div>
    </div>
  );
}
