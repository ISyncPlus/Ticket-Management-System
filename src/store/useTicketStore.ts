import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in_progress' | 'closed';
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

interface TicketState {
  tickets: Ticket[];
  user: User | null;
  isAuthenticated: boolean;
  addTicket: (ticket: Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTicket: (id: string, ticket: Partial<Ticket>) => void;
  deleteTicket: (id: string) => void;
  login: (email: string, password: string, name: string) => void;
  logout: () => void;
  signup: (email: string, password: string, name: string) => void;
}

export const useTicketStore = create<TicketState>()(
  persist(
    (set) => ({
      tickets: [
        {
          id: '1',
          title: 'Website Loading Slow',
          description: 'The homepage takes more than 5 seconds to load. Need to optimize images and scripts.',
          status: 'open',
          createdAt: '2025-10-20T10:30:00Z',
          updatedAt: '2025-10-20T10:30:00Z',
        },
        {
          id: '2',
          title: 'Login Button Not Working',
          description: 'Users are reporting that the login button is unresponsive on mobile devices.',
          status: 'in_progress',
          createdAt: '2025-10-21T14:15:00Z',
          updatedAt: '2025-10-22T09:20:00Z',
        },
        {
          id: '3',
          title: 'Email Notifications Not Sent',
          description: 'Email notifications for ticket updates are not being delivered to users.',
          status: 'closed',
          createdAt: '2025-10-18T08:45:00Z',
          updatedAt: '2025-10-19T16:30:00Z',
        },
      ],
      user: null,
      isAuthenticated: false,

      addTicket: (ticket) =>
        set((state) => ({
          tickets: [
            {
              ...ticket,
              id: Math.random().toString(36).substring(2, 11),
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
            ...state.tickets,
          ],
        })),

      updateTicket: (id, updatedTicket) =>
        set((state) => ({
          tickets: state.tickets.map((ticket) =>
            ticket.id === id
              ? { ...ticket, ...updatedTicket, updatedAt: new Date().toISOString() }
              : ticket
          ),
        })),

      deleteTicket: (id) =>
        set((state) => ({
          tickets: state.tickets.filter((ticket) => ticket.id !== id),
        })),

      login: (email, _password, name) =>
        set({
          user: { id: Math.random().toString(36).substring(2, 11), email, name },
          isAuthenticated: true,
        }),

      signup: (email, _password, name) =>
        set({
          user: { id: Math.random().toString(36).substring(2, 11), email, name },
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: 'ticketapp_session',
      partialize: (state) => ({
        tickets: state.tickets,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
