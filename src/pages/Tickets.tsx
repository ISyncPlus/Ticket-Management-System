import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { useTicketStore } from '../store/useTicketStore';
import { StatusTag } from '../components/common/StatusTag';
import { TicketModal } from '../components/TicketModal';
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../components/ui/alert-dialog';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';
import { toast } from 'sonner';
import type { Ticket } from '../store/useTicketStore';

export function Tickets() {
  const { tickets, deleteTicket } = useTicketStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTicket, setEditingTicket] = useState<Ticket | undefined>();
  const [viewingTicket, setViewingTicket] = useState<Ticket | null>(null);
  const [deletingTicketId, setDeletingTicketId] = useState<string | null>(null);

  const filteredTickets = tickets.filter((ticket: Ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' || ticket.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleCreate = () => {
    setEditingTicket(undefined);
    setIsModalOpen(true);
  };

  const handleEdit = (ticket: Ticket) => {
    setEditingTicket(ticket);
    setIsModalOpen(true);
  };

  const handleView = (ticket: Ticket) => {
    setViewingTicket(ticket);
  };

  const handleDelete = (id: string) => {
    deleteTicket(id);
    setDeletingTicketId(null);
    toast.success('Ticket deleted successfully');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="flex-1 bg-[#302C42] px-6 py-8 lg:px-16 lg:py-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-6 lg:mb-8">
          <h1 className="gradient-text text-3xl lg:text-4xl">Manage Tickets</h1>
          <p className="mt-2 text-[#B1B1B1]">
            Create, track, and manage all your support tickets
          </p>
        </div>

        {/* Toolbar */}
        <Card className="mb-6 rounded-[1em] border-[#C0B7E8]/10 bg-[#3D3654] p-4 shadow-lg shadow-black/20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-1">
              <div className="relative flex-1 sm:max-w-md">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#B1B1B1]" />
                <Input
                  type="text"
                  placeholder="Search tickets..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="rounded-[1em] border-[#C0B7E8]/10 bg-[#302C42] pl-10 text-[#E0E0E0] placeholder:text-[#B1B1B1]"
                  aria-label="Search tickets"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full rounded-[1em] border-[#C0B7E8]/10 bg-[#302C42] text-[#E0E0E0] sm:w-40" aria-label="Filter by status">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent className="rounded-[1em] border-[#C0B7E8]/10 bg-[#3D3654] text-[#E0E0E0]">
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              onClick={handleCreate}
              className="w-full gap-2 gradient-button rounded-[1em] sm:w-auto"
            >
              <Plus className="size-4" />
              Create Ticket
            </Button>
          </div>
        </Card>

        {/* Tickets Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
          {filteredTickets.length > 0 ? (
            filteredTickets.map((ticket: Ticket) => (
              <Card key={ticket.id} className="group rounded-[1em] border-[#C0B7E8]/10 bg-[#3D3654] p-4 shadow-lg shadow-black/20 transition-all hover:border-[#C0B7E8]/30 hover:shadow-xl sm:p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                      <h3 className="text-[#E0E0E0] text-lg">{ticket.title}</h3>
                      <StatusTag status={ticket.status} />
                    </div>
                    <p className="mt-2 text-[#B1B1B1]">
                      {ticket.description.length > 120
                        ? ticket.description.substring(0, 120) + '...'
                        : ticket.description}
                    </p>
                    <p className="mt-3 text-sm text-[#B1B1B1]">
                      Created: {formatDate(ticket.createdAt)}
                    </p>
                  </div>
                  <div className="flex gap-2 border-t border-[#C0B7E8]/10 pt-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleView(ticket)}
                      aria-label="View ticket details"
                      className="flex-1 rounded-[1em] hover:bg-[#302C42] text-[#E0E0E0]"
                    >
                      <Eye className="mr-2 size-4" />
                      View
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(ticket)}
                      aria-label="Edit ticket"
                      className="flex-1 rounded-[1em] hover:bg-[#302C42] text-[#E0E0E0]"
                    >
                      <Edit className="mr-2 size-4" />
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setDeletingTicketId(ticket.id)}
                      aria-label="Delete ticket"
                      className="flex-1 rounded-[1em] hover:bg-red-900/20 text-red-400"
                    >
                      <Trash2 className="mr-2 size-4" />
                      Delete
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <Card className="col-span-full rounded-[1em] border-[#C0B7E8]/10 bg-[#3D3654] p-12 text-center shadow-lg shadow-black/20">
              <p className="text-[#B1B1B1]">
                {searchQuery || statusFilter !== 'all'
                  ? 'No tickets found matching your filters.'
                  : 'No tickets yet. Create your first ticket to get started.'}
              </p>
            </Card>
          )}
        </div>
      </div>

      {/* Create/Edit Modal */}
      <TicketModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        ticket={editingTicket}
      />

      {/* View Modal */}
      <Dialog open={!!viewingTicket} onOpenChange={() => setViewingTicket(null)}>
        <DialogContent className="rounded-[1em] border-[#C0B7E8]/10 bg-[#3D3654] text-[#E0E0E0] sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="gradient-text">Ticket Details</DialogTitle>
          </DialogHeader>
          {viewingTicket && (
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-[#E0E0E0]">Title</h3>
                <p className="text-[#B1B1B1]">{viewingTicket.title}</p>
              </div>
              <div>
                <h3 className="mb-2 text-[#E0E0E0]">Description</h3>
                <p className="text-[#B1B1B1]">{viewingTicket.description}</p>
              </div>
              <div>
                <h3 className="mb-2 text-[#E0E0E0]">Status</h3>
                <StatusTag status={viewingTicket.status} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-[#E0E0E0]">Created</h3>
                  <p className="text-[#B1B1B1]">
                    {formatDate(viewingTicket.createdAt)}
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-[#E0E0E0]">Last Updated</h3>
                  <p className="text-[#B1B1B1]">
                    {formatDate(viewingTicket.updatedAt)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog
        open={deletingTicketId !== null}
        onOpenChange={() => setDeletingTicketId(null)}
      >
        <AlertDialogContent className="rounded-[1em] border-[#C0B7E8]/10 bg-[#3D3654] text-[#E0E0E0]">
          <AlertDialogHeader>
            <AlertDialogTitle className="gradient-text">Are you sure?</AlertDialogTitle>
            <AlertDialogDescription className="text-[#B1B1B1]">
              This action cannot be undone. This will permanently delete the
              ticket from your system.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-[1em] border-[#C0B7E8]/20 bg-[#302C42] text-[#E0E0E0] hover:bg-[#3D3654]">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deletingTicketId && handleDelete(deletingTicketId)}
              className="rounded-[1em] bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
