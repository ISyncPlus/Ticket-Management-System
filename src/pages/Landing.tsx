import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Zap, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export function Landing() {
  return (
    <motion.div 
      className="flex-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >

      <section className="relative overflow-hidden bg-[#302C42] px-6 py-16 lg:px-16 lg:py-28">
        {/* Decorative Glowing Circles */}
        <motion.div
          className="glow-circle absolute -left-20 top-20 size-64 rounded-full bg-[#8176AF] lg:size-96"
          aria-hidden="true"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div
          className="glow-circle absolute -right-20 bottom-20 size-80 rounded-full bg-[#C0B7E8] lg:size-[32rem]"
          aria-hidden="true"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>

        <div className="relative mx-auto max-w-[1440px] text-center">
          <motion.h1 
            className="mx-auto max-w-4xl bg-linear-to-r from-[#C0B7E8] to-[#8176AF] bg-clip-text text-transparent text-4xl lg:text-6xl"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to TicketWave
          </motion.h1>
          <motion.p 
            className="mx-auto mt-6 max-w-2xl text-[#B1B1B1] text-lg lg:text-xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Streamline your support workflow with our powerful, intuitive ticket
            management system. Track, manage, and resolve tickets faster than ever.
          </motion.p>
          <motion.div 
            className="mt-10 flex flex-col flex-wrap justify-center gap-4 sm:flex-row"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/signup">
              <Button size="lg" className="w-full gradient-button rounded-[1em] px-8 sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link to="/login">
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-[1em] border-[#C0B7E8]/30 bg-transparent text-[#E0E0E0] hover:bg-[#3D3654] hover:text-white sm:w-auto"
              >
                Login
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Wavy SVG Divider */}
      <svg
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,64 C320,96 640,32 960,64 C1280,96 1440,64 1440,64 L1440,0 L0,0 Z"
          fill="#3D3654"
        />
      </svg>

      {/* Features Section */}
      <section className="bg-[#302C42] px-6 py-12 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="gradient-text text-3xl lg:text-4xl">Why Choose TicketWave?</h2>
            <p className="mt-4 text-[#B1B1B1]">
              Everything you need to manage support tickets effectively
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="rounded-[1em] border-[#C0B7E8]/10 bg-[#3D3654] p-6 shadow-lg shadow-black/20 transition-transform lg:p-8 h-full">
                <motion.div 
                  className="mb-4 flex size-14 items-center justify-center rounded-[1em] bg-linear-to-br from-[#8176AF] to-[#C0B7E8]"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Zap className="size-7 text-white" />
                </motion.div>
                <h3 className="mb-3 text-[#E0E0E0]">Lightning Fast</h3>
                <p className="text-[#B1B1B1]">
                  Create, update, and resolve tickets in seconds. Our streamlined
                  interface keeps your team productive.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="rounded-[1em] border-[#C0B7E8]/10 bg-[#3D3654] p-6 shadow-lg shadow-black/20 transition-transform lg:p-8 h-full">
                <motion.div 
                  className="mb-4 flex size-14 items-center justify-center rounded-[1em] bg-linear-to-br from-[#8176AF] to-[#C0B7E8]"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Shield className="size-7 text-white" />
                </motion.div>
                <h3 className="mb-3 text-[#E0E0E0]">Secure & Reliable</h3>
                <p className="text-[#B1B1B1]">
                  Your data is protected with enterprise-grade security. Focus on
                  support, not infrastructure.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="rounded-[1em] border-[#C0B7E8]/10 bg-[#3D3654] p-6 shadow-lg shadow-black/20 transition-transform sm:col-span-2 lg:col-span-1 lg:p-8 h-full">
                <motion.div 
                  className="mb-4 flex size-14 items-center justify-center rounded-[1em] bg-linear-to-br from-[#8176AF] to-[#C0B7E8]"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Users className="size-7 text-white" />
                </motion.div>
                <h3 className="mb-3 text-[#E0E0E0]">Team Collaboration</h3>
                <p className="text-[#B1B1B1]">
                  Work together seamlessly. Assign tickets, track progress, and keep
                  everyone in sync.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
