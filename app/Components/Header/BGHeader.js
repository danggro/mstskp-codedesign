import React from "react";

function BGHeader() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="1376"
      fill="none"
      viewBox="0 0 1440 1376"
    >
      <path
        fill="#FC881D"
        d="M-23-11h1488l-46.09 1331.76c-1.02 29.57-27.36 51.79-56.69 47.81L43.412 1189.75C19 1186.44.635 1165.84.141 1141.21L-23-11z"
      ></path>
      <g filter="url(#filter0_b_206_2)">
        <path
          fill="#0D0E25"
          fillOpacity="0.94"
          d="M0 0h1440v1297.76c0 30.29-26.71 53.62-56.72 49.55L66.389 1168.75c-24.403-3.31-42.763-23.9-43.272-48.52L0 0z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_b_206_2"
          width="1840"
          height="1747.77"
          x="-200"
          y="-200"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="100"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_206_2"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_206_2"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default BGHeader;
