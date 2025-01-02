import React, { useState, useEffect } from "react";
import { CreditCard, Shield, Globe, Zap, DollarSign, Repeat } from "lucide-react";
import { motion } from "framer-motion";

const AboutTwo = () => {
  const [hoveringIndex, setHoveringIndex] = useState(null);
  const [dynamicText, setDynamicText] = useState("The Future of Payments");

  // Simulate AI-driven dynamic text change
  useEffect(() => {
    const textOptions = [
      "The Future of Payments",
      "Secure and Fast Transactions",
      "Global Accessibility Made Easy",
      "Innovative Payment Solutions",
    ];
    const interval = setInterval(() => {
      setDynamicText(textOptions[Math.floor(Math.random() * textOptions.length)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHoveringIndex(Math.floor(Math.random() * features.length));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const gradientColors = [
    "from-purple-500 to-purple-600",
    "from-blue-500 to-blue-600",
    "from-green-500 to-green-600",
    "from-pink-500 to-pink-600",
    "from-orange-500 to-orange-600",
    "from-indigo-500 to-indigo-600",
  ];

  const features = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Easy Payments",
      description: "Make transactions effortlessly with our intuitive payment interface.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Transactions",
      description: "Enjoy peace of mind with end-to-end encryption safeguarding your payments.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Accessibility",
      description: "Send and receive payments across borders with ease and reliability.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Processing",
      description: "Experience lightning-fast payment processing, ensuring no delays.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Efficiency",
      description: "Save money with competitive transaction fees tailored to your needs.",
    },
    {
      icon: <Repeat className="w-6 h-6" />,
      title: "Recurring Payments",
      description: "Set up and manage subscriptions effortlessly with automated billing.",
    },
  ];

  return (
    <div className="relative bg-black py-24">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-300 font-medium text-sm tracking-wider uppercase">Why Choose Us</span>
          <motion.h2
            className="text-white mt-4 sm:text-4xl text-3xl font-bold"
            animate={{ opacity: [0, 1], y: [-20, 0] }}
            transition={{ duration: 1 }}
          >
            {dynamicText}
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-md:max-w-lg mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`relative group ${
                index === hoveringIndex
                  ? `bg-gradient-to-r ${gradientColors[index % gradientColors.length]} rounded-xl`
                  : ""
              }`}
              onMouseEnter={() => setHoveringIndex(index)}
              onMouseLeave={() => setHoveringIndex(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${gradientColors[index % gradientColors.length]} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative rounded-xl p-8 bg-white/10 backdrop-blur-sm text-center group-hover:bg-white/0 transition-all duration-300">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/20 text-purple-300 group-hover:bg-white group-hover:text-purple-600 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-white">
                  {feature.title}
                </h3>
                <p className="text-purple-200 group-hover:text-purple-100 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;