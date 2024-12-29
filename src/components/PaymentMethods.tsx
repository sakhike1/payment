import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Wallet, 
  Building2, 
  Smartphone,
} from 'lucide-react';
import PaymentCard from './PaymentCard';

const paymentMethods = [
  {
    icon: CreditCard,
    title: 'Credit Card',
    description: 'Visa, Mastercard, Amex',
    color: 'blue',
  },
  {
    icon: Wallet,
    title: 'Bank Account',
    description: 'Direct bank transfer',
    color: 'purple',
  },
  {
    icon: Building2,
    title: 'Wire Transfer',
    description: 'International payments',
    color: 'green',
  },
  {
    icon: Smartphone,
    title: 'Mobile Wallet',
    description: 'Apple Pay, Google Pay',
    color: 'orange',
  },
];

const PaymentMethods = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % paymentMethods.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-16 bg-gray-50 rounded-xl p-8 relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            `linear-gradient(45deg, ${paymentMethods[activeIndex].color}500 0%, ${paymentMethods[activeIndex].color}100 100%)`,
            `linear-gradient(45deg, ${paymentMethods[(activeIndex + 1) % paymentMethods.length].color}500 0%, ${paymentMethods[(activeIndex + 1) % paymentMethods.length].color}100 100%)`
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Supported Payment Methods
        </h2>
        <p className="text-gray-600 mb-8">Choose your preferred way to send and receive money</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {paymentMethods.map((method, index) => (
            <PaymentCard 
              key={index} 
              {...method} 
              isActive={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentMethods;