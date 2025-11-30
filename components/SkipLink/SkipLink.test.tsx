import { render, screen } from '@testing-library/react';

import SkipLink from './SkipLink';

describe('SkipLink', () => {
  it('rendert den Skip-Link mit korrektem Text', () => {
    render(<SkipLink />);

    const link = screen.getByRole('link', { name: /zum hauptinhalt springen/i });
    expect(link).toBeInTheDocument();
  });

  it('hat den korrekten href-Attribut', () => {
    render(<SkipLink />);

    const link = screen.getByRole('link', { name: /zum hauptinhalt springen/i });
    expect(link).toHaveAttribute('href', '#main-content');
  });

  it('hat die sr-only Klasse für Screen Reader', () => {
    render(<SkipLink />);

    const link = screen.getByRole('link', { name: /zum hauptinhalt springen/i });
    expect(link).toHaveClass('sr-only');
  });

  it('hat focus-Klassen für Sichtbarkeit beim Fokus', () => {
    render(<SkipLink />);

    const link = screen.getByRole('link', { name: /zum hauptinhalt springen/i });
    expect(link.className).toContain('focus:not-sr-only');
    expect(link.className).toContain('focus:absolute');
  });
});
