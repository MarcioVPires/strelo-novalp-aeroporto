interface ThemePalette {
  primary: { main: string };
  secondary: { main: string };
  lightHeadline: { main: string };
  darkHeadline: { main: string };
  lightSubtitle: { main: string };
  darkSubtitle: { main: string };
  darkBackground: { main: string };
  tagBackground: { main: string };
  darkTagBackground: { main: string };
  gradientbutton: { main: string };
  gradienttitle: { main: string };
  gradientLightCard: { main: string };
  gradientDarkCard: { main: string };
  divider: { main: string };
}

function pallete(themeMode: string) {
  const themePalettes: Record<string, ThemePalette> = {
    default: {
      primary: { main: '#627FFF' },
      secondary: { main: '#385DFF' },
      lightHeadline: { main: '#FFFFFF' },
      darkHeadline: { main: '#212636' },
      lightSubtitle: { main: '#667085' },
      darkSubtitle: { main: '#B3B9C6' },
      darkBackground: { main: '#020919' },
      tagBackground: { main: '#EAEEFB' },
      darkTagBackground: { main: '#DDE3FF' },
      gradientbutton: { main: 'linear-gradient(0deg, #5B7FFF 0%, #3637F5 100%)' },
      gradienttitle: { main: 'linear-gradient(-90deg, #627FFF 0%, #FFFFFF 81%)' },
      gradientLightCard: { main: 'linear-gradient(0deg, #111D54 0%, #2A41A7 100%)' },
      gradientDarkCard: { main: 'linear-gradient(-90deg, #010118 0%, #224699 100%)' },
      divider: { main: '#FFFFFF' },
    },
  };

  return themePalettes[themeMode];
}

export default pallete;
