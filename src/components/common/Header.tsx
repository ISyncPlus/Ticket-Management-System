import { Link, useLocation } from 'react-router-dom';
import { Ticket, LogOut, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { useTicketStore } from '../../store/useTicketStore';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const { isAuthenticated, user, logout } = useTicketStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="border-b border-[#C0B7E8]/10 bg-[#302C42] sticky top-0 z-50 backdrop-blur-sm">
      <div className="mx-auto max-w-[1440px] px-6 py-4">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
              <Ticket className="size-6 text-white" />
            </div>
            <span className="gradient-text text-xl">TicketWave</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-[#E0E0E0]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
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
                <div className="flex items-center gap-3 border-l border-[#C0B7E8]/20 pl-6">
                  <span className="text-[#B1B1B1]">{user?.name}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={logout}
                    aria-label="Log out"
                    className="hover:bg-[#3D3654]"
                  >
                    <LogOut className="size-5" />
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="hover:bg-[#3D3654] text-[#E0E0E0]">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="gradient-button rounded-[1em]">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mt-4 border-t border-[#C0B7E8]/10 pt-4 lg:hidden">
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
          </div>
        )}
      </div>
    </header>
  );
}
