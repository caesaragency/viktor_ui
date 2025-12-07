# Setup Instructions

## Prerequisites

Before you can work on this project, you need to install:

1. **Node.js** (version 18 or higher recommended)
   - Download from: https://nodejs.org/
   - This includes `npm` (Node Package Manager)

2. **Git** (if cloning from a repository)
   - Usually pre-installed on Linux/Mac
   - Download from: https://git-scm.com/ for Windows

## Installation Commands

### Step 1: Install Node.js (if not already installed)

**Check if Node.js is installed:**
```bash
node --version
npm --version
```

**If not installed, choose one method:**

**Option A - Using package manager (Linux):**
```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Or using nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 20
nvm use 20
```

**Option B - Download installer:**
- Visit https://nodejs.org/ and download the LTS version

### Step 2: Clone the repository (if using Git)

```bash
git clone <repository-url>
cd viktor_ui
```

### Step 3: Install project dependencies

```bash
npm install
```

This will install all dependencies listed in `package.json`:
- Next.js 16.0.6
- React 19.2.0
- TypeScript
- Tailwind CSS v4
- ESLint
- And all their dependencies

### Step 4: Run the development server

```bash
npm run dev
```

The application will be available at: http://localhost:3000

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Quick Setup (All-in-One Bash Commands)

If you already have Node.js installed, here's the quick setup:

```bash
# Clone repository (replace with your repo URL)
git clone <repository-url>
cd viktor_ui

# Install dependencies
npm install

# Start development server
npm run dev
```

## Troubleshooting

**If you get permission errors:**
- On Linux/Mac, you might need to use `sudo` for global installs
- Better: Use `nvm` (Node Version Manager) to avoid permission issues

**If npm install fails:**
- Make sure you have Node.js 18+ installed
- Try deleting `node_modules` and `package-lock.json`, then run `npm install` again
- Check your internet connection

**If port 3000 is already in use:**
- Next.js will automatically try the next available port (3001, 3002, etc.)
- Or kill the process using port 3000

