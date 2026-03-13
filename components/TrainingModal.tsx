import React from 'react';

interface TrainingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrainingModal: React.FC<TrainingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4">
      <div 
        className="absolute inset-0 bg-navy/90 backdrop-blur-md" 
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-[1.5rem] w-full max-w-7xl max-h-[98vh] overflow-hidden relative shadow-2xl flex flex-col z-10 animate-[scale-up_0.2s_ease-out]">
        {/* Header - More compact */}
        <div className="bg-gold px-6 py-4 md:px-8 md:py-5 text-navy relative shrink-0">
          <button 
            type="button"
            onClick={onClose}
            className="absolute top-1/2 -translate-y-1/2 right-6 w-10 h-10 bg-navy/10 hover:bg-navy/20 rounded-full flex items-center justify-center text-navy transition-colors z-20"
          >
            <span className="material-icons text-xl">close</span>
          </button>
          <div className="flex items-center gap-3">
            <span className="text-2xl md:text-3xl">🎓</span>
            <div>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-none">Teacher Training Model</h3>
              <p className="text-navy/80 font-bold text-xs md:text-sm mt-1">Building Excellence Through Continuous Development</p>
            </div>
          </div>
        </div>

        {/* Content - 3 columns to fit everything */}
        <div className="flex-grow overflow-y-auto p-4 md:p-6 bg-slate-50 custom-scrollbar">
          <div className="max-w-full mx-auto flex flex-col">
            <p className="text-slate-700 text-sm md:text-base mb-4 leading-relaxed border-l-4 border-gold pl-4 italic shrink-0">
              At St. Xavier International School, teacher development is a structured, ongoing process designed to ensure consistent academic quality across all campuses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {[
                {
                  title: "1️⃣ Pre-Opening Training",
                  subtitle: "Before school begins",
                  points: ["School leadership orientation", "Curriculum familiarization", "Classroom management", "Lesson planning framework", "Student assessment", "ERP system training"]
                },
                {
                  title: "2️⃣ Academic Foundation",
                  subtitle: "Strong classroom delivery",
                  points: ["CBSE-aligned training", "Concept-based teaching", "Activity-based learning", "Digital integration", "Evaluation & grading"]
                },
                {
                  title: "3️⃣ Continuous Development",
                  subtitle: "Regular skill enhancement",
                  points: ["Quarterly workshops", "Online certifications", "Innovation sessions", "Peer review sharing", "Academic briefings"]
                },
                {
                  title: "4️⃣ Leadership & Admin",
                  subtitle: "Principals & Coordinators",
                  points: ["Academic planning", "Staff management", "Parent communication", "Compliance & docs", "Admission systems"]
                },
                {
                  title: "5️⃣ Quality Monitoring",
                  subtitle: "Ensuring excellence",
                  points: ["Classroom observation", "Performance reviews", "Outcome analysis", "Feedback mechanism", "Improvement plans"]
                },
                {
                  title: "6️⃣ Digital Learning Support",
                  subtitle: "Resources & Tools",
                  points: ["Training videos", "Resource library", "Lesson plan formats", "Question banks", "Calendar templates"]
                }
              ].map((section, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                  <h4 className="text-navy font-black text-sm md:text-base mb-0.5">{section.title}</h4>
                  <p className="text-gold font-bold text-[10px] uppercase tracking-wider mb-2">{section.subtitle}</p>
                  <ul className="space-y-1">
                    {section.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5 text-[11px] md:text-xs text-slate-600">
                        <span className="text-gold font-bold">✔</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Compact Footer */}
        <div className="p-3 bg-white border-t border-slate-100 text-center shrink-0">
          <button 
            type="button"
            onClick={onClose}
            className="px-8 py-2 bg-navy text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Close Module
          </button>
        </div>
      </div>
      <style>{`
        @keyframes scale-up {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d4af37;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #b8962e;
        }
      `}</style>
    </div>
  );
};

export default TrainingModal;
