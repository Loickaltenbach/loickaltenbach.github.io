#!/bin/bash

# Portfolio Development Script
echo "🚀 Starting Portfolio Development Environment"
echo "============================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Please run this script from the portfolio root directory."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🏗️  Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🌐 Starting development server..."
    echo "   Open http://localhost:5173 in your browser"
    echo ""
    echo "🔧 Available commands:"
    echo "   npm run dev     - Start development server"
    echo "   npm run build   - Build for production"
    echo "   npm run deploy  - Deploy to GitHub Pages"
    echo ""
    npm run dev
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
