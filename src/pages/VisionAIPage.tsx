/*
 * Vision AI Solutions Page - Computer vision and image recognition services
 * Features detailed overview of visual AI capabilities and applications
 */

import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';

const VisionAIPage = () => {
  const features = [
    "Object Detection and Recognition",
    "Facial Recognition and Analysis",
    "Optical Character Recognition (OCR)",
    "Quality Control and Inspection",
    "Medical Image Analysis",
    "Security and Surveillance Systems",
    "Augmented Reality Integration",
    "Real-time Video Processing"
  ];

  const benefits = [
    "Automate visual inspection processes",
    "Improve accuracy in quality control by 95%",
    "Reduce manual monitoring requirements",
    "Enhanced security through intelligent surveillance",
    "Real-time anomaly detection and alerts",
    "Streamlined document processing workflows",
    "Cost-effective scalable solutions",
    "Integration with existing camera systems"
  ];

  const technologies = [
    "OpenCV",
    "YOLO",
    "TensorFlow Vision",
    "PyTorch Vision",
    "MediaPipe",
    "NVIDIA CUDA",
    "Intel OpenVINO",
    "Azure Cognitive Services"
  ];

  const processSteps = [
    {
      step: 1,
      title: "Consultation & Analysis",
      description: "We analyze your specific use case and requirements to design the optimal vision AI solution."
    },
    {
      step: 2,
      title: "Data Collection & Preparation",
      description: "Gather and prepare training data, ensuring quality and diversity for accurate model performance."
    },
    {
      step: 3,
      title: "Model Development & Training",
      description: "Develop custom models using state-of-the-art computer vision techniques and algorithms."
    },
    {
      step: 4,
      title: "Integration & Deployment",
      description: "Seamlessly integrate the solution into your existing systems and deploy for production use."
    }
  ];

  const caseStudies = [
    {
      title: "Manufacturing Quality Control",
      challenge: "A major automotive manufacturer needed to automate their quality inspection process to detect defects in real-time.",
      solution: "We developed a custom computer vision system using YOLO object detection to identify surface defects, dimensional inconsistencies, and assembly errors.",
      results: [
        "99.7% defect detection accuracy",
        "60% reduction in inspection time",
        "Eliminated 95% of human error",
        "$2.5M annual cost savings"
      ],
      image: "https://i.ibb.co/bM9mghFr/vision-manufacturing.jpg"
    },
    {
      title: "Healthcare Diagnostic Assistance",
      challenge: "A medical center required an AI system to assist radiologists in identifying potential tumors in medical imaging.",
      solution: "Our team created a deep learning model trained on thousands of medical scans to detect anomalies and highlight areas of concern.",
      results: [
        "94% accuracy in tumor detection",
        "50% faster diagnosis time",
        "Reduced radiologist workload by 40%",
        "Improved patient outcomes"
      ],
      image: "https://i.ibb.co/Qv8MzxXX/healthcare-otnet.jpg"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Operations Director",
      company: "TechCorp Manufacturing",
      content: "The vision AI solution transformed our quality control process. We've seen remarkable improvements in both accuracy and efficiency."
    },
    {
      name: "Dr. Michael Chen",
      role: "Chief Radiologist", 
      company: "Metro Health Systems",
      content: "This diagnostic assistance tool has been invaluable. It helps us catch potential issues earlier and provides excellent second opinions."
    },
    {
      name: "Lisa Rodriguez",
      role: "Security Manager",
      company: "Global Retail Chain",
      content: "The intelligent surveillance system has significantly enhanced our security capabilities while reducing false alarms by 80%."
    }
  ];

  const faq = [
    {
      question: "How accurate are your vision AI systems?",
      answer: "Our vision AI systems typically achieve 95-99% accuracy rates, depending on the specific application. We continuously optimize and retrain models to maintain peak performance."
    },
    {
      question: "Can your solution integrate with existing camera systems?",
      answer: "Yes, our vision AI solutions are designed to work with most existing camera infrastructure. We support various camera types, resolutions, and streaming protocols."
    },
    {
      question: "What industries can benefit from vision AI?",
      answer: "Vision AI applications span across manufacturing, healthcare, retail, security, agriculture, automotive, and many other industries. Any business that processes visual information can benefit."
    },
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timelines vary based on complexity, but most projects are completed within 8-16 weeks, from initial consultation to full deployment."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support packages including system monitoring, performance optimization, model updates, and technical assistance."
    }
  ];

  const pricing = [
    {
      name: "Starter",
      description: "Perfect for small businesses and proof-of-concept projects",
      price: "From $5,000",
      features: [
        "Basic object detection",
        "Up to 2 camera feeds",
        "Standard accuracy models",
        "Email support",
        "Basic reporting dashboard"
      ]
    },
    {
      name: "Professional",
      description: "Ideal for medium businesses with complex requirements",
      price: "From $15,000",
      popular: true,
      features: [
        "Advanced computer vision",
        "Up to 10 camera feeds",
        "Custom model training",
        "Priority support",
        "Advanced analytics",
        "API integration"
      ]
    },
    {
      name: "Enterprise",
      description: "For large organizations requiring scalable solutions",
      price: "Custom Quote",
      features: [
        "Unlimited camera feeds",
        "Multi-site deployment",
        "Custom AI development",
        "24/7 dedicated support",
        "White-label options",
        "SLA guarantees"
      ]
    }
  ];

  return (
    <ServicePageLayout
      title="Vision AI Solutions"
      subtitle="Advanced computer vision technology for intelligent visual processing"
      description="Transform how your business processes visual information with our cutting-edge computer vision solutions. From automated quality control to intelligent surveillance, our Vision AI products deliver precision and efficiency."
      heroImage="https://i.ibb.co/1fVxvqr2/vision-otnet.jpg"
      features={features}
      benefits={benefits}
      technologies={technologies}
      processSteps={processSteps}
      caseStudies={caseStudies}
      testimonials={testimonials}
      faq={faq}
      pricing={pricing}
    >
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-forest mb-12 text-center">Industry Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-semibold text-forest mb-4">Manufacturing</h3>
              <p className="text-forest/70">
                Automated quality inspection, defect detection, and production line monitoring
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-semibold text-forest mb-4">Healthcare</h3>
              <p className="text-forest/70">
                Medical image analysis, diagnostic assistance, and patient monitoring systems
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-semibold text-forest mb-4">Retail</h3>
              <p className="text-forest/70">
                Customer behavior analysis, inventory management, and loss prevention
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-semibold text-forest mb-4">Security</h3>
              <p className="text-forest/70">
                Intelligent surveillance, access control, and threat detection systems
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-semibold text-forest mb-4">Agriculture</h3>
              <p className="text-forest/70">
                Crop monitoring, pest detection, and yield optimization through aerial imaging
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-semibold text-forest mb-4">Automotive</h3>
              <p className="text-forest/70">
                Autonomous vehicle systems, driver assistance, and vehicle inspection
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default VisionAIPage;