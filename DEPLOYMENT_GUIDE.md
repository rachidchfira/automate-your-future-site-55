# Namecheap Shared Hosting Deployment Guide

This guide will help you deploy your React application to Namecheap shared hosting.

## 📋 Prerequisites

- Access to your Namecheap cPanel
- A built React application (already completed)
- FTP/SFTP client or cPanel File Manager access

## 🚀 Deployment Steps

### Step 1: Build the Application
✅ **COMPLETED** - The application has been built and is ready in the `dist/` folder.

### Step 2: Upload Files to Namecheap

1. **Login to cPanel:**
   - Go to your Namecheap hosting cPanel
   - Navigate to File Manager

2. **Navigate to the correct directory:**
   - For main domain: Go to `public_html/`
   - For subdomain: Go to `public_html/subdomain_name/`

3. **Upload the dist folder contents:**
   - Upload ALL files from the `dist/` folder to your hosting directory
   - **Important:** Upload the CONTENTS of the dist folder, not the dist folder itself
   - Files to upload:
     ```
     ├── .htaccess (for routing)
     ├── index.html (main entry point)
     ├── favicon.ico
     ├── robots.txt
     ├── placeholder.svg
     └── assets/ (folder with all JS/CSS files)
         ├── index-Bf436Hc6.js
         ├── index-CcAw966N.css
         ├── vendor-CWc6w16D.js
         ├── ui-L3pSw6L8.js
         ├── logo-B1xR7bsz.png
         └── ... (other asset files)
     ```

### Step 3: Verify Deployment

1. **Check your website:**
   - Visit your domain name
   - The React application should load correctly
   - Navigation should work (thanks to .htaccess routing)

2. **Test functionality:**
   - Test all pages and navigation
   - Check if forms work properly
   - Verify all assets load correctly

## 🔧 Configuration Details

### Environment Variables
Your application uses these environment variables (already built into the production bundle):
- `VITE_SUPABASE_URL`: Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Supabase anonymous key

### .htaccess Configuration
The `.htaccess` file includes:
- ✅ React Router support (client-side routing)
- ✅ Gzip compression for better performance
- ✅ Cache headers for static assets
- ✅ Security headers
- ✅ Protection for sensitive files

### Build Optimizations
- ✅ Minified JavaScript and CSS
- ✅ Code splitting with vendor chunks
- ✅ Relative paths for shared hosting compatibility
- ✅ Optimized asset loading

## 🔍 Troubleshooting

### Common Issues:

1. **404 errors on page refresh:**
   - Ensure `.htaccess` file is uploaded and in the root directory
   - Check if mod_rewrite is enabled (most Namecheap plans support it)

2. **Assets not loading:**
   - Verify all files in the `assets/` folder are uploaded
   - Check file permissions (should be 644 for files, 755 for directories)

3. **Blank white page:**
   - Check browser console for JavaScript errors
   - Ensure `index.html` is in the root of your hosting directory

4. **Mixed content errors (HTTP/HTTPS):**
   - Ensure your domain is configured for HTTPS
   - All external resources should use HTTPS URLs

### File Permissions:
- Files: 644
- Directories: 755
- .htaccess: 644

## 📁 File Structure After Upload

Your hosting directory should look like this:
```
public_html/
├── .htaccess
├── index.html
├── favicon.ico
├── robots.txt
├── placeholder.svg
└── assets/
    ├── index-Bf436Hc6.js
    ├── index-CcAw966N.css
    ├── vendor-CWc6w16D.js
    ├── ui-L3pSw6L8.js
    ├── logo-B1xR7bsz.png
    └── ... (other files)
```

## 🌐 Post-Deployment Checklist

- [ ] Website loads on your domain
- [ ] All pages are accessible
- [ ] Navigation works correctly
- [ ] Forms submit properly
- [ ] All images and assets load
- [ ] Mobile responsiveness works
- [ ] Performance is acceptable

## 💡 Additional Tips

1. **Performance:**
   - Enable Cloudflare if available through Namecheap
   - Consider using a CDN for better global performance

2. **Monitoring:**
   - Set up Google Analytics if needed
   - Monitor Core Web Vitals

3. **Updates:**
   - To update the site, rebuild locally and re-upload the dist contents
   - Always backup your current files before uploading new versions

## 🆘 Support

If you encounter issues:
1. Check Namecheap's hosting documentation
2. Contact Namecheap support for server-specific issues
3. Use browser developer tools to debug client-side issues

Your React application is now ready for production deployment! 🎉
