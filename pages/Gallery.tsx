import React from 'react';
import SEO from '../components/SEO';

const galleryImages = [
  "https://lh3.googleusercontent.com/d/1_DSqhnvV7jmmLn8ozEQW-fpYYvDLEYT_",
  "https://lh3.googleusercontent.com/d/1rHC3vg6sM3NrOQiOhXwraq7Y9JLMdWqn",
  "https://lh3.googleusercontent.com/d/1OJ0c56KrKBSuRmb2pQ4MAUUjdyNxSK7j",
  "https://lh3.googleusercontent.com/d/1l9Uj3jTA89uBPWUqPezWM1tnj_vzAIuV",
  "https://lh3.googleusercontent.com/d/1wFs8MzdXrOdXDMx1yqh-FDm3z8iCcHd9",
  "https://lh3.googleusercontent.com/d/1KsBGvgfftLEqvI-whrv73fn11193bRpv",
  "https://lh3.googleusercontent.com/d/1Ym3oMxUMjjhEXImvcjnCJiztvjIn_hqm",
  "https://lh3.googleusercontent.com/d/1lk6AZTZggHUANuDI4slPTqdsyGcwAM-d",
  "https://lh3.googleusercontent.com/d/1jEhLcSZTmrE1bBANS2XjqyXG3aNJtHOz",
  "https://lh3.googleusercontent.com/d/1z8aLsM7fPQGnlox2MUY4XVCS-8CXqPRa",
  "https://lh3.googleusercontent.com/d/1VN9n2T3hiKm0Is2j-XYKASNyB-7FqvUK",
  "https://lh3.googleusercontent.com/d/1-6KKmXRGd8YtIoC3V6MXAWlknismRZy_",
  "https://lh3.googleusercontent.com/d/1KcRYxtirdJHOROmTYhwQmklnD0I9Rdow",
  "https://lh3.googleusercontent.com/d/1zzvS1ArpBG9m5dvgJ4JUxDGimFfl5kfA",
  "https://lh3.googleusercontent.com/d/14ovYTuVTvWbNb-Q2OR9R7IFoincoaG7K",
  "https://lh3.googleusercontent.com/d/1tXnY7kDBcyRw5znSnAxoMoiLSPtk8okX",
  "https://lh3.googleusercontent.com/d/15sjGdoh0Tx7Okg9MwDy0VRPFxFg2JsHa",
  "https://lh3.googleusercontent.com/d/1GKQ5z_y8rmri0pAKStruQ20GffIbp29U",
];

const Gallery: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-24 relative overflow-hidden">
      <SEO 
        title="Gallery | St. Xavier International School" 
        description="Explore the vibrant life at St. Xavier International School through our photo gallery. Glimpses of our campus, events, and student activities."
        keywords="School Gallery, St Xavier Photos, Campus Life, School Events"
      />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#c5a059 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      {/* Floating Blobs */}
      <div className="absolute top-40 -left-20 w-80 h-80 bg-gold/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-40 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-gold font-bold uppercase tracking-[0.3em] text-sm mb-4">Visual Journey</h2>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Our <span className="text-gold">Gallery</span></h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Experience the vibrant atmosphere, world-class infrastructure, and the spirit of excellence that defines St. Xavier International School.
          </p>
        </div>

        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {galleryImages.map((src, index) => (
            <div key={index} className="break-inside-avoid pt-2 px-2">
              <div className="relative group">
                {/* Creative Golden Frames */}
                <div className={`absolute -inset-3 border-2 border-gold/20 rounded-[2rem] transition-all duration-500 group-hover:inset-0 group-hover:border-gold/40 ${index % 3 === 0 ? '-rotate-3' : index % 3 === 1 ? 'rotate-2' : '-rotate-1'}`}></div>
                <div className={`absolute -inset-3 border border-gold/10 rounded-[2rem] transition-all duration-700 delay-75 group-hover:inset-0 ${index % 3 === 0 ? 'rotate-2' : index % 3 === 1 ? '-rotate-3' : 'rotate-1'}`}></div>
                
                {/* Main Image Card */}
                <div className="relative z-10 bg-white p-2 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                  <div className="rounded-2xl overflow-hidden">
                    <img 
                      src={src} 
                      alt={`Gallery image ${index + 1}`} 
                      className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                
                {/* Corner Accent */}
                <div className="absolute -top-2 -right-2 z-20 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-white shadow-lg scale-0 group-hover:scale-100 transition-transform duration-300">
                  <span className="material-icons text-xs">auto_awesome</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-20 text-center">
          <a 
            href="https://drive.google.com/drive/folders/1Mc6-Wncwtzch3uFEVY8ybEbu6i1_NknU?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <span>View More Photos</span>
            <span className="material-icons text-sm">open_in_new</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
