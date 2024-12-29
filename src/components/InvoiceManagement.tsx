import { useState, useEffect } from 'react';
import { ChevronRight, DollarSign, Clock, Users, PieChart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import invoice from '../assets/invoice.jpg';

const InvoiceManagement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [hoverCount, setHoverCount] = useState(0);
  const [cardStyles, setCardStyles] = useState<{ backgroundColor: string; x: number; y: number }[]>([]);

  useEffect(() => {
    setIsVisible(true);

    // Auto-rotate feature highlights
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev === null || prev === 3 ? 0 : prev + 1));

      // Update card styles with random positions and predefined colors
      const colors = ['#A0D1FB', '#FBC1CC', '#B4F8C8', '#FFD580'];
      setCardStyles((prevStyles) =>
        prevStyles.map((style, index) => ({
          ...style,
          backgroundColor: colors[index % colors.length],
          x: Math.random() * 20 - 10,
          y: Math.random() * 20 - 10,
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Automated Invoice Generation",
      description: "Generate and deliver professional invoices automatically, saving time and reducing errors.",
      icon: DollarSign,
      color: "from-blue-500 to-cyan-500",
      hoverColor: "#E0F2FE" // Custom hover color
    },
    {
      title: "Payment Tracking",
      description: "Monitor payment status and get instant notifications for overdue invoices.",
      icon: Clock,
      color: "from-purple-500 to-pink-500",
      hoverColor: "#F3E8FF" // Custom hover color
    },
    {
      title: "Team Collaboration",
      description: "Work seamlessly with your team members for improved financial workflow management.",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      hoverColor: "#ECFDF5" // Custom hover color
    },
    {
      title: "Analytics & Reporting",
      description: "Access detailed financial reports and cash flow insights to make informed decisions.",
      icon: PieChart,
      color: "from-orange-500 to-amber-500",
      hoverColor: "#FFFBEB" // Custom hover color
    },
  ];

  useEffect(() => {
    // Initialize card styles with predefined colors
    const colors = ['#A0D1FB', '#FBC1CC', '#B4F8C8', '#FFD580'];
    setCardStyles(
      features.map((_, index) => ({
        backgroundColor: colors[index % colors.length],
        x: 0,
        y: 0,
      }))
    );
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 sm:p-8">
      <div
        className={`w-full max-w-7xl bg-white rounded-2xl shadow-2xl transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="p-6 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Smart Invoice
                  </span>
                  <br />
                  <span className="text-gray-800">Management</span>
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Transform your financial operations with our AI-powered invoice management solution. Streamline processes and boost efficiency.
                </p>
              </div>

              <div className="space-y-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  const cardStyle = cardStyles[index] || {};
                  return (
                    <motion.div
                      key={index}
                      className={`transform transition-all duration-500 delay-${index * 100}`}
                      onMouseEnter={() => {
                        setActiveFeature(index);
                        setHoverCount((prev) => prev + 1);
                      }}
                      onMouseLeave={() => setActiveFeature(null)}
                      style={{ x: cardStyle.x, y: cardStyle.y, backgroundColor: cardStyle.backgroundColor }}
                      animate={{ x: cardStyle.x, y: cardStyle.y, backgroundColor: cardStyle.backgroundColor }}
                      transition={{ duration: 0.5 }}
                    >
                      <div
                        className={`rounded-xl p-4 transition-all duration-300 cursor-pointer ${
                          activeFeature === index ? 'rounded-md shadow-lg scale-[1.02]' : ''
                        }`}
                        style={{
                          backgroundColor: activeFeature === index ? feature.hoverColor : cardStyle.backgroundColor
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-3 rounded-md bg-gradient-to-r ${feature.color} transform transition-all duration-300 ${
                              activeFeature === index ? 'scale-110' : ''
                            }`}
                          >
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-xl text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                          </div>
                          <ArrowRight
                            className={`h-5 w-5 text-gray-400 transform transition-all duration-300 ${
                              activeFeature === index ? 'translate-x-1 opacity-100' : 'opacity-0'
                            }`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="flex gap-4 items-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                  Get Started
                  <ChevronRight className="inline-block ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Column - Preview Area */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-0" />

              {/* Placeholder for invoice preview - replace src with actual image */}
              <img
                src={invoice}
                alt="Invoice Management Dashboard"
                className="w-full h-full object-cover rounded-2xl transform transition-all duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
              />

              {/* Floating Features */}
              <div
                className="absolute inset-x-6 bottom-6 bg-white/90 backdrop-blur-sm rounded-xl p-6 transform 
                transition-all duration-500 group-hover:translate-y-0 translate-y-4 opacity-90 group-hover:opacity-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Real-time Dashboard</h4>
                    <p className="text-gray-600">Monitor your business performance at a glance</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="h-2 w-2 rounded-full bg-purple-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceManagement;