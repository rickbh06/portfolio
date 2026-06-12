import { useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Lightbox({ images, labels, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex ?? 0);

  const current = images[index];
  const label = labels?.[index];
  const canPrev = index > 0;
  const canNext = index < images.length - 1;

  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight' && canNext) setIndex(i => i + 1);
    if (e.key === 'ArrowLeft' && canPrev) setIndex(i => i - 1);
  }, [onClose, canNext, canPrev]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  const content = (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(10, 11, 13, 0.97)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      {/* Top bar: counter + close */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '20px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10,
        }}
        onClick={e => e.stopPropagation()}
      >
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'rgba(240,240,238,0.5)', letterSpacing: '0.1em' }}>
          {images.length > 1 ? `${index + 1} / ${images.length}` : ''}
        </span>
        <button
          onClick={onClose}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(240,240,238,0.6)', padding: '4px', lineHeight: 1 }}
          aria-label="Close lightbox"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="square"/>
          </svg>
        </button>
      </div>

      {/* Prev arrow */}
      {canPrev && (
        <button
          onClick={e => { e.stopPropagation(); setIndex(i => i - 1); }}
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'rgba(240,240,238,0.5)',
            padding: '12px',
            zIndex: 10,
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,240,238,0.5)'}
          aria-label="Previous image"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
      )}

      {/* Next arrow */}
      {canNext && (
        <button
          onClick={e => { e.stopPropagation(); setIndex(i => i + 1); }}
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'rgba(240,240,238,0.5)',
            padding: '12px',
            zIndex: 10,
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,240,238,0.5)'}
          aria-label="Next image"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      )}

      {/* Media: image or video — centered, never cropped */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '90vw',
          maxHeight: '85vh',
        }}
      >
        {current && current.endsWith('.mp4') ? (
          <video
            key={current}
            src={current}
            controls
            autoPlay
            style={{
              maxWidth: '88vw',
              maxHeight: '78vh',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        ) : (
          <img
            key={current}
            src={current}
            alt={label || 'Enlarged view'}
            style={{
              maxWidth: '88vw',
              maxHeight: '78vh',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        )}
        {label && (
          <p style={{
            marginTop: '16px',
            fontSize: '12px',
            fontFamily: 'JetBrains Mono, monospace',
            color: 'rgba(240,240,238,0.45)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            textAlign: 'center',
            maxWidth: '600px',
          }}>
            {label}
          </p>
        )}
      </div>
    </div>
  );

  // Render into document.body to escape ALL stacking contexts (transforms, z-index, overflow)
  return createPortal(content, document.body);
}
