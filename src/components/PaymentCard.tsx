import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PaymentCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  isActive: boolean;
}

const PaymentCard: React.FC<PaymentCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  color,
  isActive 
}) => {
  return (
    <motion.div
      animate={{
        scale: isActive ? 1.05 : 1,
        borderColor: isActive ? `var(--${color}-500)` : `var(--${color}-200)`,
      }}
      whileHover={{ scale: 1.05 }}
      className={`p-6 rounded-xl shadow-md transition-all duration-500 cursor-pointer h-full
                bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-green-100 via-orange-200 to-lime-500 backdrop-blur-sm bg-opacity-90
                `}
    >
      <motion.div
        animate={{
          rotate: isActive ? 360 : 0,
          backgroundColor: isActive ? `var(--${color}-100)` : 'white',
        }}
        transition={{ duration: 0.5 }}
        className="p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4"
      >
        <Icon className="h-6 w-6 text-black" />
      </motion.div>
      <h3 className="font-semibold text-gray-800 mb-2 text-center">{title}</h3>
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </motion.div>
  );
};

export default PaymentCard;