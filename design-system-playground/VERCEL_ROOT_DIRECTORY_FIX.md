# Finding Root Directory Setting in Vercel

## Where to Find Root Directory

The **Root Directory** setting is NOT in "General" settings. It's in **"Build and Deployment"** settings.

## Step-by-Step Instructions

1. **In the left sidebar**, click on **"Build and Deployment"** (it's the second item in the sidebar, right below "General")

2. **Scroll down** to find the **"Root Directory"** section

3. **Set Root Directory to:** `design-system-playground`

4. **Click "Save"**

## Direct Link

If you want to go directly to Build and Deployment settings:
```
https://vercel.com/terrymota0-gmailcoms-projects/design-system-playground/settings/general
```
Then click "Build and Deployment" in the sidebar.

Or try:
```
https://vercel.com/terrymota0-gmailcoms-projects/design-system-playground/settings/build-and-deployment
```

## What You Should See

In the "Build and Deployment" section, you'll find settings like:
- Framework Preset
- Build Command
- Output Directory
- **Root Directory** ← This is what you need!
- Install Command
- Node.js Version
- etc.

## Why This Matters

Since your project is in the `design-system-playground/` subdirectory of your repository, Vercel needs to know to build from that directory, not from the repository root.

Without this setting, Vercel will try to find `package.json` at the root of your repository, which doesn't exist, causing the build to fail.

## After Setting Root Directory

1. **Save** the setting
2. **Redeploy** the failed deployment, or
3. **Push a new commit** to trigger a new deployment

The deployment should now succeed! 🎉

