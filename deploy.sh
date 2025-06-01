#!/bin/bash

# Deployment script for Namecheap shared hosting
# This script builds the project and prepares it for upload

echo "🚀 Starting deployment preparation..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist

# Install dependencies (if needed)
echo "📦 Checking dependencies..."
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ -d "dist" ] && [ -f "dist/index.html" ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📁 Files ready for upload in the 'dist' folder:"
    ls -la dist/
    echo ""
    echo "📋 Next steps:"
    echo "1. Login to your Namecheap cPanel"
    echo "2. Go to File Manager"
    echo "3. Navigate to public_html/"
    echo "4. Upload ALL contents from the 'dist' folder"
    echo "5. Make sure .htaccess file is uploaded for routing support"
    echo ""
    echo "🌐 Your website will be live at your domain after upload!"
else
    echo "❌ Build failed! Check the error messages above."
    exit 1
fi
