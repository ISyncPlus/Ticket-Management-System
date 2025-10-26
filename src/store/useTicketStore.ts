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

export interface StoredUser {
  id: string;
  email: string;
  password: string;
  name: string;
}

interface TicketState {
  tickets: Ticket[];
  user: User | null;
  isAuthenticated: boolean;
  users: StoredUser[];
  addTicket: (ticket: Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTicket: (id: string, ticket: Partial<Ticket>) => void;
  deleteTicket: (id: string) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  signup: (email: string, password: string, name: string) => boolean;
}

export const useTicketStore = create<TicketState>()(
  persist(
    (set) => ({
      tickets: [
      {
        id: '1',
        title: 'Website Loading Slow',
        description: 'The homepage takes more than 5 seconds to load on desktop and mobile devices. Image sizes and script bundles need optimization, and caching headers should be reviewed for better performance.',
        status: 'open',
        createdAt: '2025-10-20T10:30:00Z',
        updatedAt: '2025-10-20T10:30:00Z'
      },
      {
        id: '2',
        title: 'Login Button Not Working',
        description: 'Multiple users have reported that the login button is unresponsive on mobile browsers, especially Safari. Possible issue with the onClick handler or event propagation inside the form.',
        status: 'in_progress',
        createdAt: '2025-10-21T14:15:00Z',
        updatedAt: '2025-10-22T09:20:00Z'
      },
      {
        id: '3',
        title: 'Email Notifications Not Sent',
        description: 'Email alerts for new ticket updates or replies are not being delivered. This might be due to a misconfigured SMTP service or missing authentication credentials in the environment variables.',
        status: 'closed',
        createdAt: '2025-10-18T08:45:00Z',
        updatedAt: '2025-10-19T16:30:00Z'
      },
      {
        id: '4',
        title: 'Dark Mode Toggle Broken',
        description: 'When switching between light and dark mode, the setting does not persist on page refresh. LocalStorage or Zustand state might not be saving the preference correctly.',
        status: 'in_progress',
        createdAt: '2025-10-22T12:00:00Z',
        updatedAt: '2025-10-24T09:45:00Z'
      },
      {
        id: '5',
        title: 'Dashboard Stats Not Updating',
        description: 'After creating or deleting tickets, the dashboard metrics remain static. The summary cards should re-render automatically to reflect the latest counts without a manual refresh.',
        status: 'open',
        createdAt: '2025-10-19T07:10:00Z',
        updatedAt: '2025-10-19T07:10:00Z'
      },
      {
        id: '6',
        title: 'Broken Image on About Page',
        description: 'The team section image on the About page fails to load in Firefox and Edge browsers. Might be a URL issue or a missing asset in the build directory.',
        status: 'closed',
        createdAt: '2025-10-16T09:40:00Z',
        updatedAt: '2025-10-18T13:00:00Z'
      },
      {
        id: '7',
        title: 'Search Bar Returns No Results',
        description: 'Even with valid queries, the search bar returns an empty state. The issue might be tied to a missing debounce or an incorrect filter condition in the fetch logic.',
        status: 'open',
        createdAt: '2025-10-23T08:50:00Z',
        updatedAt: '2025-10-23T08:50:00Z'
      },
      {
        id: '8',
        title: 'Session Expiration Too Short',
        description: 'Active user sessions time out after only five minutes, forcing repeated logins. The token expiry configuration may need to be extended to improve usability.',
        status: 'in_progress',
        createdAt: '2025-10-21T10:10:00Z',
        updatedAt: '2025-10-24T11:30:00Z'
      },
      {
        id: '9',
        title: 'Ticket Creation Form Crashes on Submit',
        description: 'The ticket creation form crashes when a user enters a long description or special characters. Input sanitization and character limits may need review.',
        status: 'closed',
        createdAt: '2025-10-18T15:25:00Z',
        updatedAt: '2025-10-20T11:45:00Z'
      },
      {
        id: '10',
        title: 'Mobile Layout Overlaps Footer',
        description: 'On smaller screens like the iPhone SE, ticket cards and the footer overlap, making content unreadable. The layout needs responsive grid adjustments.',
        status: 'open',
        createdAt: '2025-10-22T07:15:00Z',
        updatedAt: '2025-10-22T07:15:00Z'
      },
      {
        id: '11',
        title: 'Filter by Status Not Working',
        description: 'Selecting the "in_progress" filter returns all tickets instead of matching ones. The filtering logic in the state management function likely needs refinement.',
        status: 'in_progress',
        createdAt: '2025-10-20T09:55:00Z',
        updatedAt: '2025-10-22T13:10:00Z'
      },
      {
        id: '12',
        title: 'Tooltip Text Not Visible in Dark Mode',
        description: 'Tooltip labels for edit and delete icons appear too dark in dark mode, reducing readability. Adjust text or background contrast for better visibility.',
        status: 'closed',
        createdAt: '2025-10-15T14:40:00Z',
        updatedAt: '2025-10-17T10:00:00Z'
      },
      {
        id: '13',
        title: 'Notifications Bell Icon Misaligned',
        description: 'The notification bell icon is slightly misaligned on large screens, sitting too close to the profile image. Navbar layout or flex spacing needs minor tweaks.',
        status: 'in_progress',
        createdAt: '2025-10-23T09:00:00Z',
        updatedAt: '2025-10-24T08:30:00Z'
      },
      {
        id: '14',
        title: 'Form Validation Not Showing Errors',
        description: 'Inline validation messages fail to appear when users leave required fields empty. The issue might be tied to missing error state binding in the form component.',
        status: 'open',
        createdAt: '2025-10-24T11:00:00Z',
        updatedAt: '2025-10-24T11:00:00Z'
      }
    ],
  user: null,
  isAuthenticated: false,
  users: [],

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

  login: (email: string, password: string) => {
        const stateUsers = (JSON.parse(localStorage.getItem('ticketapp_users') || 'null') as StoredUser[] | null) ?? undefined;
        const usersList = stateUsers ?? undefined;

        // prefer the in-memory users if available
        const allUsers = usersList ?? (typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('ticketapp_users') || '[]') : []) as StoredUser[];

        const matched = allUsers.find((u) => u.email === email && u.password === password);
        if (matched) {
          set({
            user: { id: matched.id, email: matched.email, name: matched.name },
            isAuthenticated: true,
            users: allUsers,
          });
          return true;
        }
        // no match
        set({ user: null, isAuthenticated: false });
        return false;
  },

      signup: (email, password, name) => {
        // load existing users from localStorage
        const key = 'ticketapp_users';
        const raw = localStorage.getItem(key);
        const users: StoredUser[] = raw ? JSON.parse(raw) : [];

        // prevent duplicate emails
        if (users.find((u) => u.email === email)) {
          return false;
        }

        const newUser: StoredUser = {
          id: Math.random().toString(36).substring(2, 11),
          email,
          password,
          name,
        };
        users.push(newUser);
        localStorage.setItem(key, JSON.stringify(users));

        set({
          user: { id: newUser.id, email: newUser.email, name: newUser.name },
          isAuthenticated: true,
          users,
        });
        return true;
      },

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
        users: state.users,
      }),
    }
  )
);
