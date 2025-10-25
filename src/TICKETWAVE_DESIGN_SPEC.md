# TicketWave - Design Specification & Component Documentation

## Overview
TicketWave is a dark-themed, responsive ticket management web application built with React, Tailwind CSS v4, and Zustand for state management.

## Color Palette

### Primary Colors
- **Background**: `#302C42` (Dark base)
- **Card Background**: `#3D3654` (Elevated surfaces)
- **Input Background**: `#3D3654`

### Text Colors
- **Primary Text**: `#E0E0E0` (Light neutral)
- **Secondary Text**: `#B1B1B1` (Muted)
- **Gradient Text**: Linear gradient from `#C0B7E8` to `#8176AF`

### Accent Colors
- **Primary Accent**: `#8176AF` and `#C0B7E8` (Purple tones)
- **Open Status**: `#4CAF50` (Green)
- **In Progress Status**: `#FFC107` (Amber)
- **Closed Status**: `#9E9E9E` (Gray)
- **Error/Destructive**: `#ef4444` (Red)

### Borders
- **Border Color**: `rgba(193, 183, 232, 0.1)` (10% opacity purple)
- **Active Border**: `rgba(193, 183, 232, 0.3)` (30% opacity purple)

## Design System

### Border Radius
All interactive elements use `1em` border radius for consistency:
- Buttons: `rounded-[1em]`
- Cards: `rounded-[1em]`
- Inputs: `rounded-[1em]`
- Modals: `rounded-[1em]`

### Shadows
- **Card Shadow**: `shadow-lg shadow-black/20`
- **Hover Shadow**: `shadow-xl shadow-black/30`

### Gradient Effects
- **Button Gradient**: Linear gradient from `#8176AF` to `#C0B7E8`
- **Text Gradient**: Linear gradient from `#C0B7E8` to `#8176AF`
- **Hover Effect**: Transform translateY(-2px) with shadow boost

### Glow Effect
Decorative circles use blur filter:
- `filter: blur(60px)`
- `opacity: 0.3`

## Layout & Spacing

### Container
- Max width: `1440px`
- Horizontal centering: `mx-auto`

### Responsive Padding
- **Mobile**: `px-6 py-8`
- **Desktop**: `px-16 py-20`

### Grid Breakpoints
- Mobile: Base (< 640px)
- Tablet: `sm` (640px+)
- Desktop: `lg` (1024px+)
- Large Desktop: `xl` (1280px+)

## Component Documentation

### Header (Navbar)
**Location**: `/components/common/Header.tsx`

**Features**:
- Sticky positioning with backdrop blur
- Hamburger menu on mobile (< lg breakpoint)
- Logo with gradient icon
- Active link highlighting
- Desktop: horizontal navigation
- Mobile: collapsible vertical menu

**Navigation Links** (authenticated):
- Dashboard
- Tickets
- User name display
- Logout button

**Navigation Links** (unauthenticated):
- Login button
- Get Started button (gradient)

### Footer
**Location**: `/components/common/Footer.tsx`

**Features**:
- Dark background matching theme
- Copyright notice
- Three footer links: Privacy Policy, Terms of Service, Support
- Responsive flex layout (column on mobile, row on desktop)

### Hero Section
**Location**: `/pages/Landing.tsx` - Hero Section

**Features**:
- Large heading with gradient text
- Two decorative glowing circles (purple/blue tones)
- Call-to-action buttons: "Get Started" and "Login"
- Wavy SVG divider at bottom
- Full-width responsive design

**Decorative Elements**:
- Left circle: `size-64 lg:size-96` with purple glow
- Right circle: `size-80 lg:size-[32rem]` with light purple glow

### Feature Cards
**Location**: `/pages/Landing.tsx` - Features Section

**Features**:
- 3-column grid on desktop (2-column on tablet)
- Rounded corners with gradient icon backgrounds
- Hover scale effect: `hover:scale-105`
- Icons: Lightning (Zap), Shield, Users

**Card Structure**:
- Icon container with gradient background
- Title in primary text color
- Description in secondary text color

### Authentication Pages (Login & Signup)
**Locations**: `/pages/Login.tsx`, `/pages/Signup.tsx`

**Layout**:
- Two-column grid on desktop
- Left column: Gradient background with decorative circles and feature list
- Right column: Form card

**Left Column Features**:
- Gradient background (purple tones)
- Decorative glowing circles
- App icon in semi-transparent card
- Welcome heading and description
- Feature checklist

**Right Column Features**:
- Centered form card
- Gradient heading text
- Form inputs with validation
- Full-width gradient button
- Link to alternate auth page

**Test Credentials** (displayed on login):
- Email: `demo@user.com`
- Password: `password123`

### Dashboard
**Location**: `/pages/Dashboard.tsx`

**Features**:
- 4 summary stat cards in grid
- Recent tickets section
- "Go to Tickets" button

**Stat Cards**:
1. **Total Tickets**: Purple gradient icon
2. **Open**: Green accent with AlertCircle icon
3. **In Progress**: Amber accent with Clock icon
4. **Closed**: Gray accent with CheckCircle icon

