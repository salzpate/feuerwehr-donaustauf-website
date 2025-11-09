import { JSX, PropsWithChildren } from 'react';
import cn from 'classnames';
import CloudinaryImage from '../CloudinaryImage';
import { CloudinaryImageProps } from '../CloudinaryImage/CloudinaryImage';

interface CloudinaryPageImageProps extends Omit<CloudinaryImageProps, 'caption'> {
  alternate?: boolean;
}

function CloudinaryPageImage(props: Readonly<PropsWithChildren<CloudinaryPageImageProps>>): JSX.Element {
  const { alternate, children, className } = props;

  return (
    <div className={cn('inline-block p-2', { 'bg-gray-100 dark:bg-gray-900': !alternate, 'bg-white dark:bg-black': alternate }, className)}>
      <CloudinaryImage {...props} caption={typeof children === 'string' ? children : undefined} />
      <div className="mt-2 text-xs">{children}</div>
    </div>
  );
}

export default CloudinaryPageImage;
