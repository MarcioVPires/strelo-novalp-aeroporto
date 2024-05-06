declare module '@mui/material/styles' {
  interface Palette {
    lightHeadline: Palette['primary'];
    darkHeadline: Palette['primary'];
    lightSubtitle: Palette['primary'];
    darkSubtitle: Palette['primary'];
    darkBackground: Palette['primary'];
    tagBackground: Palette['primary'];
    darkTagBackground: Palette['primary'];
    gradientbutton: Palette['primary'];
    gradienttitle: Palette['primary'];
    gradientLightCard: Palette['primary'];
    gradientDarkCard: Palette['primary'];
  }

  interface PaletteOptions {
    lightHeadline?: Palette['primary'];
    darkHeadline?: Palette['primary'];
    lightSubtitle?: Palette['primary'];
    darkSubtitle?: Palette['primary'];
    darkBackground: Palette['primary'];
    tagBackground?: Palette['primary'];
    darkTagBackground?: Palette['primary'];
    gradientbutton?: Palette['primary'];
    gradienttitle?: Palette['primary'];
    gradientLightCard?: Palette['primary'];
    gradientDarkCard?: Palette['primary'];
  }
}

interface ColorProps {
  lightHeadline?: true;
  darkHeadline?: true;
  lightSubtitle?: true;
  darkSubtitle?: true;
  darkBackground: true;
  tagBackground?: true;
  darkTagBackground?: true;
  gradientbutton?: true;
  gradienttitle?: true;
  gradientLightCard?: true;
  gradientDarkCard?: true;
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides extends ColorProps {}
}

declare module '@mui/material/Box' {
  interface BoxPropsColorOverrides extends ColorProps {}
}

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides extends ColorProps {}
}

declare module '@mui/material/Typography' {
  interface TypographyPropsColorOverrides extends ColorProps {}
}

declare module '@mui/material/Link' {
  interface LinkPropsColorOverrides extends ColorProps {}
}
export {};
