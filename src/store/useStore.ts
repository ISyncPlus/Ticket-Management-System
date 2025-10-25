import { create } from 'zustand';

export interface Item {
  id: string;
  name: string;
  category: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
}

interface StoreState {
  items: Item[];
  addItem: (item: Omit<Item, 'id' | 'createdAt'>) => void;
  updateItem: (id: string, item: Partial<Item>) => void;
  deleteItem: (id: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  items: [
    {
      id: '1',
      name: 'Dashboard Analytics',
      category: 'Analytics',
      status: 'active',
      createdAt: '2025-10-20',
    },
    {
      id: '2',
      name: 'User Management',
      category: 'Admin',
      status: 'active',
      createdAt: '2025-10-19',
    },
    {
      id: '3',
      name: 'Payment Gateway',
      category: 'Finance',
      status: 'pending',
      createdAt: '2025-10-18',
    },
    {
      id: '4',
      name: 'Email Templates',
      category: 'Marketing',
      status: 'inactive',
      createdAt: '2025-10-17',
    },
    {
      id: '5',
      name: 'API Integration',
      category: 'Development',
      status: 'active',
      createdAt: '2025-10-16',
    },
  ],
  addItem: (item) =>
    set((state) => ({
      items: [
        ...state.items,
        {
          ...item,
          id: Math.random().toString(36).substring(7),
          createdAt: new Date().toISOString().split('T')[0],
        },
      ],
    })),
  updateItem: (id, updatedItem) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      ),
    })),
  deleteItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
}));
