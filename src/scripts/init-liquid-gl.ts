/**
 * Client-only liquidGL bootstrap.
 * Uses the MIT npm package `liquid-gl` (naughtyduk/liquidGL).
 * Security notes:
 * - Installed from npm (no remote script tags / no helper GUI in production)
 * - helper: false always
 * - Skipped when prefers-reduced-motion is set
 */
import liquidGL from 'liquid-gl';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion && typeof liquidGL === 'function') {
  liquidGL({
    engine: 'auto',
    snapshot: 'body',
    target: '.liquid-gl',
    content: '.liquid-gl__content',
    resolution: 1.5,
    refraction: 0.012,
    aberration: 0,
    bevelDepth: 0.1,
    bevelWidth: 0.16,
    frost: 1.5,
    shadow: true,
    specular: true,
    reveal: 'fade',
    tilt: false,
    draggable: false,
    interaction: 'none',
    magnify: 1,
    tint: 'rgba(255, 255, 255, 0.22)',
    helper: false,
  });
}

document.documentElement.classList.add(
  reduceMotion ? 'liquid-gl-fallback' : 'liquid-gl-ready',
);
