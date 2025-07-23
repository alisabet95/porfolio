//file: src/app/[locale]/layout
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/src/i18n/routing';
import '../globals.css'
import Head from 'next/head';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <Head>
        <meta name="google-site-verification" content="SClRQTWUQDku7CXv2KkWF8E6Rxe3-CGS4PBEPlpFIbM" />
      </Head>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}