#!/bin/bash
# Development script - starts API and Web servers concurrently

set -e

echo "🚀 Starting development servers..."

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found. Copying from .env.example..."
    cp .env.example .env
fi

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping servers..."
    kill $API_PID $WEB_PID 2>/dev/null || true
    exit
}

trap cleanup SIGINT SIGTERM

# Start API server
echo "📡 Starting API server on port 3000..."
cd app/api
npm run dev &
API_PID=$!
cd ../..

# Wait a bit for API to start
sleep 2

# Start Web server
echo "🌐 Starting Web server on port 5173..."
cd app/web
npm run dev &
WEB_PID=$!
cd ../..

echo ""
echo "✅ Servers started!"
echo "   API:  http://localhost:3000"
echo "   Web:  http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop all servers"

# Wait for both processes
wait







