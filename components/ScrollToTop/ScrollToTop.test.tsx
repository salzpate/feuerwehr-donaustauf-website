import { render } from '@testing-library/react';
import { usePathname } from 'next/navigation';

import ScrollToTop from './ScrollToTop';

vi.mock('next/navigation');

describe('ScrollToTop', () => {
  const mockScrollTo = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    Object.defineProperty(window, 'scrollTo', {
      value: mockScrollTo,
      writable: true,
    });
    Object.defineProperty(window.history, 'scrollRestoration', {
      value: 'auto',
      writable: true,
    });
  });

  it('rendert nichts (null)', () => {
    vi.mocked(usePathname).mockReturnValue('/test');
    const { container } = render(<ScrollToTop />);

    expect(container.firstChild).toBeNull();
  });

  it('deaktiviert Browser scroll restoration', () => {
    vi.mocked(usePathname).mockReturnValue('/test');
    render(<ScrollToTop />);

    expect(window.history.scrollRestoration).toBe('manual');
  });

  it('scrollt nach oben bei Pathname-Änderung', () => {
    const { rerender } = render(<ScrollToTop />);
    vi.mocked(usePathname).mockReturnValue('/page1');

    rerender(<ScrollToTop />);

    vi.mocked(usePathname).mockReturnValue('/page2');
    rerender(<ScrollToTop />);

    expect(mockScrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: 'instant' });
  });

  it('scrollt nicht wenn Pathname gleich bleibt', () => {
    vi.mocked(usePathname).mockReturnValue('/test');
    const { rerender } = render(<ScrollToTop />);

    mockScrollTo.mockClear();

    rerender(<ScrollToTop />);

    expect(mockScrollTo).not.toHaveBeenCalled();
  });
});
