/* Hand-drawn doodle components reused across the site, echoing the
   sun-bursts / sparkles / clouds / stars found on the product sheets. */

export function SunBurst({ className = "" }) {
  return (
    <svg
      className={`doodle doodle-sun ${className}`}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          const long = i % 2 === 0;
          return (
            <polygon
              key={i}
              points={long ? "100,100 96,10 104,10" : "100,100 98,35 102,35"}
              transform={`rotate(${angle} 100 100)`}
              fill="currentColor"
            />
          );
        })}
        <circle cx="100" cy="100" r="34" fill="currentColor" />
      </g>
    </svg>
  );
}

export function SparkleDoodle({ className = "" }) {
  return (
    <svg
      className={`doodle doodle-sparkle ${className}`}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 2 C31 18 32 29 58 30 C32 31 31 42 30 58 C29 42 28 31 2 30 C28 29 29 18 30 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function StarDoodle({ className = "" }) {
  return (
    <svg
      className={`doodle doodle-star ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 0 L61 34 L98 34 L68 55 L79 90 L50 68 L21 90 L32 55 L2 34 L39 34 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CloudDoodle({ className = "" }) {
  return (
    <svg
      className={`doodle doodle-cloud ${className}`}
      viewBox="0 0 120 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 55 C10 55 2 45 2 35 C2 24 11 16 22 16 C25 6 35 0 46 0 C58 0 68 8 71 19 C82 18 92 27 92 38 C92 39 92 40 92 41 C104 42 112 49 112 58 C112 59 25 55 25 55Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function StreetSkewer({ className = "" }) {
  /* small skewer/BBQ-stick illustration referencing the street food sheet */
  return (
    <svg
      className={`doodle doodle-skewer ${className}`}
      viewBox="0 0 220 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="4"
        y1="30"
        x2="216"
        y2="30"
        stroke="#8A5A2B"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <ellipse
        cx="40"
        cy="30"
        rx="16"
        ry="18"
        fill="#D96B3F"
        stroke="#7A3A1D"
        strokeWidth="3"
      />
      <ellipse
        cx="80"
        cy="30"
        rx="15"
        ry="17"
        fill="#E8A23D"
        stroke="#7A3A1D"
        strokeWidth="3"
      />
      <ellipse
        cx="120"
        cy="30"
        rx="16"
        ry="18"
        fill="#C64B4B"
        stroke="#7A3A1D"
        strokeWidth="3"
      />
      <ellipse
        cx="160"
        cy="30"
        rx="15"
        ry="17"
        fill="#D96B3F"
        stroke="#7A3A1D"
        strokeWidth="3"
      />
    </svg>
  );
}
