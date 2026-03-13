import React, { useState, useEffect, useRef } from 'react';

interface QA {
  id: number;
  question: string;
  answer: string;
  keywords: string[];
}

const qaData: QA[] = [
  { id: 1, question: "What type of school is this?", answer: "It is a CBSE-based school with modern teaching methods and strong focus on discipline and values.", keywords: ["type", "cbse", "board"] },
  { id: 2, question: "Is this school suitable for village areas?", answer: "Yes. Our model is specially designed for village and small town areas with affordable setup options.", keywords: ["village", "rural", "town", "area"] },
  { id: 3, question: "What classes can I start?", answer: "You can start from Pre-School, Primary School, or gradually expand up to higher classes.", keywords: ["class", "grade", "start"] },
  { id: 4, question: "Will you help us in running the school?", answer: "Yes. We provide full guidance including setup, teachers training, syllabus, and management support.", keywords: ["help", "support", "run", "manage"] },
  { id: 5, question: "How much investment is required?", answer: "Investment depends on the model and building size. Basic village model requires lower investment compared to city schools.", keywords: ["investment", "cost", "money", "price", "budget"] },
  { id: 6, question: "Do I need to own land?", answer: "Land ownership is preferred. If you do not own land, we can guide you on rental options.", keywords: ["own land", "rent", "lease"] },
  { id: 7, question: "How much land is needed?", answer: "For a basic primary school, a smaller land area is sufficient. For higher classes, more land will be required.", keywords: ["how much land", "land size", "area", "sq ft"] },
  { id: 8, question: "Can I start in an existing building?", answer: "Yes, if the building meets safety and classroom requirements.", keywords: ["existing", "building", "infrastructure"] },
  { id: 9, question: "How long does it take to start the school?", answer: "Usually 6 to 9 months depending on readiness of land and building.", keywords: ["how long", "time", "duration", "months"] },
  { id: 10, question: "Will you provide teacher training?", answer: "Yes. We provide regular teacher training and academic support.", keywords: ["teacher", "training", "staff", "faculty"] },
  { id: 11, question: "Will you provide books and syllabus?", answer: "Yes. Complete syllabus planning and book guidance will be provided.", keywords: ["book", "syllabus", "curriculum", "study"] },
  { id: 12, question: "Will you help in getting students?", answer: "Yes. We guide you in local marketing and admissions process.", keywords: ["student", "admission", "marketing", "enroll"] },
  { id: 13, question: "Do you provide school name and branding?", answer: "Yes. You can use the St. Xavier International School name under franchise agreement.", keywords: ["name", "brand", "franchise"] },
  { id: 14, question: "How will I earn from the school?", answer: "You will earn from student fees collected each year.", keywords: ["earn", "revenue", "income"] },
  { id: 15, question: "When will I start making profit?", answer: "Profit depends on number of admissions and fee structure. We help you plan for steady growth.", keywords: ["profit", "roi", "return"] },
  { id: 16, question: "Can I expand later?", answer: "Yes. You can start small and expand class by class every year.", keywords: ["expand", "grow", "future"] },
  { id: 17, question: "Is this a long-term business?", answer: "Yes. Education is a stable and long-term business with continuous demand.", keywords: ["long term", "stable", "business"] },
  { id: 18, question: "What should I do next?", answer: "Please share your name, phone number, and village/city. Our team will contact you.", keywords: ["next", "step", "process", "do"] },
  { id: 19, question: "Can I get a call from your team?", answer: "Yes. Share your details and we will arrange a call.", keywords: ["call", "phone", "contact", "talk"] },
  { id: 20, question: "Can I get full details on WhatsApp?", answer: "Yes. After you share your number, we will send you complete information.", keywords: ["whatsapp", "detail", "info"] },
];

const WhatsAppFloat: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! How can I help you with your school franchise query today?", isUser: false }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const findAnswer = (text: string) => {
    const lowerText = text.toLowerCase();
    
    // Direct match check
    const match = qaData.find(q => 
      q.keywords.some(k => lowerText.includes(k)) || 
      lowerText.includes(q.question.toLowerCase())
    );

    if (match) {
      return match.answer;
    }
    
    return "I'm not sure about that specific detail. You can ask about investment, land requirements, syllabus, or support.";
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setInput("");
    
    // Add user message
    setMessages(prev => [...prev, { text: userText, isUser: true }]);

    // Simulate bot thinking/delay
    setTimeout(() => {
      const answer = findAnswer(userText);
      setMessages(prev => [...prev, { text: answer, isUser: false }]);

      // Add follow-up message
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "If you have more questions, connect us on WhatsApp number +91 98279 03070 or fill the form we will reach out to you.", 
          isUser: false 
        }]);
      }, 800);
    }, 500);
  };

  // Mobile: Direct WhatsApp Link
  if (!isDesktop) {
    return (
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
        aria-label="Connect on WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="font-bold">Connect on WhatsApp</span>
      </a>
    );
  }

  // Desktop: Chatbot
  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-[#075e54] text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="material-icons text-white">smart_toy</span>
              </div>
              <div>
                <h3 className="font-bold text-sm">St. Xavier Assistant</h3>
                <p className="text-xs text-green-100">Usually replies instantly</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <span className="material-icons">close</span>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 h-96 overflow-y-auto p-4 bg-[#e5ddd5] space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed shadow-sm ${
                  msg.isUser 
                    ? 'bg-[#dcf8c6] text-slate-800 rounded-tr-none' 
                    : 'bg-white text-slate-800 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 px-4 py-2 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]"
            />
            <button 
              type="submit"
              className="w-10 h-10 bg-[#075e54] text-white rounded-full flex items-center justify-center hover:bg-[#128c7e] transition-colors disabled:opacity-50"
              disabled={!input.trim()}
            >
              <span className="material-icons text-sm">send</span>
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
        aria-label="Chat with us"
      >
        {isOpen ? (
          <span className="material-icons text-2xl">close</span>
        ) : (
          <>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="font-bold">Chat with us</span>
          </>
        )}
      </button>
    </>
  );
};

export default WhatsAppFloat;