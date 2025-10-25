import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useTicketStore } from '../store/useTicketStore';
import { StatusTag } from '../components/common/StatusTag';
import { Ticket, CheckCircle, Clock, AlertCircle, ArrowRight } from 'lucide-react';

export function Dashboard() {
  const tickets = useTicketStore((state) => state.tickets);

  const totalTickets = tickets.length;
  const openTickets = tickets.filter((t) => t.status === 'open').length;
  const inProgressTickets = tickets.filter((t) => t.status === 'in_progress').length;
  const closedTickets = tickets.filter((t) => t.status === 'closed').length;

  const recentTickets = tickets.slice(0, 5);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="flex-1 bg-[#302C42] px-6 py-8 lg:px-16 lg:py-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-6 lg:mb-8">
          <h1 className="gradient-text text-3xl lg:text-4xl">Dashboard</h1>
        </div>

        {/* Summary Cards */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:mb-8 lg:grid-cols-4 lg:gap-6">
          <Card className="group rounded-[1em] border-[#C0B7E8]/10 bg-[#3D3654] p-6 shadow-lg shadow-black/20 transition-all hover:scale-105">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[#B1B1B1]">Total Tickets</p>
                <p className="mt-2 text-3xl text-[#E0E0E0]">{totalTickets}</p>
              </div>
              <div className="flex size-12 items-center justify-center rounded-[1em] bg-linear-to-br from-[#8176AF] to-[#C0B7E8]">
                <Ticket className="size-6 text-white" />
              </div>
            </div>
          </Card>

          <Card className="group rounded-[1em] border-[#4CAF50]/20 bg-[#3D3654] p-6 shadow-lg shadow-black/20 transition-all hover:scale-105">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[#B1B1B1]">Open</p>
                <p className="mt-2 text-3xl text-[#4CAF50]">{openTickets}</p>
              </div>
              <div className="flex size-12 items-center justify-center rounded-[1em] bg-[#4CAF50]/20">
                <AlertCircle className="size-6 text-[#4CAF50]" />
              </div>
            </div>
          </Card>

          <Card className="group rounded-[1em] border-[#FFC107]/20 bg-[#3D3654] p-6 shadow-lg shadow-black/20 transition-all hover:scale-105">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[#B1B1B1]">In Progress</p>
                <p className="mt-2 text-3xl text-[#FFC107]">{inProgressTickets}</p>
              </div>
              <div className="flex size-12 items-center justify-center rounded-[1em] bg-[#FFC107]/20">
                <Clock className="size-6 text-[#FFC107]" />
              </div>
            </div>
          </Card>

          <Card className="group rounded-[1em] border-[#9E9E9E]/20 bg-[#3D3654] p-6 shadow-lg shadow-black/20 transition-all hover:scale-105">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[#B1B1B1]">Closed</p>
                <p className="mt-2 text-3xl text-[#9E9E9E]">{closedTickets}</p>
              </div>
              <div className="flex size-12 items-center justify-center rounded-[1em] bg-[#9E9E9E]/20">
                <CheckCircle className="size-6 text-[#9E9E9E]" />
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Tickets */}
        <Card className="rounded-[1em] border-[#C0B7E8]/10 bg-[#3D3654] p-6 shadow-lg shadow-black/20">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="gradient-text text-2xl">Recent Tickets</h2>
            <Link to="/tickets">
              <Button className="gradient-button w-full gap-2 rounded-[1em] sm:w-auto">
                Go to Tickets
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {recentTickets.length > 0 ? (
              recentTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="flex flex-col gap-3 rounded-[1em] border border-[#C0B7E8]/10 bg-[#302C42] p-4 transition-all hover:border-[#C0B7E8]/30 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex-1">
                    <h3 className="text-[#E0E0E0]">{ticket.title}</h3>
                    <p className="mt-1 text-[#B1B1B1]">
                      {ticket.description.length > 80
                        ? ticket.description.substring(0, 80) + '...'
                        : ticket.description}
                    </p>
                    <p className="mt-2 text-sm text-[#B1B1B1]">
                      {formatDate(ticket.createdAt)}
                    </p>
                  </div>
                  <div className="ml-0 sm:ml-4">
                    <StatusTag status={ticket.status} />
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-[1em] bg-[#302C42] p-8 text-center">
                <p className="text-[#B1B1B1]">
                  No tickets found. Create your first ticket to get started.
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
