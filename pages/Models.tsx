import React from 'react';
import SEO from '../components/SEO';

const Models: React.FC = () => {
  return (
    <>
      <SEO 
          title="School Franchise Models & Investment Costs" 
          description="Explore our flexible school franchise models: Pre-School, K-12 Campus, and Global School. Investment options ranging from ₹15 Lakhs to ₹10 Cr+."
          keywords="School Franchise Cost, Pre-School Franchise, K-12 School Franchise Investment, Start a School Cost"
      />
      <header className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img alt="School Infrastructure Background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsAAk4dYXWNYaW1zMlnNlFDTD6jmB0G321dPvX3X4TEeVzjbP2RuIgCmOyanksN-NHQy_LZVF4-hF6d1ax_yMVtFKwFHXR4p8eQZupf1-iRPn5DCoUANj3kF2GYYN-t92-eVAb2dQhh9JcUCQN37ODKje9Mh-gHyIiL_UchMgeb7dNsb9F4_nmCP5A1FwkWbOk_7IE8c7sf6AQ-dX0_3O1sR0TQZQU0STeT1slbXpU5rVi467ZQ5oLjdC8-96tR793qfr2MVxRz3A"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">School Franchise <span className="text-primary">Models & Investment</span></h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            We offer diverse investment opportunities tailored to your vision, location, and capacity. Partner with us to deliver world-class education.
          </p>
        </div>
      </header>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Model 1 */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col hover:border-primary transition-all duration-300">
                <div className="p-8 border-b border-slate-100">
                    <div className="w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center mb-6">
                        <span className="material-icons">child_care</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Pre-School Franchise</h3>
                    <p className="text-slate-500 text-sm">Focus on early childhood development and foundational learning.</p>
                </div>
                <div className="p-8 flex-grow space-y-6">
                    {[
                        { label: 'Space Requirement', val: '2,500 - 4,000 Sq. Ft.' },
                        { label: 'Investment Range', val: '₹15 Lakhs - ₹30 Lakhs' },
                        { label: 'Staff Strength', val: '8 - 12 Members' }
                    ].map((row, i) => (
                        <div key={i}>
                            <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2">{row.label}</p>
                            <p className="text-slate-800 font-semibold">{row.val}</p>
                        </div>
                    ))}
                    <div>
                        <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-3">Key Features</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-icons text-primary text-sm">check_circle</span>Play-way methodology</li>
                            <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-icons text-primary text-sm">check_circle</span>Safe & secure environment</li>
                        </ul>
                    </div>
                </div>
                <div className="p-8 pt-0">
                    <button className="w-full py-4 bg-slate-100 text-slate-900 font-bold rounded-xl hover:bg-primary hover:text-white transition-all">Select Model</button>
                </div>
            </div>

            {/* Model 2 (Highlighted) */}
            <div className="bg-white rounded-3xl border-2 border-primary shadow-2xl overflow-hidden flex flex-col scale-105 z-10">
                <div className="bg-primary text-white px-4 py-1 text-center text-[10px] font-bold uppercase tracking-[0.2em]">Most Popular Choice</div>
                <div className="p-8 border-b border-slate-100">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                        <span className="material-icons">school</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">K-12 Campus Franchise</h3>
                    <p className="text-slate-500 text-sm">Comprehensive schooling from Kindergarten to Grade 12.</p>
                </div>
                <div className="p-8 flex-grow space-y-6">
                     {[
                        { label: 'Space Requirement', val: '2 - 5 Acres' },
                        { label: 'Investment Range', val: '₹50 Lakhs and above ' },
                        { label: 'Staff Strength', val: '30-70 staff+members' }
                    ].map((row, i) => (
                        <div key={i}>
                            <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2">{row.label}</p>
                            <p className="text-slate-800 font-semibold">{row.val}</p>
                        </div>
                    ))}
                    <div>
                        <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-3">Key Features</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-icons text-primary text-sm">check_circle</span>CBSE/ICSE Affiliation</li>
                            <li className="flex items-center gap-2 text-sm text-slate-600"><span className="material-icons text-primary text-sm">check_circle</span>Advanced Science Labs</li>
                        </ul>
                    </div>
                </div>
                <div className="p-8 pt-0">
                    <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all">Select Model</button>
                </div>
            </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4">The Roadmap</h2>
                <p className="text-3xl md:text-5xl font-extrabold">Your Journey to Launch</p>
            </div>
            <div className="relative">
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative">
                    {[
                        { step: '01', title: 'Application', desc: 'Initial inquiry and screening of profile.' },
                        { step: '02', title: 'Site Selection', desc: 'Technical assessment of the proposed property.' },
                        { step: '03', title: 'Onboarding', desc: 'Legal agreement signing and project kickoff.' },
                        { step: '04', title: 'Infrastructure', desc: 'Construction, interiors, and campus setup.' },
                        { step: '05', title: 'Training', desc: 'Staff recruitment and intensive training.' },
                        { step: 'rocket_launch', title: 'Launch', desc: 'Grand opening and admission drive.', icon: true }
                    ].map((item, i) => (
                        <div key={i} className="relative group">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mb-6 mx-auto relative z-10 transition-colors ${item.icon ? 'bg-primary border-4 border-slate-900 text-white' : 'bg-slate-900 border-2 border-slate-800 text-primary group-hover:border-primary'}`}>
                                {item.icon ? <span className="material-icons">{item.step}</span> : item.step}
                            </div>
                            <div className="text-center">
                                <h4 className="font-bold mb-2">{item.title}</h4>
                                <p className="text-xs text-slate-400">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4">Investment FAQ</h2>
            <p className="text-3xl font-extrabold text-slate-900">Everything You Need to Know</p>
        </div>
        <div className="space-y-4">
            {[
                { q: 'What is the tenure of the franchise agreement?', a: 'The standard franchise agreement tenure ranges between 10–15 years, with renewal options based on performance and mutual agreement.' },
                { q: 'Is previous experience in education required?', a: 'No, prior experience in education is not mandatory. However, a commitment to quality education and active involvement in operations is important. We provide complete training and guidance.' },
                { q: 'How long does it take to reach break-even?', a: 'Most campuses stabilize within 3–4 years, depending on location, infrastructure readiness, and student admissions growth.' },
                { q: 'What is the minimum investment required?', a: 'Investment depends on the selected model (Pre-School, Primary, or K–12) and land availability. Our team provides a customized investment plan after evaluation.' },
                { q: 'Do I need to own land to start?', a: 'Land ownership is preferred, but leased property may also be considered if it meets infrastructure and compliance requirements.' },
                { q: 'Can I start with a small setup and expand later?', a: 'Yes. You can begin with Pre-School or Primary classes and expand gradually each year as admissions grow.' },
                { q: 'What support will I receive from the head office?', a: 'You will receive support in: Infrastructure planning, Curriculum and academic framework, Teacher training, Marketing and admissions, ERP implementation, Compliance guidance, and Ongoing operational monitoring.' },
                { q: 'Will you help in teacher recruitment?', a: 'Yes. We provide recruitment guidelines, interview frameworks, and teacher training support.' },
                { q: 'Do you assist in getting CBSE affiliation?', a: 'We guide you through the compliance and documentation process as per regulatory norms.' },
                { q: 'How are admissions supported?', a: 'We provide: Marketing strategy guidance, Admission counseling training, Branding materials, and Digital lead generation support.' },
                { q: 'What are the royalty or recurring fees?', a: 'Royalty structure varies by model and is discussed during the franchise consultation process.' },
                { q: 'Is this suitable for village or semi-urban areas?', a: 'Yes. Our scalable model is designed to work effectively in rural, semi-urban, and developing town locations.' },
                { q: 'What makes your model different from other school franchises?', a: 'We focus on: Structured teacher training, Centralized academic planning, Long-term partnership, and Practical and scalable growth.' },
                { q: 'Will I receive ongoing monitoring and support?', a: 'Yes. Our team conducts regular academic reviews, quality checks, and operational guidance sessions.' },
                { q: 'How do I apply for the franchise?', a: 'Simply fill out the inquiry form or contact us via phone or WhatsApp. Our expansion team will guide you through the next steps.' }
            ].map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden group">
                    <button className="w-full p-6 text-left flex justify-between items-center focus:outline-none">
                        <span className="font-bold text-slate-800">{faq.q}</span>
                        <span className="material-icons text-slate-400 group-hover:text-primary transition-colors">add</span>
                    </button>
                    <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed hidden group-focus-within:block group-hover:block">
                        {faq.a}
                    </div>
                </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Models;