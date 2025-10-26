import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { FormInput } from '../components/common/FormInput';
import { useTicketStore } from '../store/useTicketStore';
import { toast } from 'sonner';
import { Ticket } from 'lucide-react';
import { motion } from 'framer-motion';

export function Login() {
  const navigate = useNavigate();
  const login = useTicketStore((state) => state.login);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateForm = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the form errors');
      return;
    }

  const ok = login(formData.email, formData.password);
    if (!ok) {
      toast.error('Invalid email or password');
      return;
    }
    toast.success('Successfully logged in!');
    navigate('/dashboard');
  };

  return (
    <motion.div 
      className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-[#302C42] px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Illustration/Gradient */}
          <motion.div 
            className="relative hidden overflow-hidden rounded-[1em] bg-linear-to-br from-[#8176AF] to-[#C0B7E8] p-12 lg:flex lg:flex-col lg:justify-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="glow-circle absolute -right-20 -top-20 size-64 rounded-full bg-white"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.div 
              className="glow-circle absolute -bottom-20 -left-20 size-80 rounded-full bg-[#302C42]"
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.4, 0.3]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            
            <motion.div 
              className="relative"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="mb-6 flex size-16 items-center justify-center rounded-[1em] bg-white/20 backdrop-blur-sm"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Ticket className="size-10 text-white" />
              </motion.div>
              <h2 className="mb-4 text-4xl text-white">
                Welcome Back to TicketWave
              </h2>
              <p className="text-lg text-white/90">
                Sign in to access your ticket management dashboard and streamline your
                support workflow.
              </p>
              <div className="mt-8 space-y-2 text-white/80">
                <p>✓ Manage unlimited tickets</p>
                <p>✓ Real-time collaboration</p>
                <p>✓ Advanced analytics</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          <Card className="rounded-[1em] border-[#C0B7E8]/10 bg-[#3D3654] p-6 shadow-lg shadow-black/20 sm:p-8">
            <div className="mb-6 text-center sm:mb-8">
              <h1 className="gradient-text text-3xl">Log In</h1>
              <p className="mt-2 text-[#B1B1B1]">
                Enter your credentials to continue
              </p>
              <p className="mt-3 text-sm text-[#B1B1B1]">
                Test credentials: demo@user.com / password123
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-4">
                <FormInput
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  error={errors.email}
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                />

                <FormInput
                  label="Password"
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  error={errors.password}
                  placeholder="Enter your password"
                  required
                  autoComplete="current-password"
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="mt-6 w-full gradient-button rounded-[1em]"
                >
                  Log In
                </Button>
              </motion.div>
            </form>

            <p className="mt-6 text-center text-[#B1B1B1]">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#C0B7E8] hover:underline">
                Sign up
              </Link>
            </p>
          </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
