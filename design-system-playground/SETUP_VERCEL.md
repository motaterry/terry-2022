# Vercel Configuration Guide

## Quick Fix: Set Root Directory

Your repository has the app in `design-system-playground/` subdirectory, but Vercel is trying to build from the root. Here's how to fix it:

## Option 1: Vercel Dashboard (Recommended - 2 minutes)

1. **Go to Project Settings:**
   ```
   https://vercel.com/terrymota0-gmailcoms-projects/design-system-playground/settings/general
   ```

2. **Find "Root Directory" section**

3. **Set Root Directory to:** `design-system-playground`

4. **Click "Save"**

5. **Redeploy:**
   - Go to Deployments tab
   - Click "Redeploy" on the latest deployment
   - Or push a new commit to trigger auto-deploy

## Option 2: Vercel API (Automated - Requires Token)

### Step 1: Get Your Vercel Token

1. Go to: https://vercel.com/account/tokens
2. Click "Create Token"
3. Name it: "Design System Config"
4. Copy the token

### Step 2: Run the Configuration Script

```bash
cd design-system-playground

# Set your token
export VERCEL_TOKEN="your-token-here"

# Run the update script
./update-vercel-root.sh $VERCEL_TOKEN
```

Or use curl directly:

```bash
curl -X PATCH \
  "https://api.vercel.com/v9/projects/design-system-playground?teamId=terrymota0-gmailcoms-projects" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{"rootDirectory": "design-system-playground"}'
```

## Option 3: Vercel CLI (Interactive)

```bash
cd design-system-playground

# Link your project
npx vercel link

# Follow prompts:
# - Set up and deploy? → No (we just want to link)
# - Which scope? → terrymota0-gmailcoms-projects
# - Link to existing project? → Yes
# - What's the name of your project? → design-system-playground

# Note: Root Directory must still be set via Dashboard or API
```

## Verification

After configuring, verify:

1. **Check Settings:**
   - Go to: https://vercel.com/terrymota0-gmailcoms-projects/design-system-playground/settings/general
   - Verify "Root Directory" shows: `design-system-playground`

2. **Trigger a New Deployment:**
   ```bash
   git commit --allow-empty -m "Trigger Vercel rebuild"
   git push
   ```

3. **Check Build Logs:**
   - Should no longer see: `ENOENT: no such file or directory, open '/vercel/path0/package.json'`
   - Should see: `Running "install" command: npm install` successfully

## Current Configuration

Your `vercel.json` is correctly configured:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "npm install"
}
```

This will:
- ✅ Build Storybook first (`npm run build-storybook`)
- ✅ Then build Next.js (`next build`)
- ✅ Serve Storybook at `/storybook` route
- ✅ Serve Next.js app at root

## Storybook Access

After deployment:
- **Public URL:** `https://design-system-playground-[hash].vercel.app/storybook`
- **Main App:** `https://design-system-playground-[hash].vercel.app`

## Need Help?

If you encounter issues:
1. Check build logs in Vercel dashboard
2. Verify Root Directory is set correctly
3. Ensure `package.json` exists in `design-system-playground/` directory

