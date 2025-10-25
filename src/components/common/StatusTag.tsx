import { Badge } from '../ui/badge';

interface StatusTagProps {
  status: 'open' | 'in_progress' | 'closed';
}

export function StatusTag({ status }: StatusTagProps) {
  const statusConfig = {
    open: {
      label: 'Open',
      className: 'bg-[#4CAF50]/20 text-[#4CAF50] hover:bg-[#4CAF50]/20 border-[#4CAF50]/30',
    },
    in_progress: {
      label: 'In Progress',
      className: 'bg-[#FFC107]/20 text-[#FFC107] hover:bg-[#FFC107]/20 border-[#FFC107]/30',
    },
    closed: {
      label: 'Closed',
      className: 'bg-[#9E9E9E]/20 text-[#9E9E9E] hover:bg-[#9E9E9E]/20 border-[#9E9E9E]/30',
    },
  };

  const config = statusConfig[status];

  return <Badge className={`${config.className} rounded-[1em]`}>{config.label}</Badge>;
}
