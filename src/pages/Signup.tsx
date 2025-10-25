import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { FormInput } from '../components/common/FormInput';
import { useTicketStore } from '../store/useTicketStore';
import { toast } from 'sonner';
import { Ticket } from 'lucide-react';

export function Signup() {
  const navigate = useNavigate();
  const signup = useTicketStore((state) => state.signup);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateForm = () => {
    const newErrors = { name: '', email: '', password: '', confirmPassword: '' };
    let isValid = true;

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

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

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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

    signup(formData.email, formData.password, formData.name);
    toast.success('Account created successfully!');
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-[#302C42] px-6 py-12">
      <div className="w-full max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Illustration/Gradient */}
          <div className="relative hidden overflow-hidden rounded-[1em] bg-linear-to-br from-[#C0B7E8] to-[#8176AF] p-12 lg:flex lg:flex-col lg:justify-center">
            <div className="glow-circle absolute -left-20 -top-20 size-64 rounded-full bg-white"></div>
            <div className="glow-circle absolute -bottom-20 -right-20 size-80 rounded-full bg-[#302C42]"></div>
            
            <div className="relative">
              <div className="mb-6 flex size-16 items-center justify-center rounded-[1em] bg-white/20 backdrop-blur-sm">
                <Ticket className="size-10 text-white" />
              </div>
              <h2 className="mb-4 text-4xl text-white">
                Join TicketWave Today
              </h2>
              <p className="text-lg text-white/90">
                Create your account and start managing your support tickets with ease.
                Everything you need in one powerful platform.
              </p>
              <div className="mt-8 space-y-2 text-white/80">
                <p>✓ Free forever plan</p>
                <p>✓ No credit card required</p>
                <p>✓ Setup in under 2 minutes</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <Card className="rounded-[1em] border-[#C0B7E8]/10 bg-[#3D3654] p-6 shadow-lg shadow-black/20 sm:p-8">
            <div className="mb-6 text-center sm:mb-8">
              <h1 className="gradient-text text-3xl">Create Account</h1>
              <p className="mt-2 text-[#B1B1B1]">
                Sign up to start managing your tickets
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-4">
                <FormInput
                  label="Full Name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  error={errors.name}
                  placeholder="John Doe"
                  required
                  autoComplete="name"
                />

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
                  placeholder="At least 6 characters"
                  required
                  autoComplete="new-password"
                />

                <FormInput
                  label="Confirm Password"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({ ...formData, confirmPassword: e.target.value })
                  }
                  error={errors.confirmPassword}
                  placeholder="Re-enter your password"
                  required
                  autoComplete="new-password"
                />
              </div>

              <Button
                type="submit"
                className="mt-6 w-full gradient-button rounded-[1em]"
              >
                Sign Up
              </Button>
            </form>

            <p className="mt-6 text-center text-[#B1B1B1]">
              Already have an account?{' '}
              <Link to="/login" className="text-[#C0B7E8] hover:underline">
                Log in
              </Link>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
