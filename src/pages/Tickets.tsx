import React, { useState } from 'react';
import { useTicketStore } from '../store/ticketStore';
import { Button, Card, TicketCard, TicketForm } from '../components';
import type { Ticket } from '../types';

export const Tickets: React.FC = () => {
  const { tickets, addTicket, updateTicket, deleteTicket } = useTicketStore();
  const [showForm, setShowForm] = useState(false);
  const [editingTicket, setEditingTicket] = useState<Ticket | undefined>();
  const [filter, setFilter] = useState<'all' | 'open' | 'in-progress' | 'closed'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTickets = tickets.filter((ticket) => {
    const matchesFilter = filter === 'all' || ticket.status === filter;
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleSubmit = (data: Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (editingTicket) {
      updateTicket(editingTicket.id, data);
    } else {
      addTicket(data);
    }
    setShowForm(false);
    setEditingTicket(undefined);
  };

  const handleEdit = (ticket: Ticket) => {
    setEditingTicket(ticket);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this ticket?')) {
      deleteTicket(id);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingTicket(undefined);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Tickets</h1>
            <Button onClick={() => setShowForm(true)}>Create New Ticket</Button>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search tickets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('open')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  filter === 'open'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300'
                }`}
              >
                Open
              </button>
              <button
                onClick={() => setFilter('in-progress')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  filter === 'in-progress'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300'
                }`}
              >
                In Progress
              </button>
              <button
                onClick={() => setFilter('closed')}
                className={`px-4 py-2 rounded-lg font-medium ${
                  filter === 'closed'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300'
                }`}
              >
                Closed
              </button>
            </div>
          </div>
        </div>

        {showForm && (
          <Card className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              {editingTicket ? 'Edit Ticket' : 'Create New Ticket'}
            </h2>
            <TicketForm ticket={editingTicket} onSubmit={handleSubmit} onCancel={handleCancel} />
          </Card>
        )}

        {filteredTickets.length === 0 ? (
          <Card className="text-center py-12">
            <p className="text-gray-600 text-lg">No tickets found</p>
            <p className="text-gray-500 mt-2">
              {searchTerm || filter !== 'all'
                ? 'Try adjusting your filters'
                : 'Create your first ticket to get started'}
            </p>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
