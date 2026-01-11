import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './content/**/*.{mdx}', // if you store posts here
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#1f2937',
            '--tw-prose-headings': '#020617',
            '--tw-prose-links': '#2563eb',
            '--tw-prose-code': '#0f172a',
            '--tw-prose-pre-bg': '#020617',
            lineHeight: '1.75',
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            h2: {
              marginTop: '2.5em',
              marginBottom: '1em',
            },
            h3: {
              marginTop: '2em',
              marginBottom: '0.75em',
            },
            pre: {
              padding: '1.25rem',
              borderRadius: '0.75rem',
            },
            code: {
              backgroundColor: 'rgba(15,23,42,0.05)',
              padding: '0.15rem 0.35rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': '#d1d5db',
            '--tw-prose-headings': '#f8fafc',
            '--tw-prose-links': '#60a5fa',
            '--tw-prose-code': '#e5e7eb',
            '--tw-prose-pre-bg': '#020617',
            code: {
              backgroundColor: 'rgba(255,255,255,0.08)',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
