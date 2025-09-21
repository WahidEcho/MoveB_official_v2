"use client";
import { motion } from "framer-motion";

export default function PassAppFlow() {
  const steps = [
    {
      number: "1",
      title: "Browse & Select",
      subtitle: "Event Discovery",
      description: "Customer browses events and selects tickets",
      detailedSteps: ["Visit website", "Browse events", "Select event", "Choose ticket type"],
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="58" fill="url(#browse)" stroke="white" strokeWidth="4"/>
          <rect x="30" y="35" width="60" height="40" fill="white" rx="4"/>
          <rect x="32" y="37" width="56" height="30" fill="#1F2937"/>
          <rect x="35" y="40" width="20" height="3" fill="#3B82F6"/>
          <rect x="50" y="42" width="15" height="10" fill="#EC4899" rx="2"/>
          <rect x="67" y="42" width="15" height="10" fill="#10B981" rx="2"/>
          <rect x="55" y="75" width="10" height="8" fill="white"/>
          <ellipse cx="75" cy="85" rx="4" ry="6" fill="white"/>
          <path d="M52 50l4 4-2 1-2-5z" fill="white"/>
          <defs>
            <linearGradient id="browse" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6"/>
              <stop offset="100%" stopColor="#1D4ED8"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      color: "from-blue-500 to-blue-600",
      bgPattern: "🌐"
    },
    {
      number: "2",
      title: "Purchase & Payment",
      subtitle: "Secure Checkout",
      description: "Complete payment and receive confirmation",
      detailedSteps: ["Add to cart", "Enter details", "Process payment", "Get confirmation"],
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="58" fill="url(#purchase)" stroke="white" strokeWidth="4"/>
          <rect x="25" y="40" width="70" height="45" fill="white" rx="6"/>
          <rect x="30" y="45" width="60" height="25" fill="#1F2937" rx="3"/>
          <rect x="33" y="48" width="24" height="3" fill="#F59E0B"/>
          <rect x="33" y="53" width="18" height="2" fill="#9CA3AF"/>
          <rect x="33" y="57" width="15" height="2" fill="#9CA3AF"/>
          <rect x="60" y="48" width="27" height="15" fill="#10B981" rx="2"/>
          <text x="73" y="58" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">PAY</text>
          <rect x="33" y="75" width="54" height="6" fill="#F3F4F6" rx="1"/>
          <circle cx="45" cy="95" r="8" fill="#10B981"/>
          <path d="M40 95l3 3 7-7" stroke="white" strokeWidth="2" fill="none"/>
          <defs>
            <linearGradient id="purchase" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981"/>
              <stop offset="100%" stopColor="#059669"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      color: "from-green-500 to-green-600",
      bgPattern: "💳"
    },
    {
      number: "3",
      title: "Digital Pass Generation",
      subtitle: "Ticket Creation",
      description: "System generates digital pass with QR code",
      detailedSteps: ["Generate QR code", "Add vouchers", "Create digital pass", "Send confirmation"],
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="58" fill="url(#digital)" stroke="white" strokeWidth="4"/>
          <rect x="30" y="25" width="60" height="70" fill="white" rx="6"/>
          <rect x="35" y="30" width="50" height="8" fill="#8B5CF6" rx="2"/>
          <text x="60" y="36" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">DIGITAL PASS</text>
          <rect x="40" y="45" width="40" height="30" fill="#F3F4F6" rx="2"/>
          <rect x="43" y="48" width="6" height="6" fill="#1F2937"/>
          <rect x="51" y="48" width="6" height="6" fill="#1F2937"/>
          <rect x="59" y="48" width="6" height="6" fill="#1F2937"/>
          <rect x="67" y="48" width="6" height="6" fill="#1F2937"/>
          <rect x="43" y="56" width="6" height="6" fill="#1F2937"/>
          <rect x="59" y="56" width="6" height="6" fill="#1F2937"/>
          <rect x="67" y="56" width="6" height="6" fill="#1F2937"/>
          <rect x="43" y="64" width="6" height="6" fill="#1F2937"/>
          <rect x="51" y="64" width="6" height="6" fill="#1F2937"/>
          <rect x="67" y="64" width="6" height="6" fill="#1F2937"/>
          <circle cx="75" cy="82" r="6" fill="#EC4899"/>
          <text x="75" y="86" textAnchor="middle" fill="white" fontSize="6">20%</text>
          <defs>
            <linearGradient id="digital" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6"/>
              <stop offset="100%" stopColor="#7C3AED"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      color: "from-purple-500 to-purple-600",
      bgPattern: "🎫"
    },
    {
      number: "4",
      title: "Arrival & Scan",
      subtitle: "Gate Entry",
      description: "Customer arrives and scans QR at gate",
      detailedSteps: ["Arrive at venue", "Approach gate", "Show QR code", "Security scans"],
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="58" fill="url(#scan)" stroke="white" strokeWidth="4"/>
          <rect x="25" y="15" width="35" height="90" fill="white" rx="8"/>
          <rect x="30" y="20" width="25" height="18" fill="#374151"/>
          <rect x="32" y="25" width="21" height="2" fill="white"/>
          <rect x="33" y="45" width="19" height="19" fill="#F3F4F6"/>
          <rect x="36" y="48" width="2" height="2" fill="black"/>
          <rect x="40" y="48" width="2" height="2" fill="black"/>
          <rect x="44" y="48" width="2" height="2" fill="black"/>
          <rect x="36" y="52" width="2" height="2" fill="black"/>
          <rect x="44" y="52" width="2" height="2" fill="black"/>
          <rect x="36" y="56" width="2" height="2" fill="black"/>
          <rect x="40" y="56" width="2" height="2" fill="black"/>
          <rect x="44" y="56" width="2" height="2" fill="black"/>
          <circle cx="42" cy="75" r="3" fill="#374151"/>
          
          {/* Scanner Device */}
          <rect x="70" y="40" width="25" height="40" fill="#1F2937" rx="4"/>
          <rect x="73" y="45" width="19" height="15" fill="#3B82F6" rx="2"/>
          <circle cx="82" cy="67" r="2" fill="#10B981">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"/>
          </circle>
          
          {/* Scanning Beam */}
          <path d="M65 52 Q75 52 85 52" stroke="#EF4444" strokeWidth="2" opacity="0.8">
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
          </path>
          
          <defs>
            <linearGradient id="scan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B"/>
              <stop offset="100%" stopColor="#D97706"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      color: "from-orange-500 to-orange-600",
      bgPattern: "📱"
    },
    {
      number: "5",
      title: "Access Granted",
      subtitle: "Entry Validation",
      description: "Gate opens and customer enters venue",
      detailedSteps: ["QR validated", "Access granted", "Gate opens", "Customer enters"],
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="58" fill="url(#access)" stroke="white" strokeWidth="4"/>
          <rect x="25" y="30" width="70" height="60" fill="white" rx="6"/>
          <rect x="30" y="35" width="60" height="10" fill="#10B981" rx="2"/>
          <text x="60" y="42" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">ACCESS GRANTED</text>
          
          {/* Gate Doors Opening */}
          <rect x="35" y="50" width="20" height="35" fill="#E5E7EB" rx="2">
            <animateTransform attributeName="transform" values="translate(0,0); translate(-15,0); translate(0,0)" dur="3s" repeatCount="indefinite"/>
          </rect>
          <rect x="65" y="50" width="20" height="35" fill="#E5E7EB" rx="2">
            <animateTransform attributeName="transform" values="translate(0,0); translate(15,0); translate(0,0)" dur="3s" repeatCount="indefinite"/>
          </rect>
          
          {/* Person Walking Through */}
          <g>
            <circle cx="60" cy="70" r="4" fill="#3B82F6"/>
            <rect x="58" y="74" width="4" height="8" fill="#3B82F6"/>
            <rect x="56" y="78" width="2" height="6" fill="#3B82F6"/>
            <rect x="62" y="78" width="2" height="6" fill="#3B82F6"/>
            <animateTransform attributeName="transform" values="translate(-10,0); translate(10,0); translate(-10,0)" dur="4s" repeatCount="indefinite"/>
          </g>
          
          {/* Success Checkmark */}
          <circle cx="85" cy="45" r="8" fill="#10B981"/>
          <path d="M80 45l3 3 6-6" stroke="white" strokeWidth="2" fill="none"/>
          
          <defs>
            <linearGradient id="access" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981"/>
              <stop offset="100%" stopColor="#059669"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      color: "from-emerald-500 to-emerald-600",
      bgPattern: "🚪"
    },
    {
      number: "6",
      title: "Redeem Vouchers",
      subtitle: "Perks & Benefits",
      description: "Use vouchers for drinks and special offers",
      detailedSteps: ["Browse vouchers", "Select offer", "Show QR", "Redeem benefit"],
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="58" fill="url(#redeem)" stroke="white" strokeWidth="4"/>
          
          {/* Bar Counter */}
          <rect x="20" y="70" width="80" height="20" fill="#8B4513" rx="3"/>
          <rect x="25" y="65" width="70" height="5" fill="#A0522D"/>
          
          {/* Bartender */}
          <circle cx="80" cy="55" r="8" fill="#F3F4F6"/>
          <rect x="75" y="60" width="10" height="15" fill="#1F2937"/>
          
          {/* Customer */}
          <circle cx="40" cy="55" r="8" fill="#F3F4F6"/>
          <rect x="35" y="60" width="10" height="15" fill="#3B82F6"/>
          
          {/* Phone with Voucher */}
          <rect x="45" y="58" width="8" height="12" fill="#1F2937" rx="2"/>
          <rect x="46" y="59" width="6" height="8" fill="#EC4899" rx="1"/>
          <text x="49" y="64" textAnchor="middle" fill="white" fontSize="6">20%</text>
          
          {/* Drinks */}
          <ellipse cx="65" cy="65" rx="3" ry="5" fill="#F59E0B"/>
          <ellipse cx="70" cy="65" rx="3" ry="5" fill="#EF4444"/>
          
          {/* Floating Vouchers */}
          <g opacity="0.8">
            <rect x="25" y="25" width="15" height="10" fill="#EC4899" rx="2">
              <animateTransform attributeName="transform" values="translate(0,0) rotate(0); translate(5,5) rotate(10); translate(0,0) rotate(0)" dur="3s" repeatCount="indefinite"/>
            </rect>
            <text x="32" y="32" textAnchor="middle" fill="white" fontSize="6">FREE</text>
          </g>
          
          <g opacity="0.8">
            <rect x="75" y="30" width="15" height="10" fill="#10B981" rx="2">
              <animateTransform attributeName="transform" values="translate(0,0) rotate(0); translate(-5,5) rotate(-10); translate(0,0) rotate(0)" dur="3.5s" repeatCount="indefinite"/>
            </rect>
            <text x="82" y="37" textAnchor="middle" fill="white" fontSize="6">$5</text>
          </g>
          
          <defs>
            <linearGradient id="redeem" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899"/>
              <stop offset="100%" stopColor="#DB2777"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      color: "from-pink-500 to-pink-600",
      bgPattern: "🎁"
    },
    {
      number: "7",
      title: "Live Analytics",
      subtitle: "Real-time Tracking",
      description: "Management monitors live data and performance",
      detailedSteps: ["Track attendance", "Monitor sales", "View analytics", "Generate reports"],
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="58" fill="url(#analytics)" stroke="white" strokeWidth="4"/>
          
          {/* Dashboard Screen */}
          <rect x="20" y="25" width="80" height="50" fill="white" rx="6"/>
          <rect x="25" y="30" width="70" height="8" fill="#6366F1" rx="2"/>
          <text x="60" y="36" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">LIVE DASHBOARD</text>
          
          {/* Charts */}
          <rect x="30" y="45" width="25" height="25" fill="#F3F4F6" rx="2"/>
          <rect x="32" y="60" width="3" height="8" fill="#3B82F6"/>
          <rect x="37" y="55" width="3" height="13" fill="#10B981"/>
          <rect x="42" y="50" width="3" height="18" fill="#F59E0B"/>
          <rect x="47" y="58" width="3" height="10" fill="#EC4899"/>
          
          {/* Metrics Cards */}
          <rect x="60" y="45" width="15" height="10" fill="#10B981" rx="2"/>
          <text x="67" y="51" textAnchor="middle" fill="white" fontSize="7">247</text>
          <text x="67" y="54" textAnchor="middle" fill="white" fontSize="4">Guests</text>
          
          <rect x="78" y="45" width="15" height="10" fill="#EC4899" rx="2"/>
          <text x="85" y="51" textAnchor="middle" fill="white" fontSize="7">$12K</text>
          <text x="85" y="54" textAnchor="middle" fill="white" fontSize="4">Revenue</text>
          
          <rect x="60" y="58" width="15" height="10" fill="#F59E0B" rx="2"/>
          <text x="67" y="64" textAnchor="middle" fill="white" fontSize="7">89%</text>
          <text x="67" y="67" textAnchor="middle" fill="white" fontSize="4">Check-in</text>
          
          <rect x="78" y="58" width="15" height="10" fill="#8B5CF6" rx="2"/>
          <text x="85" y="64" textAnchor="middle" fill="white" fontSize="7">156</text>
          <text x="85" y="67" textAnchor="middle" fill="white" fontSize="4">Active</text>
          
          {/* Live Updates Indicator */}
          <circle cx="90" cy="35" r="3" fill="#EF4444">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"/>
          </circle>
          <text x="88" y="32" textAnchor="middle" fill="#EF4444" fontSize="5">LIVE</text>
          
          {/* Computer */}
          <rect x="45" y="75" width="30" height="4" fill="white"/>
          <rect x="55" y="79" width="10" height="6" fill="white"/>
          
          <defs>
            <linearGradient id="analytics" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1"/>
              <stop offset="100%" stopColor="#4F46E5"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      color: "from-indigo-500 to-indigo-600",
      bgPattern: "📊"
    }
  ];

  return (
    <section className="py-24 bg-[var(--mb-bg-1)] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Complete Flow Journey
          </h2>
          <p className="text-xl text-[var(--mb-muted)] max-w-3xl mx-auto">
            From event discovery to live analytics - follow the complete customer and business journey
          </p>
        </motion.div>

        {/* Snake Path Flow - Desktop */}
        <div className="hidden lg:block relative w-full">
          {/* Curved Snake Path SVG */}
          <svg 
            className="absolute inset-0 w-full h-full z-0" 
            viewBox="0 0 1200 700" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="snakePath" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6"/>
                <stop offset="20%" stopColor="#10B981"/>
                <stop offset="40%" stopColor="#8B5CF6"/>
                <stop offset="60%" stopColor="#F59E0B"/>
                <stop offset="80%" stopColor="#EC4899"/>
                <stop offset="100%" stopColor="#6366F1"/>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Main Snake Path */}
            <path 
              d="M20 130 Q200 80 400 130 T680 180 Q820 220 1020 180"
              stroke="url(#snakePath)" 
              strokeWidth="6" 
              fill="none"
              filter="url(#glow)"
              opacity="0.7"
            />
            
            {/* Animated Flow Dots */}
            <circle r="6" fill="#3B82F6">
              <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
                <mpath href="#snakePath"/>
              </animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" dur="8s" repeatCount="indefinite"/>
            </circle>
            
            {/* Direction Arrows */}
            <g opacity="0.6">
              {/* Arrow 1 */}
              <path d="M120 110l12 8-12 8-4-4 6-4-6-4z" fill="#3B82F6">
                <animateTransform attributeName="transform" values="scale(0.8); scale(1.2); scale(0.8)" dur="2s" repeatCount="indefinite"/>
              </path>
              
              {/* Arrow 2 */}
              <path d="M280 100l12 8-12 8-4-4 6-4-6-4z" fill="#10B981">
                <animateTransform attributeName="transform" values="scale(0.8); scale(1.2); scale(0.8)" dur="2s" begin="0.5s" repeatCount="indefinite"/>
              </path>
              
              {/* Arrow 3 */}
              <path d="M440 120l12 8-12 8-4-4 6-4-6-4z" fill="#8B5CF6">
                <animateTransform attributeName="transform" values="scale(0.8); scale(1.2); scale(0.8)" dur="2s" begin="1s" repeatCount="indefinite"/>
              </path>
              
              {/* Arrow 4 */}
              <path d="M600 140l12 8-12 8-4-4 6-4-6-4z" fill="#F59E0B">
                <animateTransform attributeName="transform" values="scale(0.8); scale(1.2); scale(0.8)" dur="2s" begin="1.5s" repeatCount="indefinite"/>
              </path>
              
              {/* Arrow 5 */}
              <path d="M740 160l12 8-12 8-4-4 6-4-6-4z" fill="#EC4899">
                <animateTransform attributeName="transform" values="scale(0.8); scale(1.2); scale(0.8)" dur="2s" begin="2s" repeatCount="indefinite"/>
              </path>
              
              {/* Arrow 6 */}
              <path d="M880 170l12 8-12 8-4-4 6-4-6-4z" fill="#6366F1">
                <animateTransform attributeName="transform" values="scale(0.8); scale(1.2); scale(0.8)" dur="2s" begin="2.5s" repeatCount="indefinite"/>
              </path>
            </g>
          </svg>

          {/* Steps positioned along the snake path */}
          <div className="relative z-10 h-[600px]">
            {steps.map((step, index) => {
              const positions = [
                { x: '1%', y: '15%' },    // Browse & Select
                { x: '15%', y: '8%' },    // Purchase
                { x: '29%', y: '15%' },   // Digital Pass
                { x: '43%', y: '12%' },   // Scan
                { x: '57%', y: '20%' },   // Access
                { x: '71%', y: '25%' },   // Redeem
                { x: '85%', y: '20%' }    // Analytics
              ];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="absolute group cursor-pointer"
                  style={{ 
                    left: positions[index].x, 
                    top: positions[index].y,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    zIndex: 50,
                    y: -8,
                    transition: { 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }
                  }}
                >
                  {/* Step Container */}
                  <div className="flex flex-col items-center">
                    {/* Large Icon */}
                    <motion.div 
                      className="mb-6 relative"
                      whileHover={{ 
                        rotate: 8,
                        scale: 1.15,
                        transition: { 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 10 
                        }
                      }}
                    >
                      {step.icon}
                      
                      {/* Background Pattern */}
                      <div className="absolute -top-4 -right-4 text-4xl opacity-20">
                        {step.bgPattern}
                      </div>
                    </motion.div>
                    
                    {/* Step Info Card */}
                    <motion.div 
                      className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/20 min-w-[240px] max-w-[250px] relative"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      whileHover={{
                        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25), 0 0 30px rgba(59, 130, 246, 0.3)",
                        scale: 1.03,
                        transition: { 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 20 
                        }
                      }}
                    >
                      {/* Step Number Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${step.color} text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg`}>
                          {step.number}
                        </div>
                        <div className="text-sm text-gray-500 font-medium">{step.subtitle}</div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-bold text-xl mb-2 text-gray-800">{step.title}</h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{step.description}</p>
                      
                      {/* Detailed Steps */}
                      <div className="space-y-2">
                        {step.detailedSteps.map((detailStep, stepIndex) => (
                          <motion.div 
                            key={stepIndex}
                            className="flex items-center gap-2 text-xs text-gray-500"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 + stepIndex * 0.1 }}
                          >
                            <div className={`w-2 h-2 bg-gradient-to-br ${step.color} rounded-full`}></div>
                            <span>{detailStep}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Flow - Vertical with Enhanced Arrows */}
        <div className="lg:hidden space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Mobile Step */}
              <div className="flex flex-col items-center text-center">
                {/* Large Icon */}
                <div className="mb-6 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 text-2xl opacity-30">
                    {step.bgPattern}
                  </div>
                </div>
                
                {/* Step Info */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 w-full max-w-sm">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className={`w-8 h-8 bg-gradient-to-br ${step.color} text-white rounded-full flex items-center justify-center text-sm font-bold`}>
                      {step.number}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">{step.subtitle}</div>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                  
                  {/* Detailed Steps for Mobile */}
                  <div className="space-y-2">
                    {step.detailedSteps.map((detailStep, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className={`w-2 h-2 bg-gradient-to-br ${step.color} rounded-full`}></div>
                        <span>{detailStep}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Connection Arrow for Mobile */}
              {index < steps.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex justify-center mt-8"
                >
                  <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 5v50m0 0l-10-10m10 10l10-10" stroke="var(--mb-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="20" cy="30" r="3" fill="var(--mb-primary)" opacity="0.6">
                      <animate attributeName="cy" values="15;45;15" dur="2s" repeatCount="indefinite"/>
                    </circle>
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Enhanced Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-10 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="flowPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="white" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#flowPattern)"/>
            </svg>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-center mb-12">Complete Ecosystem Overview</h3>
            
            <div className="grid md:grid-cols-3 gap-10">
              {/* Customer Experience */}
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg">
                  👤
                </div>
                <h4 className="font-bold text-2xl mb-4">Customer Journey</h4>
                <ul className="text-gray-300 space-y-2 text-lg">
                  <li>• Seamless event discovery</li>
                  <li>• Instant digital tickets</li>
                  <li>• Quick gate entry</li>
                  <li>• Exclusive venue perks</li>
                </ul>
              </motion.div>
              
              {/* Staff Operations */}
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg">
                  👮
                </div>
                <h4 className="font-bold text-2xl mb-4">Staff Efficiency</h4>
                <ul className="text-gray-300 space-y-2 text-lg">
                  <li>• Lightning QR scanning</li>
                  <li>• Role-based access</li>
                  <li>• Offline reliability</li>
                  <li>• Fraud prevention</li>
                </ul>
              </motion.div>
              
              {/* Management Insights */}
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg">
                  📊
                </div>
                <h4 className="font-bold text-2xl mb-4">Business Intelligence</h4>
                <ul className="text-gray-300 space-y-2 text-lg">
                  <li>• Real-time analytics</li>
                  <li>• Revenue tracking</li>
                  <li>• Guest insights</li>
                  <li>• Performance metrics</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}