import React, { useState } from 'react';
import SEO from '../components/SEO';
import TrainingModal from '../components/TrainingModal';

const Advantage: React.FC = () => {
  const [isTrainingModalOpen, setIsTrainingModalOpen] = useState(false);
  const testimonials = [
    { text: "St. Xavier has transformed my son's confidence. The holistic approach is truly visible in his growth.", name: "Rajesh Kumar", role: "Parent, Grade 5" },
    { text: "The best infrastructure in the city. My daughter simply loves the robotics lab and the swimming pool!", name: "Priya Sharma", role: "Parent, Grade 8" },
    { text: "Switching to this franchise was the best decision. The curriculum is world-class and teachers are very supportive.", name: "Amit Patel", role: "Parent, Grade 3" },
    { text: "I appreciate the balance between academics and sports. It's rare to find such international standards in India.", name: "Vikram Malhotra", role: "Parent, Grade 9" },
    { text: "Safe environment and excellent communication with parents. The app updates are very helpful.", name: "Anjali Gupta", role: "Parent, Kindergarten" },
    { text: "The focus on values alongside modern education is what drew us to St. Xavier. Highly recommended.", name: "Suresh Reddy", role: "Parent, Grade 6" }
  ];

  // Duplicate for seamless scroll
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="bg-slate-50">
      <SEO 
        title="The St. Xavier Advantage | School Franchise Support" 
        description="Discover the operational, marketing, and training support provided by St. Xavier International. High ROI school franchise model with complete handholding."
        keywords="School Operations Support, Franchise ROI, Education Business Model, Teacher Training"
      />
      {/* Hero */}
      <section className="relative py-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <img alt="St Xavier School Campus Background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/d/1wFs8MzdXrOdXDMx1yqh-FDm3z8iCcHd9" referrerPolicy="no-referrer"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">The St. Xavier <span className="text-gold">Advantage</span></h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Joining the St. Xavier family is more than a business investment; it's a commitment to educational excellence and a legacy of nurturing global leaders.
          </p>
        </div>
      </section>

      {/* Testimonials Section (Replaces Legacy) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">What Parents Say</h2>
              <h3 className="text-4xl font-extrabold text-navy mb-8 leading-tight">Trusted by Families Across India</h3>
              
              <div className="h-[500px] overflow-hidden relative group">
                 {/* Gradient overlays for smooth fade effect */}
                 <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
                 <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

                 <div className="animate-vertical-marquee space-y-6 group-hover:pause pb-6">
                    {allTestimonials.map((t, i) => (
                       <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                           <div className="flex gap-1 mb-3 text-gold">
                              {[1,2,3,4,5].map(star => <span key={star} className="material-icons text-sm">star</span>)}
                           </div>
                           <p className="text-slate-700 italic mb-4 leading-relaxed">"{t.text}"</p>
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center text-navy font-bold">
                                {t.name.charAt(0)}
                              </div>
                              <div>
                                  <h5 className="font-bold text-navy text-sm">{t.name}</h5>
                                  <span className="text-xs text-slate-500 uppercase tracking-wider block">{t.role}</span>
                              </div>
                           </div>
                       </div>
                    ))}
                 </div>
              </div>
              
              <style>{`
                @keyframes vertical-marquee {
                  0% { transform: translateY(0); }
                  100% { transform: translateY(-50%); }
                }
                .animate-vertical-marquee {
                  animation: vertical-marquee 40s linear infinite;
                }
                .group-hover\\:pause:hover .animate-vertical-marquee {
                  animation-play-state: paused;
                }
                @keyframes scale-up {
                  0% { transform: scale(0.95); opacity: 0; }
                  100% { transform: scale(1); opacity: 1; }
                }
              `}</style>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 border-2 border-gold/30 rounded-3xl -rotate-3"></div>
              <img alt="Happy Students and Parents" className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover" src="https://lh3.googleusercontent.com/d/1KsBGvgfftLEqvI-whrv73fn11193bRpv" referrerPolicy="no-referrer"/>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Operational Support</h2>
                <h3 className="text-4xl font-extrabold text-navy">We Build the Foundation Together</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { icon: 'architecture', title: 'Infrastructure & Design', text: 'Comprehensive architectural blueprints, interior design guidelines, and site selection assistance.' },
                    { icon: 'campaign', title: 'Marketing & Enrollment', text: 'Centralized national branding, localized digital marketing support, and robust lead generation funnels.' },
                    { icon: 'psychology', title: 'Training & Quality Control', text: 'Continuous professional development for faculty and administrative staff through our specialized training academy.' }
                ].map((card, i) => (
                    <div key={i} className="p-10 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform">
                        <div className="w-14 h-14 bg-navy text-gold rounded-2xl flex items-center justify-center mb-6">
                            <span className="material-icons text-3xl">{card.icon}</span>
                        </div>
                        <h4 className="text-xl font-bold text-navy mb-4">{card.title}</h4>
                        <p className="text-slate-600 leading-relaxed mb-6">{card.text}</p>
                        {card.title === 'Training & Quality Control' && (
                          <button 
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setIsTrainingModalOpen(true);
                            }}
                            className="relative z-20 inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-bold rounded-xl hover:bg-gold-light transition-all active:scale-95 cursor-pointer"
                          >
                            Explore Training Model
                            <span className="material-icons text-sm">arrow_forward</span>
                          </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Safe & Steady Education Business */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">A Safe & Steady Education Business</h2>
            <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Education is always needed in every village and town. Our school model is designed to help you grow step by step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: 'trending_up', 
                title: 'Gradual Growth Model', 
                desc: 'Start small and expand class by class every year.' 
              },
              { 
                icon: 'hourglass_bottom', 
                title: 'Break-Even Support', 
                desc: 'Most schools stabilize within 3~4 years, depending on admissions.' 
              },
              { 
                icon: 'savings', 
                title: 'Controlled Expenses', 
                desc: 'Simple infrastructure planning to keep costs manageable.' 
              },
              { 
                icon: 'handshake', 
                title: 'Continuous Guidance', 
                desc: 'We guide you at every stage—from setup to daily operations.' 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6 text-white">
                  <span className="material-icons">{item.icon}</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-icons text-primary text-sm">check_circle</span>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrainingModal 
        isOpen={isTrainingModalOpen} 
        onClose={() => setIsTrainingModalOpen(false)} 
      />
    </div>
  );
};

export default Advantage;