import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Ticket, TicketState } from '../types';

const mockTickets: Ticket[] = [
  {
    id: '1',
    title: 'Fix login bug',
    description: 'Users cannot log in with their credentials',
    status: 'open',
    priority: 'high',
    createdAt: new Date('2025-01-10').toISOString(),
    updatedAt: new Date('2025-01-10').toISOString(),
    assignedTo: 'John Doe',
  },
  {
    id: '2',
    title: 'Add dark mode',
    description: 'Implement dark mode theme for the application',
    status: 'in-progress',
    priority: 'medium',
    createdAt: new Date('2025-01-15').toISOString(),
    updatedAt: new Date('2025-01-20').toISOString(),
    assignedTo: 'Jane Smith',
  },
  {
    id: '3',
    title: 'Update documentation',
    description: 'Update README with new features',
    status: 'closed',
    priority: 'low',
    createdAt: new Date('2025-01-05').toISOString(),
    updatedAt: new Date('2025-01-18').toISOString(),
  },
];

export const useTicketStore = create<TicketState>()(
  persist(
    (set, get) => ({
      tickets: mockTickets,
      addTicket: (ticket) => {
        const newTicket: Ticket = {
          ...ticket,
          id: Date.now().toString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        set((state) => ({ tickets: [...state.tickets, newTicket] }));
      },
      updateTicket: (id, updates) => {
        set((state) => ({
          tickets: state.tickets.map((ticket) =>
            ticket.id === id
              ? { ...ticket, ...updates, updatedAt: new Date().toISOString() }
              : ticket
          ),
        }));
      },
      deleteTicket: (id) => {
        set((state) => ({
          tickets: state.tickets.filter((ticket) => ticket.id !== id),
        }));
      },
      getTicket: (id) => {
        return get().tickets.find((ticket) => ticket.id === id);
      },
    }),
    {
      name: 'ticket-storage',
    }
  )
);
