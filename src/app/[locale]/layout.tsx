import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { dir } from 'i18next';
import i18nConfig from '@/i18nConfig';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../theme';
import TopBar from '../components/Topbar';
import TranslationsProvider from '../contexts/TranslationsProvider';
import initTranslations from '@/i18n';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const i18nNamespaces = ['topbar', 'button'];
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
        <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <TopBar />
            {children}
          </ThemeProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
