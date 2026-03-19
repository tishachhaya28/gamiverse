import Link from 'next/link';
import { Instagram, Facebook, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/aboutus" className="text-sm text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/developer" className="text-sm text-gray-600 hover:text-primary transition-colors">Developers</Link></li>
              <li><Link href="/affiliates" className="text-sm text-gray-600 hover:text-primary transition-colors">Affiliates</Link></li>
              <li><Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Recent Games */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Recent Games</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors line-clamp-1">Coming Soon...</Link></li>
            </ul>
          </div>

          {/* Top Games */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Top Games</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors line-clamp-1">Coming Soon...</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Connect</h3>
            <Link href="/contactus" className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition-all shadow-md hover:shadow-lg mb-6 group">
              <span>Contact Us</span>
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex space-x-4">
              <a href="#" className="p-2 text-gray-400 hover:text-primary transition-colors border border-gray-100 rounded-full hover:border-blue-100">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-primary transition-colors border border-gray-100 rounded-full hover:border-blue-100">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Gamiverse. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
