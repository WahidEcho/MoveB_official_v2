"use client";
import { motion } from "framer-motion";

export default function ManagerDashboard() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        {/* Managers/Admins Section */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Managers/Admins
          </h2>
          <p className="text-lg text-[var(--mb-muted)] mb-12 max-w-3xl">
            Dashboard with access to live stats, charts, guest list, 
            financial visualizations, analytics, and many more!
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Main Dashboard Phone */}
            <div className="relative max-w-[300px] mx-auto">
              <div className="relative aspect-[9/19.5] rounded-[2rem] border-4 border-gray-800 bg-gray-800 shadow-xl">
                <div className="rounded-[1.5rem] overflow-hidden h-full bg-black relative">
                  {/* Status Bar */}
                  <div className="absolute top-2 left-4 right-4 flex justify-between items-center text-white text-sm z-10">
                    <span>10:35</span>
                    <div className="flex gap-0.5">
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="relative z-10 h-full bg-gray-900 p-4 pt-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-white text-lg font-bold">Dashboard</h3>
                      <button className="text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    
                    {/* Event Card */}
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-4 mb-4 relative">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-semibold">Virtual Event</h4>
                          <p className="text-white/80 text-sm">Today • 6:00 PM</p>
                        </div>
                        <div className="bg-white/20 rounded-lg px-3 py-1">
                          <span className="text-white font-bold">30</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Finance Card */}
                    <div className="bg-green-600 rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-semibold">1300 EGP</h4>
                          <p className="text-white/80 text-sm">Tap to get a snapshot of your financials</p>
                        </div>
                        <div className="text-white">💰</div>
                      </div>
                    </div>
                    
                    {/* Live Stats */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Live Stats</h4>
                      <div className="bg-gray-800 rounded-xl p-4">
                        <div className="mb-4">
                          <p className="text-gray-400 text-sm mb-2">Check Ins</p>
                          <div className="bg-gray-700 rounded-full h-2 mb-1">
                            <div className="bg-blue-500 h-2 rounded-full" style={{width: '65%'}}></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-400">
                            <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-800 rounded-xl p-3 text-center">
                        <div className="text-white font-bold text-lg">1</div>
                        <div className="text-gray-400 text-xs">Current Guests</div>
                      </div>
                      <div className="bg-gray-800 rounded-xl p-3 text-center">
                        <div className="text-white font-bold text-lg">1</div>
                        <div className="text-gray-400 text-xs">Total Entries</div>
                      </div>
                    </div>
                    
                    {/* Current Status */}
                    <div className="bg-gray-800 rounded-xl p-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">Guests Sold</span>
                        <span className="text-white font-bold">6</span>
                      </div>
                    </div>
                    
                    {/* Your Guests */}
                    <div className="bg-gray-800 rounded-xl p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">Your Guests</span>
                        <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">17%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Callouts */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                  <span className="text-orange-600 text-xl">📊</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tap to view your venues financials and analytics.</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  <span className="text-blue-600 text-xl">📅</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Select a date to view a previous day&apos;s dashboard.</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                  <span className="text-green-600 text-xl">📈</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Show trends of the busiest hours of the day!</h3>
                </div>
              </div>

              {/* Guest List Card */}
              <div className="bg-gray-800 rounded-xl p-4 max-w-[280px]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-semibold">View guest list</span>
                  <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">17%</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-3">17% of today&apos;s expected guests have showed up so far</p>
                <p className="text-gray-400 text-sm">Tap to view today&apos;s guest list</p>
              </div>

              {/* Scan Logs Card */}
              <div className="bg-gray-800 rounded-xl p-4 max-w-[280px]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-semibold">View scan logs</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">mhmd whid</span>
                    <span className="text-gray-400">8:29 PM</span>
                  </div>
                  <p className="text-gray-400 text-xs">Tap to view all</p>
                </div>
              </div>

              {/* Plan Details */}
              <div className="bg-gray-800 rounded-xl p-4 max-w-[280px]">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">Plan details and credentials.</span>
                  <span className="text-gray-400">▼</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">Illusionaire</p>
                <p className="text-gray-400 text-xs">BASIC</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Financial Analytics Section */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Financials & Analytics
              </h2>
              <p className="text-lg text-[var(--mb-muted)] mb-8">
                All the numbers and charts you need to monitor your growth and success!
              </p>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <p className="text-black dark:text-white">
                  Managers/Admins also have access to the scanner with all of its possible functionalities.
                </p>
              </div>
            </div>
            
            {/* Analytics Phone */}
            <div className="relative max-w-[300px] mx-auto">
              <div className="relative aspect-[9/19.5] rounded-[2rem] border-4 border-gray-800 bg-gray-800 shadow-xl">
                <div className="rounded-[1.5rem] overflow-hidden h-full bg-black relative">
                  {/* Status Bar */}
                  <div className="absolute top-2 left-4 right-4 flex justify-between items-center text-white text-sm z-10">
                    <span>11:03</span>
                    <div className="flex gap-0.5">
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                    </div>
                  </div>
                  
                  {/* Analytics Content */}
                  <div className="relative z-10 h-full bg-gray-900 p-4 pt-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <button className="text-white">←</button>
                        <h3 className="text-white text-lg font-bold">Analytics</h3>
                      </div>
                      <div className="bg-gray-800 rounded-lg px-3 py-1">
                        <span className="text-white text-lg font-bold">$</span>
                      </div>
                    </div>
                    
                    {/* Event Info */}
                    <div className="bg-white rounded-xl p-4 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
                        <div>
                          <h4 className="font-semibold">Virtual Event</h4>
                          <p className="text-gray-600 text-xs">Today • Expected Guests: 10</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Revenue Display */}
                    <div className="text-center mb-6">
                      <div className="text-white text-3xl font-bold mb-2">£65000</div>
                    </div>
                    
                    {/* Chart */}
                    <div className="mb-6">
                      <svg className="w-full h-24" viewBox="0 0 300 100">
                        <polyline 
                          points="0,80 50,60 100,40 150,30 200,35 250,25 300,20" 
                          fill="none" 
                          stroke="#10B981" 
                          strokeWidth="2"
                        />
                        <defs>
                          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#10B981" stopOpacity="0.3"/>
                            <stop offset="100%" stopColor="#10B981" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                        <polygon 
                          points="0,80 50,60 100,40 150,30 200,35 250,25 300,20 300,100 0,100" 
                          fill="url(#chartGradient)"
                        />
                      </svg>
                      <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                      </div>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-800 rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-gray-400 text-xs">Total Card</span>
                        </div>
                        <div className="text-white font-bold">3 Hrs</div>
                      </div>
                      <div className="bg-gray-800 rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-400 text-xs">Average Time</span>
                        </div>
                        <div className="text-white font-bold">150 Hrs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile App Features */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Mobile App
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* iPhone Mockup */}
            <div className="relative max-w-[300px] mx-auto">
              <div className="relative">
                {/* iPhone Body */}
                <div className="w-full aspect-[9/19.5] bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-black rounded-[2rem] relative overflow-hidden">
                    {/* Dynamic Island */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20"></div>
                    
                    {/* Screen Content */}
                    <div className="h-full bg-black relative">
                      {/* Status Bar */}
                      <div className="absolute top-3 left-6 right-6 flex justify-between items-center text-white text-sm z-10">
                        <span>9:41</span>
                        <div className="flex gap-0.5">
                          <div className="w-1 h-1 rounded-full bg-white"></div>
                          <div className="w-1 h-1 rounded-full bg-white"></div>
                          <div className="w-1 h-1 rounded-full bg-white"></div>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="pt-12 h-full bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-teal-900/50">
                        <div className="absolute inset-0 bg-black/60"></div>
                        <div className="relative z-10 h-full flex flex-col justify-center items-center px-8">
                          <h3 className="text-white text-3xl font-bold text-center mb-8">Passaire App</h3>
                          
                          <div className="w-full mb-6">
                            <div className="bg-black/40 border border-gray-600 rounded-xl px-4 py-3">
                              <span className="text-gray-400 text-sm">Business ID</span>
                            </div>
                          </div>
                          
                          <button className="w-full bg-white text-black font-semibold py-3 rounded-xl">
                            Enter
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  <span className="text-blue-600 text-xl">👮</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Guards — Scan tickets to check guests in/out</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                  <span className="text-purple-600 text-xl">🍺</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Bartenders — Scan tickets to redeem guests complimentary drinks</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                  <span className="text-green-600 text-xl">💳</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Cashiers — Scan order QR to complete <strong>cash</strong> payments</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                  <span className="text-orange-600 text-xl">👔</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Managers/Admins — Access dashboard, monitor live stats, view guest list, view analytics, etc.</h3>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
