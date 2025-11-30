import { render, screen } from '@testing-library/react';

import ContactCard from './ContactCard';

describe('ContactCard', () => {
  const defaultProps = {
    name: 'Max Mustermann',
    role: 'Kommandant',
    email: 'max@example.com',
    imageSrc: '/test-image.jpg',
  };

  it('rendert alle Basis-Informationen', () => {
    render(<ContactCard {...defaultProps} />);

    expect(screen.getByText('Max Mustermann')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Max Mustermann' })).toBeInTheDocument();
    expect(screen.getByText('Kommandant')).toBeInTheDocument();
  });

  it('rendert das Bild mit korrekten Attributen', () => {
    render(<ContactCard {...defaultProps} />);

    const image = screen.getByAltText('Max Mustermann');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('test-image.jpg'));
  });

  it('rendert Telefonnummer wenn vorhanden', () => {
    render(<ContactCard {...defaultProps} phone="+49 123 456789" />);

    const phoneLink = screen.getByRole('link', { name: /\+49 123 456789/i });
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute('href', 'tel:+49123456789');
  });

  it('rendert Email-Link korrekt', () => {
    render(<ContactCard {...defaultProps} />);

    const emailLink = screen.getByRole('link', { name: /maxbuero@example\.com/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:max@example.com');
    expect(emailLink).toHaveAttribute('rel', 'nofollow');
  });

  it('rendert Adresse wenn vorhanden', () => {
    render(<ContactCard {...defaultProps} street="Musterstraße 1" town="12345 Musterstadt" />);

    expect(screen.getByText('Musterstraße 1')).toBeInTheDocument();
    expect(screen.getByText('12345 Musterstadt')).toBeInTheDocument();
  });

  it('rendert nur Straße wenn Stadt fehlt', () => {
    render(<ContactCard {...defaultProps} street="Musterstraße 1" />);

    expect(screen.getByText('Musterstraße 1')).toBeInTheDocument();
  });

  it('rendert nur Stadt wenn Straße fehlt', () => {
    render(<ContactCard {...defaultProps} town="12345 Musterstadt" />);

    expect(screen.getByText('12345 Musterstadt')).toBeInTheDocument();
  });

  it('hat article als semantisches Element', () => {
    const { container } = render(<ContactCard {...defaultProps} />);

    const article = container.querySelector('article');
    expect(article).toBeInTheDocument();
  });

  it('hat address-Elemente für Kontaktdaten', () => {
    render(<ContactCard {...defaultProps} phone="+49 123 456789" />);

    const addresses = screen.getAllByRole('group');
    expect(addresses.length).toBeGreaterThan(0);
  });
});
