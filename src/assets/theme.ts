import { Theme } from '@react-navigation/native';
import colors from '../core/constants/colors';

const defaultFontFamily = 'Inter-Regular';

const lightTheme: Theme = {
  dark: false,
  fonts: {
    bold: {
      fontFamily: defaultFontFamily,
      fontWeight: 'bold',
    },
    heavy: {
      fontFamily: defaultFontFamily,
      fontWeight: '800',
    },
    medium: {
      fontFamily: defaultFontFamily,
      fontWeight: '500',
    },
    regular: {
      fontFamily: defaultFontFamily,
      fontWeight: '400',
    },
  },
  colors: {
    background: colors.monochrome.white,
    card: colors.monochrome.white,
    text: colors.font.black,
    border: colors.monochrome['200'],
    notification: colors.brand.orange,
    primary: colors.brand.orange,
  },
};

// TODO: need to change once dark theme support is implemented
const darkTheme: Theme = {
  dark: true,
  fonts: {
    bold: {
      fontFamily: defaultFontFamily,
      fontWeight: 'bold',
    },
    heavy: {
      fontFamily: defaultFontFamily,
      fontWeight: '800',
    },
    medium: {
      fontFamily: defaultFontFamily,
      fontWeight: '500',
    },
    regular: {
      fontFamily: defaultFontFamily,
      fontWeight: '400',
    },
  },
  colors: {
    background: colors.monochrome.white,
    card: colors.monochrome.white,
    text: colors.font.black,
    border: colors.monochrome['200'],
    notification: colors.brand.orange,
    primary: colors.brand.orange,
  },
};

const theme = {
  light: lightTheme,
  dark: darkTheme,
};

export default theme;
