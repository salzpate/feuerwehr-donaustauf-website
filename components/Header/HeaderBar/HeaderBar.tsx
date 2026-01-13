import { JSX } from 'react';

import FacebookSvgIcon from '@/components/SvgIcons/FacebookSvgIcon';
import InstagramSvgIcon from '@/components/SvgIcons/InstagramSvgIcon';
import { NavMenuItem } from '@/components/types/Menu/Menu';

import NavBarFlyout from '../NavBarFlyout';
import NavBarLink from '../NavBarLink';

interface HeaderBarProps {
  activeMenu?: string;
  navMenuItems: NavMenuItem[];
}

function HeaderBar(props: Readonly<HeaderBarProps>): JSX.Element {
  const { navMenuItems, activeMenu } = props;

  return (
    <div className="inline-flex items-center justify-center space-x-6 bg-secondary px-4 py-1 dark:bg-black">
      {navMenuItems.map(item => {
        if (item.subMenue && item.subMenue.length > 0) {
          return <NavBarFlyout key={`main-menu-${item.activeMenuName}`} item={item} activeMenu={activeMenu} />;
        }
        return (
          <NavBarLink key={`main-menu-${item.activeMenuName}`} href={item.href} activeMenuName={item.activeMenuName} activeMenu={activeMenu}>
            {item.children}
          </NavBarLink>
        );
      })}
      <div>
        <a
          href="https://www.facebook.com/feuerwehrdonaustauf/"
          target="_blank"
          rel="nofollow noreferrer"
          className="my-2 inline-flex items-center justify-center rounded-md px-2 py-2 text-sm tracking-widest text-white shadow-xs transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-600 focus:outline-hidden sm:my-0 dark:hover:bg-blue-600 dark:focus:bg-blue-400"
          aria-label="Besuche uns auf Facebook"
        >
          <FacebookSvgIcon className="block h-5 w-5" aria-hidden="true" />
        </a>
        <a
          href="https://www.instagram.com/feuerwehrmarktdonaustauf/"
          target="_blank"
          rel="nofollow noreferrer"
          className="my-2 inline-flex items-center justify-center rounded-md px-2 py-2 text-sm tracking-widest text-white shadow-xs transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-600 focus:outline-hidden sm:my-0 dark:hover:bg-blue-600 dark:focus:bg-blue-500"
          aria-label="Folge uns auf Instagram"
        >
          <InstagramSvgIcon className="block h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export default HeaderBar;
