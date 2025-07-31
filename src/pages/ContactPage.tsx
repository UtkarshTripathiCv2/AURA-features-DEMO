import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, HelpCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    position: '',
    phone: '',
    message: '',
    requestType: 'demo'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const faqs = [
    {
      question: 'What is the typical cost for deploying AURA in a municipality?',
      answer: 'AURA costs are orders of magnitude lower than specialized survey vehicles. Pricing depends on fleet size and coverage area. Contact us for a customized quote based on your specific requirements.'
    },
    {
      question: 'How quickly can AURA be deployed?',
      answer: 'Initial deployment can be completed within 4-6 weeks, including sensor installation, system integration, and staff training. We provide comprehensive support throughout the deployment process.'
    },
    {
      question: 'Is AURA compliant with Indian data privacy regulations?',
      answer: 'Yes, AURA is fully compliant with the Digital Personal Data Protection Act 2023. Our Privacy by Design architecture ensures data minimization and secure processing from the ground up.'
    },
    {
      question: 'What types of vehicles can be equipped with AURA?',
      answer: 'AURA is designed to work with any vehicle fleet including municipal vehicles, public transport buses, commercial logistics fleets, and private vehicle partnerships.'
    },
    {
      question: 'How accurate is AURA compared to traditional methods?',
      answer: 'AURA achieves 95%+ accuracy through sensor fusion technology, significantly higher than manual surveys or crowdsourced data, while maintaining the objectivity needed for professional engineering decisions.'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Thank You!</h2>
          <p className="text-neutral-600 mb-6">
            Your request has been submitted successfully. Our team will get back to you within 24 hours 
            to schedule your AURA demonstration and discuss your specific requirements.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-primary-800 hover:bg-primary-900 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Partner with AURA to Build a 
              <span className="text-accent-400"> Smarter City</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your road infrastructure management? Let's discuss how AURA 
              can deliver immediate value and long-term strategic advantages for your municipality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Request a Demo</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-neutral-700 mb-2">
                      Organization *
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-neutral-700 mb-2">
                      Position/Title *
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      required
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="requestType" className="block text-sm font-medium text-neutral-700 mb-2">
                      Request Type *
                    </label>
                    <select
                      id="requestType"
                      name="requestType"
                      required
                      value={formData.requestType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="demo">Request Demo</option>
                      <option value="pilot">Pilot Project</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="technical">Technical Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your specific requirements, coverage area, and any questions you have about AURA..."
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors"
                >
                  Send Request
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-200">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-6 w-6 text-primary-800 mt-1" />
                    <div>
                      <div className="font-medium text-neutral-900">Email</div>
                      <div className="text-neutral-600">contact@aura-roads.com</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-6 w-6 text-primary-800 mt-1" />
                    <div>
                      <div className="font-medium text-neutral-900">Phone</div>
                      <div className="text-neutral-600">+91 (0) 000-000-0000</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-primary-800 mt-1" />
                    <div>
                      <div className="font-medium text-neutral-900">Location</div>
                      <div className="text-neutral-600">Mumbai, India</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-900 text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Why Partner with AURA?</h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent-400 mt-0.5" />
                    <span>90% cost reduction vs. traditional methods</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent-400 mt-0.5" />
                    <span>95%+ accuracy through sensor fusion</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent-400 mt-0.5" />
                    <span>Full DPDP Act 2023 compliance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent-400 mt-0.5" />
                    <span>Comprehensive support and training</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-600">
              Quick answers to common questions about AURA deployment and capabilities
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="h-6 w-6 text-primary-800 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;