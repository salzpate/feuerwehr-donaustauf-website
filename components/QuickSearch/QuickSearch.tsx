'use client';

import { JSX, useState, useMemo } from 'react';
import Link from 'next/link';
import { NavMenuItem } from '@/components/types/Menu/Menu';

interface QuickSearchProps {
  menuItems: NavMenuItem[];
}

interface SearchResult {
  title: string;
  href: string;
  breadcrumb: string;
}

/**
 * Schnellsuche-Komponente für 404-Seite
 * Durchsucht alle verfügbaren Seiten
 */
function QuickSearch({ menuItems }: Readonly<QuickSearchProps>): JSX.Element {
  const [query, setQuery] = useState('');

  // Flache Liste aller Seiten mit Breadcrumbs erstellen
  const allPages = useMemo(() => {
    const pages: SearchResult[] = [];

    const traverse = (items: NavMenuItem[], breadcrumb: string[] = []) => {
      for (const item of items) {
        const currentBreadcrumb = [...breadcrumb, item.children as string];
        const href = typeof item.href === 'string' ? item.href : '/';
        pages.push({
          title: item.children as string,
          href,
          breadcrumb: currentBreadcrumb.join(' > '),
        });

        if (item.subMenue && item.subMenue.length > 0) {
          traverse(item.subMenue, currentBreadcrumb);
        }
      }
    };

    traverse(menuItems);
    return pages;
  }, [menuItems]);

  // Suchergebnisse filtern
  const results = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase();
    return allPages.filter(page => page.title.toLowerCase().includes(searchTerm) || page.breadcrumb.toLowerCase().includes(searchTerm)).slice(0, 5); // Maximal 5 Ergebnisse
  }, [query, allPages]);

  return (
    <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
      <h2 className="mb-4 text-xl font-semibold text-heading dark:text-heading-dark">Schnellsuche</h2>
      <div className="relative">
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Seite suchen..."
          className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          aria-label="Seite suchen"
        />
        <svg className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {results.length > 0 && (
        <ul className="mt-4 space-y-2" aria-label="Suchergebnisse">
          {results.map(result => (
            <li key={result.href}>
              <Link href={result.href} className="block rounded-md border border-gray-200 p-3 transition-colors hover:border-secondary hover:bg-white dark:border-gray-700 dark:hover:border-secondary dark:hover:bg-gray-800">
                <div className="font-medium text-heading dark:text-heading-dark">{result.title}</div>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">{result.breadcrumb}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {query.trim() && results.length === 0 && <div className="mt-4 text-center text-gray-600 dark:text-gray-400">Keine Ergebnisse gefunden</div>}
    </div>
  );
}

export default QuickSearch;
