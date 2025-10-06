// Clients.jsx
import { useEffect, useState } from 'react';
import { certificates } from '../constants/index.js';

const Clients = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({ img: '', title: '' });

  const openModal = (img, title) => {
    setSelected({ img, title });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelected({ img: '', title: '' });
  };

  // Tutup dengan ESC & kunci scroll body
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isOpen) {
      document.addEventListener('keydown', onEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <section className="c-space my-20">
      <h3 className="head-text">My Certificates</h3>

      <div className="client-container">
        {certificates.map((item) => (
          <div key={`cert-${item.id}`} className="client-review">
            <div>
              <p className="text-white-800 font-semibold">{item.title}</p>

              <div className="client-content mt-3">
                <div className="flex gap-3">
                  {/* Badge wrapper (lebih besar & responsif) */}
                  <button
                    type="button"
                    onClick={() => openModal(item.img, item.title)}
                    className="
                      shrink-0 rounded-md bg-white/5 p-1 ring-1 ring-white/10
                      w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24
                      focus:outline-none focus:ring-2 focus:ring-white/40
                    "
                    aria-label={`Perbesar gambar untuk ${item.title}`}
                    title="Klik untuk memperbesar">
                    <img
                      src={item.img}
                      alt={`${item.title} badge`}
                      className="w-full h-full object-contain rounded pointer-events-none"
                      loading="lazy"
                    />
                  </button>

                  <div className="flex flex-col">
                    <p className="font-medium text-white-800">{item.issuer}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">{item.date}</p>
                  </div>
                </div>

                {/* tombol credential */}
                <div className="flex self-end items-center gap-2">
                  {item.credentialUrl && (
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-sm transition-colors"
                      aria-label={`View credential for ${item.title}`}>
                      View credential
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL / LIGHTBOX */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Gambar sertifikat ${selected.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeModal} />

          {/* Isi modal */}
          <div className="relative z-10 mx-4 w-full max-w-5xl">
            <div className="rounded-2xl bg-neutral-900 p-3 shadow-2xl ring-1 ring-white/10">
              <div className="flex items-center justify-between px-2 pb-2">
                <p className="text-white-800 font-semibold truncate pr-4">{selected.title}</p>
                <button onClick={closeModal} className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-sm">
                  Close
                </button>
              </div>

              <div className="w-full max-h-[75vh] overflow-auto rounded-lg bg-black">
                <img src={selected.img} alt={selected.title} className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Clients;
