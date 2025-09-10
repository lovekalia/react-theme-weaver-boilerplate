
import React from 'react';

// Fix: The 'title' attribute is not a valid prop for SVG elements in React. Replaced with a <title> element.
export const DarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabIndex={-1} {...props}>
    <title>Dark</title>
    <path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"></path>
  </svg>
);

// Fix: The 'title' attribute is not a valid prop for SVG elements in React. Replaced with a <title> element.
export const SunsetIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabIndex={-1} {...props}>
    <title>Sunset</title>
    <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path>
  </svg>
);

// Fix: The 'title' attribute is not a valid prop for SVG elements in React. Replaced with a <title> element.
export const SunriseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabIndex={-1} {...props}>
    <title>Sunrise</title>
    <path d="M20 15.31 23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path>
  </svg>
);

// Fix: The 'title' attribute is not a valid prop for SVG elements in React. Replaced with a <title> element.
export const LightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabIndex={-1} {...props}>
    <title>Light</title>
    <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path>
  </svg>
);

export const OceanIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabIndex={-1} {...props}>
      <title>Ocean</title>
      <path d="M2 13h1.75c.69 0 1.32.4 1.63 1.04l2.25 4.92c.31.64.94 1.04 1.63 1.04s1.32-.4 1.63-1.04l2.25-4.92c.31-.64.94-1.04 1.63-1.04h5.49v2H14.25c-.69 0-1.32-.4-1.63-1.04l-2.25-4.92c-.31-.64-.94-1.04-1.63-1.04s-1.32.4-1.63 1.04L4.87 13.96c-.31.64-.94 1.04-1.63 1.04H1.5v-2zM2 6h5.49c.69 0 1.32.4 1.63 1.04l2.25 4.92c.31.64.94 1.04 1.63 1.04s1.32-.4 1.63-1.04l2.25-4.92c.31-.64.94-1.04 1.63-1.04H22v2h-1.75c-.69 0-1.32-.4-1.63-1.04l-2.25-4.92c-.31-.64-.94-1.04-1.63-1.04s-1.32.4-1.63 1.04L9.87 8.96c-.31.64-.94 1.04-1.63 1.04H2.75V8H2V6z"></path>
    </svg>
);

export const ForestIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg fill="currentColor" aria-hidden="true" viewBox="0 0 24 24" tabIndex={-1} {...props}>
      <title>Forest</title>
      <path d="M12 1.5A5.5 5.5 0 0 0 6.5 7a5.42 5.42 0 0 0 .15 1.34L3 12v3h5.5v6h2v-6H16v-3l-3.65-3.66A5.42 5.42 0 0 0 12.5 7a5.5 5.5 0 0 0-5.5-5.5z"></path>
    </svg>
);
