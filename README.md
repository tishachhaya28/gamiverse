# 🎮 Gamiverse — Premium HTML5 Gaming Platform

Gamiverse is a high-performance, full-stack web application designed for discovering and playing premium HTML5 games. It features a modern design, real-time search, and a robust data-fetching architecture.

---

## 🚀 Quick Start Guide

Follow these steps to get the project running on your local machine.

### 1. Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB** (Local or Atlas)
- **npm** or **yarn**

### 2. Backend Setup
```bash
cd server
npm install
# Create a .env file based on the environment section below
npm run dev
```

### 3. Frontend Setup
```bash
cd client
npm install
# Create a .env.local file based on the environment section below
npm run dev
```

### 4. Seed the Database
To populate the platform with initial games:
```bash
cd server
node seed/seedGames.js
```

---

## 🛠️ Technology Stack

### Frontend (Client)
- **Next.js 14**: App Router for server-side rendering and routing.
- **TanStack Query (React Query)**: Enterprise-grade server state management and caching.
- **Axios**: Centralized HTTP client for API interactions.
- **Tailwind CSS**: Modern, responsive styling.
- **Lucide React**: Premium icon set.

### Backend (Server)
- **Node.js & Express**: High-performance API server.
- **Mongoose**: MongoDB object modeling.
- **GameDistribution API**: Integration for fetching game catalogs.

---

## 📁 Project Modules

### `/client` (Frontend)
- **`/src/app`**: Next.js App Router (Page definitions & layouts).
- **`/src/components`**: Reusable UI components (Navbar, Hero, GameGrid).
- **`/src/lib`**: Centralized logic (Axios instance, API service layer).
- **`/src/providers`**: Global context providers (TanStack Query provider).

### `/server` (Backend)
- **`/controllers`**: Logic for handling API requests (Games, Search, Contact).
- **`/models`**: Mongoose schemas (Game, Tag, Page, Contact).
- **`/routes`**: API endpoint definitions.
- **`/seed`**: Database initialization scripts.

---

## 🔐 Environment Variables

### Server (`server/.env`)
```env
PORT=5000
MONGODB_URI=
CLIENT_URL=http://localhost:3000
```

### Client (`client/.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## ✨ Key Features
- **Partial Matching Search**: Smart search that finds games even with incomplete words.
- **Real-time Updates**: Games update instantly without page refreshes.
- **Responsive Design**: Optimized for Desktop, Tablet, and Mobile.
- **Premium Branding**: Integrated logo and favicon for a professional look.

---
Built with smartness 😎.
