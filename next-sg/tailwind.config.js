module.exports = {
  purge: ['/pages/**/*.{js,ts,jsx,tsx}', '/components/**/*.{js,ts,jsx,tsx}'],
  //prefix: 'tw-',
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        maxWidth: {
            'xl': '1400px',
        },
      },
    },
    colors: {
      trans: 'transparent',
      prm: '#e40084',
      prmOp: {
        300: 'rgba(228,0,132.0.3)',
        500: 'rgba(228,0,132.0.5)',
        900: 'rgba(228,0,132.0.9)',
      },
      wh: 'var(--color-wh)',
      bl: 'var(--color-bl)',
      dark: 'var(--color-dark)',
      darkLt: 'var(--color-darkLt)',
      darkDp: 'var(--color-darkDp)',
      yellow: '#ffba0e',
      aGray: '#aaa',
      ltGray: '#7c7c7d',
      dkGray: '#363636',
      blue: '#55a4db',
      gray: {
        100: 'rgba(1,1,1,0.1)',
        500: 'rgba(1,1,1,0.5)',
        900: 'rgba(1,1,1,0.9)',
      },
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
      'lt': '#F05A28',
      'cen': '#EC008C',
      'rt': '#F05A28',
      'top': 'rgb(236, 0, 139)',
      'bot': 'rgb(241, 90, 34)'
    }),
    extend: {
      backgroundImage: {
        //'logo': "url('https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/global/header/PS_logo.png')",
      },
    },
  },
  variants: {
    fill: [],
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/typography'),
    // require('tailwindcss-children'),
  ],
};
