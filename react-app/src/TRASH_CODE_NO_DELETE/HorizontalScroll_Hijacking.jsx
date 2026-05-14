import { useRef, useEffect } from 'react';

export default function App() {
  const sectionRef = useRef(null); // outer tall wrapper — gives scroll height
  const stripRef   = useRef(null); // the <ul> — gets moved horizontally

  useEffect(() => {
    function handleScroll() {
      const section = sectionRef.current;
      const strip   = stripRef.current;
      if (!section || !strip) return;

      // how far the user has scrolled past the top of this section
      const scrolled = window.scrollY - section.offsetTop;

      // clamp: don't go negative (before section) or too far (after section)
      const maxScroll = section.offsetHeight - window.innerHeight;
      const clamped   = Math.max(0, Math.min(scrolled, maxScroll));

      // move the strip LEFT by the scrolled amount
      strip.style.transform = `translateX(-${clamped}px)`;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToIndex = (index) => {
    const strip = stripRef.current;
    const imgNode = strip.querySelectorAll('li > img')[index];
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const images = [
    { src: "https://i.pinimg.com/736x/9f/5b/ed/9f5bed947874f7a3fc3bf82c40ad7e63.jpg", alt: "Img-1" },
    { src: "https://i.pinimg.com/736x/d6/eb/2f/d6eb2fc8783151909415509b8ebe2648.jpg", alt: "Img-2" },
    { src: "https://i.pinimg.com/736x/7c/ec/36/7cec36d56a854986762433f13613bd10.jpg", alt: "Img-3" },
    { src: "https://i.pinimg.com/736x/9f/5b/ed/9f5bed947874f7a3fc3bf82c40ad7e63.jpg", alt: "Img-4" },
    { src: "https://i.pinimg.com/736x/d6/eb/2f/d6eb2fc8783151909415509b8ebe2648.jpg", alt: "Img-5" },
    { src: "https://i.pinimg.com/736x/7c/ec/36/7cec36d56a854986762433f13613bd10.jpg", alt: "Img-6" },
    { src: "https://i.pinimg.com/736x/9f/5b/ed/9f5bed947874f7a3fc3bf82c40ad7e63.jpg", alt: "Img-7" },
    { src: "https://i.pinimg.com/736x/d6/eb/2f/d6eb2fc8783151909415509b8ebe2648.jpg", alt: "Img-8" },
    { src: "https://i.pinimg.com/736x/7c/ec/36/7cec36d56a854986762433f13613bd10.jpg", alt: "Img-9" },
  ];

  // total width images will need → so we know how tall the wrapper should be
  // each img = 200px, gap = 16px, 9 images
  const STRIP_WIDTH = images.length * (200 + 16);

  return (
    <>
      {/* content before the scroll section */}
      <div style={{ height: '100vh', display: 'grid', placeItems: 'center', fontSize: 24, background: '#f0f0f0' }}>
        ↓ Scroll down
      </div>

      {/*
        OUTER WRAPPER — tall enough to scroll through all images.
        Height = viewport height + total horizontal distance to travel.
        This is what gives the page its scroll length.
      */}
      <div
        ref={sectionRef}
        style={{ height: `calc(100vh + ${STRIP_WIDTH}px)`, position: 'relative' }}
      >
        {/*
          STICKY CONTAINER — sticks to the top of the viewport.
          User sees only this box. It never moves vertically.
        */}
        <div style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden', // hides images outside the viewport
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#111',
        }}>

          {/* nav buttons */}
          <nav style={{ display: 'flex', gap: 8, padding: '12px 24px', flexWrap: 'wrap' }}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                style={{
                  padding: '4px 12px',
                  background: '#222',
                  color: '#fff',
                  border: '1px solid #444',
                  borderRadius: 4,
                  cursor: 'pointer',
                  fontSize: 13,
                }}
              >
                Img-{i + 1}
              </button>
            ))}
          </nav>

          {/*
            THE STRIP — the horizontal row of images.
            This is what actually moves LEFT via translateX.
            It starts at position 0 and slides left as you scroll.
          */}
          <ul
            ref={stripRef}
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '1rem',
              listStyle: 'none',
              margin: 0,
              padding: '0 24px',
              willChange: 'transform', // GPU hint — smoother animation
              transition: 'transform 0.05s linear', // tiny ease to smooth out scroll jitter
            }}
          >
            {images.map((img, i) => (
              <li key={i} style={{ flexShrink: 0 }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width: 200, height: 200, objectFit: 'cover', borderRadius: 8, display: 'block' }}
                />
              </li>
            ))}
          </ul>

        </div>
      </div>

      {/* content after the scroll section */}
      <div style={{ height: '100vh', display: 'grid', placeItems: 'center', fontSize: 24, background: '#f0f0f0' }}>
        End of gallery ✓
      </div>
    </>
  );
}