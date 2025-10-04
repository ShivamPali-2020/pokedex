# Pokemon Pokedex App

A modern, interactive Pokemon encyclopedia built with React and TypeScript. Browse through Pokemon, search for your favorites, and view detailed information about each Pokemon.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ShivamPali-2020/pokedex.git

   cd pokedex
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the app in action!

## Tech Stack

- **Frontend**: React 17, TypeScript
- **Styling**: React-JSS, Material-UI
- **Data Fetching**: Apollo Client, GraphQL
- **Routing**: React Router DOM
- **API**: Pokemon GraphQL API

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Nav/            # Navigation component
│   └── PokemonList/    # Pokemon-related components
├── hooks/              # Custom React hooks
├── screens/            # Page components
├── contexts/           # React contexts
├── theme/              # Theme configuration
└── types/              # TypeScript type definitions
```

## How to Use

1. **Browse Pokemon**: Visit the Pokemon list page to see all available Pokemon
2. **Search**: Use the search bar to find specific Pokemon by name
3. **View Details**: Click on any Pokemon card to open a detailed modal
4. **Navigate**: Use the navigation menu to switch between pages

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run lint` - Runs ESLint for code quality

## Key Components

- **PokemonList**: Displays the grid of Pokemon cards
- **SearchBar**: Handles Pokemon search functionality
- **PokemonDetailsModal**: Shows detailed Pokemon information
- **Skeleton Components**: Loading states for better UX

## Responsive Design

The app is fully responsive and works great on:

- Desktop computers
- Tablets
- Mobile phones
