import initTranslations from '@/i18n';
import TranslationsProvider from '../contexts/TranslationsProvider';
import { Container } from '@mui/material';

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  const i18nNamespaces = ['home'];
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <main>
        <Container></Container>
      </main>
    </TranslationsProvider>
  );
}
