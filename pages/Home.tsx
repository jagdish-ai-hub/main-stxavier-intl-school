import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

const statsData = [
  { 
    label: 'Parents & Students', 
    value: 'ERP & Mobile App',
    icon: 'smartphone',
    modalTitle: 'ERP for Parents and Students',
    modalDesc: 'A seamless digital ecosystem designed to bridge the gap between school and home.',
    modalPoints: [
      'Real-time attendance and notifications.',
      'Academic performance and report cards.',
      'Secure digital fee payment portal.',
      'Direct channel with school staff.',
      'Homework and assignment tracking',
      'Instant circulars and announcements'
    ]
  },
  { 
    label: 'Throughout the Year', 
    value: 'Centralized Programs',
    icon: 'emoji_events',
    modalTitle: 'Year-Round interschool activities',
    modalDesc: 'Comprehensive physical education program ensuring holistic student development and fitness.',
    modalPoints: [
    'Inter-school sports competitions.',
    'Inter-school academic competitions and exams.',
    'Olympiad and scholarship exam coordination.',
    'Annual cultural and talent festivals.',
    'National-level quiz and debate competitions.',
    'Centralized science and innovation exhibitions.',
     'Leadership and personality development programs.'
    ]
  },
  { 
    label: 'Support', 
    value: 'Branding & Marketing',
    icon: 'campaign',
    modalTitle: '360° Branding & Marketing',
    modalDesc: 'National-level brand visibility and localized marketing strategies to drive admissions.',
    modalPoints: [
      'School launch & local activation strategy.',
      'Centralized digital marketing campaigns.',
      'Social media management support.',
      'Collateral design and brand guidelines.',
      'Admission counseling training.',
      'Outdoor & print branding support.',
      'School launch & local activation strategy.'
    ]
  },
  { 
    label: 'Guidance', 
    value: 'Infra & Operations',
    icon: 'domain',
    modalTitle: 'Infrastructure & Operations',
    modalDesc: 'End-to-end guidance on building a world-class campus and running efficient operations.',
    modalPoints: [
      'Architectural blueprints and interior design.',
      'Vendor network for equipment and furniture.',
      'Standard Operating Procedures (SOPs) manual.',
      'Regulatory compliance & CBSE affiliation assistance.',
      'Brand-aligned interior design standards',
      'ERP setup & automation support.',
      'Financial & fee planning guidance'
    ]
  },
  { 
    label: 'Commitment', 
    value: '100% Support',
    icon: 'handshake',
    modalTitle: 'Unwavering Commitment',
    modalDesc: 'We are partners in your success, providing continuous handholding at every step of the journey.',
    modalPoints: [
      'Dedicated Relationship Manager.',
      'Regular quality audits and feedback.',
      'Teacher recruitment and training support.',
      'Financial and review.',
      'Financial & fee planning guidance',
       'Leadership mentoring.',
      'Marketing optimization guidance.',
      'Operational troubleshooting support'

    ]
  },
];

