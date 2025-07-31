import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingDown, AlertTriangle, DollarSign, Clock, Users, Camera, ArrowRight } from 'lucide-react';

const ProblemPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-orange-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              The Systemic Failure of Traditional Road Monitoring
            </h1>
            <p className="text-xl text-red-100 max-w-4xl mx-auto leading-relaxed">
              Poor road infrastructure costs cities billions in economic losses, vehicle damage, 
              and public safety risks, yet current monitoring methods remain inadequate.
            </p>
          </div>
        </div>
      </section>

      {/* Socio-Economic Costs */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              The True Cost of Neglected Infrastructure
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Poor road conditions create cascading economic and social impacts that affect every stakeholder
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 text-center">
              <DollarSign className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-neutral-900">Vehicle Damage</h3>
              <p className="text-neutral-600">
                Increased maintenance costs, tire replacement, and mechanical failures 
                burden both private and commercial vehicle owners.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 text-center">
              <TrendingDown className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-neutral-900">Fuel Consumption</h3>
              <p className="text-neutral-600">
                Poor road conditions increase fuel consumption by up to 30%, 
                adding environmental and economic costs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 text-center">
              <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-neutral-900">Public Safety</h3>
              <p className="text-neutral-600">
                Accidents, injuries, and fatalities due to poor road conditions 
                create immeasurable human and economic losses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 text-center">
              <Clock className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-neutral-900">Economic Productivity</h3>
              <p className="text-neutral-600">
                Traffic delays, increased logistics costs, and reduced economic 
                activity hamper overall urban productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Methods Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Why Current Methods Fail
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A critical evaluation of incumbent road monitoring approaches reveals fundamental limitations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Manual Surveys */}
            <div className="bg-red-50 border-2 border-red-200 p-8 rounded-xl">
              <div className="text-red-600 mb-4">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-800">Manual Surveys</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-neutral-700">Subjective assessments prone to human bias</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-neutral-700">Extremely slow and labor-intensive process</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-neutral-700">Inconsistent data collection standards</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-neutral-700">Limited coverage and frequency</span>
                </div>
              </div>
            </div>

            {/* Specialized Survey Vehicles */}
            <div className="bg-orange-50 border-2 border-orange-200 p-8 rounded-xl">
              <div className="text-orange-600 mb-4">
                <Camera className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-800">Specialized Survey Vehicles</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-orange-500 mt-1">✗</span>
                  <span className="text-neutral-700">Prohibitively expensive equipment and operations</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-orange-500 mt-1">✗</span>
                  <span className="text-neutral-700">Cost model misaligned with municipal budgets</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-orange-500 mt-1">✗</span>
                  <span className="text-neutral-700">Infrequent surveys miss rapid deterioration</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-orange-500 mt-1">✗</span>
                  <span className="text-neutral-700">Requires specialized expertise and training</span>
                </div>
              </div>
            </div>

            {/* Consumer Crowdsourcing */}
            <div className="bg-yellow-50 border-2 border-yellow-200 p-8 rounded-xl">
              <div className="text-yellow-600 mb-4">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-800">Consumer Crowdsourcing</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-500 mt-1">✗</span>
                  <span className="text-neutral-700">Highly subjective and unreliable data</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-500 mt-1">✗</span>
                  <span className="text-neutral-700">Lacks technical granularity and precision</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-500 mt-1">✗</span>
                  <span className="text-neutral-700">Unsuitable for professional engineering decisions</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-500 mt-1">✗</span>
                  <span className="text-neutral-700">Inconsistent coverage and reporting patterns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Market Gap */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              The Critical Market Gap
            </h2>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-4xl mx-auto">
              <p className="text-xl text-blue-100 leading-relaxed mb-6">
                "The market is trapped between solutions that are too expensive to be scalable 
                and those too unreliable to be actionable."
              </p>
              <p className="text-lg text-blue-200">
                Municipal authorities need a solution that combines the reliability of professional 
                systems with the affordability of crowdsourced approaches. This is the gap AURA fills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-accent-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready for a Better Solution?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Discover how AURA transforms road monitoring from an expensive burden 
            into an affordable, reliable, and actionable intelligence system.
          </p>
          <Link
            to="/solution"
            className="bg-white text-accent-500 hover:bg-neutral-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
          >
            See Our Solution
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProblemPage;