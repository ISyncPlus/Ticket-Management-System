import React from 'react';
import type { Ticket } from '../types';
import { Card } from './Card';

interface TicketCardProps {
  ticket: Ticket;
  onEdit: (ticket: Ticket) => void;
  onDelete: (id: string) => void;
}

export const TicketCard: React.FC<TicketCardProps> = ({ ticket, onEdit, onDelete }) => {
  const statusColors = {
    open: 'bg-blue-100 text-blue-800',
    'in-progress': 'bg-yellow-100 text-yellow-800',
    closed: 'bg-green-100 text-green-800',
  };

  const priorityColors = {
    low: 'bg-gray-100 text-gray-800',
    medium: 'bg-orange-100 text-orange-800',
    high: 'bg-red-100 text-red-800',
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{ticket.title}</h3>
        <div className="flex gap-2">
          <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[ticket.status]}`}>
            {ticket.status}
          </span>
          <span className={`px-2 py-1 rounded text-xs font-medium ${priorityColors[ticket.priority]}`}>
            {ticket.priority}
          </span>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">{ticket.description}</p>
      <div className="flex justify-between items-center text-xs text-gray-500">
        <div>
          {ticket.assignedTo && <p>Assigned to: {ticket.assignedTo}</p>}
          <p>Created: {new Date(ticket.createdAt).toLocaleDateString()}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(ticket)}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(ticket.id)}
            className="text-red-600 hover:text-red-800 font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </Card>
  );
};
