#!/bin/bash

# Git push script for NexusAI project
# This script ensures all files are properly committed and pushed to GitHub

echo "🔄 Preparing to push NexusAI project to GitHub..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git not initialized. Initializing git repository..."
    git init
fi

# Set up remote if not exists
if ! git remote get-url origin &> /dev/null; then
    echo "🔗 Adding GitHub remote repository..."
    git remote add origin https://github.com/rachidchfira/automate-your-future-site-55.git
else
    echo "✅ GitHub remote already configured"
fi

# Check git user configuration
if [ -z "$(git config user.name)" ] || [ -z "$(git config user.email)" ]; then
    echo "⚠️  Git user not configured. Please set up your git credentials:"
    echo "git config --global user.name 'Your Name'"
    echo "git config --global user.email 'your.email@example.com'"
    read -p "Do you want to continue without setting credentials? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Stage all files
echo "📦 Staging all files..."
git add .

# Show what will be committed
echo "📋 Files to be committed:"
git status --porcelain

# Commit with comprehensive message
echo "💾 Committing changes..."
git commit -m "feat: complete project setup for Namecheap deployment

🚀 Deployment Ready Features:
- Optimized Vite configuration for shared hosting with relative paths
- Added .htaccess for React Router support and performance optimization
- Created comprehensive deployment documentation and guides
- Added automated deployment script (deploy.sh)
- Built production-ready assets with code splitting
- Configured Apache settings for security and caching

📁 Project Structure:
- Complete React TypeScript application with modern UI
- Supabase integration for backend services
- Responsive design with Tailwind CSS and Radix UI
- Performance optimized with lazy loading and asset compression

📚 Documentation:
- README.md with complete project overview
- DEPLOYMENT_GUIDE.md with step-by-step instructions
- DEPLOYMENT_SUMMARY.md with quick deployment checklist
- Automated scripts for easy deployment

🔧 Technical Features:
- React 18.3.1 with TypeScript
- Vite 6.3.5 build tool with SWC
- React Router DOM for client-side routing
- Modern UI components with accessibility features
- SEO optimized with proper meta tags
- Security headers and file protection

Ready for immediate deployment to Namecheap shared hosting! 🎉"

# Push to GitHub
echo "🚀 Pushing to GitHub repository..."
git push -u origin main

# Check if push was successful
if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🌐 Repository: https://github.com/rachidchfira/automate-your-future-site-55"
    echo "📁 All files have been uploaded to GitHub"
    echo ""
    echo "📋 Next Steps:"
    echo "1. Visit your GitHub repository to verify all files"
    echo "2. Use the deployment guides to deploy to Namecheap"
    echo "3. Run ./deploy.sh for production builds"
    echo ""
    echo "🎉 Project is now ready for collaboration and deployment!"
else
    echo "❌ Failed to push to GitHub. Please check your credentials and try again."
    echo ""
    echo "💡 Common solutions:"
    echo "1. Check your internet connection"
    echo "2. Verify GitHub repository URL"
    echo "3. Ensure you have push permissions"
    echo "4. Try: git push --set-upstream origin main"
fi
