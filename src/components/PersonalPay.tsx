import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ShieldCheck, Clock, Users, ArrowRight, Wallet } from 'lucide-react';
import PaymentMethods from './PaymentMethods';

const PersonalPaymentInfo = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Send,
      color: 'blue',
      title: 'Instant Transfers',
      description: 'Send money instantly to friends and family using just their email or phone number. Money arrives in seconds.',
    },
    {
      icon: ShieldCheck,
      color: 'green',
      title: 'Secure & Protected',
      description: 'Your transactions are protected with bank-level encryption and 24/7 fraud monitoring for peace of mind.',
    },
    {
      icon: Users,
      color: 'purple',
      title: 'Split Expenses Easily',
      description: 'Split rent, utilities, dinner bills, or group gifts. Keep track of shared expenses without awkwardness.',
    },
    {
      icon: Clock,
      color: 'orange',
      title: 'Quick Setup',
      description: 'Link your bank account or debit card once and send money in seconds whenever you need to.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full max-w-5xl mx-auto p-6"
    >
      {/* Hero Section */}
      <motion.div 
        className="text-center mb-12"
        variants={itemVariants}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block p-2 bg-blue-50 rounded-full mb-4"
        >
          <Wallet className="h-8 w-8 text-blue-600" />
        </motion.div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Personal Payments, Simplified
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Experience the future of personal payments - quick, secure, and completely fee-free
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div 
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setHoveredFeature(index)}
            onHoverEnd={() => setHoveredFeature(null)}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <motion.div
                className={`bg-${feature.color}-100 p-4 rounded-lg`}
                animate={{
                  rotate: hoveredFeature === index ? 360 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        variants={itemVariants}
        className="mt-12 text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 mx-auto hover:shadow-lg transition-shadow"
        >
          <span>Start Sending Money</span>
          <ArrowRight className="h-5 w-5" />
        </motion.button>
      </motion.div>

      {/* Payment Methods Section */}
      <PaymentMethods />

      {/* Security Notice */}
      <motion.div
        variants={itemVariants}
        className="mt-8 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-yellow-300 via-sky-200 to-orange-100 p-6 rounded-xl border border-blue-100"
      >
        <div className="flex items-center space-x-3">
          <ShieldCheck className="h-6 w-6 text-blue-600" />
          <p className="text-blue-800">
            Your security is our priority. All transactions are protected with enterprise-grade encryption.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PersonalPaymentInfo;