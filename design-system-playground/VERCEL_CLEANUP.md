# Vercel Deployment Cleanup Guide

## Current Situation

You have **two Vercel projects** deploying the same Next.js app from the same GitHub repo:

1. **`terry-2022.vercel.app`** - Auto-created from GitHub repo name
2. **`design-system-storybook-blush.vercel.app`** - Manually created project

Both are:
- ✅ Connected to: `https://github.com/motaterry/terry-2022.git`
- ✅ Deploying: Next.js app (using `vercel.json`)
- ✅ Auto-deploying on every push to `main`

## Recommended Solution

### Option A: Keep One Project (Simplest)

1. **Delete one duplicate:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Delete `terry-2022` project (or `design-system-storybook-blush` - your choice)
   - Keep the one you prefer

2. **Update local link (if needed):**
   ```bash
   # If you keep terry-2022, unlink and re-link:
   rm -rf .vercel
   vercel link
   # Select: terry-2022 project
   ```

### Option B: Separate Next.js and Storybook (Recommended)

Configure one project for Next.js and one for Storybook:

#### 1. Keep `terry-2022` for Next.js App
- Already configured correctly ✅
- Uses `vercel.json` (builds Next.js)
- URL: `https://terry-2022.vercel.app`

#### 2. Configure `design-system-storybook-blush` for Storybook

**In Vercel Dashboard:**
1. Go to `design-system-storybook-blush` project
2. Settings → General
3. Update:
   - **Build Command:** `npm run build-storybook`
   - **Output Directory:** `storybook-static`
   - **Framework Preset:** `Other` (or `Static Site`)
   - **Install Command:** `npm install`

**Or use Vercel CLI:**
```bash
# Link to storybook project
rm -rf .vercel
vercel link
# Select: design-system-storybook-blush

# Copy storybook config
cp vercel.json.storybook vercel.json

# Deploy
vercel --prod
```

## Verification Steps

After cleanup, verify:

1. **Next.js App:**
   - Visit: `https://terry-2022.vercel.app`
   - Should show: Design System Playground homepage

2. **Storybook (if configured):**
   - Visit: `https://design-system-storybook-blush.vercel.app`
   - Should show: Storybook interface with components

3. **GitHub Sync:**
   - Both projects should show "Connected to GitHub" in Vercel Dashboard
   - Both should auto-deploy on push to `main`

## Current Configuration Files

- `vercel.json` - Next.js deployment config (currently active)
- `vercel.json.storybook` - Storybook deployment config (backup)
- `.vercel/project.json` - Local link to `design-system-storybook` project

## Next Steps

1. Decide which option you prefer (A or B)
2. Follow the steps above
3. Test deployments after changes







