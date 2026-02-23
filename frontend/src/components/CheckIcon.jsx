import React from 'react';

export default function CheckIcon({ size = 18, color = '#2f3438' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M8 34 L24 48 L56 12"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
