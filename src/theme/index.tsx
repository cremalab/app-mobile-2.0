import { extendTheme } from "native-base"

// Default theme: https://docs.nativebase.io/default-theme

// Customizing native-base theme: https://docs.nativebase.io/customizing-theme

// See also: https://docs.nativebase.io/typescript

export const customTheme = extendTheme({
  components: {
    Text: {
      defaultProps: {
        variant: "regular",
      },
      variants: {
        title1: { fontSize: 48 },
        title2: { fontSize: 32 },
        title3: { fontSize: 24 },
        large: { fontSize: 18 },
        regular: { fontSize: 16 },
        small: { fontSize: 14 },
        tiny: { fontSize: 12 },
      },
    },
  },
})

type CustomThemeType = typeof customTheme

// Extend the internal NativeBase Theme
declare module "native-base" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ICustomTheme extends CustomThemeType {}
}
