/*
 * Enterprise IT Solutions Page - Detailed information about IT services
 * Features comprehensive overview of enterprise IT capabilities
 */

import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';

const EnterpriseITPage = () => {
  const features = [
    "24/7 Network Monitoring and Support",
    "Cloud Infrastructure Management",
    "Cybersecurity Solutions and Compliance",
    "Data Backup and Disaster Recovery",
    "IT Asset Management",
    "Help Desk and Technical Support",
    "System Integration and Migration",
    "Performance Optimization"
  ];

  const benefits = [
    "Reduced IT operational costs by up to 40%",
    "99.9% uptime guarantee for critical systems",
    "Enhanced security and compliance posture",
    "Scalable solutions that grow with your business",
    "Expert support from certified professionals",
    "Proactive monitoring prevents issues before they occur",
    "Streamlined operations and improved productivity",
    "Access to latest enterprise technologies"
  ];

  const technologies = [
    "Microsoft Azure",
    "AWS",
    "VMware",
    "Cisco",
    "Dell EMC",
    "HPE",
    "Fortinet",
    "Palo Alto Networks"
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      role: "IT Director",
      company: "Manufacturing Corp",
      content: "Their enterprise IT solutions helped us achieve 99.9% uptime while reducing our IT costs by 35%. Exceptional service and support."
    },
    {
      name: "Sarah Thompson",
      role: "CIO",
      company: "Financial Services Ltd",
      content: "The migration to cloud infrastructure was seamless. Our productivity has increased significantly with their managed IT services."
    }
  ];

  const faq = [
    {
      question: "What is included in your 24/7 monitoring service?",
      answer: "Our monitoring includes real-time network performance tracking, security threat detection, system health monitoring, automated alert systems, and immediate incident response by our certified technicians."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "We implement multi-layered security including firewalls, encryption, access controls, regular security audits, and compliance frameworks such as ISO 27001, SOC 2, and industry-specific regulations."
    },
    {
      question: "Can you help with cloud migration?",
      answer: "Yes, we provide complete cloud migration services including assessment, planning, data migration, application modernization, and post-migration optimization and support."
    },
    {
      question: "What is your response time for critical issues?",
      answer: "For critical issues, we guarantee a 15-minute response time with immediate escalation to our senior engineers and a dedicated resolution timeline based on issue severity."
    }
  ];

  return (
    <ServicePageLayout
      title="Enterprise IT Solutions"
      subtitle="Comprehensive IT infrastructure and management for modern enterprises"
      description="Transform your business operations with our enterprise-grade IT solutions. We provide end-to-end IT services that ensure your technology infrastructure is secure, scalable, and optimized for peak performance."
      heroImage="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800"
      features={features}
      benefits={benefits}
      technologies={technologies}
      testimonials={testimonials}
      faq={faq}
    >
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-forest mb-12 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-forest/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-forest">1</span>
              </div>
              <h3 className="text-xl font-semibold text-forest mb-4">Assessment</h3>
              <p className="text-forest/70">
                Comprehensive evaluation of your current IT infrastructure and business requirements
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-forest/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-forest">2</span>
              </div>
              <h3 className="text-xl font-semibold text-forest mb-4">Implementation</h3>
              <p className="text-forest/70">
                Strategic deployment of solutions with minimal disruption to your operations
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-forest/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-forest">3</span>
              </div>
              <h3 className="text-xl font-semibold text-forest mb-4">Optimization</h3>
              <p className="text-forest/70">
                Continuous monitoring and improvement to ensure peak performance
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default EnterpriseITPage;