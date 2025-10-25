import { Bell, Search, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Navbar() {
  return (
    <nav className="border-b bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-slate-900">Dashboard</h1>
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <Input
              type="text"
              placeholder="Search..."
              className="pl-10"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="size-5" />
            <span className="absolute right-2 top-2 size-2 rounded-full bg-red-500"></span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="size-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
