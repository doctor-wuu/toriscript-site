/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md}'],
  safelist: [
    "toc",
    "toc-list",
    "depth-2",
    "depth-3",
    "depth-4"
  ],
  theme: {
    extend: {
  fontFamily: {
    sans: ['"Noto Sans JP"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  },
  typography: {
    DEFAULT: {
      css: {
        p: {
          fontSize: '1rem',
          color: '#808080',
          fontFamily: '"Noto Sans JP", sans-serif',
              marginBottom: '1.4rem',
              lineHeight: '1.7',
              textShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.04)', // ⭐️ 極薄シャドウ追加
            },
            h1: {
              fontSize: '2rem',
              fontWeight: '500',
              color: '#9e9e9e',
              fontFamily: '"Noto Sans JP", sans-serif',
              backgroundColor: '#f2f2f2',
              padding: '1.5rem 1.25rem',
              marginBottom: '2rem',
              lineHeight: '1.6',
            },
            h2: {
              fontSize: '1.375rem',
              fontWeight: '600',
              lineHeight: '1.4',
              color: '#828282',
              padding: '1rem 0.5rem',
              marginTop: '1.25rem',
              marginBottom: '1rem',
              borderLeft: 'none',
              borderRight: 'none',
            },
            h3: {
              fontSize: '1.125rem',
              fontWeight: '600',
              color: '#aa8c82',
              marginTop: '0.25rem',
              marginBottom: '0.5rem',
              position: 'relative',
              paddingLeft: '1.5rem',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: '0.35rem',
                top: '0.5em',
                width: '0.6em',
                height: '0.6em',
                backgroundColor: '#aa8c82',
                borderRadius: '20%',
                display: 'inline-block',
              },
            },
            h4: {
              fontSize: '1rem',
              fontWeight: '600',
              color: '#aa8c82',
              marginTop: '0.25rem',
              marginBottom: '0.25rem',
              position: 'relative',
              paddingLeft: '2rem',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: '0.8rem',
                top: '0.5rem',
                width: '0',
                height: '0',
                borderLeft: '0.4rem solid transparent',
                borderRight: '0.4rem solid transparent',
                borderTop: '0.5rem solid #aa8c82',
                borderRadius: '2px',
              },
            },
            '.prose h4 + p': {
              marginLeft: '1.75rem',
            },
            'ul li': {
              position: 'relative',
              paddingLeft: '1.25rem',
              marginBottom: '0.75rem',
              color: '#808080',
              fontSize: '1em',
              fontWeight: '400',
              fontFamily: 'inherit',
              lineHeight: '1.5',
              textDecoration: 'underline',
              textDecorationColor: '#EEE8E6',
              textUnderlineOffset: '0.2em',
              listStyle: 'none',
            },
            'ul li::before': {
              content: '""',
              position: 'absolute',
              left: '0',
              top: '0.5em',
              width: '0.5em',
              height: '0.5em',
              backgroundColor: '#66544E',
              borderRadius: '2px',
              display: 'inline-block',
            },
            'ol': {
  maxWidth: '95%',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'left',
},

'ol li': {
  position: 'relative',
  backgroundColor: '#EEE8E6',
  color: '#808080',
  padding: '0.5em 0.5em 0.5em 1.75em', // ← 少しだけ左に寄せる（2.25em → 1.75em）
  marginBottom: '0.3rem',
  fontWeight: '600',
  borderRadius: '0.25rem',
  listStyle: 'none',
  borderBottom: '2px solid #ffffff',
  counterIncrement: 'item',
},

'ol li::before': {
  left: '0.3em', // ← 少しだけ内側に
},
            'ul li, ol li': {
              fontSize: '1em',
              fontWeight: '400',
              color: '#808080',
              lineHeight: '1.5',
              fontFamily: 'inherit',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  //  require('@tailwindcss/line-clamp'),
  ],
};
