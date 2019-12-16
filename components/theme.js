// theme.js
const light = {
  body: '#E2E2E2',
  text: {
    primary: 'yellow',
    secondary: '#2f3037',
    tertiary: '#525560',
    quarternary: '#9194a1',
    placeholder: 'rgba(82,85,96,0.5)',
    onPrimary: '#ffffff',
  },
};

const dark = {
  body: '#363537',
  text: {
    primary: 'yellow',
    secondary: '#e3e4e8',
    tertiary: '#a9abb6',
    quarternary: '#6c6f7e',
    placeholder: 'rgba(145,148,161,0.5)',
    onPrimary: '#050505',
  },
};

export const lightTheme = { ...light };
export const darkTheme = { ...dark };
