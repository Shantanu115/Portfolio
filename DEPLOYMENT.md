# Deployment Guide

## Deploying to Vercel

This project is fully compatible with Vercel deployment. Follow these steps:

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect the Vite framework
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Navigate to the project directory:
   ```bash
   cd easyfolio-react
   ```

3. Run the deployment command:
   ```bash
   vercel
   ```

4. Follow the prompts to complete deployment

### Build Configuration

The project is already configured with:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Environment Variables

No environment variables are required for this project.

### Custom Domain

After deployment, you can add a custom domain:
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

### Troubleshooting

If you encounter any issues:

1. **Build fails**: Make sure all dependencies are in `package.json`
2. **Routing issues**: The `vercel.json` file handles SPA routing
3. **Images not loading**: Ensure all images are in the `public` folder
4. **404 errors**: Check that `vercel.json` rewrites are configured correctly

### Local Preview

To preview the production build locally:

```bash
npm run build
npm run preview
```

This will build the project and serve it locally on port 4173.

## Project Structure

```
easyfolio-react/
├── public/           # Static assets (images, favicon)
├── src/
│   ├── components/   # React components
│   ├── pages/        # Page components
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles
├── index.html        # HTML template
├── package.json      # Dependencies and scripts
├── vite.config.js    # Vite configuration
├── vercel.json       # Vercel deployment config
└── tailwind.config.js # Tailwind CSS config
```

## Performance Optimization

The project includes:
- ✅ Code splitting via React Router
- ✅ Optimized images
- ✅ Minified CSS and JS
- ✅ Tree-shaking
- ✅ Fast refresh in development

## Support

For issues or questions:
- Check the [Vercel Documentation](https://vercel.com/docs)
- Review the [Vite Documentation](https://vitejs.dev/)
