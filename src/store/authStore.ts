import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AuthState, User } from '../types';

// NOTE: This is a mock authentication system for demonstration purposes only.
// SECURITY WARNING: In a production application:
// 1. NEVER store passwords in localStorage or client-side storage
// 2. Use secure authentication with a backend API
// 3. Hash passwords server-side using bcrypt or similar
// 4. Use JWT tokens or session cookies for authentication
// 5. Implement proper security measures like HTTPS, CSRF protection, etc.

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (email: string, password: string) => {
        // Simple mock authentication - FOR DEMO PURPOSES ONLY
        // In a real app, this would call a secure backend API
        const mockUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const user = mockUsers.find(
          (u: User & { password: string }) => u.email === email && u.password === password
        );
        
        if (user) {
          set({ user: { id: user.id, email: user.email, name: user.name }, isAuthenticated: true });
          return true;
        }
        return false;
      },
      signup: (email: string, password: string, name: string) => {
        // Simple mock signup - FOR DEMO PURPOSES ONLY
        const mockUsers = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Check if user already exists
        if (mockUsers.some((u: User & { password: string }) => u.email === email)) {
          return false;
        }
        
        // WARNING: Storing plain text passwords - FOR DEMO ONLY
        const newUser = {
          id: Date.now().toString(),
          email,
          password, // In production: NEVER store plain text passwords
          name,
        };
        
        mockUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(mockUsers));
        
        set({ 
          user: { id: newUser.id, email: newUser.email, name: newUser.name }, 
          isAuthenticated: true 
        });
        return true;
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
);
