import { useEffect, useRef } from 'react';

/**
 * useCursor
 *
 * Drives the two-element custom cursor:
 *   - A small gold dot that snaps directly to the mouse.
 *   - A larger ring that lags behind with lerp smoothing.
 *
 * Both are moved via `transform` (not top/left) so movement
 * stays on the compositor thread and never triggers layout.
 *
 * Usage:
 *   const { cursorRef, ringRef } = useCursor();
 *   <div ref={cursorRef} className="..." />
 *   <div ref={ringRef}   className="..." />
 *
 * The hook also watches `mouseover` events and adds/removes a
 * `cursor-grow` class on <body> whenever the pointer enters an
 * interactive element (a, button, [data-cursor-grow]).  Wire up
 * the CSS rule:
 *   body.cursor-grow #cursor { transform: scale(2.5) !important; }
 */
export function useCursor() {
  const cursorRef = useRef(null);
  const ringRef   = useRef(null);

  useEffect(() => {
    let mx = 0, my = 0;   // raw mouse position
    let rx = 0, ry = 0;   // ring lerp position
    let rafId;

    // ── Track raw mouse position ──────────────────────────────────
    function onMouseMove(e) {
      mx = e.clientX;
      my = e.clientY;
    }

    // ── Grow cursor over interactive targets ──────────────────────
    function onMouseOver(e) {
      const isInteractive = e.target.closest('a, button, [data-cursor-grow], [onclick]');
      document.body.classList.toggle('cursor-grow', Boolean(isInteractive));
    }

    // ── rAF render loop ───────────────────────────────────────────
    function tick() {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
      }

      if (ringRef.current) {
        // Lerp the ring toward the mouse at 12% per frame (~60 fps)
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ringRef.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      }

      rafId = requestAnimationFrame(tick);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    rafId = requestAnimationFrame(tick);

    // ── Cleanup on unmount ────────────────────────────────────────
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId);
      document.body.classList.remove('cursor-grow');
    };
  }, []);

  return { cursorRef, ringRef };
}
