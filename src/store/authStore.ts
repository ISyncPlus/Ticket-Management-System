import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AuthState, User } from '../types';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (email: string, password: string) => {
        // Simple mock authentication
        // In a real app, this would call an API
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
        // Simple mock signup
        const mockUsers = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Check if user already exists
        if (mockUsers.some((u: User & { password: string }) => u.email === email)) {
          return false;
        }
        
        const newUser = {
          id: Date.now().toString(),
          email,
          password,
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
