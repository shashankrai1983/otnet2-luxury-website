/*
 * Service Page Layout Component - Reusable layout for service pages
 * Features consistent header, hero section, and content structure
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ChevronDown, ChevronUp, Star, ArrowRight } from 'lucide-react';

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: string[];
  benefits: string[];
  technologies?: string[];
  processSteps?: Array<{
    step: number;
    title: string;
    description: string;
    icon?: React.ReactNode;
  }>;
  caseStudies?: Array<{
    title: string;
    challenge: string;
    solution: string;
    results: string[];
    image?: string;
  }>;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  pricing?: Array<{
    name: string;
    description: string;
    price: string;
    features: string[];
    popular?: boolean;
  }>;
  testimonials?: Array<{
    name: string;
    role: string;
    company: string;
    content: string;
    image?: string;
  }>;
  children?: React.ReactNode;
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
  title,
  subtitle,
  description,
  heroImage,
  features,
  benefits,
  technologies,
  processSteps,
  caseStudies,
  faq,
  pricing,
  testimonials,
  children
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-white/50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/"
            className="inline-flex items-center text-forest hover:text-forest/80 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-forest mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl text-forest/80 mb-8 leading-relaxed">
                {subtitle}
              </p>
              <p className="text-lg text-forest/70 leading-relaxed">
                {description}
              </p>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage}
                alt={title}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-forest mb-8">Key Features</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle size={24} className="text-forest mt-1 flex-shrink-0" />
                    <p className="text-forest/80 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-forest mb-8">Benefits</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle size={24} className="text-forest mt-1 flex-shrink-0" />
                    <p className="text-forest/80 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      {technologies && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-forest mb-12 text-center">Technologies We Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <p className="text-forest font-medium">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Steps Section */}
      {processSteps && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-forest mb-12 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-forest text-cream rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-forest/20 transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-forest mb-3">{step.title}</h3>
                  <p className="text-forest/70 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Section */}
      {caseStudies && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-forest mb-12 text-center">Success Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {study.image && (
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-forest mb-4">{study.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-forest mb-2">Challenge:</h4>
                        <p className="text-forest/70">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest mb-2">Solution:</h4>
                        <p className="text-forest/70">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest mb-2">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle size={16} className="text-forest mt-1 flex-shrink-0" />
                              <span className="text-forest/70">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {testimonials && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-forest mb-12 text-center">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-forest/70 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    {testimonial.image && (
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-forest">{testimonial.name}</p>
                      <p className="text-sm text-forest/60">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {pricing && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-forest mb-12 text-center">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                    plan.popular ? 'ring-2 ring-forest transform scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-forest text-cream px-6 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-forest mb-4">{plan.name}</h3>
                    <p className="text-forest/70 mb-6">{plan.description}</p>
                    <div className="text-4xl font-bold text-forest mb-2">{plan.price}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle size={20} className="text-forest mt-0.5 flex-shrink-0" />
                        <span className="text-forest/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/#contact"
                    className={`block w-full text-center py-3 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-forest text-cream hover:bg-forest/90' 
                        : 'bg-forest/10 text-forest hover:bg-forest/20'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faq && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-forest mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faq.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-forest pr-4">{item.question}</h3>
                    {openFaq === index ? (
                      <ChevronUp size={24} className="text-forest flex-shrink-0" />
                    ) : (
                      <ChevronDown size={24} className="text-forest flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-6">
                      <p className="text-forest/70 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Custom Content */}
      {children}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-forest text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cream/80 mb-8">
            Let's discuss how our {title.toLowerCase()} can transform your business
          </p>
          <Link 
            to="/#contact"
            className="inline-block bg-cream text-forest px-8 py-4 rounded-lg text-lg font-medium hover:bg-cream/90 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicePageLayout;