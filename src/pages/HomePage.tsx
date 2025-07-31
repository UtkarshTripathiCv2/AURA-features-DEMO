import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, Zap, Camera, Activity, MapPin, BarChart3, CheckCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Proactive Road Intelligence for 
                <span className="text-accent-400"> Safer, Smarter Cities</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                AURA provides a low-cost, scalable solution for continuous monitoring 
                of urban road infrastructure, turning data into actionable maintenance schedules.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all transform hover:scale-105"
                >
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/solution"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-800 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center justify-center h-64">
                  <div className="relative">
                    <div className="animate-float">
                      <Camera className="h-16 w-16 text-accent-400" />
                    </div>
                    <div className="absolute -top-4 -right-4">
                      <Activity className="h-8 w-8 text-green-400" />
                    </div>
                    <div className="absolute -bottom-4 -left-4">
                      <MapPin className="h-8 w-8 text-red-400" />
                    </div>
                  </div>
                </div>
                <p className="text-center text-blue-100 mt-4">
                  AI-Powered Sensor Fusion Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              The Current Reality
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Traditional road monitoring is slow, expensive, and subjective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200">
              <div className="text-red-500 mb-4">
                <TrendingUp className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">High Socio-Economic Costs</h3>
              <p className="text-neutral-600">
                Vehicle damage, increased fuel consumption, and public safety risks 
                create massive economic losses for cities and citizens.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200">
              <div className="text-orange-500 mb-4">
                <Shield className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Ineffective Methods</h3>
              <p className="text-neutral-600">
                Manual surveys are subjective and slow. Specialized vehicles are 
                prohibitively expensive. Crowdsourcing lacks reliability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200">
              <div className="text-yellow-500 mb-4">
                <Zap className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">Market Gap</h3>
              <p className="text-neutral-600">
                The market is trapped between solutions too expensive to scale 
                and those too unreliable to be actionable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              How AURA Works
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A simple three-step process that transforms vehicle fleets into intelligent road monitoring systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">1. Capture</h3>
              <p className="text-neutral-600">
                Low-cost sensor units deployed on vehicle fleets collect synchronized 
                visual and motion data during regular operations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">2. Analyze</h3>
              <p className="text-neutral-600">
                AI-powered engine processes data using sensor fusion to accurately 
                detect and classify road anomalies with unprecedented precision.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">3. Act</h3>
              <p className="text-neutral-600">
                Real-time dashboard provides interactive maps and prioritized 
                work orders for municipal teams to take immediate action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why AURA is Different
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Three fundamental advantages that make AURA the clear choice for modern infrastructure management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-accent-400">Cost Disruption</h3>
              <p className="text-blue-100 mb-4">
                Orders of magnitude cheaper than specialized survey vehicles, 
                making comprehensive road monitoring accessible to every municipality.
              </p>
              <div className="text-sm text-blue-200">
                ✓ 90% cost reduction vs. traditional methods
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-accent-400">Data Fidelity</h3>
              <p className="text-blue-100 mb-4">
                Objective, quantitative data that is vastly more reliable than 
                crowdsourcing and more consistent than manual surveys.
              </p>
              <div className="text-sm text-blue-200">
                ✓ 95%+ accuracy through sensor fusion
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-accent-400">Contextual Optimization</h3>
              <p className="text-blue-100 mb-4">
                Purpose-built AI models trained specifically for Indian road 
                conditions and infrastructure challenges.
              </p>
              <div className="text-sm text-blue-200">
                ✓ Designed for emerging economy contexts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Technically Validated & Market Ready
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Technically Feasible</h3>
              <p className="text-neutral-600">Proven sensor fusion architecture with validated performance metrics</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Market Niche Identified</h3>
              <p className="text-neutral-600">Fills critical gap between expensive and unreliable solutions</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">DPDP Act Compliant</h3>
              <p className="text-neutral-600">Built with Privacy by Design architecture for regulatory compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-accent-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Transition from Reactive Repairs to Predictive Infrastructure Management
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join forward-thinking municipalities that are already transforming their road maintenance approach with AURA
          </p>
          <Link
            to="/solution"
            className="bg-white text-accent-500 hover:bg-neutral-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
          >
            Learn More About Our Technology
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;