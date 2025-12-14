# Delete Duplicate Vercel Project - Step by Step

## Step 1: Delete in Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Find the project: **`design-system-storybook-blush`** (or `design-system-storybook`)
3. Click on the project
4. Go to **Settings** → Scroll to bottom
5. Click **Delete Project**
6. Type the project name to confirm
7. Click **Delete**

## Step 2: Re-link Local Project

After deleting, update your local Vercel link to point to `terry-2022`:

```bash
# Remove old link
rm -rf .vercel

# Link to terry-2022 project
vercel link

# When prompted:
# - Link to existing project? → Yes
# - Select project → terry-2022
```

## Step 3: Verify

1. Check deployment: https://terry-2022.vercel.app
2. Verify it auto-deploys on next git push
3. Confirm only one project exists in Vercel Dashboard

## Alternative: Quick Cleanup Script

Run this to prepare for re-linking:

```bash
cd design-system-playground
rm -rf .vercel
vercel link
```







