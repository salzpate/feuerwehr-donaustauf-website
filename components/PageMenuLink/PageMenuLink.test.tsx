import { render, screen } from '@testing-library/react';

import PageMenuLink from './PageMenuLink';

describe('PageMenuLink', () => {
  const defaultProps = {
    name: 'Test Page',
    image: '/test-image.jpg',
    href: '/test-page',
  };

  it('rendert Name und Bild', () => {
    render(<PageMenuLink {...defaultProps} />);

    expect(screen.getByRole('heading', { name: 'Test Page' })).toBeInTheDocument();
    expect(screen.getByAltText('Test Page')).toBeInTheDocument();
  });

  it('rendert Link mit korrektem href', () => {
    render(<PageMenuLink {...defaultProps} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test-page');
  });

  it('rendert Bild mit korrekten Dimensionen', () => {
    render(<PageMenuLink {...defaultProps} />);

    const image = screen.getByAltText('Test Page');
    expect(image).toHaveAttribute('width', '480');
    expect(image).toHaveAttribute('height', '240');
  });

  it('rendert Children als Beschreibung', () => {
    render(<PageMenuLink {...defaultProps}>Test Description</PageMenuLink>);

    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('verwendet ID wenn vorhanden', () => {
    render(<PageMenuLink {...defaultProps} id="custom-id" />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('id', 'custom-id');
  });

  it('hat article als semantisches Element', () => {
    const { container } = render(<PageMenuLink {...defaultProps} />);

    const article = container.querySelector('article');
    expect(article).toBeInTheDocument();
  });

  it('hat figure Element für Bild', () => {
    const { container } = render(<PageMenuLink {...defaultProps} />);

    const figure = container.querySelector('figure');
    expect(figure).toBeInTheDocument();
  });

  it('akzeptiert UrlObject als href', () => {
    const urlObject = { pathname: '/test', query: { id: '123' } };
    render(<PageMenuLink {...defaultProps} href={urlObject} />);

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });
});
