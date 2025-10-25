import { useEffect, useState, FormEvent } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useTicketStore, Ticket } from '../store/useTicketStore';
import { toast } from 'sonner';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  ticket?: Ticket;
}

export function TicketModal({ isOpen, onClose, ticket }: TicketModalProps) {
  const { addTicket, updateTicket } = useTicketStore();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'open' as 'open' | 'in_progress' | 'closed',
  });
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    status: '',
  });

  useEffect(() => {
    if (ticket) {
      setFormData({
        title: ticket.title,
        description: ticket.description,
        status: ticket.status,
      });
    } else {
      setFormData({
        title: '',
        description: '',
        status: 'open',
      });
    }
    setErrors({ title: '', description: '', status: '' });
  }, [ticket, isOpen]);

  const validateForm = () => {
    const newErrors = { title: '', description: '', status: '' };
    let isValid = true;

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
      isValid = false;
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
      isValid = false;
    }

    if (!formData.status) {
      newErrors.status = 'Status is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the form errors');
      return;
    }

    if (ticket) {
      updateTicket(ticket.id, formData);
      toast.success('Ticket updated successfully');
    } else {
      addTicket(formData);
      toast.success('Ticket created successfully');
    }

    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-[1em] border-[#C0B7E8]/10 bg-[#3D3654] text-[#E0E0E0] sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="gradient-text text-2xl">
            {ticket ? 'Edit Ticket' : 'Create New Ticket'}
          </DialogTitle>
          <DialogDescription className="text-[#B1B1B1]">
            {ticket
              ? 'Update the details of your ticket below.'
              : 'Fill in the details to create a new support ticket.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="ticket-title" className="text-[#E0E0E0]">
                Title <span className="text-red-400">*</span>
              </Label>
              <Input
                id="ticket-title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Brief summary of the issue"
                required
                aria-invalid={!!errors.title}
                aria-describedby={errors.title ? 'ticket-title-error' : undefined}
                className={`rounded-[1em] border-[#C0B7E8]/10 bg-[#302C42] text-[#E0E0E0] placeholder:text-[#B1B1B1] ${
                  errors.title ? 'border-red-500' : ''
                }`}
              />
              {errors.title && (
                <p id="ticket-title-error" className="text-red-400 text-sm" role="alert">
                  {errors.title}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="ticket-description" className="text-[#E0E0E0]">
                Description <span className="text-red-400">*</span>
              </Label>
              <Textarea
                id="ticket-description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Detailed description of the issue (at least 10 characters)"
                rows={6}
                required
                aria-invalid={!!errors.description}
                aria-describedby={
                  errors.description ? 'ticket-description-error' : undefined
                }
                className={`rounded-[1em] border-[#C0B7E8]/10 bg-[#302C42] text-[#E0E0E0] placeholder:text-[#B1B1B1] ${
                  errors.description ? 'border-red-500' : ''
                }`}
              />
              {errors.description && (
                <p
                  id="ticket-description-error"
                  className="text-red-400 text-sm"
                  role="alert"
                >
                  {errors.description}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="ticket-status" className="text-[#E0E0E0]">
                Status <span className="text-red-400">*</span>
              </Label>
              <Select
                value={formData.status}
                onValueChange={(value: 'open' | 'in_progress' | 'closed') =>
                  setFormData({ ...formData, status: value })
                }
              >
                <SelectTrigger
                  id="ticket-status"
                  aria-invalid={!!errors.status}
                  aria-describedby={errors.status ? 'ticket-status-error' : undefined}
                  className={`rounded-[1em] border-[#C0B7E8]/10 bg-[#302C42] text-[#E0E0E0] ${
                    errors.status ? 'border-red-500' : ''
                  }`}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-[1em] border-[#C0B7E8]/10 bg-[#3D3654] text-[#E0E0E0]">
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
              {errors.status && (
                <p id="ticket-status-error" className="text-red-400 text-sm" role="alert">
                  {errors.status}
                </p>
              )}
            </div>
          </div>
          <DialogFooter className="flex-col gap-2 sm:flex-row">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="w-full rounded-[1em] border-[#C0B7E8]/20 bg-[#302C42] text-[#E0E0E0] hover:bg-[#3D3654] sm:w-auto"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="w-full gradient-button rounded-[1em] sm:w-auto"
            >
              {ticket ? 'Update' : 'Create'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
