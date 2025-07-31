import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Activity, MapPin, Cpu, Eye, Zap, Cloud, BarChart3, ArrowRight } from 'lucide-react';

const SolutionPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              How Sensor Fusion Delivers 
              <span className="text-accent-400"> Actionable Intelligence</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              AURA combines computer vision and vibration analysis through advanced AI to create 
              the most accurate and affordable road monitoring system available.
            </p>
          </div>
        </div>
      </section>

      {/* Three-Part Architecture Overview */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Three-Part Architecture
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A comprehensive system designed for scalability, accuracy, and actionable insights
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200 text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-primary-800" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-900">Onboard Unit</h3>
              <p className="text-neutral-600 mb-4">
                Low-cost sensor array deployed on existing vehicle fleets for continuous data collection
              </p>
              <div className="text-sm text-primary-600 font-medium">
                Vision • Motion • Location • Processing
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200 text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="h-8 w-8 text-primary-800" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-900">AI Classification Engine</h3>
              <p className="text-neutral-600 mb-4">
                Advanced machine learning models process dual data streams for precise anomaly detection
              </p>
              <div className="text-sm text-primary-600 font-medium">
                Computer Vision • Vibration Analysis • Sensor Fusion
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200 text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud className="h-8 w-8 text-primary-800" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-900">Cloud & Analytics Platform</h3>
              <p className="text-neutral-600 mb-4">
                Scalable infrastructure delivers real-time insights through intuitive dashboards
              </p>
              <div className="text-sm text-primary-600 font-medium">
                Data Processing • Interactive Maps • Work Orders
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboard Unit Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                The Onboard Unit
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                A compact, affordable sensor package that transforms any vehicle into 
                an intelligent road monitoring station.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <Eye className="h-6 w-6 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Vision Sensor (1080p Dashcam)</h3>
                    <p className="text-neutral-600">High-resolution camera captures detailed road surface imagery for computer vision analysis</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <Activity className="h-6 w-6 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">6-Axis IMU Sensor</h3>
                    <p className="text-neutral-600">Precision accelerometer and gyroscope detect vehicle motion patterns and vibrations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">GPS Module</h3>
                    <p className="text-neutral-600">Accurate location tracking for precise geographic mapping of road conditions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <Cpu className="h-6 w-6 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Compute Module (SBC)</h3>
                    <p className="text-neutral-600">Edge computing device processes data locally and manages secure transmission to the cloud</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-12 rounded-2xl">
              <div className="text-center">
                <div className="relative">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <Camera className="h-16 w-16 text-primary-800 mx-auto mb-4" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary-100 p-3 rounded-lg">
                        <Eye className="h-6 w-6 text-primary-800 mx-auto" />
                      </div>
                      <div className="bg-primary-100 p-3 rounded-lg">
                        <Activity className="h-6 w-6 text-primary-800 mx-auto" />
                      </div>
                      <div className="bg-primary-100 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary-800 mx-auto" />
                      </div>
                      <div className="bg-primary-100 p-3 rounded-lg">
                        <Cpu className="h-6 w-6 text-primary-800 mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-neutral-600 mt-6 font-medium">
                  Integrated Sensor Array
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Classification Engine */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              The Power of Sensor Fusion
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Dual-data stream approach eliminates ambiguity and delivers unprecedented accuracy 
              in road anomaly detection and classification.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center">
              <Eye className="h-12 w-12 text-accent-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Vision Model (YOLO)</h3>
              <p className="text-blue-100">
                Advanced computer vision detects and classifies visual road surface anomalies 
                with high precision object recognition.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center">
              <Activity className="h-12 w-12 text-accent-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Vibration Model (LSTM)</h3>
              <p className="text-blue-100">
                Time-series analysis of vehicle motion patterns identifies road quality 
                issues through sophisticated pattern recognition.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center">
              <Zap className="h-12 w-12 text-accent-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Sensor Fusion Classifier</h3>
              <p className="text-blue-100">
                Combines both data streams to eliminate false positives and achieve 
                superior accuracy in anomaly classification.
              </p>
            </div>
          </div>

          {/* Fusion Examples */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">How Sensor Fusion Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-red-500/20 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-red-300">Pothole Detection</h4>
                </div>
                <p className="text-sm text-blue-100">
                  Vision detects dark circular anomaly + Vibration confirms impact signature = Confirmed pothole
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500/20 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-yellow-300">Speed Bump Identification</h4>
                </div>
                <p className="text-sm text-blue-100">
                  Vision sees elevated surface + Vibration shows controlled deceleration = Speed bump, not pothole
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-500/20 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-green-300">Manhole Cover Recognition</h4>
                </div>
                <p className="text-sm text-blue-100">
                  Vision identifies metallic circular pattern + Minimal vibration = Intact manhole cover
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platform */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-12 rounded-2xl">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary-100 p-4 rounded-lg text-center">
                    <BarChart3 className="h-8 w-8 text-primary-800 mx-auto mb-2" />
                    <div className="text-sm font-medium text-primary-800">Analytics</div>
                  </div>
                  <div className="bg-accent-100 p-4 rounded-lg text-center">
                    <MapPin className="h-8 w-8 text-accent-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-accent-600">Interactive Maps</div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-primary-500 to-accent-500 h-32 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-semibold">Live Dashboard</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-green-100 h-8 rounded"></div>
                  <div className="bg-yellow-100 h-8 rounded"></div>
                  <div className="bg-red-100 h-8 rounded"></div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                Cloud & Analytics Platform
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Scalable cloud infrastructure processes massive datasets and delivers 
                actionable insights through intuitive, professional-grade interfaces.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <Cloud className="h-6 w-6 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Scalable Data Ingestion</h3>
                    <p className="text-neutral-600">Cloud backend designed to handle massive data volumes from thousands of vehicles simultaneously</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Interactive Mapping</h3>
                    <p className="text-neutral-600">Real-time visualization of road conditions with detailed geographic information and severity indicators</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Analytics & Reporting</h3>
                    <p className="text-neutral-600">Comprehensive analytics suite with trend analysis, performance metrics, and automated reporting</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <Zap className="h-6 w-6 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Work Order Generation</h3>
                    <p className="text-neutral-600">Automated priority-based maintenance scheduling with detailed location and severity information</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-accent-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            See AURA's Competitive Advantages
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Discover why AURA represents a fundamental breakthrough in road monitoring technology 
            and the clear choice for modern infrastructure management.
          </p>
          <Link
            to="/why-aura"
            className="bg-white text-accent-500 hover:bg-neutral-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
          >
            Why Choose AURA?
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SolutionPage;