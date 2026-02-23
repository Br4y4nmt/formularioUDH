import React from 'react';

function FileTextIcon({ className = '', size = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
      <path d="M10 9H8"></path>
      <path d="M16 13H8"></path>
      <path d="M16 17H8"></path>
    </svg>
  );
}

export default FileTextIcon;
