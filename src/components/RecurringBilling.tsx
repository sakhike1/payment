import { useState, useEffect } from 'react';
import { CreditCard, Shield, Clock, Settings, RefreshCw, Users, ArrowRight, Check, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const RecurringBilling = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [animationIndex, setAnimationIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      title: "Smart Subscription Management",
      icon: RefreshCw,
      description: "Automate recurring payments with flexible billing cycles and smart retry logic.",
      benefits: [
        "Multiple billing frequencies",
        "Automatic payment retry",
        "Dunning management",
        "Revenue recovery automation"
      ],
      stats: { users: "10K+", success: "99.9%", savings: "30%" }
    },
    {
      title: "Enterprise-Grade Security",
      icon: Shield,
      description: "Process payments with bank-level encryption and PCI DSS compliance.",
      benefits: [
        "PCI DSS Level 1",
        "Tokenized card storage",
        "Fraud prevention",
        "Real-time monitoring"
      ],
      stats: { encrypted: "100%", uptime: "99.99%", protected: "1M+" }
    },
    {
      title: "Intelligent Retry System",
      icon: Clock,
      description: "Maximize revenue with smart payment retry logic and automated communications.",
      benefits: [
        "Custom retry schedules",
        "Automated notifications",
        "Failed payment recovery",
        "Smart dunning timing"
      ],
      stats: { recovery: "85%", reduction: "40%", saved: "$2M+" }
    },
    {
      title: "Advanced Subscription Tools",
      icon: Settings,
      description: "Create and manage flexible subscription plans with powerful tooling.",
      benefits: [
        "Usage-based billing",
        "Tiered pricing",
        "Proration handling",
        "Custom price points"
      ],
      stats: { plans: "∞", active: "50K+", growth: "45%" }
    },
    {
      title: "Multi-Payment Support",
      icon: CreditCard,
      description: "Accept payments through multiple methods with secure vault storage.",
      benefits: [
        "Credit & debit cards",
        "ACH & bank transfers",
        "Digital wallets",
        "Cryptocurrency"
      ],
      stats: { methods: "20+", processed: "$1B+", global: "180+" }
    },
    {
      title: "Self-Service Portal",
      icon: Users,
      description: "Empower customers with a branded self-service billing portal.",
      benefits: [
        "Payment method updates",
        "Subscription management",
        "Billing history",
        "Usage analytics"
      ],
      stats: { satisfaction: "95%", time: "-60%", retained: "40%" }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationIndex(Math.floor(Math.random() * features.length));
    }, 3000);
    setIsVisible(true);
    return () => clearInterval(interval);
  }, [features.length]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Next-Gen
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Billing
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your subscription business with AI-powered recurring billing
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === index || animationIndex === index;
            
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className="group relative"
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className={`h-full bg-gradient-to-br from-slate-800 to-slate-900 
                  rounded-2xl p-8 transition-all duration-500 border border-gray-800
                  ${isActive ? 'shadow-2xl shadow-purple-500/20 border-purple-500/50' : 'shadow-lg'}`}>
                  
                  {/* Icon */}
                  <motion.div 
                    animate={{ rotate: isActive ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center
                      bg-gradient-to-r from-purple-500 to-pink-500`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(feature.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-purple-400 font-bold">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-gray-400 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <motion.div
                    animate={{ x: isActive ? 5 : 0 }}
                    className="mt-8 flex items-center text-sm font-medium text-purple-400 group-hover:text-purple-300"
                  >
                    Learn more
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
            <span className="relative z-10">Start Free Trial</span>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-500 to-purple-500"
            />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default RecurringBilling;