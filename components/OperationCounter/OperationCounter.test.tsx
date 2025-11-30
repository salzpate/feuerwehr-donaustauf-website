import { render, screen } from '@testing-library/react';

import OperationCounter from './OperationCounter';

describe('OperationCounter', () => {
  it('rendert Jahr und Anzahl korrekt', () => {
    render(<OperationCounter year={2024} count={150} />);

    expect(screen.getByText('2024: 150 Einsätze')).toBeInTheDocument();
  });

  it('rendert mit verschiedenen Werten', () => {
    const { rerender } = render(<OperationCounter year={2023} count={120} />);
    expect(screen.getByText('2023: 120 Einsätze')).toBeInTheDocument();

    rerender(<OperationCounter year={2025} count={200} />);
    expect(screen.getByText('2025: 200 Einsätze')).toBeInTheDocument();
  });

  it('rendert mit Anzahl 0', () => {
    render(<OperationCounter year={2024} count={0} />);

    expect(screen.getByText('2024: 0 Einsätze')).toBeInTheDocument();
  });

  it('hat die korrekte CSS-Klasse', () => {
    const { container } = render(<OperationCounter year={2024} count={150} />);

    const div = container.querySelector('.mb-4.text-sm');
    expect(div).toBeInTheDocument();
  });
});
