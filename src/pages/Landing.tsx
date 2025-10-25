import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Zap, Shield, Users } from 'lucide-react';

export function Landing() {
  return (
    <div className="flex-1">

      <section className="relative overflow-hidden bg-[#302C42] px-6 py-16 lg:px-16 lg:py-28">
        {/* Decorative Glowing Circles */}
        <div
          className="glow-circle absolute -left-20 top-20 size-64 rounded-full bg-[#8176AF] lg:size-96"
          aria-hidden="true"
        ></div>
        <div
          className="glow-circle absolute -right-20 bottom-20 size-80 rounded-full bg-[#C0B7E8] lg:size-[32rem]"
          aria-hidden="true"
        ></div>

        <div className="relative mx-auto max-w-[1440px] text-center">
          <h1 className="mx-auto max-w-4xl bg-gradient-to-r from-[#C0B7E8] to-[#8176AF] bg-clip-text text-transparent text-4xl lg:text-6xl">
            Welcome to TicketWave
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[#B1B1B1] text-lg lg:text-xl">
            Streamline your support workflow with our powerful, intuitive ticket
            management system. Track, manage, and resolve tickets faster than ever.
          </p>
          <div className="mt-10 flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
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
          </div>
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
          <div className="mb-12 text-center">
            <h2 className="gradient-text text-3xl lg:text-4xl">Why Choose TicketWave?</h2>
            <p className="mt-4 text-[#B1B1B1]">
              Everything you need to manage support tickets effectively
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <Card className="rounded-[1em] border-[#C0B7E8]/10 bg-[#3D3654] p-6 shadow-lg shadow-black/20 transition-transform hover:scale-105 lg:p-8">
              <div className="mb-4 flex size-14 items-center justify-center rounded-[1em] bg-gradient-to-br from-[#8176AF] to-[#C0B7E8]">
                <Zap className="size-7 text-white" />
              </div>
              <h3 className="mb-3 text-[#E0E0E0]">Lightning Fast</h3>
              <p className="text-[#B1B1B1]">
                Create, update, and resolve tickets in seconds. Our streamlined
                interface keeps your team productive.
              </p>
            </Card>

            <Card className="rounded-[1em] border-[#C0B7E8]/10 bg-[#3D3654] p-6 shadow-lg shadow-black/20 transition-transform hover:scale-105 lg:p-8">
              <div className="mb-4 flex size-14 items-center justify-center rounded-[1em] bg-gradient-to-br from-[#8176AF] to-[#C0B7E8]">
                <Shield className="size-7 text-white" />
              </div>
              <h3 className="mb-3 text-[#E0E0E0]">Secure & Reliable</h3>
              <p className="text-[#B1B1B1]">
                Your data is protected with enterprise-grade security. Focus on
                support, not infrastructure.
              </p>
            </Card>

            <Card className="rounded-[1em] border-[#C0B7E8]/10 bg-[#3D3654] p-6 shadow-lg shadow-black/20 transition-transform hover:scale-105 sm:col-span-2 lg:col-span-1 lg:p-8">
              <div className="mb-4 flex size-14 items-center justify-center rounded-[1em] bg-gradient-to-br from-[#8176AF] to-[#C0B7E8]">
                <Users className="size-7 text-white" />
              </div>
              <h3 className="mb-3 text-[#E0E0E0]">Team Collaboration</h3>
              <p className="text-[#B1B1B1]">
                Work together seamlessly. Assign tickets, track progress, and keep
                everyone in sync.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
