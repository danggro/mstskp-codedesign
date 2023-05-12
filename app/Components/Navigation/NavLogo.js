import React from "react";

function NavLogo() {
  return (
    <a href="#navigation" className="flex items-center gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="none"
        viewBox="0 0 50 50"
      >
        <rect
          width="50"
          height="50"
          fill="#fff"
          fillOpacity="0.08"
          rx="25"
        ></rect>
        <path
          fill="#fff"
          d="M15.76 29.106l4.032-4.068-4.032-4.05h2.898l4.032 4.05-4.032 4.068H15.76zm9.214 2.52c-.42 0-.768-.132-1.044-.396a1.3 1.3 0 01-.395-.954c0-.384.131-.708.395-.972.276-.264.625-.396 1.044-.396.42 0 .762.132 1.026.396.276.264.415.588.415.972 0 .372-.139.69-.415.954-.264.264-.605.396-1.026.396zm6.294-2.52l-4.014-4.068 4.014-4.05h2.916l-4.05 4.05 4.05 4.068h-2.916z"
        ></path>
      </svg>
      <p className="font-bold text-lg tracking-[0.1em]">MSTSKP</p>
    </a>
  );
}

export default NavLogo;
