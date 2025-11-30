import Image from 'next/image';
import { JSX, PropsWithChildren } from 'react';

import { cn } from '@/lib/cn';

interface HeaderImageProps {
  imageClass?: string;
}

function HeaderImage(props: Readonly<PropsWithChildren<HeaderImageProps>>): JSX.Element {
  const { imageClass, children } = props;

  if (children) {
    return (
      <>
        <div className={cn('min-h-60 bg-transparent bg-cover bg-scroll bg-center bg-no-repeat sm:min-h-80 lg:min-h-[360px] dark:grayscale-60', imageClass)}>{children}</div>
        <div className="h-1 bg-secondary dark:bg-black" />
      </>
    );
  } else {
    return (
      <>
        <div className={cn('min-h-60 bg-transparent bg-cover bg-scroll bg-center bg-no-repeat sm:min-h-80 lg:min-h-[360px] dark:grayscale-60', imageClass)}>
          <div className="flex flex-wrap">
            <section className="absolute w-full">
              <div className="relative mt-4 w-full sm:mt-4">
                <div className="flex flex-col items-end">
                  <div className="mr-2 grow">
                    <Image src="/assets/images/header-logo.png" width={70} height={80} alt="FEUERWEHR MARKT DONAUSTAUF" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="h-1 bg-secondary dark:bg-black" />
      </>
    );
  }
}

export default HeaderImage;
