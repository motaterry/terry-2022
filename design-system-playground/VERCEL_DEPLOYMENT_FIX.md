# Vercel Deployment Issues - Fix Guide

## Problem: Only One Deployment Showing (and It's Failing)

You're seeing only one deployment from `feat/storybook-same-host` branch, and it's showing an error.

## Root Causes

### 1. **Branch Deployment Settings**
Vercel might only be deploying from `main` branch. Feature branches need to be enabled.

### 2. **Root Directory Configuration**
Your project is in `design-system-playground/` subdirectory, but Vercel might be building from the repository root.

### 3. **Build Errors**
The build might be failing due to configuration issues.

## Quick Fixes

### Fix 1: Enable Branch Deployments in Vercel

1. **Go to Vercel Dashboard:**
   ```
   https://vercel.com/terrymota0-gmailcoms-projects/design-system-playground/settings/git
   ```

2. **Check "Production Branch":**
   - Should be set to `main`
   - This is your production deployment branch

3. **Enable Preview Deployments:**
   - Scroll to "Preview Deployments"
   - Make sure "Automatic Preview Deployments" is **enabled**
   - This will create preview deployments for all branches (including `feat/storybook-same-host`)

4. **Branch Filter (Optional):**
   - If you want to deploy ALL branches: Leave empty or set to `*`
   - If you want specific branches: Add patterns like `feat/*`, `fix/*`

### Fix 2: Set Root Directory

**CRITICAL:** Your project is in a subdirectory, so Vercel needs to know where to build from.

1. **Go to Project Settings:**
   ```
   https://vercel.com/terrymota0-gmailcoms-projects/design-system-playground/settings/general
   ```

2. **Find "Root Directory" section**

3. **Set Root Directory to:** `design-system-playground`

4. **Click "Save"**

### Fix 3: Check Build Configuration

Your `vercel.json` looks correct, but verify:

1. **Build Command:** `npm run build` ✅
2. **Output Directory:** `.next` ✅
3. **Framework:** `nextjs` ✅
4. **Install Command:** `npm install` ✅

## Verify Current Configuration

Run this to check your Vercel project settings:

```bash
cd design-system-playground

# Check if project is linked
cat .vercel/project.json

# Should show:
# {
#   "projectId": "prj_fEdsOQ9we8O1SCptYWkaBNNkQJEe",
#   "orgId": "team_LC6NAM6dObt8AKMeT7KcXlFr",
#   "projectName": "design-system-playground"
# }
```

## Test Build Locally

Before deploying, test the build locally:

```bash
cd design-system-playground

# Clean previous builds
rm -rf .next storybook-static

# Run the build (same as Vercel)
npm run build

# If successful, you should see:
# ✓ Storybook build completed successfully
# ✓ Compiled successfully
```

## Trigger New Deployment

After fixing the settings:

### Option 1: Push a New Commit
```bash
git commit --allow-empty -m "chore: trigger Vercel rebuild"
git push origin feat/storybook-same-host
```

### Option 2: Redeploy from Dashboard
1. Go to: https://vercel.com/terrymota0-gmailcoms-projects/design-system-playground/deployments
2. Find the failed deployment
3. Click "Redeploy" (three dots menu)

### Option 3: Merge to Main
```bash
git checkout main
git merge feat/storybook-same-host
git push origin main
```

## Expected Behavior After Fix

After fixing the configuration, you should see:

1. **Production Deployment:**
   - Branch: `main`
   - Status: ✅ Ready
   - URL: `https://design-system-playground-*.vercel.app`

2. **Preview Deployments:**
   - Branch: `feat/storybook-same-host`
   - Status: ✅ Ready
   - URL: `https://design-system-playground-git-feat-storybook-same-host-*.vercel.app`

## Check Deployment Logs

If deployment still fails:

1. Go to the deployment in Vercel dashboard
2. Click on the deployment
3. Check "Build Logs" tab
4. Look for errors like:
   - `ENOENT: no such file or directory` → Root directory issue
   - `Command failed` → Build script issue
   - `Module not found` → Dependency issue

## Common Issues & Solutions

### Issue: "No such file or directory, package.json"
**Solution:** Root directory not set. Set it to `design-system-playground` in Vercel settings.

### Issue: "Build command failed"
**Solution:** Check build logs. Common causes:
- Storybook build failing (check `.storybook/main.ts` stories paths)
- Next.js build errors (check `next.config.ts`)
- Missing dependencies (run `npm install` locally first)

### Issue: "Only main branch deploys"
**Solution:** Enable "Automatic Preview Deployments" in Git settings.

### Issue: "Deployment times out"
**Solution:** 
- Storybook build can be slow. Consider:
  - Optimizing Storybook config
  - Using `build-storybook` with `--quiet` flag
  - Increasing build timeout in Vercel settings

## Next Steps

1. ✅ Set Root Directory to `design-system-playground`
2. ✅ Enable Preview Deployments
3. ✅ Test build locally
4. ✅ Push a new commit or redeploy
5. ✅ Check deployment logs if still failing

## Need More Help?

- Check Vercel docs: https://vercel.com/docs
- Check build logs in Vercel dashboard
- Verify your `package.json` scripts match `vercel.json` config

