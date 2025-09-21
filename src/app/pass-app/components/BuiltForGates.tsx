"use client";
import { motion } from "framer-motion";

export default function BuiltForGates() {
  const features = [
    {
      icon: "⚡",
      title: "Instant QR validation",
      description: "Lightning-fast ticket scanning with immediate verification"
    },
    {
      icon: "🛡️",
      title: "Anti-fraud checks & revocation",
      description: "Advanced security measures to prevent ticket fraud and abuse"
    },
    {
      icon: "📡",
      title: "Offline queue for poor connectivity",
      description: "Works seamlessly even when internet connection is unstable"
    },
    {
      icon: "👮",
      title: "Role-based access for stewards",
      description: "Different permission levels for guards, bartenders, cashiers, and managers"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Features */}
          <motion.div 
            initial={{ opacity: 0, x: -24 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Built for real gates
            </h2>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 24 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-6"
                  whileHover={{ x: 8 }}
                >
                  <div className="w-16 h-16 bg-[var(--mb-primary)]/10 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 border border-[var(--mb-primary)]/20">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                    <p className="text-[var(--mb-muted)] text-lg leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Generated Gate Security Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: 24 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)"/>
                </svg>
              </div>
              
              {/* Main Gate Security Illustration */}
              <div className="relative z-10">
                <svg width="100%" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  {/* Gate Structure */}
                  <rect x="50" y="50" width="300" height="300" fill="none" stroke="#374151" strokeWidth="4" rx="8"/>
                  <rect x="60" y="60" width="280" height="40" fill="#1F2937" rx="4"/>
                  <text x="200" y="85" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">SECURITY GATE</text>
                  
                  {/* Turnstile Arms */}
                  <circle cx="200" cy="200" r="60" fill="none" stroke="#374151" strokeWidth="3"/>
                  <line x1="200" y1="140" x2="200" y2="260" stroke="#6B7280" strokeWidth="4"/>
                  <line x1="140" y1="200" x2="260" y2="200" stroke="#6B7280" strokeWidth="4"/>
                  <circle cx="200" cy="200" r="8" fill="#3B82F6"/>
                  
                  {/* QR Scanner Panel */}
                  <rect x="320" y="160" width="60" height="80" fill="#1F2937" rx="8"/>
                  <rect x="325" y="170" width="50" height="50" fill="#0F172A" rx="4"/>
                  
                  {/* QR Scanner Frame */}
                  <rect x="330" y="175" width="40" height="40" fill="none" stroke="#3B82F6" strokeWidth="2" rx="2"/>
                  <rect x="335" y="180" width="4" height="4" fill="#3B82F6"/>
                  <rect x="361" y="180" width="4" height="4" fill="#3B82F6"/>
                  <rect x="335" y="206" width="4" height="4" fill="#3B82F6"/>
                  <rect x="361" y="206" width="4" height="4" fill="#3B82F6"/>
                  
                  {/* Scanning Laser Line */}
                  <line x1="332" y1="195" x2="368" y2="195" stroke="#EF4444" strokeWidth="2" opacity="0.8">
                    <animate attributeName="y1" values="178;208;178" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="y2" values="178;208;178" dur="2s" repeatCount="indefinite"/>
                  </line>
                  
                  {/* Status LED */}
                  <circle cx="350" cy="230" r="3" fill="#10B981">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Person with Phone */}
                  <ellipse cx="120" cy="320" rx="25" ry="8" fill="#374151" opacity="0.3"/>
                  <rect x="110" y="250" width="20" height="70" fill="#3B82F6" rx="4"/>
                  <circle cx="120" cy="240" r="12" fill="#F3F4F6"/>
                  <rect x="100" y="260" width="12" height="30" fill="#F59E0B" rx="2"/>
                  <rect x="128" y="260" width="12" height="30" fill="#F59E0B" rx="2"/>
                  
                  {/* Phone in Hand */}
                  <rect x="95" y="270" width="8" height="14" fill="#1F2937" rx="2"/>
                  <rect x="96" y="271" width="6" height="10" fill="#3B82F6" rx="1"/>
                  <circle cx="99" cy="282" r="1" fill="#374151"/>
                  
                  {/* QR Code Emanating from Phone */}
                  <g opacity="0.7">
                    <rect x="97" y="265" width="4" height="4" fill="white" rx="0.5"/>
                    <rect x="97.5" y="265.5" width="0.5" height="0.5" fill="black"/>
                    <rect x="98.5" y="265.5" width="0.5" height="0.5" fill="black"/>
                    <rect x="99.5" y="265.5" width="0.5" height="0.5" fill="black"/>
                    <rect x="97.5" y="266.5" width="0.5" height="0.5" fill="black"/>
                    <rect x="99.5" y="266.5" width="0.5" height="0.5" fill="black"/>
                    <rect x="97.5" y="267.5" width="0.5" height="0.5" fill="black"/>
                    <rect x="98.5" y="267.5" width="0.5" height="0.5" fill="black"/>
                    <rect x="99.5" y="267.5" width="0.5" height="0.5" fill="black"/>
                  </g>
                  
                  {/* Wireless Signals */}
                  <g opacity="0.6">
                    <path d="M105 275 Q200 260 330 185" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5">
                      <animate attributeName="stroke-dashoffset" values="0;-10;0" dur="2s" repeatCount="indefinite"/>
                    </path>
                    <circle cx="150" cy="268" r="2" fill="#3B82F6" opacity="0.8">
                      <animate attributeName="r" values="1;3;1" dur="1.5s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="220" cy="255" r="2" fill="#3B82F6" opacity="0.6">
                      <animate attributeName="r" values="1;3;1" dur="1.8s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.6;0.1;0.6" dur="1.8s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="280" cy="240" r="2" fill="#3B82F6" opacity="0.7">
                      <animate attributeName="r" values="1;3;1" dur="1.2s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.2s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                  
                  {/* Security Icons */}
                  <g transform="translate(70, 120)">
                    <circle cx="0" cy="0" r="15" fill="#10B981" opacity="0.2"/>
                    <path d="M-8,-4 L-3,1 L8,-7" stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  </g>
                  
                  <g transform="translate(330, 120)">
                    <circle cx="0" cy="0" r="15" fill="#EF4444" opacity="0.2"/>
                    <rect x="-6" y="-8" width="12" height="16" fill="none" stroke="#EF4444" strokeWidth="2" rx="2"/>
                    <circle cx="0" cy="-2" r="3" fill="none" stroke="#EF4444" strokeWidth="2"/>
                    <rect x="-2" y="2" width="4" height="4" fill="#EF4444"/>
                  </g>
                  
                  {/* Status Display */}
                  <rect x="150" y="120" width="100" height="40" fill="#1F2937" rx="8"/>
                  <text x="200" y="140" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="bold">ACCESS GRANTED</text>
                  <text x="200" y="152" textAnchor="middle" fill="#9CA3AF" fontSize="8">Ticket Validated ✓</text>
                  
                  {/* Entrance Arrow */}
                  <path d="M80 200 L140 200" stroke="#10B981" strokeWidth="4" markerEnd="url(#arrowhead)"/>
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#10B981"/>
                    </marker>
                  </defs>
                  
                  {/* Exit Arrow */}
                  <path d="M260 200 L320 200" stroke="#6B7280" strokeWidth="3" opacity="0.5" markerEnd="url(#arrowhead2)"/>
                  <defs>
                    <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280"/>
                    </marker>
                  </defs>
                </svg>
              </div>
              
              {/* Floating Security Badges */}
              <div className="absolute top-6 right-6">
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                    🛡️
                  </div>
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs">
                    ⚡
                  </div>
                </div>
              </div>
              
              {/* Bottom Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-green-400 text-lg font-bold">99.9%</div>
                    <div className="text-gray-400 text-xs">Accuracy</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-blue-400 text-lg font-bold">&lt;1s</div>
                    <div className="text-gray-400 text-xs">Scan Time</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-purple-400 text-lg font-bold">24/7</div>
                    <div className="text-gray-400 text-xs">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

