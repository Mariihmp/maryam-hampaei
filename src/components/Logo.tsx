export function Logo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-nano-accent"
    >
      {/* Central node */}
      <circle cx="14" cy="14" r="4" fill="currentColor" />

      {/* Surrounding nodes */}
      <circle cx="8" cy="8" r="2.5" fill="currentColor" opacity="0.8" />
      <circle cx="20" cy="8" r="2.5" fill="currentColor" opacity="0.8" />
      <circle cx="8" cy="20" r="2.5" fill="currentColor" opacity="0.8" />
      <circle cx="20" cy="20" r="2.5" fill="currentColor" opacity="0.8" />

      {/* Connection lines */}
      <line x1="11" y1="11" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <line x1="17" y1="11" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <line x1="11" y1="17" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <line x1="17" y1="17" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}