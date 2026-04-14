import { useEffect, useRef } from 'react';

/**
 * useScrollReveal
 *
 * Attaches an IntersectionObserver to a container ref and adds the
 * class `in` to any child element carrying the class `reveal` once
 * it crosses the viewport threshold.
 *
 * Two ways to use it:
 *
 * ── Option A: observe a whole section ────────────────────────────
 *   const sectionRef = useScrollReveal();
 *   <section ref={sectionRef}>
 *     <div className="reveal">Fades in on scroll</div>
 *     <div className="reveal" style={{ transitionDelay: '0.2s' }}>
 *       Fades in 200 ms later
 *     </div>
 *   </section>
 *
 * ── Option B: observe a single element ───────────────────────────
 *   const divRef = useScrollReveal({ selector: null });
 *   <div ref={divRef} className="reveal">…</div>
 *
 * Props:
 *   threshold  – 0–1, fraction of element visible before triggering (default 0.14)
 *   selector   – CSS selector for children to watch inside the ref element.
 *                Pass null to observe the ref element itself. (default '.reveal')
 *   once       – if true (default), unobserve after the element becomes visible
 */
export function useScrollReveal({
  threshold = 0.14,
  selector  = '.reveal',
  once      = true,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // Collect targets: either the container itself or matching children
    const targets =
      selector === null
        ? [container]
        : Array.from(container.querySelectorAll(selector));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            // Allow re-animation on scroll back up when once=false
            entry.target.classList.remove('in');
          }
        });
      },
      { threshold }
    );

    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [threshold, selector, once]);

  return ref;
}

/**
 * useRevealRef
 *
 * Convenience wrapper for the single-element case.
 *
 * Usage:
 *   const ref = useRevealRef();
 *   <div ref={ref} className="reveal">…</div>
 */
export function useRevealRef(options = {}) {
  return useScrollReveal({ selector: null, ...options });
}
