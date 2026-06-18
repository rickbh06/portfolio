import { useState } from 'react';
import Lightbox from './Lightbox';

function PlaceholderSlot() {
  return (
    <div className="w-full bg-space-800 border border-space-600 flex items-center justify-center min-h-[240px]">
      <span className="font-mono text-xs text-cloud-60 uppercase tracking-widest">Image Pending</span>
    </div>
  );
}

function ImageSlot({ src, label, onClick }) {
  const [loaded, setLoaded] = useState(false);

  const isVideo = src.endsWith('.mp4');

  return (
    <div className="w-full">
      <div
        className="img-frame bg-space-800 border border-space-600 relative cursor-zoom-in overflow-hidden"
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
            className={`w-full aspect-auto sm:aspect-video object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
          />
        )}
      </div>
      {label && (
        <p className="mt-3 font-mono text-xs text-cloud-60 uppercase tracking-widest">
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

  // Stack tightly for engineering dossier look
  const gridClass = slotCount === 1 
    ? "grid grid-cols-1 w-full gap-8" 
    : "grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full";

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
