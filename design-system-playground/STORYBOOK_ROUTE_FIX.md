# Storybook Route Fix

## Issue
When clicking "Open Storybook", it redirects to `http://localhost:6006/` instead of `/storybook`.

## Cause
The Storybook dev server (`npm run storybook`) is running on port 6006, which can interfere with the Next.js route.

## Solution

### Option 1: Stop Storybook Dev Server (Recommended)

If you're not actively developing Storybook stories, stop the dev server:

```bash
# Find and kill Storybook processes
pkill -f 'storybook dev'

# Or kill specific PIDs
kill 1034 72557
```

Then access Storybook through the Next.js app at:
- **Development:** `http://localhost:3000/storybook`
- **Production:** `https://your-domain.com/storybook`

### Option 2: Use Storybook Dev Server for Development

If you're actively developing Storybook stories and want hot-reload:

1. **Keep Storybook dev server running:** `npm run storybook`
2. **Access it directly:** `http://localhost:6006`
3. **Don't use the `/storybook` route** - that's for production/deployed builds

### Option 3: Use Both (Different Ports)

- **Next.js app:** `npm run dev` → Access Storybook at `/storybook`
- **Storybook dev:** `npm run storybook` → Access at `localhost:6006` for development

## How It Works

- **`/storybook` route:** Serves the **built** Storybook from `storybook-static/` directory
- **`localhost:6006`:** Runs the **dev server** with hot-reload for active development

## When to Use Each

- **Use `/storybook` route:** When you want to test the production build, or when deploying
- **Use `localhost:6006`:** When actively writing/editing Storybook stories and need hot-reload

## Verify It's Working

1. Stop Storybook dev server: `pkill -f 'storybook dev'`
2. Make sure Storybook is built: `npm run build-storybook`
3. Start Next.js dev server: `npm run dev`
4. Visit: `http://localhost:3000/storybook`

You should see Storybook served from the Next.js app!

