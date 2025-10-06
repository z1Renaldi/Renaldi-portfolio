// Clients.jsx — slider 2 certificate per slide + multi-image per item
import { useEffect, useMemo, useRef, useState } from 'react';
import { certificates } from '../constants/index.js';

const KEY = { LEFT: 'ArrowLeft', RIGHT: 'ArrowRight', ESC: 'Escape' };
const MAX_SLIDES = Infinity; // batas slide, atau Infinity
const PER_SLIDE = 4;

const chunk = (arr, n) => {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
};

const Clients = () => {
  const normalized = useMemo(
    () =>
      certificates.map((c) => ({
        ...c,
        images: Array.isArray(c.images) ? c.images : c.img ? [c.img] : [],
      })),
    [],
  );

  const slides = useMemo(() => {
    const capped = normalized.slice(0, MAX_SLIDES * PER_SLIDE);
    return chunk(capped, PER_SLIDE);
  }, [normalized]);

  const [idx, setIdx] = useState(0);
  const [lb, setLb] = useState({ open: false, title: '', images: [], i: 0 });
  const sliderRef = useRef(null);

  const openModal = (images, title, start = 0) => setLb({ open: true, images, title, i: start });
  const closeModal = () => setLb({ open: false, title: '', images: [], i: 0 });
  const nextImg = () => setLb((s) => ({ ...s, i: (s.i + 1) % s.images.length }));
  const prevImg = () => setLb((s) => ({ ...s, i: (s.i - 1 + s.images.length) % s.images.length }));

  useEffect(() => {
    const onKey = (e) => {
      if (lb.open && e.key === KEY.ESC) return closeModal();
      if (lb.open && e.key === KEY.RIGHT && lb.images.length > 1) return nextImg();
      if (lb.open && e.key === KEY.LEFT && lb.images.length > 1) return prevImg();

      if (document.activeElement === sliderRef.current || sliderRef.current?.contains(document.activeElement)) {
        if (e.key === KEY.LEFT) setIdx((p) => (p - 1 + slides.length) % slides.length);
        if (e.key === KEY.RIGHT) setIdx((p) => (p + 1) % slides.length);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lb.open, lb.images.length, slides.length]);

  useEffect(() => {
    if (lb.open) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lb.open]);

  const goPrev = () => setIdx((p) => (p - 1 + slides.length) % slides.length);
  const goNext = () => setIdx((p) => (p + 1) % slides.length);

  return (
    <section className="c-space my-20">
      <h3 className="head-text">My Certificates</h3>

      <div
        ref={sliderRef}
        tabIndex={0}
        aria-roledescription="carousel"
        aria-label="Slider sertifikat, 2 per slide"
        className="relative mt-8 rounded-2xl ring-1 ring-white/10 bg-white/[0.02] p-4 focus:outline-none">
        {/* Grid 1x2 per slide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {slides[idx].map((item) => {
            const thumbs = item.images.slice(0, 2); // tampilkan max 2
            const moreCount = Math.max(0, item.images.length - 2);

            return (
              <div key={`cert-${item.id}`} className="flex items-start gap-4">
                {/* THUMBNAILS: dua foto max */}
                <div className="flex gap-2">
                  {thumbs.map((src, tIndex) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => openModal(item.images, item.title, tIndex)}
                      className="shrink-0 rounded-md bg-white/5 p-1 ring-1 ring-white/10
                                 w-24 h-24 md:w-28 md:h-28 focus:outline-none focus:ring-2 focus:ring-white/40 relative"
                      title="Klik untuk memperbesar"
                      aria-label={`Perbesar gambar ${tIndex + 1} untuk ${item.title}`}>
                      <img
                        src={src}
                        alt={`${item.title} badge ${tIndex + 1}`}
                        className="w-full h-full object-contain rounded pointer-events-none"
                        loading="lazy"
                      />
                      {/* Badge +N jika lebih dari 2 foto */}
                      {tIndex === 1 && moreCount > 0 && (
                        <span className="absolute -top-2 -right-2 rounded-full bg-black/70 px-2 py-0.5 text-xs ring-1 ring-white/20">
                          +{moreCount}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1">
                  <p className="text-white-800 font-semibold">{item.title}</p>
                  <p className="font-medium text-white-800">{item.issuer}</p>
                  <p className="text-white-500 md:text-base text-sm font-light">{item.date}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={goPrev}
            className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/10 hover:bg-white/20"
            aria-label="Sebelumnya">
            ← Prev
          </button>
          <div className="flex items-center gap-2" role="tablist" aria-label="Navigasi slide">
            {slides.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={idx === i}
                aria-label={`Ke slide ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-2.5 w-2.5 rounded-full ring-1 ring-white/20 ${idx === i ? 'bg-white/80' : 'bg-white/20 hover:bg-white/30'}`}
              />
            ))}
          </div>
          <button
            onClick={goNext}
            className="rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/10 hover:bg-white/20"
            aria-label="Berikutnya">
            Next →
          </button>
        </div>

        <p className="mt-2 text-center text-xs text-white/60">
          Slide {idx + 1} dari {slides.length}
        </p>
      </div>

      {/* LIGHTBOX multi-foto */}
      {lb.open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Gambar sertifikat ${lb.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeModal} />
          <div className="relative z-10 mx-4 w-full max-w-5xl">
            <div className="rounded-2xl bg-neutral-900 p-3 shadow-2xl ring-1 ring-white/10">
              <div className="flex items-center justify-between px-2 pb-2">
                <p className="text-white-800 font-semibold truncate pr-4">{lb.title}</p>
                <div className="flex items-center gap-2">
                  {lb.images.length > 1 && (
                    <>
                      <button onClick={prevImg} className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-sm">
                        Prev
                      </button>
                      <button onClick={nextImg} className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-sm">
                        Next
                      </button>
                    </>
                  )}
                  <button onClick={closeModal} className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-sm">
                    Close
                  </button>
                </div>
              </div>

              <div className="w-full max-h-[75vh] overflow-auto rounded-lg bg-black">
                <img src={lb.images[lb.i]} alt={`${lb.title} - ${lb.i + 1}`} className="w-full h-full object-contain" />
              </div>

              {lb.images.length > 1 && (
                <p className="mt-2 text-center text-xs text-white/60">
                  Foto {lb.i + 1} of {lb.images.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Clients;
