'use client';

import { JSX, useState, useEffect } from 'react';
import cn from 'classnames';
import CloudinaryImage from '../Image/CloudinaryImage';
import { ImageData } from '../ImageOverlay/types/imageOverlayTypes';

interface ImageCarouselProps {
  images: ImageData[];
  enableOverlay?: boolean;
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  maxHeight?: string;
  maxWidth?: string;
}

function ImageCarousel(props: Readonly<ImageCarouselProps>): JSX.Element {
  const { images, enableOverlay = false, className, autoPlay = false, autoPlayInterval = 5000, maxHeight, maxWidth } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  if (!images || images.length === 0) {
    return <div className="text-center text-gray-500">Keine Bilder verfügbar</div>;
  }

  const currentImage = images[currentIndex];

  return (
    <div className={cn('relative w-full overflow-hidden', className)} style={{ maxHeight, maxWidth }}>
      {/* Main Image */}
      <div className="relative">
        <div className="w-full">
          <CloudinaryImage
            src={currentImage.src}
            alt={currentImage.alt}
            width={currentImage.width || 1920}
            height={currentImage.height || 1080}
            className="h-auto w-full"
            enableOverlay={enableOverlay}
            imageSeries={enableOverlay ? images : undefined}
            imageIndex={currentIndex}
            caption={currentImage.caption}
            fill
          />
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all hover:bg-black/70 focus:ring-2 focus:ring-primary focus:outline-none"
              aria-label="Vorheriges Bild"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all hover:bg-black/70 focus:ring-2 focus:ring-primary focus:outline-none"
              aria-label="Nächstes Bild"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dots Navigation - Top Right */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 flex gap-2">
            {images.map((image, index) => (
              <button
                key={image.id || `${image.src}-${index}`}
                onClick={() => goToSlide(index)}
                className={cn('h-3 w-3 rounded-full transition-all focus:ring-2 focus:ring-primary focus:outline-none', index === currentIndex ? 'scale-110 bg-white' : 'bg-white/50 hover:bg-white/75')}
                aria-label={`Gehe zu Bild ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Caption */}
        {currentImage.caption && (
          <div className="absolute right-0 bottom-0 left-0 bg-black/60 p-4 text-white">
            <p className="text-sm">{currentImage.caption}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageCarousel;
export type { ImageCarouselProps };
