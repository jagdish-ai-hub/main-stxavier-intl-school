import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <img 
                src="https://lh3.googleusercontent.com/d/1xURcNLdmXyzZlS9Red1VodnkYuFgv1K6" 
                alt="St. Xavier Logo" 
                className="w-10 h-10 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-bold tracking-tight uppercase">St. Xavier International School</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8">
              Empowering partners with a legacy of excellence and a future-proof fully guided educational ecosystem.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61588451832718" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all">
                <span className="material-icons text-sm">facebook</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all">
                <span className="material-icons text-sm">email</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gold mb-6 uppercase tracking-widest text-sm">Resources</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><Link to="/advantage" className="hover:text-gold transition-colors">The Advantage</Link></li>
              <li><Link to="/models" className="hover:text-gold transition-colors">Franchise Guide</Link></li>
              <li><Link to="/curriculum" className="hover:text-gold transition-colors">Curriculum</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><a href="#" className="hover:text-gold transition-colors">Quality Standards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gold mb-6 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">
          <p>© 2026 St. Xavier International. All Rights Reserved.</p>
          <div className="flex gap-8">
      
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;