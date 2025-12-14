/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        placeholder: "hsl(var(--placeholder))",
        yellow: {
          DEFAULT: "hsl(var(--yellow))",
          foreground: "hsl(var(--primary-foreground))",
        },
        /* Semantic colors */
        success: {
          DEFAULT: "hsl(var(--success))",
          bg: "hsl(var(--success-bg))",
          text: "hsl(var(--success-text))",
          "text-small": "hsl(var(--success-text-small))",
        },
        danger: {
          DEFAULT: "hsl(var(--danger))",
          bg: "hsl(var(--danger-bg))",
          text: "hsl(var(--danger-text))",
          "text-small": "hsl(var(--danger-text-small))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          bg: "hsl(var(--warning-bg))",
          text: "hsl(var(--warning-text))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          bg: "hsl(var(--info-bg))",
          text: "hsl(var(--info-text))",
        },
        /* Card background tokens - contrast-safe */
        "card-success-bg": "hsl(var(--card-success-bg))",
        "card-success-text": "hsl(var(--card-success-text))",
        "card-success-text-small": "hsl(var(--card-success-text-small))",
        "card-danger-bg": "hsl(var(--card-danger-bg))",
        "card-danger-text": "hsl(var(--card-danger-text))",
        "card-danger-text-small": "hsl(var(--card-danger-text-small))",
        "card-warning-bg": "hsl(var(--card-warning-bg))",
        "card-warning-text": "hsl(var(--card-warning-text))",
        "card-info-bg": "hsl(var(--card-info-bg))",
        "card-info-text": "hsl(var(--card-info-text))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "var(--radius)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Archivo Black', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 24px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}



