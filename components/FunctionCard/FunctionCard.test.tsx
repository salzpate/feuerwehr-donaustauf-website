import { render, screen } from '@testing-library/react';

import FunctionCard from './FunctionCard';

describe('FunctionCard', () => {
  it('rendert Rolle und Name', () => {
    render(<FunctionCard role="Kommandant" name="Max Mustermann" />);

    expect(screen.getByText('Kommandant')).toBeInTheDocument();
    expect(screen.getByText('Max Mustermann')).toBeInTheDocument();
  });

  it('rendert nur Rolle ohne Name', () => {
    render(<FunctionCard role="Kommandant" />);

    expect(screen.getByText('Kommandant')).toBeInTheDocument();
  });

  it('rendert nur Name ohne Rolle', () => {
    render(<FunctionCard name="Max Mustermann" />);

    expect(screen.getByText('Max Mustermann')).toBeInTheDocument();
  });

  it('rendert nichts wenn weder Rolle noch Name vorhanden', () => {
    const { container } = render(<FunctionCard />);

    expect(container.firstChild).toBeNull();
  });

  it('rendert mit children', () => {
    render(
      <FunctionCard role="Kommandant" name="Max Mustermann">
        <div>Zusätzliche Info</div>
      </FunctionCard>,
    );

    expect(screen.getByText('Zusätzliche Info')).toBeInTheDocument();
  });

  it('wendet leadership Styling an', () => {
    render(<FunctionCard role="Kommandant" name="Max Mustermann" leadership />);

    const roleElement = screen.getByText('Kommandant');
    expect(roleElement).toHaveClass('text-2xl');

    const nameElement = screen.getByText('Max Mustermann');
    expect(nameElement).toHaveClass('text-lg');
  });

  it('wendet Standard-Styling ohne leadership an', () => {
    render(<FunctionCard role="Kommandant" name="Max Mustermann" />);

    const roleElement = screen.getByText('Kommandant');
    expect(roleElement).toHaveClass('text-xl');

    const nameElement = screen.getByText('Max Mustermann');
    expect(nameElement).toHaveClass('text-base');
  });

  it('wendet custom className an', () => {
    const { container } = render(<FunctionCard role="Kommandant" name="Max Mustermann" className="custom-class" />);

    const div = container.firstChild;
    expect(div).toHaveClass('custom-class');
  });
});
