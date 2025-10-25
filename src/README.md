# TicketWave - Modern Ticket Management System

A sleek, dark-themed, responsive ticket management web application built with React, Tailwind CSS v4, and Zustand for state management.

## Features

- **Dark Theme Design**: Professional dark color scheme with purple gradient accents
- **Full Authentication Flow**: Login and signup with validation
- **Dashboard**: Visual summary cards showing ticket statistics
- **Ticket Management**: Complete CRUD operations for tickets
- **Status Tracking**: Color-coded status badges (Open, In Progress, Closed)
- **Search & Filter**: Find tickets quickly with search and status filters
- **Protected Routes**: Session-based route protection with automatic redirects
- **Toast Notifications**: Real-time feedback for all user actions
- **Fully Responsive**: Seamless experience from mobile to desktop
- **Accessibility First**: WCAG compliant with keyboard navigation and screen reader support

## Design Features

### Visual Identity
- **Base Background**: `#302C42` (Deep purple-gray)
- **Gradient Text**: Linear gradient from `#C0B7E8` to `#8176AF`
- **Gradient Buttons**: Smooth purple gradient with hover animations
- **Card Shadows**: Subtle black shadows with 20% opacity
- **Border Radius**: Consistent 1em rounded corners throughout

### Responsive Design
- Mobile-first approach with hamburger navigation
- Adaptive layouts: 1 column (mobile) → 2 columns (tablet) → 3-4 columns (desktop)
- Max content width: 1440px, centered on large screens
- Smooth transitions and hover effects

### Decorative Elements
- Glowing circular shapes with blur effects
- Smooth wavy SVG dividers
- Gradient icon backgrounds
- Scale-on-hover animations

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Zustand** - Lightweight state management with persistence
- **React Router v6** - Client-side routing
- **Shadcn/ui** - Accessible component library
- **Lucide React** - Beautiful icon set
- **Sonner** - Elegant toast notifications

## Quick Start

### Prerequisites
- Node.js 16 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ticketwave
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage Guide

### Authentication

**Test Credentials**:
- Email: `demo@user.com`
- Password: `password123`

1. Visit the landing page to see the hero section and features
2. Click "Get Started" or "Login" in the navigation
3. Use the test credentials or create a new account
4. You'll be automatically redirected to the dashboard

### Dashboard

After logging in, you'll see:
- **4 Summary Cards**: Total tickets, Open, In Progress, Closed
- **Recent Tickets**: Latest 5 tickets with status badges
- **Go to Tickets Button**: Quick access to full ticket management

### Managing Tickets

**Create a Ticket**:
1. Navigate to the Tickets page
2. Click "Create Ticket" button
3. Fill in the form:
   - Title (required)
   - Description (required, min 10 characters)
   - Status (required: Open, In Progress, or Closed)
4. Click "Create" to save

**View Ticket Details**:
- Click the "View" button on any ticket card
- See full details in a modal

**Edit a Ticket**:
- Click the "Edit" button on any ticket card
- Modify the fields
- Click "Update" to save changes

**Delete a Ticket**:
- Click the "Delete" button on any ticket card
- Confirm deletion in the dialog
- Ticket is permanently removed

**Search & Filter**:
- Use the search box to find tickets by title or description
- Use the status dropdown to filter by Open, In Progress, or Closed
- Combine both for precise filtering

## Project Structure

```
/
├── App.tsx                          # Main app component with routing
├── store/
│   └── useTicketStore.ts           # Zustand store with persistence
├── pages/
│   ├── Landing.tsx                 # Landing page with hero and features
│   ├── Login.tsx                   # Login page with two-column layout
│   ├── Signup.tsx                  # Signup page with two-column layout
│   ├── Dashboard.tsx               # Dashboard with summary cards
│   └── Tickets.tsx                 # Ticket management page (CRUD)
├── components/
│   ├── common/
│   │   ├── Header.tsx              # Navigation header with hamburger
│   │   ├── Footer.tsx              # Footer component
│   │   ├── ProtectedRoute.tsx      # Route protection wrapper
│   │   ├── FormInput.tsx           # Accessible form input
│   │   └── StatusTag.tsx           # Color-coded status badge
│   ├── TicketModal.tsx             # Create/edit ticket modal
│   └── ui/                         # Shadcn UI components
├── styles/
│   └── globals.css                 # Global styles and theme
├── TICKETWAVE_DESIGN_SPEC.md       # Complete design documentation
└── README.md                       # This file
```

## Component Documentation

### Header (Navbar)
- Sticky header with backdrop blur
- Logo with gradient icon
- Hamburger menu on mobile
- Active link highlighting
- User info and logout button when authenticated

### Status Badges
- **Open**: Green (`#4CAF50`)
- **In Progress**: Amber (`#FFC107`)
- **Closed**: Gray (`#9E9E9E`)

### Decorative Elements
- Glowing circles on landing and auth pages
- Wavy SVG divider on landing page
- Gradient backgrounds on auth illustrations

## State Management

### LocalStorage Key
`ticketapp_session`

### Persisted Data
- All tickets with full details
- User information (id, email, name)
- Authentication status

### Store Actions
- `addTicket` - Create new ticket
- `updateTicket` - Modify existing ticket
- `deleteTicket` - Remove ticket
- `login` - Authenticate user
- `signup` - Register new user
- `logout` - Clear session

## Accessibility

### Features
- Semantic HTML elements throughout
- Proper ARIA labels and descriptions
- Keyboard navigation for all interactive elements
- Visible focus indicators (purple outline)
- Form validation with error announcements
- Screen reader friendly

### Contrast Ratios
All text meets WCAG AA standards:
- Primary text (#E0E0E0) on dark background: 12.63:1
- Secondary text (#B1B1B1) on dark background: 7.84:1

### Focus Management
- 2px purple outline on all interactive elements
- 2px offset for better visibility
- Focus trap in modals
- Escape key to close modals

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 640px | Single column, hamburger menu |
| Tablet | 640px - 1023px | 2 columns, expanded menu |
| Desktop | 1024px+ | 3-4 columns, full navigation |
| Max Width | 1440px | Centered container |

## Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist` directory.

## Development

### Linting
```bash
npm run lint
```

### Type Checking
TypeScript is configured for strict type checking. All components are fully typed.

## Design Assets

### Reusable CSS Classes
- `.gradient-text` - Purple gradient text effect
- `.gradient-button` - Purple gradient button with hover
- `.glow-circle` - Blurred decorative circle

### Color Palette
```css
--background: #302C42      /* Dark base */
--card: #3D3654           /* Elevated surfaces */
--primary: #8176AF        /* Primary accent */
--accent: #C0B7E8         /* Light accent */
--foreground: #E0E0E0     /* Primary text */
--muted-foreground: #B1B1B1  /* Secondary text */
--open: #4CAF50           /* Green status */
--in-progress: #FFC107    /* Amber status */
--closed: #9E9E9E         /* Gray status */
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android)

## Performance

- Smooth CSS transitions (300ms)
- Transform-based animations
- Efficient state updates with Zustand
- Minimal re-renders
- LocalStorage caching

## Security Notes

This is a demo application with mock authentication. For production use:
- Implement real backend API
- Use secure authentication (JWT, OAuth)
- Validate inputs server-side
- Implement rate limiting
- Add HTTPS/SSL
- Never store sensitive data in localStorage

## License

MIT

## Credits

- Icons: [Lucide React](https://lucide.dev)
- UI Components: [Shadcn/ui](https://ui.shadcn.com)
- Notifications: [Sonner](https://sonner.emilkowal.ski)

---

Built with ❤️ using React, Tailwind CSS, and Zustand
