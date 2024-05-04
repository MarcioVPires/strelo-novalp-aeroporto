interface ThemePalette {
  info: { main: string };
  success: { main: string };
  warning: { main: string };
  error: { main: string };
  primary: {
    main: string;
    alt: string;
  };
  headline: {
    light: string;
    dark: string;
  };
  subtitle: {
    light: string;
    dark: string;
  };
  background: {
    tag: string;
    darktag: string;
  };
  gradient: {
    button: string;
    titles: string;
    lightcard: string;
    darkcard: string;
  };
  divider: string;
  action: any;
}

function pallete(themeMode: string) {
  const themePalettes: Record<string, ThemePalette> = {
    default: {
      info: {
        main: '#627FFF',
      },
      success: {
        main: '#627FFF',
      },
      warning: {
        main: '#627FFF',
      },
      error: {
        main: '#627FFF',
      },
      primary: {
        main: '#627FFF',
        alt: '385DFF',
      },
      headline: {
        light: '#FFFFFF',
        dark: '#212636',
      },
      subtitle: {
        light: '#667085',
        dark: '#B3B9C6',
      },
      background: {
        tag: '#EAEEFB',
        darktag: '#DDE3FF',
      },
      gradient: {
        button: 'linear-gradient(0deg, #5B7FFF 0%, #3637F5 100%)',
        titles: 'linear-gradient(-90deg, #627FFF 0%, #FFFFFF 81%)',
        lightcard: 'linear-gradient(0deg, #111D54 0%, #2A41A7 100%)',
        darkcard: 'linear-gradient(-90deb, #010118 0%, #224699 100%)',
      },
      divider: '#FFFFFF',
      action: {},
    },
  };

  return themePalettes[themeMode];
}

export default pallete;
