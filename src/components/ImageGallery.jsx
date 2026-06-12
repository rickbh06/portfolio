import { useState } from 'react';
import Lightbox from './Lightbox';

function PlaceholderSlot() {
  return (
    <div className="w-full bg-field-100 flex items-center justify-center min-h-[240px]">
      <span className="eyebrow text-ground-40">Image Pending</span>
    </div>
  );
}

function ImageSlot({ src, label, onClick }) {
  const [loaded, setLoaded] = useState(false);

  const isVideo = src.endsWith('.mp4');

  return (
    <div className="w-full">
      <div
        className="img-frame bg-field-100 relative cursor-zoom-in"
        onClick={onClick}
        role="button"
        tabIndex={0}
      >
        {isVideo ? (
          <video
            src={src}
            className="w-full h-auto object-cover"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setLoaded(true)}
            style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s' }}
          />
        ) : (
          <img
            src={src}
            alt={label || "Project documentation"}
            onLoad={() => setLoaded(true)}
            className={`w-full h-auto object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
          />
        )}
      </div>
      {label && (
        <p className="mt-3 text-sm text-ground-60">
          {label}
        </p>
      )}
    </div>
  );
}

export default function ImageGallery({ images = [], labels = [] }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const realImages = images.filter(Boolean);
  const slotCount = Math.max(labels.length, 1);

  // Use a cleaner grid logic based on number of images
  const gridClass = slotCount === 1 
    ? "grid grid-cols-1 w-full" 
    : slotCount === 2 
    ? "grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full";

  return (
    <>
      <div className={gridClass}>
        {Array.from({ length: slotCount }).map((_, i) => {
          const src = images[i];
          const label = labels[i];
          return src ? (
            <ImageSlot key={i} src={src} label={label} onClick={() => setLightboxIndex(i)} />
          ) : (
            <PlaceholderSlot key={i} />
          );
        })}
      </div>

      {lightboxIndex !== null && realImages.length > 0 && (
        <Lightbox
          images={realImages}
          labels={labels}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
