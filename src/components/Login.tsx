import React, { useState } from 'react';
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
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      if (isLogin) {
        // Sign in
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in');
      } else {
        // Sign up
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateProfile(user, { displayName: name });
        console.log('User created');
      }
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error: any) {
      setError(error.message);
      console.error('Error:', error);
    }
  };

  return (
    <div className="w-full bg-white flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xl mx-auto bg-gradient-to-br from-amber-100 via-indigo-100 to-sky-600 p-6 rounded-lg mt-8 mb-8 shadow-lg">
        <div className="text-center mb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="mx-auto h-12 w-12 bg-black rounded-full flex items-center justify-center"
          >
            <CreditCard className="h-6 w-6 text-white" />
          </motion.div>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-3 text-2xl font-extrabold text-gray-800"
          >
            {isLogin ? 'Welcome back' : 'Create account'}
          </motion.h2>
          <p className="mt-1 text-sm text-gray-700">
            {isLogin ? 'Sign in to your account' : 'Begin your payment journey'}
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {!isLogin && (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 block w-full h-10 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:shadow-outline bg-white"
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
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 block w-full h-10 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:shadow-outline bg-white"
                placeholder="you@example.com"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 block w-full h-10 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:shadow-outline bg-white"
                placeholder="••••••••"
              />
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="mt-4 group relative w-full flex justify-center py-2 px-4 rounded-lg text-white bg-gradient-to-l from-cyan-700 via-gray-800 to-zinc-800 hover:bg-gradient-to-l hover:to-indigo-700 focus:outline-none"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <Sparkles className="h-5 w-5 text-indigo-300 group-hover:text-indigo-400" />
            </span>
            <span className="text-base font-medium">
              {isLogin ? 'Sign in' : 'Create account'}
            </span>
            <ChevronRight className="ml-2 h-5 w-5" />
          </motion.button>

          <div className="text-center pt-3">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-black hover:text-indigo-500 rounded-full focus:outline-none"
            >
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPages;