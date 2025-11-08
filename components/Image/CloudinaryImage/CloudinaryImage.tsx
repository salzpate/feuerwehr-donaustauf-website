'use client';

import { JSX } from 'react';
import { CldImage, CldImageProps } from 'next-cloudinary';

function normalizeSrc(src: string): string {
  return src.startsWith('/') ? src.slice(1) : src;
}

function CloudinaryImage(props: Readonly<CldImageProps>): JSX.Element {
  const { width, height, src, alt, className, quality, crop, gravity, zoom, fill } = props;
  const imageSrc = normalizeSrc(src);

  return <CldImage width={width} height={height} src={imageSrc} alt={alt} className={className} quality={quality} crop={crop} gravity={gravity} zoom={zoom} fill={fill} />;
}

export default CloudinaryImage;
