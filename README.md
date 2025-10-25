# Ticket Management System

A modern, simple, and efficient ticket management web application built with React (Vite), Tailwind CSS, and Zustand for state management.

![Landing Page](https://github.com/user-attachments/assets/90a3bbf7-b4d1-4ffe-a601-8b114f4b2c17)

## Features

✨ **Clean & Minimal UI** - Built with Tailwind CSS for a modern, responsive design  
🔐 **Authentication** - Simple login and signup with localStorage persistence  
📋 **CRUD Operations** - Create, Read, Update, and Delete tickets  
🎯 **Filtering & Search** - Filter tickets by status and search by keywords  
📊 **Dashboard** - Overview of ticket statistics and recent activity  
💾 **State Management** - Zustand for efficient, simple state management  
🔄 **Routing** - React Router for seamless navigation with protected routes  

## Tech Stack

- **React 19** - UI library
- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe development
- **Tailwind CSS v3** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **React Router** - Client-side routing
- **localStorage** - Data persistence

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Navbar.tsx
│   ├── ProtectedRoute.tsx
│   ├── TicketCard.tsx
│   ├── TicketForm.tsx
│   └── index.ts
├── pages/              # Page components
│   ├── Landing.tsx
│   ├── Login.tsx
│   ├── Signup.tsx
│   ├── Dashboard.tsx
│   ├── Tickets.tsx
│   └── index.ts
├── store/              # Zustand stores
│   ├── authStore.ts
│   └── ticketStore.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main app component with routing
├── main.tsx            # App entry point
└── index.css           # Global styles with Tailwind
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ISyncPlus/Ticket-Management-System.git
cd Ticket-Management-System
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

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Usage

### 1. Sign Up / Login

![Signup Page](https://github.com/user-attachments/assets/f87fdcee-4df6-4aef-b54b-1995790b168e)

- Create a new account on the signup page
- User credentials are stored in localStorage
- Login with your email and password

### 2. Dashboard

![Dashboard](https://github.com/user-attachments/assets/feebaa11-5910-4a95-b345-de7ee11031fc)

- View ticket statistics (Total, Open, In Progress, Closed)
- See priority distribution
- Quick access to recent tickets
- Quick actions for creating tickets

### 3. Manage Tickets

![Tickets Page](https://github.com/user-attachments/assets/c9a09414-95f1-490f-9868-3cfcff153e1d)

- **Create** new tickets with title, description, status, priority, and assignee
- **Read** all tickets with filtering and search
- **Update** existing tickets
- **Delete** tickets with confirmation
- Filter by status: All, Open, In Progress, Closed
- Search tickets by title or description

![Create Ticket](https://github.com/user-attachments/assets/abce9dab-4ff5-484b-af56-c2d1de7fa906)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## State Management

The app uses Zustand for state management with two main stores:

- **authStore** - Handles authentication state and user management
- **ticketStore** - Manages tickets CRUD operations

Both stores persist data to localStorage for data retention across sessions.

## Data Persistence

- User accounts are stored in `localStorage` under the key `users`
- Authentication state is stored in `localStorage` under the key `auth-storage`
- Tickets are stored in `localStorage` under the key `ticket-storage`
- Mock data is pre-loaded with 3 sample tickets

## Customization

### Adding New Ticket Fields

1. Update the `Ticket` type in `src/types/index.ts`
2. Modify the `TicketForm` component to include the new field
3. Update the Zustand store if needed

### Styling

The app uses Tailwind CSS. You can customize:
- Colors and themes in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles using Tailwind utility classes

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with React and Vite for fast development
- Styled with Tailwind CSS for modern UI
- State managed with Zustand for simplicity
- Icons from emoji characters for minimal dependencies
