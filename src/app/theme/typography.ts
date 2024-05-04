import { Inter } from 'next/font/google';

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm }: { sm: number }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
  };
}

export const primaryFont = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const typography = {
  fontFamily: primaryFont.style.fontFamily,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,

  h1: {
    fontWeight: 600,
    fontSize: pxToRem(56),
    lineHeight: '120%',
    ...responsiveFontSizes({ sm: 28 }),
  },
  h2: {
    fontWeight: 500,
    fontSize: pxToRem(35),
    lineHeight: '125%',
    ...responsiveFontSizes({ sm: 24 }),
  },
  h3: {
    fontWeight: 600,
    fontSize: pxToRem(22),
    lineHeight: '125%',
    ...responsiveFontSizes({ sm: 18 }),
  },
  subheader1: {
    fontWeight: 600,
    fontSize: pxToRem(28),
    lineHeight: '140%',
    ...responsiveFontSizes({ sm: 18 }),
  },
  subheader2: {
    fontWeight: 400,
    fontSize: pxToRem(22),
    lineHeight: '145%',
    ...responsiveFontSizes({ sm: 16 }),
  },
  title1: {
    fontWeight: 400,
    fontSize: pxToRem(20),
    lineHeight: '145%',
    ...responsiveFontSizes({ sm: 16 }),
  },
  title2: {
    fontWeight: 600,
    fontSize: pxToRem(17),
    lineHeight: '145%',
    ...responsiveFontSizes({ sm: 13 }),
  },
  button1: {
    fontWeight: 500,
    fontSize: pxToRem(18),
    lineHeight: '110%',
  },
  button2: {
    fontWeight: 500,
    fontSize: pxToRem(16),
    lineHeight: '110%',
  },
  menutopbar: {
    fontWeight: 700,
    fontSize: pxToRem(16),
    lineHeight: '110%',
  },
  body: {
    fontWeight: 400,
    fontSize: pxToRem(16),
    lineHeight: '140%',
  },
  description: {
    fontWeight: 500,
    fontSize: pxToRem(15),
    lineHeight: '140%',
    ...responsiveFontSizes({ sm: 13 }),
  },
  footer: {
    fontWeight: 500,
    fontSize: pxToRem(15),
    lineHeight: '130%',
  },
};
export default typography;
