"use client";
import { motion } from "framer-motion";

export default function EventSolution() {
  return (
    <section className="py-16 bg-[var(--mb-bg-1)]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile App Preview */}
          <motion.div 
            initial={{ opacity: 0, x: -24 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative max-w-[320px] mx-auto">
              <div className="relative aspect-[9/19.5] rounded-[2.5rem] border-[6px] border-gray-800 bg-gray-800 shadow-2xl">
                <div className="rounded-[2rem] overflow-hidden h-full bg-black relative">
                  {/* Status Bar */}
                  <div className="absolute top-2 left-6 right-6 flex justify-between items-center text-white text-sm z-10">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                        <path d="M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48s1.54-.7 2.86-.7c1.32 0 2.86.7 2.86.7L11.42 11s-1.54-.7-2.86-.7c-1.32 0-2.86.7-2.86.7zm6.7-1.48c-1.32 0-2.86.7-2.86.7l.85 1.48s1.54-.7 2.86-.7c1.32 0 2.86.7 2.86.7l.85-1.48s-1.54-.7-2.86-.7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* App Background with geometric pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-teal-900/50">
                    <div className="absolute inset-0 bg-black/60"></div>
                    {/* Abstract geometric lines */}
                    <div className="absolute inset-0 opacity-40">
                      <svg className="w-full h-full" viewBox="0 0 300 600">
                        <defs>
                          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8"/>
                            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.6"/>
                            <stop offset="100%" stopColor="#10B981" stopOpacity="0.4"/>
                          </linearGradient>
                        </defs>
                        <path d="M50,100 L250,180 L100,300 L200,450" stroke="url(#lineGrad)" strokeWidth="2" fill="none"/>
                        <path d="M200,50 L80,200 L220,350 L50,500" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none"/>
                        <path d="M150,0 L300,150 L50,400 L250,600" stroke="url(#lineGrad)" strokeWidth="1" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="relative z-10 h-full flex flex-col justify-center items-center px-8">
                    <h2 className="text-white text-3xl font-bold text-center mb-8">Passaire App</h2>
                    
                    {/* Business ID Input */}
                    <div className="w-full mb-6">
                      <div className="bg-black/40 border border-gray-600 rounded-xl px-4 py-3">
                        <span className="text-gray-400 text-sm">Business ID</span>
                      </div>
                    </div>
                    
                    {/* Enter Button */}
                    <button className="w-full bg-white text-black font-semibold py-3 rounded-xl">
                      Enter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div 
            initial={{ opacity: 0, x: 24 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              MOVE BEYOND SOLUTION
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--mb-primary)] mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Web portal</strong> for guest registration
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--mb-primary)] mt-2 flex-shrink-0"></div>
                <div>
                  Users receive confirmations and tickets on <strong>email</strong>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--mb-primary)] mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Mobile app</strong>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--mb-primary)] mt-2 flex-shrink-0"></div>
                <div>
                  Separate credentials and roles (guards, bartenders, cashiers, managers)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--mb-primary)] mt-2 flex-shrink-0"></div>
                <div>
                  Guards scan guest tickets (QR) for check-in/out
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--mb-primary)] mt-2 flex-shrink-0"></div>
                <div>
                  Bartenders redeem complimentary drinks
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--mb-primary)] mt-2 flex-shrink-0"></div>
                <div>
                  Cashiers complete cash payments
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--mb-primary)] mt-2 flex-shrink-0"></div>
                <div>
                  Managers have access to dashboard and analytics
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--mb-primary)] mt-2 flex-shrink-0"></div>
                <div>
                  Clean UI/UX
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--mb-primary)] mt-2 flex-shrink-0"></div>
                <div>
                  Dark and light modes
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--mb-primary)] mt-2 flex-shrink-0"></div>
                <div>
                  Available on Android & iOS
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
