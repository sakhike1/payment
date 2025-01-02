import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Lock, Mail, User, ChevronRight, Sparkles } from 'lucide-react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

const AuthPages: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [colorIndex, setColorIndex] = useState(0);
  const navigate = useNavigate();

  // Darker, more sophisticated color combinations
  const gradients = [
    ['from-slate-900 via-purple-900 to-slate-900', 'bg-purple-900', 'bg-slate-900', 'bg-slate-800'],
    ['from-gray-900 via-blue-900 to-gray-900', 'bg-blue-900', 'bg-gray-900', 'bg-gray-800'],
    ['from-zinc-900 via-indigo-900 to-zinc-900', 'bg-indigo-900', 'bg-zinc-900', 'bg-zinc-800'],
    ['from-neutral-900 via-violet-900 to-neutral-900', 'bg-violet-900', 'bg-neutral-900', 'bg-neutral-800']
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % gradients.length);
    }, 7000); // Slightly slower transition for a more elegant feel
    return () => clearInterval(interval);
  }, []);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const getCustomErrorMessage = (errorCode) => {
    const errorMessages = {
      'auth/user-not-found': 'User not found. Please check your email and password.',
      'auth/wrong-password': 'Incorrect password. Please try again.',
      'auth/email-already-in-use': 'This email is already in use. Please try another email.',
      'auth/invalid-email': 'Invalid email format. Please enter a valid email address.',
      'auth/weak-password': 'Password is too weak. Please enter a stronger password.',
      default: 'Please check your details and try again'
    };
    return errorMessages[errorCode] || errorMessages.default;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email format.');
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        if (!name) {
          setError('Full name is required for sign up.');
          return;
        }
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name });
      }
      navigate('/dashboard');
    } catch (error: any) {
      setError(getCustomErrorMessage(error.code));
    }
  };

  const inputClassName = "pl-10 block w-full h-12 text-base rounded-lg bg-gray-900 bg-opacity-50 text-gray-100 placeholder-gray-500 transition-all outline-none border-none input-no-border";

  return (
    <div className={`w-full min-h-screen bg-gradient-to-br ${gradients[colorIndex][0]} flex items-center justify-center relative overflow-hidden transition-colors mt-10 duration-1000`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }} 
            transition={{ duration: 10, repeat: Infinity }}
            className={`absolute top-1/4 left-1/4 w-96 h-96 ${gradients[colorIndex][1]} rounded-full mix-blend-multiply filter blur-3xl opacity-50 transition-colors duration-1000`} 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [90, 180, 90]
            }} 
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            className={`absolute top-1/3 right-1/4 w-96 h-96 ${gradients[colorIndex][2]} rounded-full mix-blend-multiply filter blur-3xl opacity-50 transition-colors duration-1000`} 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [180, 270, 180]
            }} 
            transition={{ duration: 10, repeat: Infinity, delay: 4 }}
            className={`absolute bottom-1/4 left-1/3 w-96 h-96 ${gradients[colorIndex][3]} rounded-full mix-blend-multiply filter blur-3xl opacity-50 transition-colors duration-1000`} 
          />
        </div>
      </div>

      {/* Glass card container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-xl mx-4 bg-gray-900 bg-opacity-20 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-800"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="mx-auto h-16 w-16 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl flex items-center justify-center shadow-lg"
          >
            <CreditCard className="h-8 w-8 text-gray-300" />
          </motion.div>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-6 text-3xl font-bold text-gray-100"
          >
            {isLogin ? 'Welcome back' : 'Create account'}
          </motion.h2>
          <p className="mt-2 text-gray-400">
            {isLogin ? 'Sign in to your account' : 'Begin your payment journey'}
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-900 bg-opacity-10 backdrop-blur-lg rounded-lg p-3 border border-red-800"
            >
              <p className="text-red-400 text-sm">{error}</p>
            </motion.div>
          )}

          {!isLogin && (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <label className="block text-sm font-medium text-gray-300">
                Full Name
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClassName}
                  placeholder="John Doe"
                />
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <label className="block text-sm font-medium text-gray-300">
              Email address
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClassName}
                placeholder="you@example.com"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClassName}
                placeholder="••••••••"
              />
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="mt-6 group relative w-full flex justify-center py-3 px-4 rounded-lg text-gray-100 bg-gray-800 bg-opacity-50 hover:bg-opacity-70 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-0"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <Sparkles className="h-5 w-5 text-gray-400" />
            </span>
            <span className="text-base font-medium">
              {isLogin ? 'Sign in' : 'Create account'}
            </span>
            <ChevronRight className="ml-2 h-5 w-5" />
          </motion.button>

          <div className="text-center pt-4 btn-no-border">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-gray-800 hover:text-gray-500 duration-200 btn-no-border inset-y-0 focus:outline-none focus:ring-0"
            >
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AuthPages;