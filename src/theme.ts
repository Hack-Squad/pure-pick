import { createTheme } from '@shopify/restyle';

// Define color palettes for light and dark themes
const paletteLight = {
  primary: '#000000',
  secondary: '#D8DBE0',
  colorOne: '#EBFF00',
  colorTwo: '#F5F6F8',
  colorThree: '#E5EDE0',
  
  red: '#FF3B30',
  orange: '#FF9500',
  green: '#34C759',
  blue: '#007AFF',

  gray1: '#E4E7EB',
  gray2: '#CBD2D9',
  gray3: '#9AA5B1',
  gray4: '#7B8794',
  gray5: '#616E7C',
  gray6: '#52606D',
  gray7: '#3E4C59',
  gray8: '#323F4B',
};

const paletteDark = {
  primary: '#000000',
  secondary: '#D8DBE0',
  colorOne: '#EBFF00',
  colorTwo: '#F5F6F8',
  colorThree: '#E5EDE0',
  
  red: '#FF3B30',
  orange: '#FF9500',
  green: '#34C759',
  blue: '#007AFF',

  gray1: '#E4E7EB',
  gray2: '#CBD2D9',
  gray3: '#9AA5B1',
  gray4: '#7B8794',
  gray5: '#616E7C',
  gray6: '#52606D',
  gray7: '#3E4C59',
  gray8: '#323F4B',
};

// Light theme
const lightTheme = createTheme({
  colors: {
    mainBackground: paletteLight.colorTwo,
    cardPrimaryBackground: paletteLight.colorThree,
    text: paletteLight.primary,
    primary: paletteLight.colorOne,
    danger: paletteLight.red,
    warning: paletteLight.orange,
    success: paletteLight.green,
    info: paletteLight.blue,
    gray1: paletteLight.gray1,
    gray2: paletteLight.gray2,
    gray3: paletteLight.gray3,
    gray4: paletteLight.gray4,
    gray5: paletteLight.gray5,
    gray6: paletteLight.gray6,
    gray7: paletteLight.gray7,
    gray8: paletteLight.gray8,
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
    mainBackground: paletteDark.gray8,
    cardPrimaryBackground: paletteDark.gray6,
	text: paletteLight.primary,
    primary: paletteDark.colorOne,
    danger: paletteDark.red,
    warning: paletteDark.orange,
    success: paletteDark.green,
    info: paletteDark.blue,
    gray1: paletteDark.gray1,
    gray2: paletteDark.gray2,
    gray3: paletteDark.gray3,
    gray4: paletteDark.gray4,
    gray5: paletteDark.gray5,
    gray6: paletteDark.gray6,
    gray7: paletteDark.gray7,
    gray8: paletteDark.gray8,
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
