import { Link, useLocation } from 'react-router-dom';
import { Ticket, LogOut, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { useTicketStore } from '../../store/useTicketStore';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const location = useLocation();
  const { isAuthenticated, user, logout } = useTicketStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <motion.header 
      className="border-b border-[#C0B7E8]/10 sticky top-0 z-50 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-[1440px] px-6 py-8">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          <Link to="/" className="flex items-center gap-2">
            <motion.div 
              className="flex size-10 items-center justify-center rounded-lg bg-linear-to-r from-[#8176AF] to-[#C0B7E8]"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Ticket className="size-6 text-white" />
            </motion.div>
            <span className="gradient-text text-xl">TicketWave</span>
          </Link>

          {/* Mobile menu button */}
          {/* eslint-disable-next-line jsx-a11y/aria-proptypes */}
          <button
            className="lg:hidden text-[#E0E0E0]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex">
            {isAuthenticated ? (
              <>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/dashboard"
                  className={`transition-colors ${
                    isActive('/dashboard')
                      ? 'text-[#C0B7E8]'
                      : 'text-[#E0E0E0] hover:text-[#C0B7E8]'
                  }`}
                >
                  Dashboard
                </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/tickets"
                  className={`transition-colors ${
                    isActive('/tickets')
                      ? 'text-[#C0B7E8]'
                      : 'text-[#E0E0E0] hover:text-[#C0B7E8]'
                  }`}
                >
                  Tickets
                </Link>
                </motion.div>
                <div className="flex items-center gap-3 border-l border-[#C0B7E8]/20 pl-6">
                  <span className="text-[#B1B1B1]">{user?.name}</span>
                  <motion.div whileHover={{ scale: 1.1, rotate: 15 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={logout}
                    aria-label="Log out"
                    className="hover:bg-[#3D3654]"
                  >
                    <LogOut className="size-5" />
                  </Button>
                  </motion.div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" className="hover:bg-[#3D3654] text-[#E0E0E0]">
                    Login
                  </Button>
                  </motion.div>
                </Link>
                <Link to="/signup">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="gradient-button rounded-[1em]">
                    Get Started
                  </Button>
                  </motion.div>
                </Link>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mt-4 border-t border-[#C0B7E8]/10 pt-4 lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isAuthenticated ? (
              <div className="flex flex-col gap-4">
                <Link
                  to="/dashboard"
                  onClick={closeMobileMenu}
                  className={`block rounded-[1em] px-4 py-2 transition-colors ${
                    isActive('/dashboard')
                      ? 'bg-[#3D3654] text-[#C0B7E8]'
                      : 'text-[#E0E0E0] hover:bg-[#3D3654]'
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/tickets"
                  onClick={closeMobileMenu}
                  className={`block rounded-[1em] px-4 py-2 transition-colors ${
                    isActive('/tickets')
                      ? 'bg-[#3D3654] text-[#C0B7E8]'
                      : 'text-[#E0E0E0] hover:bg-[#3D3654]'
                  }`}
                >
                  Tickets
                </Link>
                <div className="flex items-center justify-between border-t border-[#C0B7E8]/10 pt-4">
                  <span className="text-[#B1B1B1]">{user?.name}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      logout();
                      closeMobileMenu();
                    }}
                    className="gap-2 hover:bg-[#3D3654]"
                  >
                    <LogOut className="size-4" />
                    Log Out
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <Link to="/login" onClick={closeMobileMenu}>
                  <Button variant="ghost" className="w-full hover:bg-[#3D3654]">
                    Login
                  </Button>
                </Link>
                <Link to="/signup" onClick={closeMobileMenu}>
                  <Button className="w-full gradient-button rounded-[1em]">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}