const Home: React.FC = () => {
  // CONFIGURATION: Replace these values with your actual Google Form details
  // 1. Create a Google Form
  // 2. Click "Get pre-filled link" in the menu (or inspect the form HTML)
  // 3. Get the "action" URL (usually ends in /formResponse)
  // 4. Get the "entry.XXXXXX" IDs for each field from the input names
  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd9YlXmifuch4Fm_ArKIzD5fbRGoe_HhWXlPQDhHkjQWcG4NQ/formResponse";
  
  const ENTRY_IDS = {
    fullName: "entry.980636730",
    phone: "entry.1193084922",
    email: "entry.1528850470",
    city: "entry.1567981034",
    investment: "entry.294977037",
    address: "entry.1427697597",
    query: "entry.537193582"
  };

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    investment: '',
    address: '',
    query: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [activeModal, setActiveModal] = useState<number | null>(null);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeModal !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length <= 10) {
        setFormData(prev => ({ ...prev, [name]: numericValue }));
      }
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // DEMO MODE: Simulate submission if URL is not configured
    if (GOOGLE_FORM_ACTION_URL.includes("YOUR_FORM_ID")) {
      setTimeout(() => {
        setStatus('success');
      }, 1500);
      return;
    }

    const formPayload = new FormData();
    formPayload.append(ENTRY_IDS.fullName, formData.fullName);
    formPayload.append(ENTRY_IDS.phone, formData.phone);
    formPayload.append(ENTRY_IDS.email, formData.email);
    formPayload.append(ENTRY_IDS.city, formData.city);
    formPayload.append(ENTRY_IDS.investment, formData.investment);
    formPayload.append(ENTRY_IDS.address, formData.address);
    formPayload.append(ENTRY_IDS.query, formData.query);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Forms to avoid CORS errors
        body: formPayload
      });
      setStatus('success');
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  };

  return (
    <>
      <SEO 
        title="Best School Franchise Opportunity in India" 
        description="Partner with St. Xavier International. The most profitable school franchise opportunity in India offering world-class CBSE curriculum and complete operational support."
        keywords="School Franchise, St Xavier International, Education Business, Start a School, Best School Franchise India"
      />
      {/* Hero Section */}
      <header className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            alt="St Xavier International School Franchise Campus Building"
            src="https://lh3.googleusercontent.com/d/1_DSqhnvV7jmmLn8ozEQW-fpYYvDLEYT_"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Global Expansion 2026
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6"
            >
              Shape the Future <span className="text-primary">with US</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-slate-300 mb-10 leading-relaxed"
            >
              Partner with St. Xavier International—India's fastest-growing premium school network. Leverage Our Years of academic and on ground experience to build a profitable education business.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/#partner-form" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-xl hover:scale-105 transition-transform">
                Request Franchise Info
                <span className="material-icons ml-2">call</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="relative -mt-8 z-10 max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 divide-y sm:divide-y-0 md:divide-x divide-slate-100">
            {statsData.map((stat, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveModal(idx)}
                className={`group cursor-pointer p-4 md:p-6 text-center hover:bg-slate-50 transition-all duration-300 flex flex-col items-center min-h-[140px] ${idx === 4 ? 'sm:col-span-2 md:col-span-1 border-t sm:border-t-0' : 'border-b sm:border-b-0 sm:border-r border-slate-100'}`}
              >
                <div className="h-12 flex items-center justify-center mb-1 w-full">
                  <div className="text-lg md:text-base lg:text-lg font-black text-primary leading-tight px-1 group-hover:scale-105 transition-transform">
                    {stat.value}
                  </div>
                </div>
                <div className="h-8 flex items-start justify-center w-full">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-slate-500 flex items-center justify-center gap-1">
                    {stat.label}
                    <span className="material-icons text-[14px] opacity-0 group-hover:opacity-100 transition-opacity text-primary">info</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Modal */}
      {activeModal !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setActiveModal(null)}></div>
          <div className="bg-white rounded-[2rem] w-full max-w-md p-8 relative shadow-2xl animate-[scale-up_0.2s_ease-out]">
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-500 transition-colors"
            >
              <span className="material-icons text-sm">close</span>
            </button>
            
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <span className="material-icons text-3xl">{statsData[activeModal].icon}</span>
            </div>
            
            <h3 className="text-2xl font-black text-center mb-4 text-slate-900 leading-tight">
              {statsData[activeModal].modalTitle}
            </h3>
            
            <p className="text-center text-slate-600 mb-8 leading-relaxed text-sm">
              {statsData[activeModal].modalDesc}
            </p>
            
            <div className="space-y-4">
              {statsData[activeModal].modalPoints.map((point, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center mt-0.5">
                    <span className="material-icons text-[10px] font-bold">check</span>
                  </div>
                  <p className="text-sm font-medium text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {status === 'success' && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => {
            setStatus('idle');
            setFormData({ fullName: '', phone: '', email: '', city: '', investment: '', address: '', query: '' });
          }}></div>
          <div className="bg-white rounded-[2rem] w-full max-w-lg p-6 sm:p-8 relative shadow-2xl animate-[scale-up_0.2s_ease-out] text-center max-h-[90vh] overflow-y-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <span className="material-icons text-3xl sm:text-4xl">check</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 sm:mb-4">Request Received!</h3>
            <p className="text-slate-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              Thank you, <span className="font-bold text-slate-900">{formData.fullName.split(' ')[0]}</span>. Our expansion team will review your profile and contact you at <span className="font-bold text-slate-900">{formData.phone}</span> within 24 hours.
            </p>
            
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-slate-100">
              <p className="text-slate-700 mb-3 sm:mb-4 text-sm sm:text-base font-medium">If you have any doubts, questions, or need a quick response, please contact us directly:</p>
              <div className="flex flex-col gap-2 sm:gap-3 justify-center items-center">
                <a href="tel:9827903070" className="flex items-center gap-2 text-xl sm:text-2xl font-black text-primary hover:text-blue-800 transition-colors">
                  <span className="material-icons text-xl sm:text-2xl">phone</span>
                  9827903070
                </a>
                <a href="mailto:stxavierintl@gmail.com" className="flex items-center gap-2 text-base sm:text-lg font-bold text-slate-800 hover:text-primary transition-colors break-all">
                  <span className="material-icons text-base sm:text-lg">email</span>
                  stxavierintl@gmail.com
                </a>
              </div>
            </div>

            <button 
              onClick={() => {
                setStatus('idle');
                setFormData({ fullName: '', phone: '', email: '', city: '', investment: '', address: '', query: '' });
              }}
              className="w-full bg-primary text-white font-bold py-3 sm:py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-primary/30"
            >
              Close & Return
            </button>
          </div>
        </div>
      )}

      {/* Why Choose Us */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900"
          >
            The St. Xavier Franchise Advantage
          </motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: 'verified', title: 'Emerging & Trusted Brand', desc: 'Built over five years of focused academic excellence, our growing network has established strong community trust and a reputation for quality education.' },
            { icon: 'auto_stories', title: 'Structured Academic Framework', desc: 'A well-designed curriculum model aligned with CBSE standards and enriched with modern teaching methodologies to ensure consistent academic delivery.' },
            { icon: 'trending_up', title: 'Scalable & Sustainable Model', desc: 'A structured franchise system designed for steady growth, operational clarity, and long-term financial sustainability.' },
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.2 }}
              className="p-10 rounded-3xl bg-white border border-slate-100 group hover:border-primary transition-all shadow-sm"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl mb-24 shadow-sm border border-slate-100">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Our Network</h2>
            <p className="text-3xl font-extrabold text-slate-900">Glimpses of Excellence</p>
          </div>
          <Link to="/gallery" className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
            View Gallery
            <span className="material-icons text-sm">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-5 gap-4 h-auto md:h-[600px]">
          <div className="md:col-span-2 md:row-span-5 relative group overflow-hidden rounded-2xl h-64 md:h-full">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="St Xavier Main Campus Delhi NCR" src="https://lh3.googleusercontent.com/d/1rHC3vg6sM3NrOQiOhXwraq7Y9JLMdWqn" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-8">
              <p className="text-white font-bold">Main Campus, Delhi NCR</p>
            </div>
          </div>
          <div className="md:row-span-3 relative group overflow-hidden rounded-2xl h-64 md:h-full">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="School Library Infrastructure" src="https://lh3.googleusercontent.com/d/1OJ0c56KrKBSuRmb2pQ4MAUUjdyNxSK7j" referrerPolicy="no-referrer" />
          </div>
          <div className="md:row-span-3 relative group overflow-hidden rounded-2xl h-64 md:h-full">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Happy Students in Classroom" src="https://lh3.googleusercontent.com/d/1l9Uj3jTA89uBPWUqPezWM1tnj_vzAIuV" referrerPolicy="no-referrer" />
          </div>
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl h-64 md:h-full">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Advanced Science Labs in School" src="https://lh3.googleusercontent.com/d/1l9Uj3jTA89uBPWUqPezWM1tnj_vzAIuV" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-8">
              <p className="text-white font-bold">Main Campus, Delhi NCR</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 h-auto md:h-[300px]">
          <div className="relative group overflow-hidden rounded-2xl h-64 md:h-full">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="School Activity" src="https://lh3.googleusercontent.com/d/1Ym3oMxUMjjhEXImvcjnCJiztvjIn_hqm" referrerPolicy="no-referrer" />
          </div>
          <div className="relative group overflow-hidden rounded-2xl h-64 md:h-full">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="School Event" src="https://lh3.googleusercontent.com/d/1lk6AZTZggHUANuDI4slPTqdsyGcwAM-d" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

       {/* Lead Gen Form */}
       <section id="partner-form" className="py-24 bg-primary/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden grid md:grid-cols-5 border border-slate-100">
            <div className="md:col-span-2 bg-primary p-12 text-white">
              <h2 className="text-3xl font-extrabold mb-6">Start Your Journey Today</h2>
              <p className="text-white/80 mb-8 leading-relaxed">Our expansion team will guide you through the initial screening, financial planning, and location assessment.</p>
              <ul className="space-y-4">
                {['Dedicated Relationship Manager', 'Financial Feasibility Report', 'On-site Inspection Support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="material-icons text-sm text-blue-200">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-3 p-12 relative">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input 
                        required
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                        placeholder="Enter your Full Name in this field" 
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                      <input 
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit mobile number"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                        placeholder="enter your 10 digit mobile number" 
                        type="tel"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                      placeholder="Enter your Email Id Here" 
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Address</label>
                    <input 
                      required
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                      placeholder="Enter Complete Address Here" 
                      type="text"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Proposed City/Town Name</label>
                      <input 
                        required
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                        placeholder="proposed City/Town Name" 
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Investment</label>
                      <select 
                        required
                        name="investment"
                        value={formData.investment}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      >
                        <option value="">Select Range</option>
                        <option value="50 lakhs +">50 lakhs +</option>
                        <option value="1 cr +">1 cr +</option>
                        <option value="2 cr +">2 cr +</option>
                        <option value="3 cr and above">3 cr and above</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Type your comment/query</label>
                    <textarea 
                      name="query"
                      value={formData.query}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[100px]" 
                      placeholder="Tell us more about your requirements..." 
                    />
                  </div>
                  <button 
                    disabled={status === 'submitting'}
                    className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed" 
                    type="submit"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Request...
                      </>
                    ) : (
                      <>
                        Send Request
                        <span className="material-icons">arrow_forward</span>
                      </>
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-500 text-sm text-center font-medium">Something went wrong. Please try again.</p>
                  )}
                </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;