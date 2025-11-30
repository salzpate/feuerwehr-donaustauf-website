import { render, screen } from '@testing-library/react';

import HeadlineTextElement from './HeadlineTextElement';

describe('HeadlineTextElement', () => {
  it('rendert Headline und Children', () => {
    render(
      <HeadlineTextElement headline="Test Headline">
        <p>Test Content</p>
      </HeadlineTextElement>,
    );

    expect(screen.getByRole('heading', { name: 'Test Headline' })).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('rendert Bild wenn imgSrc vorhanden', () => {
    render(
      <HeadlineTextElement headline="Test Headline" imgSrc="/test-image.jpg">
        Content
      </HeadlineTextElement>,
    );

    const image = screen.getByAltText('Test Headline');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.jpg');
  });

  it('rendert kein Bild wenn imgSrc fehlt', () => {
    const { container } = render(<HeadlineTextElement headline="Test Headline">Content</HeadlineTextElement>);

    const image = container.querySelector('img');
    expect(image).not.toBeInTheDocument();
  });

  it('wendet mt-4 Klasse an wenn Bild vorhanden', () => {
    render(
      <HeadlineTextElement headline="Test Headline" imgSrc="/test-image.jpg">
        Content
      </HeadlineTextElement>,
    );

    const heading = screen.getByRole('heading', { name: 'Test Headline' });
    expect(heading).toHaveClass('mt-4');
  });

  it('hat keine mt-4 Klasse wenn kein Bild vorhanden', () => {
    render(<HeadlineTextElement headline="Test Headline">Content</HeadlineTextElement>);

    const heading = screen.getByRole('heading', { name: 'Test Headline' });
    expect(heading).not.toHaveClass('mt-4');
  });

  it('rendert ReactNode als Headline', () => {
    render(
      <HeadlineTextElement
        headline={
          <span>
            Complex <strong>Headline</strong>
          </span>
        }
      >
        Content
      </HeadlineTextElement>,
    );

    expect(screen.getByText('Complex')).toBeInTheDocument();
    expect(screen.getByText('Headline')).toBeInTheDocument();
  });

  it('hat korrekte CSS-Klassen für Content', () => {
    const { container } = render(<HeadlineTextElement headline="Test">Content</HeadlineTextElement>);

    const contentDiv = container.querySelector('.my-4.text-sm');
    expect(contentDiv).toBeInTheDocument();
  });
});
