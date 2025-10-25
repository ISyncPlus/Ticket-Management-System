import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useTicketStore } from '../store/ticketStore';
import { Card, Button } from '../components';

export const Dashboard: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const tickets = useTicketStore((state) => state.tickets);

  const stats = {
    total: tickets.length,
    open: tickets.filter((t) => t.status === 'open').length,
    inProgress: tickets.filter((t) => t.status === 'in-progress').length,
    closed: tickets.filter((t) => t.status === 'closed').length,
  };

  const priorities = {
    high: tickets.filter((t) => t.priority === 'high').length,
    medium: tickets.filter((t) => t.priority === 'medium').length,
    low: tickets.filter((t) => t.priority === 'low').length,
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {user?.name}!</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-l-4 border-blue-500">
            <p className="text-sm text-gray-600">Total Tickets</p>
            <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
          </Card>
          <Card className="border-l-4 border-yellow-500">
            <p className="text-sm text-gray-600">Open</p>
            <p className="text-3xl font-bold text-gray-900">{stats.open}</p>
          </Card>
          <Card className="border-l-4 border-orange-500">
            <p className="text-sm text-gray-600">In Progress</p>
            <p className="text-3xl font-bold text-gray-900">{stats.inProgress}</p>
          </Card>
          <Card className="border-l-4 border-green-500">
            <p className="text-sm text-gray-600">Closed</p>
            <p className="text-3xl font-bold text-gray-900">{stats.closed}</p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h2 className="text-xl font-semibold mb-4">Priority Distribution</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">High Priority</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  {priorities.high}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Medium Priority</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  {priorities.medium}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Low Priority</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                  {priorities.low}
                </span>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link to="/tickets">
                <Button className="w-full">View All Tickets</Button>
              </Link>
              <Link to="/tickets?action=new">
                <Button variant="secondary" className="w-full">
                  Create New Ticket
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        <Card className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Recent Tickets</h2>
          <div className="space-y-3">
            {tickets.slice(0, 5).map((ticket) => (
              <div
                key={ticket.id}
                className="flex justify-between items-center p-3 bg-gray-50 rounded hover:bg-gray-100"
              >
                <div>
                  <h3 className="font-medium text-gray-900">{ticket.title}</h3>
                  <p className="text-sm text-gray-600">{ticket.description.substring(0, 60)}...</p>
                </div>
                <div className="flex gap-2 items-center">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      ticket.status === 'open'
                        ? 'bg-blue-100 text-blue-800'
                        : ticket.status === 'in-progress'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {ticket.status}
                  </span>
                  <Link
                    to={`/tickets`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
