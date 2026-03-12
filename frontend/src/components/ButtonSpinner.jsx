import React from "react";

function ButtonSpinner({ size = 16, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        animation: "btn-spin 0.75s linear infinite",
        display: "inline-block",
        verticalAlign: "middle",
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke={color}
        strokeWidth="2.5"
        strokeOpacity="0.25"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <style>{`
        @keyframes btn-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </svg>
  );
}

export default ButtonSpinner;
