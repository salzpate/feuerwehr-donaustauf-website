'use client';

import { ComputerDesktopIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const buttonClass = (isActive: boolean) => `rounded-full p-1.5 transition-colors cursor-pointer ${isActive ? 'bg-gray-700 text-gray-100' : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gray-100'}`;

  return (
    <div className="flex w-fit gap-0.5 rounded-4xl border border-gray-700 p-1">
      <button onClick={() => setTheme('light')} className={buttonClass(theme === 'light')} aria-label="Light Mode" title="Light Mode">
        <SunIcon className="h-4 w-4" />
      </button>
      <button onClick={() => setTheme('system')} className={buttonClass(theme === 'system')} aria-label="System Theme" title="System Theme">
        <ComputerDesktopIcon className="h-4 w-4" />
      </button>
      <button onClick={() => setTheme('dark')} className={buttonClass(theme === 'dark')} aria-label="Dark Mode" title="Dark Mode">
        <MoonIcon className="h-4 w-4" />
      </button>
    </div>
  );
}

export default ThemeSwitcher;
