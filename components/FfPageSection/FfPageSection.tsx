import { JSX, PropsWithChildren, ReactNode } from 'react';

interface FfPageSectionProps {
  id: string;
  headline: ReactNode;
  className?: string;
  level?: 'h1' | 'h2' | 'h3';
}

function FfPageSection(props: PropsWithChildren<FfPageSectionProps>): JSX.Element {
  const { id, headline, className, level = 'h1', children } = props;

  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-7xl px-4 pt-4 text-base tracking-wide text-paragraph sm:px-6 sm:pt-6 lg:px-8 lg:pt-8 dark:text-paragraph-dark">
        {level === 'h1' && <h1 className="text-2xl font-bold tracking-tight text-heading uppercase sm:text-3xl lg:text-4xl dark:text-heading-dark">{headline}</h1>}
        {level === 'h2' && <h2 className="text-xl font-medium tracking-tight text-heading uppercase sm:text-2xl lg:text-3xl dark:text-heading-dark">{headline}</h2>}
        {level === 'h3' && <h3 className="text-lg font-medium tracking-tight text-heading uppercase sm:text-xl lg:text-2xl dark:text-heading-dark">{headline}</h3>}
        <div className="pt-4 text-sm font-light sm:pt-6 lg:pt-8 lg:text-base lg:font-normal">{children}</div>
      </div>
    </section>
  );
}

export default FfPageSection;
export type { FfPageSectionProps };