**Card Styling**:
- Hover scale effect: `hover:scale-105`
- Large number display (text-3xl)
- Icon in colored background circle
- Border accent matching status color

**Recent Tickets**:
- Individual ticket cards with rounded borders
- Status badge
- Truncated description (80 chars)
- Hover effect on border

### Tickets Page (Manage Tickets)
**Location**: `/pages/Tickets.tsx`

**Features**:
- Search input with magnifying glass icon
- Status filter dropdown
- Create Ticket button
- 2-column grid of ticket cards
- Action buttons: View, Edit, Delete

**Toolbar**:
- Search field (left)
- Status filter dropdown
- Create button (gradient, right)

**Ticket Cards**:
- Rounded card design
- Status badge at top
- Truncated description (120 chars)
- Created date display
- Three action buttons in footer with icons

**Modals**:
- View modal: Read-only ticket details
- Edit/Create modal: Form with validation
- Delete modal: Confirmation dialog

### Status Tags
**Location**: `/components/common/StatusTag.tsx`

**Badge Colors**:
- **Open**: Green background (20% opacity), green text, green border
- **In Progress**: Amber background (20% opacity), amber text, amber border
- **Closed**: Gray background (20% opacity), gray text, gray border

### Form Components
**Location**: `/components/common/FormInput.tsx`

**Features**:
- Label with required asterisk support
- Dark input background
- Error message display in red
- ARIA attributes for accessibility
- Support for single-line and multiline inputs

**Styling**:
- Rounded borders (1em)
- Purple border (10% opacity)
- Red border on error
- Placeholder in muted color

### Ticket Modal (Create/Edit)
**Location**: `/components/TicketModal.tsx`

**Fields**:
- Title (required)
- Description (required, min 10 characters)
- Status (required: open, in_progress, closed)

**Validation**:
- Inline error messages below fields
- Toast notification on submit error
- Required field indicators

**Actions**:
- Cancel button (outline style)
- Create/Update button (gradient)

### Protected Routes
**Location**: `/components/common/ProtectedRoute.tsx`

**Behavior**:
- Checks authentication state from Zustand store
- Redirects to `/login` if not authenticated
- Displays toast: "Your session has expired — please log in again"
- Preserves location for post-login redirect

## Session Management

### Storage Key
`ticketapp_session` in localStorage

### Stored Data
- User information (id, email, name)
- Authentication status
- All tickets

### Mock Authentication
Login and signup create a mock user session without actual API calls.

## Toast Notifications

**Position**: Top-right

**Success Messages**:
- "Successfully logged in!"
- "Account created successfully!"
- "Ticket created successfully"
- "Ticket updated successfully"
- "Ticket deleted successfully"

**Error Messages**:
- "Please fix the form errors"
- "Your session has expired — please log in again"

## Accessibility Features

### Focus Styles
- 2px outline with 2px offset
- Purple color (`#C0B7E8`)
- Applied to all interactive elements

### ARIA Attributes
- Labels linked to inputs via `htmlFor`
- Error messages linked via `aria-describedby`
- Invalid state indicated via `aria-invalid`
- Button labels via `aria-label`

### Keyboard Navigation
- All interactive elements keyboard accessible
- Modal escape key handling
- Focus trap in modals
- Visible focus indicators

### Screen Reader Support
- Semantic HTML elements
- Hidden decorative elements with `aria-hidden`
- Descriptive button labels
- Form validation feedback

## Responsive Behavior

### Mobile (< 640px)
- Single column layouts
- Full-width buttons
- Stacked navigation
- Hamburger menu
- Reduced padding

### Tablet (640px - 1023px)
- 2-column ticket grid
- 2-column feature cards
- Expanded navigation menu

### Desktop (1024px+)
- 3-column feature cards
- 4-column stat cards
- Horizontal navigation
- 2-column ticket grid
- Two-column auth layout visible

## Implementation Notes

### Reusable Styles
Global CSS classes defined in `/styles/globals.css`:
- `.gradient-text` - Purple gradient text effect
- `.gradient-button` - Purple gradient button with hover effect
- `.glow-circle` - Blurred decorative circle effect

### Color Variables
CSS custom properties in `:root`:
- Base colors, text colors, borders
- Consistent theming across all components

### Component Structure
- Modular, single-responsibility components
- Consistent prop interfaces
- TypeScript for type safety
- Accessible by default

### State Management
Zustand store (`/store/useTicketStore.ts`):
- Tickets array with CRUD operations
- User authentication state
- LocalStorage persistence

## Browser Support
- Modern browsers with CSS Grid and Flexbox
- Backdrop filter support
- CSS custom properties
- SVG support

## Performance Considerations
- Smooth CSS transitions (0.3s ease)
- Transform-based animations (translateY)
- Minimal re-renders with proper state management
- Lazy loading for modals

---

**Last Updated**: Based on TicketWave design specifications
**Framework**: React 18, Tailwind CSS v4, Zustand
**Target Resolution**: 320px to 1440px+
