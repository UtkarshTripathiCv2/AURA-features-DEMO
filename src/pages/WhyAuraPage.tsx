import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, X, DollarSign, Target, Shield, ArrowRight } from 'lucide-react';

const WhyAuraPage: React.FC = () => {
  const comparisonData = [
    {
      criteria: 'Cost',
      manual: { value: 'High', status: 'poor', icon: X },
      specialized: { value: 'Very High', status: 'poor', icon: X },
      crowdsourced: { value: 'Low', status: 'good', icon: CheckCircle },
      aura: { value: 'Low', status: 'excellent', icon: CheckCircle }
    },
    {
      criteria: 'Accuracy',
      manual: { value: 'Low', status: 'poor', icon: X },
      specialized: { value: 'High', status: 'good', icon: CheckCircle },
      crowdsourced: { value: 'Very Low', status: 'poor', icon: X },
      aura: { value: 'High', status: 'excellent', icon: CheckCircle }
    },
    {
      criteria: 'Scalability',
      manual: { value: 'Poor', status: 'poor', icon: X },
      specialized: { value: 'Limited', status: 'poor', icon: X },
      crowdsourced: { value: 'Good', status: 'good', icon: CheckCircle },
      aura: { value: 'Excellent', status: 'excellent', icon: CheckCircle }
    },
    {
      criteria: 'Coverage',
      manual: { value: 'Limited', status: 'poor', icon: X },
      specialized: { value: 'Limited', status: 'poor', icon: X },
      crowdsourced: { value: 'Variable', status: 'moderate', icon: X },
      aura: { value: 'Comprehensive', status: 'excellent', icon: CheckCircle }
    },
    {
      criteria: 'Real-time Data',
      manual: { value: 'No', status: 'poor', icon: X },
      specialized: { value: 'Limited', status: 'moderate', icon: X },
      crowdsourced: { value: 'Yes', status: 'good', icon: CheckCircle },
      aura: { value: 'Yes', status: 'excellent', icon: CheckCircle }
    },
    {
      criteria: 'Professional Grade',
      manual: { value: 'Variable', status: 'moderate', icon: X },
      specialized: { value: 'Yes', status: 'good', icon: CheckCircle },
      crowdsourced: { value: 'No', status: 'poor', icon: X },
      aura: { value: 'Yes', status: 'excellent', icon: CheckCircle }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-50';
      case 'good': return 'text-blue-600 bg-blue-50';
      case 'moderate': return 'text-yellow-600 bg-yellow-50';
      case 'poor': return 'text-red-600 bg-red-50';
      default: return 'text-neutral-600 bg-neutral-50';
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              The Clear Choice for 
              <span className="text-accent-400"> Modern Infrastructure Management</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              AURA combines the best of all approaches while eliminating their fundamental limitations, 
              creating the first truly comprehensive road monitoring solution for municipal authorities.
            </p>
          </div>
        </div>
      </section>

      {/* Comparative Analysis Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Comparative Analysis of Road Monitoring Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A comprehensive evaluation reveals AURA's clear advantages across all critical criteria
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-neutral-200 rounded-xl shadow-sm">
              <thead>
                <tr className="bg-neutral-50 border-b border-neutral-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900">Criteria</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-600">Manual Surveys</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-600">Specialized Vehicles</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-600">Crowdsourced</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary-800 bg-primary-50">AURA</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-neutral-100">
                    <td className="px-6 py-4 font-medium text-neutral-900">{row.criteria}</td>
                    <td className={`px-6 py-4 text-center ${getStatusColor(row.manual.status)}`}>
                      <div className="flex items-center justify-center space-x-2">
                        <row.manual.icon className="h-4 w-4" />
                        <span className="text-sm font-medium">{row.manual.value}</span>
                      </div>
                    </td>
                    <td className={`px-6 py-4 text-center ${getStatusColor(row.specialized.status)}`}>
                      <div className="flex items-center justify-center space-x-2">
                        <row.specialized.icon className="h-4 w-4" />
                        <span className="text-sm font-medium">{row.specialized.value}</span>
                      </div>
                    </td>
                    <td className={`px-6 py-4 text-center ${getStatusColor(row.crowdsourced.status)}`}>
                      <div className="flex items-center justify-center space-x-2">
                        <row.crowdsourced.icon className="h-4 w-4" />
                        <span className="text-sm font-medium">{row.crowdsourced.value}</span>
                      </div>
                    </td>
                    <td className={`px-6 py-4 text-center font-semibold ${getStatusColor(row.aura.status)} border-2 border-primary-200`}>
                      <div className="flex items-center justify-center space-x-2">
                        <row.aura.icon className="h-4 w-4" />
                        <span className="text-sm font-medium">{row.aura.value}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              AURA's Unique Value Proposition
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Three fundamental advantages that create an unmatched competitive position
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cost Disruption */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200">
              <div className="text-green-600 mb-6">
                <DollarSign className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-900">Cost Disruption</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Orders of magnitude cheaper than specialized survey vehicles, making comprehensive 
                road monitoring accessible to every municipality regardless of budget constraints.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-neutral-700">90% cost reduction vs. specialized vehicles</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-neutral-700">No specialized equipment required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-neutral-700">Utilizes existing vehicle fleets</span>
                </div>
              </div>
            </div>

            {/* Data Fidelity */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200">
              <div className="text-blue-600 mb-6">
                <Target className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-900">Data Fidelity</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Objective, quantitative data that is vastly more reliable than crowdsourcing 
                and more consistent than manual surveys, suitable for professional engineering decisions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="text-sm text-neutral-700">95%+ accuracy through sensor fusion</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="text-sm text-neutral-700">Eliminates human subjectivity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="text-sm text-neutral-700">Consistent measurement standards</span>
                </div>
              </div>
            </div>

            {/* Contextual Optimization */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200">
              <div className="text-purple-600 mb-6">
                <Shield className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-900">Contextual Optimization</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Purpose-built AI models trained specifically for Indian road conditions and 
                infrastructure challenges, delivering superior performance in emerging economy contexts.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span className="text-sm text-neutral-700">Trained on Indian road datasets</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span className="text-sm text-neutral-700">Optimized for local conditions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span className="text-sm text-neutral-700">Emerging economy focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Built for Trust: DPDP Act 2023 Compliant
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              AURA's "Privacy by Design" architecture ensures full compliance with India's 
              Digital Personal Data Protection Act while maintaining operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Shield className="h-10 w-10 text-accent-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Data Minimization</h3>
              <p className="text-sm text-blue-100">Collects only necessary road surface data</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Shield className="h-10 w-10 text-accent-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Privacy by Design</h3>
              <p className="text-sm text-blue-100">Built-in privacy protections from ground up</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Shield className="h-10 w-10 text-accent-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Secure Processing</h3>
              <p className="text-sm text-blue-100">Encrypted data transmission and storage</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Shield className="h-10 w-10 text-accent-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Regulatory Alignment</h3>
              <p className="text-sm text-blue-100">Full DPDP Act 2023 compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-accent-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Infrastructure Management?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Discover AURA's strategic roadmap and vision for the future of intelligent 
            infrastructure monitoring and autonomous vehicle support.
          </p>
          <Link
            to="/vision"
            className="bg-white text-accent-500 hover:bg-neutral-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
          >
            Explore Our Vision
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhyAuraPage;