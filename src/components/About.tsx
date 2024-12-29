import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, Zap, Users } from 'lucide-react';
import payment from '../assets/pay.jpg';
import "aos/dist/aos.css";
import AOS from "aos";

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </motion.div>
);

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-grade encryption and security protocols to protect your data"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Send money to anyone, anywhere in the world instantly"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Complete transactions in seconds, not days"
    },
    {
      icon: Users,
      title: "User Friendly",
      description: "Intuitive interface designed for everyone"
    }
  ];

  return (
    <div className="font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="min-h-[800px] mt-10 relative bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* AI-inspired background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-200/20 rounded-full"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[650px] relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-lg:order-1 max-lg:text-center z-10"
            >
              <h2 className="lg:text-6xl text-4xl text-gray-900 font-bold lg:!leading-[1.2] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Seamless and Secure Payments, Anytime
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Experience hassle-free transactions with our next-generation payment platform. 
                Powered by advanced AI technology for maximum security and efficiency.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-12 py-4 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl" />
              <img
                src={payment}
                className="w-full h-auto object-contain relative z-10 rounded-3xl shadow-2xl"
                alt="Payment Experience"
              />
            </motion.div>
          </div>
        </div>
      </div>

      
      
    </div>
  );
};

export default About;