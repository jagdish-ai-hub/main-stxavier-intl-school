import React, { useState } from 'react';
import SEO from '../components/SEO';
import TrainingModal from '../components/TrainingModal';

const Curriculum: React.FC = () => {
  const [isTrainingModalOpen, setIsTrainingModalOpen] = useState(false);
  return (
    <div className="font-lexend text-slate-800">
        <SEO 
            title="World-Class School Curriculum | CBSE & Future-Ready Tech" 
            description="Our integrated curriculum blends CBSE standards with advanced Computer Science and AI education. Featuring STEM labs, robotics, and holistic development."
            keywords="School Curriculum, CBSE Curriculum, AI Education, STEM Education, Robotics in Schools"
        />
        {/* Header */}
        <header className="relative py-20 overflow-hidden bg-slate-50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-amber-50 -z-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
                            Academic Excellence
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            A <span className="text-primary">Global Pedagogy</span> Designed for Success
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                            Empower your franchise with a curriculum that blends rigorous CBSE standards with holistic development and future-ready tech. We provide the blueprint for the leaders of tomorrow.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:translate-y-[-2px] transition-all shadow-lg shadow-primary/20">
                                <span className="material-icons">download</span>
                                Download Curriculum Guide
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                        <img alt="Students Collaborating on Project" className="rounded-2xl shadow-2xl relative z-10 border border-white/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtuSCrhExJ1F2s5lOmKsz_nubBcyonOIRMSOAhU5_7L4M1Uj8eavIRvOUNWOSaMcvl_K9LDr_4LazOhSB44_z-ioNR-HX_WWeHeFJLNLbEEFba1eMPigv-nM3xWv5thPG4L_x34cEJS3cPlaynO6h30b2IKsMeu96X6zPJwnCMvcMQc023jyRK_GJXwo9qnurPEPu9aOYBfgaYl-W-ADOG9tlyON-mOvUUOWjJCqdTUwoIMtljGXgZQLErgMYz-KsuztgzIJcVdC8"/>
                    </div>
                </div>
            </div>
        </header>

        {/* Framework */}
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">The Xavier Academic Framework</h2>
                    <div className="h-1.5 w-24 bg-gold mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Our integrated approach ensures that students are prepared for both national competitive exams and future technological landscapes.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 relative">
                     {/* Connector line for desktop */}
                     <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-primary/30 -translate-y-1/2 -z-0"></div>
                     {[
                        { title: 'Core Foundations', icon: 'menu_book', color: 'bg-primary', text: 'Deep integration of CBSE standards ensuring mastery of fundamental sciences and humanities.' },
                        { title: 'Computer Science & AI', icon: 'memory', color: 'bg-primary', text: 'We provide future oriented learning including AI and coding to prepare students for the digital age.', highlight: true },
                        { title: 'Holistic Growth', icon: 'psychology', color: 'bg-gold', text: 'Social-emotional learning (SEL) frameworks built into the daily curriculum flow.' }
                     ].map((item, i) => (
                        <div key={i} className={`relative z-10 p-8 rounded-2xl border border-primary/10 text-center transition-all group ${item.highlight ? 'bg-primary text-white scale-105 shadow-2xl shadow-primary/20' : 'bg-slate-50 hover:border-primary'}`}>
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg ${item.highlight ? 'bg-white text-primary' : item.color + ' text-white'}`}>
                                <span className="material-icons text-3xl">{item.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className={`text-sm ${item.highlight ? 'text-blue-100' : 'text-slate-500'}`}>{item.text}</p>
                        </div>
                     ))}
                </div>
            </div>
        </section>

        {/* Specializations */}
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">World-Class Specializations</h2>
                        <p className="text-slate-600">We provide franchisees with comprehensive setup guides and equipment lists for our signature labs.</p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: 'STEM Labs', icon: 'science', desc: 'Advanced research facilities equipped with latest scientific apparatus.' },
                        { title: 'Robotics & AI', icon: 'smart_toy', desc: 'We provide future oriented learning including computer science and AI education, Arduino, and basic AI.' },
                        { title: 'Performing Arts', icon: 'theater_comedy', desc: 'Acoustically designed studios for music, dance, and theatre.' },
                        { title: 'Language Labs', icon: 'translate', desc: 'Digital linguistic mastery platforms for English, French, and Spanish.' },
                        { title: 'Sports Excellence', icon: 'emoji_events', desc: 'Year-round sports tournaments and comprehensive athletic development programs.' }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl border border-slate-100 hover:shadow-xl transition-all group">
                            <div className="mb-6 text-primary group-hover:scale-110 transition-transform origin-left">
                                <span className="material-icons text-5xl">{item.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                            <div className="h-1 w-12 bg-gold/30 rounded group-hover:w-full transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Training Section */}
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-900 rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
                    <div className="lg:w-1/2 relative min-h-[400px]">
                        <img alt="Teacher Training Session" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6s9NhFzKUdF2cEcjWihVauUWwxtze9J80vaFvm_uZNRGiMWe_8oVZR6VuUlZ-eQ4UuW5rIFVk9DY4mQAxnRVo9Lm25bIyGMotJgcIRnSKO4yeFJ-kMgtjxrD8vGCOqKkZ5FX9hc0sS-YfCOdFelaV_8OFLpQQ3A6__DxypaJtwNDJVSMFgBf6FyLwbFp9vLyrOyLcIfUQ5jCrRr7YVVFpZvqXLS90gWWGKV3bkmOFUu9umVQosJVuKXjxmS0cWQyF_2EFLLp4jkI"/>
                         <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent"></div>
                    </div>
                    <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Excellence in <span className="text-gold">Instruction</span></h2>
                        <p className="text-slate-300 mb-8 text-lg">We don't just provide curriculum; we provide the talent development engine. Every franchisee benefits from our rigorous Faculty Quality Assurance program.</p>
                        <button 
                            type="button"
                            onClick={() => setIsTrainingModalOpen(true)}
                            className="bg-gold text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-white transition-colors self-start cursor-pointer relative z-10"
                        >
                            Explore Training Model
                        </button>
                    </div>
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

export default Curriculum;