import { JSX } from 'react';
import HeaderImage from '@/components/Header/HeaderImage';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { Metadata } from 'next';
import PageSection from '@/components/PageSection/PageSection';
import Link from 'next/link';
import QuickSearch from '@/components/QuickSearch';
import SiteMap from '@/components/SiteMap';
import { MenuData } from '@/data/MenuData';

export const metadata: Metadata = {
  title: '404 - Seite nicht gefunden',
  description: 'Die angeforderte Seite konnte nicht gefunden werden.',
};

function FileNotFound(): JSX.Element {
  const popularPages = [
    { title: 'Startseite', href: '/', icon: 'home' },
    { title: 'Einsätze', href: '/feuerwehr/einsaetze/', icon: 'fire' },
    { title: 'Fahrzeuge', href: '/feuerwehr/fahrzeuge/', icon: 'truck' },
    { title: 'Kontakt', href: '/kontakt/', icon: 'mail' },
  ];

  return (
    <HeaderMainLayout>
      <HeaderImage imageClass="bg-[url(https://res.cloudinary.com/dzirm6srd/image/upload/v1762602175/main_hrwr0m.jpg)]" />
      <PageSection headline="Seite nicht gefunden" id="notfound">
        <div className="mb-8 text-lg text-paragraph dark:text-paragraph-dark">Die gewünschte Seite wurde leider nicht gefunden. Möglicherweise wurde sie verschoben oder gelöscht.</div>

        {/* Startseite Button */}
        <div className="mb-12 rounded-lg bg-yellow-400 p-6">
          <Link href="/" className="inline-flex items-center gap-2 text-lg font-medium text-yellow-900 hover:gap-3 hover:underline">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Zur Startseite</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Beliebte Seiten */}
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-heading dark:text-heading-dark">Beliebte Seiten</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popularPages.map(page => (
              <Link key={page.href} href={page.href} className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition-all hover:border-secondary hover:shadow-md dark:border-gray-700 dark:hover:border-secondary">
                {page.icon === 'home' && (
                  <svg className="h-6 w-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                )}
                {page.icon === 'fire' && (
                  <svg className="h-6 w-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                )}
                {page.icon === 'truck' && (
                  <svg className="h-6 w-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                    />
                  </svg>
                )}
                {page.icon === 'mail' && (
                  <svg className="h-6 w-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
                <span className="font-medium text-paragraph dark:text-paragraph-dark">{page.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Schnellsuche */}
        <div className="mb-12">
          <QuickSearch menuItems={MenuData.main} />
        </div>

        {/* Sitemap */}
        <div>
          <SiteMap menuItems={MenuData.main} title="Alle Seiten" />
        </div>
      </PageSection>
    </HeaderMainLayout>
  );
}

export default FileNotFound;
