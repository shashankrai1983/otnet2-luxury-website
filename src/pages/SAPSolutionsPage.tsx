/*
 * SAP Solutions Page - Enterprise resource planning and SAP services
 * Features comprehensive SAP implementation and support information
 */

import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';

const SAPSolutionsPage = () => {
  const features = [
    "SAP S/4HANA Implementation and Migration",
    "SAP Cloud Solutions and Integration",
    "Custom SAP Module Development",
    "SAP Business Intelligence and Analytics",
    "SAP Workflow Automation",
    "System Integration and Data Migration",
    "Performance Tuning and Optimization",
    "24/7 SAP Support and Maintenance"
  ];

  const benefits = [
    "Streamlined business processes across departments",
    "Real-time visibility into business operations",
    "Improved data accuracy and consistency",
    "Enhanced regulatory compliance and reporting",
    "Reduced operational costs and manual work",
    "Faster decision-making with integrated analytics",
    "Scalable platform for business growth",
    "Expert support from certified SAP consultants"
  ];

  const technologies = [
    "SAP S/4HANA",
    "SAP Cloud Platform",
    "SAP FIORI",
    "SAP Analytics Cloud",
    "SAP SuccessFactors",
    "SAP Ariba",
    "SAP Concur",
    "SAP Business One"
  ];

  return (
    <ServicePageLayout
      title="SAP Solutions"
      subtitle="Expert SAP implementation, customization, and support services"
      description="Maximize your business potential with our comprehensive SAP solutions. From implementation to ongoing support, we ensure your SAP environment delivers optimal performance and drives business growth."
      heroImage="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800"
      features={features}
      benefits={benefits}
      technologies={technologies}
    >
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-forest mb-12 text-center">SAP Service Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-forest mb-6">Financial Management</h3>
              <ul className="space-y-3 text-forest/70">
                <li>• General Ledger and Financial Accounting</li>
                <li>• Accounts Payable and Receivable</li>
                <li>• Asset Management and Depreciation</li>
                <li>• Financial Planning and Analysis</li>
                <li>• Compliance and Regulatory Reporting</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-forest mb-6">Supply Chain Management</h3>
              <ul className="space-y-3 text-forest/70">
                <li>• Procurement and Vendor Management</li>
                <li>• Inventory Management and Optimization</li>
                <li>• Production Planning and Scheduling</li>
                <li>• Warehouse Management Systems</li>
                <li>• Logistics and Distribution</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-forest mb-6">Human Resources</h3>
              <ul className="space-y-3 text-forest/70">
                <li>• Employee Lifecycle Management</li>
                <li>• Payroll and Benefits Administration</li>
                <li>• Performance Management</li>
                <li>• Learning and Development</li>
                <li>• Workforce Analytics</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-forest mb-6">Customer Relationship</h3>
              <ul className="space-y-3 text-forest/70">
                <li>• Sales Force Automation</li>
                <li>• Customer Service Management</li>
                <li>• Marketing Campaign Management</li>
                <li>• Customer Analytics and Insights</li>
                <li>• E-commerce Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default SAPSolutionsPage;