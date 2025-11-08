import { JSX } from 'react';
import { Metadata } from 'next';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { SITE_TITLE } from '@/lib/constants';
import HeaderImage from '@/components/Header/HeaderImage/HeaderImage';

export const metadata: Metadata = {
  title: `Feuerwehr - ${SITE_TITLE}`,
};

function FeuerwehrLayout({ children }: LayoutProps<'/feuerwehr'>): JSX.Element {
  return (
    <HeaderMainLayout activeMenu="feuerwehr">
      <HeaderImage imageClass="bg-[url(https://res.cloudinary.com/dzirm6srd/image/upload/v1762602182/ff_x8fhra.jpg)]" />
      {children}
    </HeaderMainLayout>
  );
}

export default FeuerwehrLayout;
