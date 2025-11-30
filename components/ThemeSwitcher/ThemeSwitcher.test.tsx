import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useTheme } from 'next-themes';

import ThemeSwitcher from './ThemeSwitcher';

vi.mock('next-themes');

describe('ThemeSwitcher', () => {
  const mockSetTheme = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useTheme).mockReturnValue({
      theme: 'system',
      setTheme: mockSetTheme,
      themes: ['light', 'dark', 'system'],
      systemTheme: 'light',
      resolvedTheme: 'light',
      forcedTheme: undefined,
    });
  });

  it('rendert alle drei Theme-Buttons', () => {
    render(<ThemeSwitcher />);

    expect(screen.getByRole('button', { name: /light mode/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /system theme/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /dark mode/i })).toBeInTheDocument();
  });

  it('wechselt zu Light Mode beim Klick auf den Light-Button', async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcher />);

    const lightButton = screen.getByRole('button', { name: /light mode/i });
    await user.click(lightButton);

    expect(mockSetTheme).toHaveBeenCalledWith('light');
    expect(mockSetTheme).toHaveBeenCalledTimes(1);
  });

  it('wechselt zu System Theme beim Klick auf den System-Button', async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcher />);

    const systemButton = screen.getByRole('button', { name: /system theme/i });
    await user.click(systemButton);

    expect(mockSetTheme).toHaveBeenCalledWith('system');
    expect(mockSetTheme).toHaveBeenCalledTimes(1);
  });

  it('wechselt zu Dark Mode beim Klick auf den Dark-Button', async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcher />);

    const darkButton = screen.getByRole('button', { name: /dark mode/i });
    await user.click(darkButton);

    expect(mockSetTheme).toHaveBeenCalledWith('dark');
    expect(mockSetTheme).toHaveBeenCalledTimes(1);
  });

  it('hebt den aktiven Light Mode Button hervor', () => {
    vi.mocked(useTheme).mockReturnValue({
      theme: 'light',
      setTheme: mockSetTheme,
      themes: ['light', 'dark', 'system'],
      systemTheme: 'light',
      resolvedTheme: 'light',
      forcedTheme: undefined,
    });

    render(<ThemeSwitcher />);

    const lightButton = screen.getByRole('button', { name: /light mode/i });
    expect(lightButton).toHaveClass('bg-gray-700', 'text-gray-100');
  });

  it('hebt den aktiven Dark Mode Button hervor', () => {
    vi.mocked(useTheme).mockReturnValue({
      theme: 'dark',
      setTheme: mockSetTheme,
      themes: ['light', 'dark', 'system'],
      systemTheme: 'dark',
      resolvedTheme: 'dark',
      forcedTheme: undefined,
    });

    render(<ThemeSwitcher />);

    const darkButton = screen.getByRole('button', { name: /dark mode/i });
    expect(darkButton).toHaveClass('bg-gray-700', 'text-gray-100');
  });

  it('hebt den aktiven System Theme Button hervor', () => {
    render(<ThemeSwitcher />);

    const systemButton = screen.getByRole('button', { name: /system theme/i });
    expect(systemButton).toHaveClass('bg-gray-700', 'text-gray-100');
  });

  it('zeigt korrekte aria-labels für Accessibility', () => {
    render(<ThemeSwitcher />);

    expect(screen.getByLabelText('Light Mode')).toBeInTheDocument();
    expect(screen.getByLabelText('System Theme')).toBeInTheDocument();
    expect(screen.getByLabelText('Dark Mode')).toBeInTheDocument();
  });

  it('zeigt korrekte Tooltips (title-Attribute)', () => {
    render(<ThemeSwitcher />);

    expect(screen.getByTitle('Light Mode')).toBeInTheDocument();
    expect(screen.getByTitle('System Theme')).toBeInTheDocument();
    expect(screen.getByTitle('Dark Mode')).toBeInTheDocument();
  });
});
