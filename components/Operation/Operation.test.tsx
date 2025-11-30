import { render, screen } from '@testing-library/react';

import Operation from './Operation';

vi.mock('@/lib/operationUtils', () => ({
  getCategoryColor: vi.fn((category: string) => {
    if (category === 'brand') return '#ff0000';
    return '#000000';
  }),
  parseOperationTitle: vi.fn((title: string | null) => title?.replace(/^(B\d+|THL\d+|H\d+)\s*-\s*/, '') || ''),
  parseOperationAlert: vi.fn((title: string | null) => {
    if (title?.includes('B3')) return 'Alarmstufe B3';
    return null;
  }),
}));

describe('Operation', () => {
  const defaultProps = {
    _id: '1',
    title: 'THL1 - Verkehrsunfall',
    locality: 'Donaustauf',
    date: '2024-11-30T14:30:00Z',
    category: 'thl',
    incident: 42,
    slug: { current: 'test-slug', _type: 'slug' as const },
  };

  it('rendert alle Basis-Informationen', () => {
    render(<Operation {...defaultProps} />);

    expect(screen.getByText('42')).toBeInTheDocument();
    expect(screen.getByText(/verkehrsunfall/i)).toBeInTheDocument();
    expect(screen.getByText('Donaustauf')).toBeInTheDocument();
  });

  it('formatiert Datum korrekt', () => {
    render(<Operation {...defaultProps} />);

    expect(screen.getByText(/30\.11\.2024/)).toBeInTheDocument();
  });

  it('zeigt Alarmstufe wenn vorhanden', () => {
    render(<Operation {...defaultProps} title="B3 - Großbrand" />);

    expect(screen.getByText('Alarmstufe B3')).toBeInTheDocument();
  });

  it('zeigt keine Alarmstufe wenn nicht vorhanden', () => {
    render(<Operation {...defaultProps} />);

    expect(screen.queryByText(/alarmstufe/i)).not.toBeInTheDocument();
  });

  it('hat article als semantisches Element', () => {
    const { container } = render(<Operation {...defaultProps} />);

    const article = container.querySelector('article');
    expect(article).toBeInTheDocument();
  });

  it('wendet alternate Styling an', () => {
    const { container } = render(<Operation {...defaultProps} alternate />);

    const article = container.querySelector('article');
    expect(article).toHaveClass('bg-white', 'dark:bg-black');
  });

  it('wendet glass Styling an', () => {
    const { container } = render(<Operation {...defaultProps} glass />);

    const article = container.querySelector('article');
    expect(article).toHaveClass('backdrop-blur-xs');
  });

  it('rendert Icons für Datum und Ort', () => {
    const { container } = render(<Operation {...defaultProps} />);

    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThan(0);
  });
});
