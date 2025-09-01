/*
 * AI Products Page - Detailed information about AI-based solutions
 * Features comprehensive overview of artificial intelligence capabilities
 */

import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';

const AIProductsPage = () => {
  const features = [
    "Machine Learning Model Development",
    "Natural Language Processing Solutions",
    "Predictive Analytics and Forecasting",
    "Automated Decision Making Systems",
    "AI-Powered Business Intelligence",
    "Custom AI Algorithm Development",
    "Model Training and Optimization",
    "AI Integration and Deployment"
  ];

  const benefits = [
    "Increase operational efficiency by up to 60%",
    "Reduce manual processing time significantly",
    "Improve decision-making with data-driven insights",
    "Automate repetitive tasks and workflows",
    "Enhanced customer experience through personalization",
    "Real-time analytics and reporting capabilities",
    "Scalable AI solutions that adapt to your needs",
    "Competitive advantage through innovation"
  ];

  const technologies = [
    "TensorFlow",
    "PyTorch",
    "OpenAI GPT",
    "Hugging Face",
    "Scikit-learn",
    "Apache Spark",
    "Kubernetes",
    "Docker"
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery & Strategy",
      description: "We analyze your business challenges and identify AI opportunities that deliver maximum ROI."
    },
    {
      step: 2,
      title: "Data Assessment",
      description: "Evaluate your data quality, structure, and readiness for AI implementation."
    },
    {
      step: 3,
      title: "AI Development",
      description: "Build and train custom AI models tailored to your specific business requirements."
    },
    {
      step: 4,
      title: "Integration & Scale",
      description: "Deploy AI solutions seamlessly into your existing infrastructure and scale as needed."
    }
  ];

  const testimonials = [
    {
      name: "David Wilson",
      role: "CTO",
      company: "FinTech Solutions",
      content: "Their predictive analytics solution increased our fraud detection rate by 40% while reducing false positives significantly."
    },
    {
      name: "Maria Garcia",
      role: "VP Operations",
      company: "LogiCorp",
      content: "The AI-powered automation platform saved us 30 hours per week and improved our process accuracy to 99.5%."
    },
    {
      name: "James Liu",
      role: "Head of Customer Service",
      company: "Global Retail Inc",
      content: "Our AI chatbot handles 80% of customer inquiries automatically, improving response time and customer satisfaction."
    }
  ];

  const faq = [
    {
      question: "What types of AI products do you develop?",
      answer: "We develop a wide range of AI solutions including predictive analytics, natural language processing systems, computer vision applications, recommendation engines, and intelligent automation tools."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We implement enterprise-grade security measures including data encryption, secure API access, GDPR compliance, and can work within your existing security frameworks and protocols."
    },
    {
      question: "Can AI solutions integrate with our existing systems?",
      answer: "Yes, our AI solutions are designed for seamless integration with existing business systems through APIs, databases, and various integration protocols."
    },
    {
      question: "What kind of ROI can we expect from AI implementation?",
      answer: "ROI varies by use case, but our clients typically see 20-60% efficiency improvements, cost reductions of 15-40%, and revenue increases of 10-25% within the first year."
    }
  ];

  const pricing = [
    {
      name: "AI Starter",
      description: "Basic AI solutions for small to medium businesses",
      price: "From $10,000",
      features: [
        "Pre-built AI models",
        "Basic data processing",
        "Email support",
        "Standard integration",
        "Monthly performance reports"
      ]
    },
    {
      name: "AI Professional",
      description: "Custom AI development for growing businesses",
      price: "From $25,000",
      popular: true,
      features: [
        "Custom AI model development",
        "Advanced analytics",
        "Priority support",
        "Multi-system integration",
        "Real-time monitoring",
        "Training & documentation"
      ]
    },
    {
      name: "AI Enterprise",
      description: "Comprehensive AI solutions for large organizations",
      price: "Custom Quote",
      features: [
        "Enterprise AI platform",
        "Multi-model deployment",
        "24/7 dedicated support",
        "Custom training programs",
        "SLA guarantees",
        "Ongoing optimization"
      ]
    }
  ];

  return (
    <ServicePageLayout
      title="AI Based Products"
      subtitle="Intelligent solutions powered by cutting-edge artificial intelligence"
      description="Harness the power of artificial intelligence to revolutionize your business processes. Our AI products are designed to automate complex tasks, provide intelligent insights, and drive innovation across your organization."
      heroImage="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
      features={features}
      benefits={benefits}
      technologies={technologies}
      processSteps={processSteps}
      testimonials={testimonials}
      faq={faq}
      pricing={pricing}
    >
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-forest mb-12 text-center">AI Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-forest mb-6">Conversational AI</h3>
              <ul className="space-y-3 text-forest/70">
                <li>• Intelligent chatbots and virtual assistants</li>
                <li>• Natural language understanding systems</li>
                <li>• Voice recognition and processing</li>
                <li>• Multi-language support capabilities</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-forest mb-6">Predictive Analytics</h3>
              <ul className="space-y-3 text-forest/70">
                <li>• Demand forecasting and planning</li>
                <li>• Risk assessment and management</li>
                <li>• Customer behavior prediction</li>
                <li>• Market trend analysis</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-forest mb-6">Process Automation</h3>
              <ul className="space-y-3 text-forest/70">
                <li>• Robotic Process Automation (RPA)</li>
                <li>• Intelligent document processing</li>
                <li>• Workflow optimization</li>
                <li>• Quality assurance automation</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-forest mb-6">Business Intelligence</h3>
              <ul className="space-y-3 text-forest/70">
                <li>• Real-time data visualization</li>
                <li>• Automated reporting systems</li>
                <li>• Performance monitoring dashboards</li>
                <li>• Strategic planning insights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default AIProductsPage;