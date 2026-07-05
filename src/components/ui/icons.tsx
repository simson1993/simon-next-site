export function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      width="29"
      height="29"
      fill="currentColor"
      className={className}
    >
      <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z" />
    </svg>
  );
}

/* Full circle with a "bite" cut out via mask — on hover the bite
   slides away and the crescent closes into a full circle. */
export function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="20"
      height="20"
      fill="currentColor"
      className={className}
    >
      <mask id="moon-bite">
        <rect width="30" height="30" fill="white" />
        <circle
          className="moon-bite transition-transform duration-500 ease-out group-hover:translate-x-[14px] group-hover:-translate-y-[14px]"
          cx="22"
          cy="7"
          r="9.5"
          fill="black"
        />
      </mask>
      <circle cx="15" cy="15" r="15" mask="url(#moon-bite)" />
    </svg>
  );
}
