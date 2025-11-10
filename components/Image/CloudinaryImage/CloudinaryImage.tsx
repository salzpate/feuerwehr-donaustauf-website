'use client';

import { JSX } from 'react';
import { CldImage, CldImageProps } from 'next-cloudinary';
import { useImageOverlay } from '@/components/ImageOverlay/hooks/useImageOverlay';
import { ImageData } from '@/components/ImageOverlay/types/imageOverlayTypes';

interface CloudinaryImageProps extends CldImageProps {
  enableOverlay?: boolean;
  imageSeries?: ImageData[];
  imageIndex?: number;
  caption?: string;
  fullHd?: boolean;
  overlayHeight?: number;
  overlayWidth?: number;
}

function normalizeSrc(src: string): string {
  return src.startsWith('/') ? src.slice(1) : src;
}

function CloudinaryImage(props: Readonly<CloudinaryImageProps>): JSX.Element {
  const { width, height, src, alt, fill, enableOverlay, imageSeries, imageIndex, fullHd, caption, overlayHeight, overlayWidth, ...rest } = props;
  const { showOverlay } = useImageOverlay();
  const imageSrc = normalizeSrc(src);

  const handleClick = () => {
    const image = imageSeries?.find(img => img.src === src);
    const imageWidth = overlayHeight ?? image?.width ?? Number(width);
    const imageHeight = overlayWidth ?? image?.height ?? Number(height);

    const imageData: ImageData = {
      src: String(src),
      alt: alt || '',
      width: fullHd ? 1920 : imageWidth,
      height: fullHd ? 1080 : imageHeight,
      caption,
    };

    showOverlay(imageData, imageSeries, imageIndex);
  };

  if (enableOverlay) {
    return (
      <button onClick={handleClick} className="block w-full cursor-zoom-in transition-opacity hover:opacity-80 focus:ring-2 focus:ring-primary focus:outline-none" aria-label={`Bild vergrößern: ${alt}`}>
        <CldImage width={fill ? undefined : width} height={fill ? undefined : height} src={imageSrc} {...rest} alt={alt} fill={fill} />
      </button>
    );
  }

  return <CldImage width={fill ? undefined : width} height={fill ? undefined : height} src={imageSrc} {...rest} alt={alt} />;
}

export default CloudinaryImage;
export type { CloudinaryImageProps };
