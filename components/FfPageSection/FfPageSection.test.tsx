import { render, screen } from '@testing-library/react';

import FfPageSection from './FfPageSection';

describe('FfPageSection', () => {
  it('rendert Headline und Children', () => {
    render(
      <FfPageSection id="test-section" headline="Test Headline">
        <p>Test Content</p>
      </FfPageSection>,
    );

    expect(screen.getByRole('heading', { name: 'Test Headline' })).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('verwendet ID für section Element', () => {
    const { container } = render(
      <FfPageSection id="custom-id" headline="Test">
        Content
      </FfPageSection>,
    );

    const section = container.querySelector('section');
    expect(section).toHaveAttribute('id', 'custom-id');
  });

  it('rendert h1 als Standard-Level', () => {
    render(
      <FfPageSection id="test" headline="Test Headline">
        Content
      </FfPageSection>,
    );

    const heading = screen.getByRole('heading', { level: 1, name: 'Test Headline' });
    expect(heading).toBeInTheDocument();
  });

  it('rendert h2 wenn level="h2"', () => {
    render(
      <FfPageSection id="test" headline="Test Headline" level="h2">
        Content
      </FfPageSection>,
    );

    const heading = screen.getByRole('heading', { level: 2, name: 'Test Headline' });
    expect(heading).toBeInTheDocument();
  });

  it('rendert h3 wenn level="h3"', () => {
    render(
      <FfPageSection id="test" headline="Test Headline" level="h3">
        Content
      </FfPageSection>,
    );

    const heading = screen.getByRole('heading', { level: 3, name: 'Test Headline' });
    expect(heading).toBeInTheDocument();
  });

  it('wendet custom className an', () => {
    const { container } = render(
      <FfPageSection id="test" headline="Test" className="custom-class">
        Content
      </FfPageSection>,
    );

    const section = container.querySelector('section');
    expect(section).toHaveClass('custom-class');
  });

  it('rendert ReactNode als Headline', () => {
    render(
      <FfPageSection
        id="test"
        headline={
          <span>
            Complex <strong>Headline</strong>
          </span>
        }
      >
        Content
      </FfPageSection>,
    );

    expect(screen.getByText('Complex')).toBeInTheDocument();
    expect(screen.getByText('Headline')).toBeInTheDocument();
  });

  it('hat korrekte CSS-Klassen für h1', () => {
    render(
      <FfPageSection id="test" headline="Test" level="h1">
        Content
      </FfPageSection>,
    );

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('text-2xl', 'font-bold', 'uppercase');
  });

  it('hat korrekte CSS-Klassen für h2', () => {
    render(
      <FfPageSection id="test" headline="Test" level="h2">
        Content
      </FfPageSection>,
    );

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass('text-xl', 'font-medium', 'uppercase');
  });
});
