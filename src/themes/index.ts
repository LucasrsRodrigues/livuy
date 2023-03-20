import { extendTheme } from 'native-base';

export const BASETHEME = extendTheme({
  fontConfig: {
    Poppins: {
      100: {
        normal: "Poppins_100Thin"
      },
      200: {
        normal: "Poppins_200ExtraLight"
      },
      300: {
        normal: "Poppins_300Light"
      },
      400: {
        normal: "Poppins_400Regular"
      },
      500: {
        normal: "Poppins_500Medium"
      },
      600: {
        normal: "Poppins_600SemiBold"
      },
      700: {
        normal: "Poppins_700Bold"
      },
      800: {
        normal: "Poppins_800ExtraBold"
      },
      900: {
        normal: "Poppins_900Black"
      },
    }
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
    mono: "Poppins",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xx: 28,
  },
  sizes: {
    17: 69
  }
});

type CustomThemeType = typeof BASETHEME;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType { }
}
