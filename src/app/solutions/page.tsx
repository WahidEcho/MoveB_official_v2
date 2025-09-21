import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, Smartphone, Headphones, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions | Move Beyond",
  description: "Comprehensive digital solutions for sports, events, and business management. Discover our Pass App, Illusionaire VR, and SaaS Academy Management Platform.",
};

const solutions = [
  {
    id: "pass-app",
    title: "Pass App",
    subtitle: "Digital Access Management",
    description: "Revolutionary digital pass system for seamless event access, guest management, and real-time analytics.",
    href: "/pass-app",
    image: "/case-studies/bue/cover.jpg",
    icon: Smartphone,
    features: [
      "QR Code & NFC Technology",
      "Real-time Guest Management", 
      "Analytics Dashboard",
      "Multi-role Access Control"
    ],
    stats: [
      { label: "Events Managed", value: "500+" },
      { label: "Passes Generated", value: "50K+" },
      { label: "Success Rate", value: "99.8%" }
    ],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
  },
  {
    id: "illusionaire",
    title: "Illusionaire VR",
    subtitle: "Immersive Virtual Experience",
    description: "Cutting-edge virtual reality platform that transforms events into unforgettable digital journeys.",
    href: "/solutions/illusionaire",
    image: "/case-studies/illusionaire/cover.jpg",
    icon: Headphones,
    features: [
      "360° Virtual Environments",
      "Interactive VR Experiences",
      "Real-time Audio Visualization",
      "Multi-user Collaboration"
    ],
    stats: [
      { label: "VR Environments", value: "12" },
      { label: "Hours of Content", value: "8+" },
      { label: "Interactive Elements", value: "50+" }
    ],
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
  },
  {
    id: "saas-academy",
    title: "SaaS Academy Management",
    subtitle: "Sports Academy Platform",
    description: "Complete management solution for sports academies with scheduling, analytics, and client management.",
    href: "/solutions/saas-academy-management-platform",
    image: "/case-studies/levels/cover.jpg",
    icon: Database,
    features: [
      "Visual Court Scheduling",
      "Client Profile Management",
      "Real-time Analytics",
      "Multi-language Support"
    ],
    stats: [
      { label: "Academies Served", value: "25+" },
      { label: "Bookings Processed", value: "10K+" },
      { label: "Efficiency Gain", value: "85%" }
    ],
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
  }
];

const testimonials = [
  {
    quote: "Move Beyond transformed our event management completely. The Pass App made everything seamless.",
    author: "Event Director",
    company: "Major Sports Federation",
    rating: 5
  },
  {
    quote: "Illusionaire VR created an experience our attendees will never forget. Absolutely revolutionary.",
    author: "Festival Organizer", 
    company: "Entertainment Group",
    rating: 5
  },
  {
    quote: "The SaaS platform streamlined our academy operations. We couldn't be happier with the results.",
    author: "Academy Manager",
    company: "Sports Academy",
    rating: 5
  }
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[var(--mb-bg-0)] text-[var(--mb-text)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--mb-primary)]/10 via-transparent to-[var(--mb-accent)]/10" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              Digital Solutions That
              <span className="bg-gradient-to-r from-[var(--mb-primary)] to-[var(--mb-accent)] bg-clip-text text-transparent"> Move Beyond</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--mb-muted)] mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of digital solutions designed for modern sports, events, and academy management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#solutions" 
                className="inline-flex items-center px-8 py-4 rounded-xl text-white bg-gradient-to-r from-[var(--mb-primary)] to-[var(--mb-primary-2)] hover:shadow-lg transition-all"
              >
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 rounded-xl border border-[var(--mb-border)] hover:bg-[var(--mb-surface)] transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Solutions</h2>
            <p className="text-xl text-[var(--mb-muted)] max-w-3xl mx-auto">
              Three powerful platforms designed to revolutionize how you manage events, create experiences, and run your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const IconComponent = solution.icon;
              return (
                <div 
                  key={solution.id}
                  className={`group relative overflow-hidden rounded-3xl border border-[var(--mb-border)] bg-[var(--mb-surface)] hover:shadow-2xl transition-all duration-500 ${solution.bgGradient}`}
                >

                  {/* Content */}
                  <div className="relative p-8">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${solution.gradient} mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-display text-2xl font-bold mb-2">{solution.title}</h3>
                    <p className="text-[var(--mb-accent)] font-medium mb-4">{solution.subtitle}</p>
                    
                    {/* Description */}
                    <p className="text-[var(--mb-muted)] mb-6 leading-relaxed">{solution.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {solution.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="font-bold text-lg">{stat.value}</div>
                          <div className="text-xs text-[var(--mb-muted)]">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link 
                      href={solution.href}
                      className={`inline-flex items-center w-full justify-center px-6 py-3 rounded-xl bg-gradient-to-r ${solution.gradient} text-white font-medium hover:shadow-lg transition-all group-hover:scale-105`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[var(--mb-bg-1)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Why Choose Move Beyond?</h2>
            <p className="text-xl text-[var(--mb-muted)] max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that truly transform your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast", description: "Optimized performance for real-time operations" },
              { icon: Shield, title: "Enterprise Security", description: "Bank-level security for all your data" },
              { icon: Globe, title: "Global Scale", description: "Solutions that work anywhere in the world" },
              { icon: Users, title: "Expert Support", description: "Dedicated team of industry specialists" }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex p-4 rounded-2xl bg-[var(--mb-surface)] mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-[var(--mb-primary)]" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-[var(--mb-muted)] text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-[var(--mb-muted)] max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what industry leaders say about our solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[var(--mb-surface)] rounded-2xl p-8 border border-[var(--mb-border)]">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-[var(--mb-muted)] text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--mb-primary)] to-[var(--mb-accent)]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join hundreds of organizations already using our solutions to revolutionize their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-[var(--mb-primary)] font-semibold hover:shadow-lg transition-all"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/rfp" 
              className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-white text-white hover:bg-white hover:text-[var(--mb-primary)] transition-all"
            >
              Request a Proposal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}