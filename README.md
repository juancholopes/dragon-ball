# Dragon Ball API Explorer

A React application that fetches and displays Dragon Ball characters using an external API. This project demonstrates API integration, component composition, and modern React patterns.

## Features

- Browse Dragon Ball characters from different sagas
- Interactive character cards with tilt animations
- Pagination through character collections
- Responsive design with Material-UI and Tailwind CSS
- Smooth animations using Framer Motion and GSAP

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS, Material-UI
- **Animations**: Framer Motion, GSAP
- **API**: Dragon Ball API (https://dragonballapp.vercel.app)
- **Build Tool**: Vite
- **Package Manager**: pnpm

## Project Structure

```
dragon-ball/
├── public/
├── src/
│   ├── assets/           # Images and static files
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components
│   │   ├── Paginator.jsx    # Saga selection component
│   │   └── TiltedCard.jsx   # Character card component
│   ├── fonts/           # Custom fonts
│   ├── lib/             # Utility libraries
│   ├── App.jsx          # Main application component
│   ├── api.js           # API service functions
│   ├── main.jsx         # Application entry point
│   └── style.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md           # This file
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dragon-ball
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## API Integration

The application uses the Dragon Ball API to fetch character data:
- Base URL: `https://dragonballapp.vercel.app`
- Endpoints: Various saga-specific character collections

## License

This project is for educational purposes demonstrating API integration and React development patterns.