import { JSX, PropsWithChildren } from 'react';
import cn from 'classnames';
import CloudinaryImage from '../CloudinaryImage';
import { CldImageProps } from 'next-cloudinary';

interface CloudinaryPageImageProps extends CldImageProps {
  alternate?: boolean;
}

function CloudinaryPageImage(props: Readonly<PropsWithChildren<CloudinaryPageImageProps>>): JSX.Element {
  const { src, alt, width, height, fill, className, alternate, children, quality, crop, gravity, zoom } = props;

  return (
    <div className={cn('inline-block p-2', { 'bg-gray-100 dark:bg-gray-900': !alternate, 'bg-white dark:bg-black': alternate }, className)}>
      <CloudinaryImage src={src} alt={alt} width={width} height={height} fill={fill} quality={quality} crop={crop} gravity={gravity} zoom={zoom} />
      <div className="mt-2 text-xs">{children}</div>
    </div>
  );
}

export default CloudinaryPageImage;
