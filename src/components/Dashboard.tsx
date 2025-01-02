import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { 
  CreditCard, 
  FileText, 
  Send, 
  ShoppingCart, 
  DollarSign, 
  Sparkles,
  Activity
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cards = [
    {
      title: "Create Invoice",
      description: "Generate a new invoice for your clients with smart AI assistance.",
      icon: FileText,
      link: "/CreateInvoice", // Updated route path
      color: "from-blue-400 to-blue-600",
      highlightColor: "group-hover:text-blue-500"
    },
    {
      title: "Send Payment Link",
      description: "Generate and send secure payment links with automated tracking.",
      icon: Send,
      link: "/send-payment-link",
      color: "from-green-400 to-green-600",
      highlightColor: "group-hover:text-green-500"
    },
    {
      title: "Update Banking Details",
      description: "Securely manage your banking information with encryption.",
      icon: CreditCard,
      link: "/update-banking-details",
      color: "from-purple-400 to-purple-600",
      highlightColor: "group-hover:text-purple-500"
    },
    {
      title: "Make Payment Request",
      description: "Create smart payment requests with automatic reminders.",
      icon: DollarSign,
      link: "/make-payment-request",
      color: "from-yellow-400 to-yellow-600",
      highlightColor: "group-hover:text-yellow-500"
    },
    {
      title: "Make Payment Order",
      description: "Set up automated payment orders with AI-powered scheduling.",
      icon: ShoppingCart,
      link: "/make-payment-order",
      color: "from-red-400 to-red-600",
      highlightColor: "group-hover:text-red-500"
    }
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden mt-10 bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),rgba(76,29,149,0))]" />
        <div 
          className="absolute blur-3xl rounded-full w-96 h-96 bg-purple-500/20 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <Activity className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              AI Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">{user ? `Welcome to PayFlows, ${user.displayName}` : 'Welcome to PayFlows'}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="relative h-full bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 transition-all duration-300 border border-gray-700/50 hover:border-purple-500/50 overflow-hidden">
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Sparkle effects */}
                  <div className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                  </div>

                  <div className="relative">
                    <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r ${card.color} transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h2 className="text-xl font-semibold text-white mb-3 group-hover:translate-x-1 transition-transform">
                      {card.title}
                    </h2>
                    
                    <p className="text-gray-400 mb-6 text-sm">
                      {card.description}
                    </p>

                    <button
                      onClick={() => navigate(card.link)}
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors gap-2"
                    >
                      <span>Go to {card.title}</span>
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;