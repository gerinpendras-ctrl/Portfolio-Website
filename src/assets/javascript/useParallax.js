import { useEffect, useRef } from 'react';

/**
 * useParallax
 *
 * Moves a list of elements in response to mouse position, each
 * shifted by its own depth factor.  Uses `transform` so movement
 * stays on the compositor thread.
 *
 * Usage:
 *   const [containerRef, bindLayer] = useParallax();
 *
 *   <div ref={containerRef}>
 *     <div {...bindLayer(0.4)}>moves slowly</div>
 *     <div {...bindLayer(0.8)}>moves faster</div>
 *     <div {...bindLayer(1.2)}>moves fastest</div>
 *   </div>
 *
 * bindLayer(factor) returns { ref, style } — spread it onto the element.
 * The ref is used internally; the style seeds the transform to avoid
 * a flash before the first mousemove.
 *
 * Options:
 *   strength  – overall multiplier applied to all layers (default 20)
 *   relative  – if true (default), mouse position is measured relative
 *               to the container.  If false, relative to the viewport.
 */
export function useParallax({ strength = 20, relative = false } = {}) {
  const containerRef = useRef(null);

  // Each registered layer: { elRef, factor }
  const layers = useRef([]);

  useEffect(() => {
    function onMouseMove(e) {
      const bounds =
        relative && containerRef.current
          ? containerRef.current.getBoundingClientRect()
          : { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };

      // Normalise to -0.5 … +0.5
      const nx = (e.clientX - bounds.left) / bounds.width  - 0.5;
      const ny = (e.clientY - bounds.top)  / bounds.height - 0.5;

      layers.current.forEach(({ elRef, factor }) => {
        const el = elRef.current;
        if (!el) return;
        const x = nx * strength * factor;
        const y = ny * strength * factor;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
    }

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [strength, relative]);

  /**
   * bindLayer(factor)
   * Returns { ref } to spread onto a JSX element.
   * The returned ref is stable across renders.
   */
  function bindLayer(factor = 1) {
    const elRef = { current: null };

    // Register on first call (layer is added once)
    layers.current.push({ elRef, factor });

    return {
      ref: (node) => {
        elRef.current = node;
      },
    };
  }

  return [containerRef, bindLayer];
}
