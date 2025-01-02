import { useState, useEffect } from 'react';
import { CreditCard, Lock, Clock, ArrowRight, Check, Smartphone, Globe, ChevronRight, Shield, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProcessPayment = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [demoStep, setDemoStep] = useState(0);

  const stats = [
    { value: "$5B+", label: "Processed", growth: "+25%" },
    { value: "150+", label: "Countries", growth: "+12%" },
    { value: "99.99%", label: "Uptime", growth: "+0.1%" },
    { value: "<0.01%", label: "Fraud Rate", growth: "-15%" }
  ];

  const features = [
    {
      icon: CreditCard,
      title: "Universal Payment Methods",
      description: "Support for 50+ payment methods globally",
      benefits: [
        "All major credit cards",
        "Digital wallets & BNPL",
        "Local payment methods",
        "Cryptocurrency ready"
      ],
      stats: { coverage: "99%", methods: "50+", success: "99.9%" },
      color: "from-blue-600 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with AI fraud prevention",
      benefits: [
        "PCI DSS Level 1",
        "AI fraud detection",
        "3D Secure 2.0",
        "Tokenization"
      ],
      stats: { security: "100%", detection: "99.9%", compliance: "100%" },
      color: "from-purple-600 to-pink-500"
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Real-time payments with smart routing",
      benefits: [
        "Sub-second processing",
        "Smart payment routing",
        "Automated reconciliation",
        "Real-time webhooks"
      ],
      stats: { speed: "<1s", uptime: "99.99%", volume: "10K/s" },
      color: "from-emerald-600 to-teal-500"
    }
  ];

  const demoSteps = [
    { status: "Processing payment...", progress: 33 },
    { status: "Verifying transaction...", progress: 66 },
    { status: "Payment confirmed!", progress: 100 }
  ];

  useEffect(() => {
    if (demoStep < demoSteps.length - 1) {
      const timer = setTimeout(() => setDemoStep(prev => prev + 1), 2000);
      return () => clearTimeout(timer);
    }
  }, [demoStep]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Next-Gen
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Payments
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Enterprise-grade payment infrastructure for modern businesses
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700"
              >
                <div className="text-3xl font-bold text-purple-400 mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm mb-2">{stat.label}</div>
                <div className="text-green-400 text-sm">{stat.growth}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <AnimatePresence>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                    onMouseEnter={() => setActiveFeature(index)}
                    onMouseLeave={() => setActiveFeature(null)}
                  >
                    <div className={`rounded-xl p-6 bg-slate-800/50 border border-slate-700 backdrop-blur-sm
                      transition-all duration-300 ${activeFeature === index ? 'shadow-xl shadow-purple-500/20' : ''}`}>
                      <div className="flex items-start gap-4">
                        <motion.div
                          animate={{ rotate: activeFeature === index ? 360 : 0 }}
                          className={`p-3 rounded-lg bg-gradient-to-r ${feature.color}`}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                          <p className="text-gray-400 mb-4">{feature.description}</p>
                          
                          <div className="grid grid-cols-3 gap-4 mb-4">
                            {Object.entries(feature.stats).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-purple-400 font-bold">{value}</div>
                                <div className="text-xs text-gray-500 capitalize">{key}</div>
                              </div>
                            ))}
                          </div>

                          <div className="space-y-2">
                            {feature.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-400" />
                                <span className="text-gray-400 text-sm">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <ChevronRight className={`w-5 h-5 text-purple-400 transform transition-all duration-300
                          ${activeFeature === index ? 'translate-x-1 opacity-100' : 'opacity-50'}`} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="sticky top-8 rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700 p-8">
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <div className="text-sm text-gray-400">Total Amount</div>
                    <div className="text-2xl font-bold">$499.99</div>
                  </div>
                  <div className="flex gap-2">
                    <img src="/api/placeholder/40/24" alt="visa" className="h-6 rounded" />
                    <img src="/api/placeholder/40/24" alt="mastercard" className="h-6 rounded" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full bg-slate-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                    />
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full bg-slate-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${demoSteps[demoStep].progress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="mt-2 text-sm text-gray-400">
                      {demoSteps[demoStep].status}
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  Process Payment
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProcessPayment;