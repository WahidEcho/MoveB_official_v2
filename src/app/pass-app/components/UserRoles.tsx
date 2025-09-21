"use client";
import { motion } from "framer-motion";

export default function UserRoles() {
  return (
    <section className="py-16 bg-[var(--mb-bg-1)]">
      <div className="container mx-auto px-6">
        {/* Onboarding Section */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Onboarding & Sign in
              </h2>
              <p className="text-lg text-[var(--mb-muted)] mb-8">
                Your business will be provided with an ID, as well as a passcode for each 
                individual user (ie: Guard, Bartender, Manager, etc.).
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <p className="text-black dark:text-white">
                  Each user will experience the app differently, depending on their roles and permissions.
                </p>
              </div>
            </div>
            
            {/* Two Phone Mockups */}
            <div className="flex gap-6 justify-center">
              {/* Passaire App Phone */}
              <div className="relative max-w-[160px]">
                <div className="relative aspect-[9/19.5] rounded-[1.5rem] border-4 border-gray-800 bg-gray-800 shadow-xl">
                  <div className="rounded-[1rem] overflow-hidden h-full bg-black relative">
                    <div className="absolute top-1 left-3 right-3 flex justify-between items-center text-white text-xs z-10">
                      <span>9:41</span>
                      <div className="flex gap-0.5">
                        <div className="w-0.5 h-0.5 rounded-full bg-white"></div>
                        <div className="w-0.5 h-0.5 rounded-full bg-white"></div>
                        <div className="w-0.5 h-0.5 rounded-full bg-white"></div>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-teal-900/50">
                      <div className="absolute inset-0 bg-black/60"></div>
                    </div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
                      <h3 className="text-white text-lg font-bold text-center mb-4">Passaire App</h3>
                      <div className="w-full mb-3">
                        <div className="bg-black/40 border border-gray-600 rounded-lg px-3 py-2">
                          <span className="text-black-400 text-xs">Business ID</span>
                        </div>
                      </div>
                      <button className="w-full bg-white text-black font-semibold py-2 rounded-lg text-sm">
                        Enter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Move Beyond App Phone */}
              <div className="relative max-w-[160px]">
                <div className="relative aspect-[9/19.5] rounded-[1.5rem] border-4 border-gray-800 bg-gray-800 shadow-xl">
                  <div className="rounded-[1rem] overflow-hidden h-full bg-black relative">
                    <div className="absolute top-1 left-3 right-3 flex justify-between items-center text-white text-xs z-10">
                      <span>9:41</span>
                      <div className="flex gap-0.5">
                        <div className="w-0.5 h-0.5 rounded-full bg-white"></div>
                        <div className="w-0.5 h-0.5 rounded-full bg-white"></div>
                        <div className="w-0.5 h-0.5 rounded-full bg-white"></div>
                      </div>
                    </div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
                      {/* Move Beyond Logo */}
                      <div className="mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">MB</span>
                        </div>
                      </div>
                      
                      <h3 className="text-white text-lg font-bold text-center mb-4">Move Beyond</h3>
                      
                      <div className="w-full mb-3">
                        <div className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2">
                          <span className="text-gray-400 text-xs">Password</span>
                        </div>
                      </div>
                      <button className="w-full bg-white text-black font-semibold py-2 rounded-lg text-sm">
                        Enter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Guards, Bartenders, Cashiers Section */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Guards, Bartenders, & Cashiers
          </h2>
          <p className="text-lg text-[var(--mb-muted)] text-center max-w-3xl mx-auto mb-12">
            All three roles have access to a QR scanner, but with different functionalities.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* QR Scanner Phone */}
            <div className="relative max-w-[200px] mx-auto">
              <div className="relative aspect-[9/19.5] rounded-[2rem] border-4 border-gray-800 bg-gray-800 shadow-xl">
                <div className="rounded-[1.5rem] overflow-hidden h-full bg-black relative">
                  <div className="absolute top-2 left-4 right-4 flex justify-between items-center text-white text-sm z-10">
                    <span>9:41</span>
                    <div className="flex gap-0.5">
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                    </div>
                  </div>
                  
                  {/* Camera View */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-blue-600/40 to-teal-600/40">
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                  
                  {/* QR Scanner Interface */}
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex-1 flex items-center justify-center">
                      {/* QR Scanner Frame */}
                      <div className="w-32 h-32 border-2 border-white rounded-lg relative">
                        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white"></div>
                        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white"></div>
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white"></div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white"></div>
                        
                        {/* QR Code Pattern */}
                        <div className="absolute inset-2 bg-white rounded">
                          <div className="grid grid-cols-8 gap-0.5 p-1 h-full">
                            {Array.from({ length: 64 }).map((_, i) => {
                              // Deterministic pattern based on index
                              const isBlack = (i % 3 === 0) || (i % 7 === 1) || (i % 11 === 3) || (i % 13 === 5);
                              return (
                                <div key={i} className={`${isBlack ? 'bg-black' : 'bg-white'} rounded-sm`}></div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 text-center">
                      <p className="text-white text-sm">Scan to check-in or check-out guests</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Check-Out Card */}
            <div className="bg-gray-800 rounded-2xl p-6 text-white max-w-[280px] mx-auto">
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-gray-400 text-sm">Guest</span>
                  <span className="text-gray-400 text-sm">ID</span>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-bold">Ahmed Ashraf</span>
                  <span className="font-bold">651616503</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-gray-400 text-sm mb-1">Ticket Type</div>
                <div className="font-semibold">Standard</div>
              </div>
              
              <div className="mb-6">
                <div className="text-gray-400 text-sm mb-1">Phone Number</div>
                <div className="font-semibold">01234567890</div>
              </div>
              
              <div className="mb-6">
                <p className="text-center text-sm">Would you like to check Ahmed out?</p>
              </div>
              
              <div className="flex gap-3">
                <button className="flex-1 bg-gray-600 text-white py-3 rounded-xl">Cancel</button>
                <button className="flex-1 bg-white text-black py-3 rounded-xl font-semibold">Check Out</button>
              </div>
            </div>

            {/* Check-In Card */}
            <div className="bg-gray-800 rounded-2xl p-6 text-white max-w-[280px] mx-auto">
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-gray-400 text-sm">Guest</span>
                  <span className="text-gray-400 text-sm">ID</span>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-bold">Ahmed Ashraf</span>
                  <span className="font-bold">651616503</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-gray-400 text-sm mb-1">Ticket Type</div>
                <div className="font-semibold">Standard</div>
              </div>
              
              <div className="mb-6">
                <div className="text-gray-400 text-sm mb-1">Phone Number</div>
                <div className="font-semibold">01234567890</div>
              </div>
              
              <div className="mb-6">
                <p className="text-center text-sm">Would you like to check Ahmed in?</p>
              </div>
              
              <div className="flex gap-3">
                <button className="flex-1 bg-gray-600 text-white py-3 rounded-xl">Cancel</button>
                <button className="flex-1 bg-white text-black py-3 rounded-xl font-semibold">Check In</button>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-6 max-w-4xl mx-auto">
            <p className="text-lg text-[var(--mb-muted)] text-center">
              Guards can scan incoming guests&apos; tickets (sent to them by email).
            </p>
            <p className="text-lg text-[var(--mb-muted)] text-center">
              A successful scan displays the guest&apos;s info and allows guard to check them in/out.
            </p>
            <p className="text-lg text-[var(--mb-muted)] text-center">
              Similarly, upon a successful scan by a Bartender, they can view whether the 
              guest is eligible for a complimentary drink and redeem it for them.
            </p>
            <p className="text-lg text-[var(--mb-muted)] text-center">
              A Cashier&apos;s successful scan will display the order info, and prompt them to 
              confirm cash payment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
