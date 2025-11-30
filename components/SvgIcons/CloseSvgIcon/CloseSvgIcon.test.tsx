import { render } from '@testing-library/react';

import CloseSvgIcon from './CloseSvgIcon';

describe('CloseSvgIcon', () => {
  it('rendert SVG-Element', () => {
    const { container } = render(<CloseSvgIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('hat korrekte viewBox', () => {
    const { container } = render(<CloseSvgIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 16 16');
  });

  it('hat Standard-Klasse size-4', () => {
    const { container } = render(<CloseSvgIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('size-4');
  });

  it('wendet custom className an', () => {
    const { container } = render(<CloseSvgIcon className="custom-size" />);

    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('custom-size');
  });

  it('hat currentColor als fill', () => {
    const { container } = render(<CloseSvgIcon />);

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('fill', 'currentColor');
  });

  it('hat path Element', () => {
    const { container } = render(<CloseSvgIcon />);

    const path = container.querySelector('path');
    expect(path).toBeInTheDocument();
  });
});
