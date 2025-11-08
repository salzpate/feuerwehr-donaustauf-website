'use client';

import { JSX } from 'react';
import { CldImage, CldImageProps } from 'next-cloudinary';

function normalizeSrc(src: string): string {
  return src.startsWith('/') ? src.slice(1) : src;
}

function CloudinaryImage(props: Readonly<CldImageProps>): JSX.Element {
  const { width, height, src, alt, className, quality, crop, gravity, zoom, fill } = props;
  const imageSrc = normalizeSrc(src);

  let version: string | undefined = undefined;
  let cldSrc = imageSrc;
  if (imageSrc.startsWith('v')) {
    version = imageSrc.split('/')[0];
    cldSrc = imageSrc.slice(version.length + 1);
  }

  return <CldImage width={width} height={height} src={cldSrc} alt={alt} className={className} quality={quality} crop={crop} gravity={gravity} zoom={zoom} fill={fill} version={version} />;
}

export default CloudinaryImage;
