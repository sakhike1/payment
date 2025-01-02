import { useState, useEffect, useRef } from 'react';
import { ChevronRight, DollarSign, Clock, Users, PieChart, ArrowRight, BarChart, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const InvoiceManagement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  const features = [
    {
      title: "Smart Invoice Generation",
      description: "AI-powered invoice creation with smart data extraction and template matching.",
      icon: DollarSign,
      color: "from-blue-600 to-cyan-500",
      metrics: { speed: "90% faster", accuracy: "99.9%", savings: "$2.5K/mo" }
    },
    {
      title: "Intelligent Payment Tracking",
      description: "Real-time payment monitoring with predictive due date analysis.",
      icon: Clock,
      color: "from-purple-600 to-pink-500",
      metrics: { recovery: "85%", time: "-65%", automated: "95%" }
    },
    {
      title: "Team Collaboration Hub",
      description: "Streamlined workflow with role-based access and audit trails.",
      icon: Users,
      color: "from-emerald-600 to-teal-500",
      metrics: { teams: "unlimited", users: "50K+", tasks: "1M+" }
    },
    {
      title: "Advanced Analytics",
      description: "Custom reporting with AI-driven insights and cash flow predictions.",
      icon: PieChart,
      color: "from-orange-600 to-amber-500",
      metrics: { insights: "real-time", growth: "+45%", roi: "3.2x" }
    }
  ];

  const stats = [
    { value: "2M+", label: "Invoices Processed" },
    { value: "$500M", label: "Payment Volume" },
    { value: "15K+", label: "Active Users" },
    { value: "99.9%", label: "Accuracy Rate" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const element = containerRef.current;
      if (element) {
        const scrolled = window.scrollY;
        const maxScroll = element.offsetHeight - window.innerHeight;
        setScrollProgress(Math.min((scrolled / maxScroll) * 100, 100));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Intelligent
            </span>
            <span className="text-white"> Invoicing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your financial operations with AI-powered automation
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700"
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
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
                    whileHover={{ scale: 1.02 }}
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
                          
                          <div className="grid grid-cols-3 gap-4">
                            {Object.entries(feature.metrics).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-purple-400 font-bold">{value}</div>
                                <div className="text-xs text-gray-500 capitalize">{key}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <motion.div
                          animate={{ x: activeFeature === index ? 5 : 0 }}
                          className="text-purple-400"
                        >
                          <ArrowRight className="h-5 w-5" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8"
            >
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                <span className="relative z-10">Start Free Trial</span>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-purple-600"
                />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700"
          >
            <div className="absolute top-4 left-4 flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            
            <div className="p-8 pt-16">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <BarChart className="h-6 w-6 text-purple-400 mb-2" />
                  <div className="text-sm text-gray-400">Monthly Revenue</div>
                  <div className="text-2xl font-bold text-white">$124,500</div>
                  <div className="text-sm text-green-400">+12.5%</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <CheckCircle className="h-6 w-6 text-purple-400 mb-2" />
                  <div className="text-sm text-gray-400">Paid Invoices</div>
                  <div className="text-2xl font-bold text-white">1,240</div>
                  <div className="text-sm text-green-400">98.5%</div>
                </div>
              </div>

              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-slate-700/30 h-16 rounded-lg animate-pulse" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceManagement;