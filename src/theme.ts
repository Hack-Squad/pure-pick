import { createTheme } from '@shopify/restyle';

// Define color palettes for light and dark themes
const paletteLight = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',
};

const paletteDark = {
  purpleLight: '#D1B3FF',
  purplePrimary: '#B28DFF',
  purpleDark: '#8665D0',

  greenLight: '#B4F1E0',
  greenPrimary: '#85E8D1',
  greenDark: '#60B3A6',

  black: '#0B0B0B',
  white: '#0B0B0B',
};

// Light theme
const lightTheme = createTheme({
  colors: {
    mainBackground: paletteLight.white,
    cardPrimaryBackground: paletteLight.purplePrimary,
    text: paletteLight.black,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
      color: 'text',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: 'text',
    },
    defaults: {
      color: 'text',
    },
  },
});

// Dark theme
const darkTheme = createTheme({
  colors: {
    mainBackground: paletteDark.black,
    cardPrimaryBackground: paletteDark.purplePrimary,
    text: paletteDark.white,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
      color: 'text',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: 'text',
    },
    defaults: {
      color: 'text',
    },
  },
});

export type Theme = typeof lightTheme;

export { lightTheme, darkTheme };
