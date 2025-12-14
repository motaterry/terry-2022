/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // shadcn/ui compatibility colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card-bg))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary-base))',
          foreground: 'hsl(var(--primary-fg))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent-base))',
          foreground: 'hsl(var(--accent-fg))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border-base))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring-base))',
        // Custom design tokens
        bg: 'hsl(var(--color-bg))',
        'bg-subtle': 'hsl(var(--color-bg-subtle))',
        fg: 'hsl(var(--color-text))',
        'text-muted': 'hsl(var(--color-text-muted))',
        brand: 'hsl(var(--primary-base))',
        success: 'hsl(var(--color-success))',
        warning: 'hsl(var(--color-warning))',
        danger: 'hsl(var(--color-danger))',
        info: 'hsl(var(--color-info))',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        DEFAULT: 'var(--radius)',
      },
      boxShadow: {
        surface: 'var(--shadow-surface)',
        focus: 'var(--shadow-focus)',
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          fontSize: theme('fontSize.base[0]'),
          fontWeight: theme('fontWeight.medium'),
          borderRadius: theme('borderRadius.md'),
          border: '1px solid transparent',
          cursor: 'pointer',
          transition: 'all 0.2s',
          textDecoration: 'none',
          '&:focus-visible': {
            outline: `2px solid ${theme('colors.ring')}`,
            outlineOffset: '2px',
          },
        },
        '.btn-primary': {
          backgroundColor: theme('colors.primary.DEFAULT'),
          color: theme('colors.primary.foreground'),
          '&:hover': {
            opacity: '0.9',
          },
        },
        '.btn-secondary': {
          backgroundColor: theme('colors.secondary.DEFAULT'),
          color: theme('colors.secondary.foreground'),
          '&:hover': {
            opacity: '0.9',
          },
        },
        '.card': {
          backgroundColor: theme('colors.card.DEFAULT'),
          border: `1px solid ${theme('colors.border')}`,
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.surface'),
        },
        '.input': {
          width: '100%',
          padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
          fontSize: theme('fontSize.base[0]'),
          border: `1px solid ${theme('colors.border')}`,
          borderRadius: theme('borderRadius.md'),
          backgroundColor: theme('colors.background'),
          color: theme('colors.foreground'),
          '&:focus': {
            outline: `2px solid ${theme('colors.ring')}`,
            outlineOffset: '2px',
          },
        },
        '.table': {
          width: '100%',
          borderCollapse: 'collapse',
          'th, td': {
            padding: theme('spacing.4'),
            textAlign: 'left',
            borderBottom: `1px solid ${theme('colors.border')}`,
          },
          th: {
            fontWeight: theme('fontWeight.semibold'),
            color: theme('colors.foreground'),
          },
        },
      });
    },
  ],
};

