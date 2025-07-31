import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, TrendingUp, Brain, Car, ArrowRight, Target, BarChart3, Map } from 'lucide-react';

const VisionPage: React.FC = () => {
  const phases = [
    {
      phase: 'Phase I',
      title: 'Reactive Maintenance',
      timeline: 'Years 1-2',
      icon: Target,
      color: 'from-red-500 to-orange-500',
      description: 'Focus on providing a real-time "State of the Roads" dashboard for pilot projects',
      features: [
        'Real-time road condition monitoring',
        'Interactive mapping dashboard',
        'Basic anomaly detection and reporting',
        'Municipal pilot program deployment',
        'Fleet integration with public works vehicles'
      ]
    },
    {
      phase: 'Phase II',
      title: 'Predictive Maintenance',
      timeline: 'Years 2-4',
      icon: TrendingUp,
      color: 'from-blue-500 to-purple-500',
      description: 'Transition to forecasting infrastructure degradation by analyzing historical data',
      features: [
        'Predictive analytics for road deterioration',
        'Maintenance scheduling optimization',
        'Cost-benefit analysis for repairs',
        'Historical trend analysis',
        'Proactive budget planning tools'
      ]
    },
    {
      phase: 'Phase III',
      title: 'Foundational Data Layer',
      timeline: 'Years 4+',
      icon: Car,
      color: 'from-green-500 to-teal-500',
      description: 'Evolve into a provider of high-definition, real-time dynamic surface maps for autonomous vehicles',
      features: [
        'High-definition road surface mapping',
        'Real-time data for autonomous vehicles',
        'Dynamic surface condition updates',
        'Integration with smart city infrastructure',
        'Foundation for future mobility solutions'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-purple-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Engineering the Future of 
              <span className="text-accent-400"> Mobility</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              AURA's strategic roadmap transforms today's reactive maintenance approach into 
              tomorrow's foundation for autonomous vehicle infrastructure and smart city systems.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Roadmap */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Three-Phase Strategic Roadmap
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A carefully planned evolution from reactive monitoring to predictive intelligence 
              and ultimately, foundational infrastructure for autonomous mobility.
            </p>
          </div>

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Timeline connector */}
                {index < phases.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-16 w-1 bg-gradient-to-b from-neutral-300 to-transparent z-0"></div>
                )}
                
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`bg-gradient-to-r ${phase.color} p-3 rounded-xl`}>
                        <phase.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">{phase.phase}</div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900">{phase.title}</h3>
                        <div className="flex items-center space-x-2 text-neutral-600">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm font-medium">{phase.timeline}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                      {phase.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {phase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className={`bg-gradient-to-r ${phase.color} p-1 rounded-full mt-1`}>
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className={`bg-gradient-to-br ${phase.color} p-8 rounded-2xl text-white`}>
                      <div className="text-center">
                        <phase.icon className="h-16 w-16 mx-auto mb-6" />
                        <div className="text-2xl font-bold mb-2">{phase.phase}</div>
                        <div className="text-lg opacity-90">{phase.title}</div>
                        <div className="mt-6 grid grid-cols-2 gap-4">
                          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                            <BarChart3 className="h-6 w-6 mx-auto mb-2" />
                            <div className="text-sm">Analytics</div>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                            <Map className="h-6 w-6 mx-auto mb-2" />
                            <div className="text-sm">Mapping</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Impact */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              The Transformative Impact
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              AURA's evolution will fundamentally transform how cities manage infrastructure 
              and prepare for the future of transportation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-neutral-900">Immediate Value</h3>
              <p className="text-neutral-600 text-sm">
                Real-time road monitoring delivers immediate operational benefits and cost savings
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-neutral-900">Strategic Planning</h3>
              <p className="text-neutral-600 text-sm">
                Predictive analytics enable proactive maintenance and optimal resource allocation
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-neutral-900">Smart Integration</h3>
              <p className="text-neutral-600 text-sm">
                Foundation layer for smart city initiatives and autonomous vehicle deployment
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-neutral-900">Future Ready</h3>
              <p className="text-neutral-600 text-sm">
                High-definition surface maps support next-generation transportation systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Beyond Road Monitoring
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              AURA's ultimate vision extends far beyond traditional infrastructure monitoring, 
              creating the foundation for smart, connected, and autonomous urban environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-accent-400">Smart City Integration</h3>
              <p className="text-blue-100 mb-4">
                AURA data becomes a critical layer in comprehensive smart city platforms, 
                enabling intelligent traffic management, emergency response optimization, 
                and urban planning decisions based on real-time infrastructure intelligence.
              </p>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>• Integration with traffic management systems</li>
                <li>• Emergency response route optimization</li>
                <li>• Urban planning and development support</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-accent-400">Autonomous Vehicle Support</h3>
              <p className="text-blue-100 mb-4">
                High-definition, real-time road surface data provides autonomous vehicles 
                with critical information for safe navigation, route planning, and 
                adaptive driving behavior in challenging road conditions.
              </p>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>• Real-time surface condition updates</li>
                <li>• Dynamic route optimization for AVs</li>
                <li>• Safety-critical infrastructure mapping</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-accent-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Be Part of the Infrastructure Revolution
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join forward-thinking municipalities and organizations that are already partnering 
            with AURA to build the foundation for tomorrow's smart, connected cities.
          </p>
          <Link
            to="/contact"
            className="bg-white text-accent-500 hover:bg-neutral-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
          >
            Partner with AURA
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VisionPage;