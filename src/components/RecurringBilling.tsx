import { useState, useEffect } from 'react';
import { CreditCard, Shield, Clock, Settings, RefreshCw, Users, ArrowRight, Check } from 'lucide-react';

const RecurringBilling = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [animationIndex, setAnimationIndex] = useState(0);

  const features = [
    {
      title: "Smart Subscription Management",
      icon: RefreshCw,
      description: "Automate recurring payments with flexible billing cycles and smart retry logic.",
      benefits: [
        "Multiple billing frequencies",
        "Automatic payment retry",
        "Dunning management"
      ],
      color: "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-stone-500 via-violet-700 to-emerald-100"
    },
    {
      title: "Enterprise-Grade Security",
      icon: Shield,
      description: "Process payments with bank-level encryption and PCI DSS compliance.",
      benefits: [
        "PCI DSS Level 1",
        "Tokenized card storage",
        "Fraud prevention"
      ],
      color: "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-500 to-purple-600"
    },
    {
      title: "Intelligent Retry System",
      icon: Clock,
      description: "Maximize revenue with smart payment retry logic and automated communications.",
      benefits: [
        "Custom retry schedules",
        "Automated notifications",
        "Failed payment recovery"
      ],
      color: "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-500 to-purple-600"
    },
    {
      title: "Advanced Subscription Tools",
      icon: Settings,
      description: "Create and manage flexible subscription plans with powerful tooling.",
      benefits: [
        "Usage-based billing",
        "Tiered pricing",
        "Proration handling"
      ],
      color: "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-stone-500 via-violet-700 to-emerald-100"
    },
    {
      title: "Multi-Payment Support",
      icon: CreditCard,
      description: "Accept payments through multiple methods with secure vault storage.",
      benefits: [
        "Credit & debit cards",
        "ACH & bank transfers",
        "Digital wallets"
      ],
      color: "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-stone-500 via-violet-700 to-emerald-100"
    },
    {
      title: "Self-Service Portal",
      icon: Users,
      description: "Empower customers with a branded self-service billing portal.",
      benefits: [
        "Payment method updates",
        "Subscription management",
        "Billing history"
      ],
      color: "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-stone-500 via-violet-700 to-emerald-100"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationIndex(Math.floor(Math.random() * features.length));
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Recurring Billing
            </span>
            <span className="text-gray-900"> System</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your subscription business with our powerful recurring billing platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === index || animationIndex === index;
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className={`h-full bg-white rounded-2xl p-8 transition-all duration-500
                  ${isActive ? 'shadow-xl scale-105' : 'shadow-md hover:shadow-lg'}`}>
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${feature.color}
                    transform transition-all duration-500 ${isActive ? 'scale-110' : ''}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {feature.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className={`mt-8 flex items-center text-sm font-medium transition-all duration-500
                    ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                    Learn more
                    <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-500
                      ${isActive ? 'translate-x-1' : ''}`} />
                  </div>

                  {/* Background Gradient */}
                  <div className={`absolute inset-0 rounded-2xl ${feature.color} opacity-0
                    transition-opacity duration-500 -z-10 ${isActive ? 'opacity-20' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
            <span className="relative z-10">Start Free Trial</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecurringBilling;