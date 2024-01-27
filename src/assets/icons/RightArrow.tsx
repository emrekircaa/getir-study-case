import * as React from "react";
const RightArrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#1EA4CE"
      fillRule="evenodd"
      d="M5.067 12.333a.766.766 0 0 0 .192.28l6.127 6.13a.873.873 0 1 0 1.234-1.235l-4.63-4.632h10.135A.878.878 0 0 0 19 12a.878.878 0 0 0-.875-.876H7.98l4.63-4.633a.873.873 0 1 0-1.234-1.235l-6.126 6.13c-.08.08-.14.176-.193.281a.92.92 0 0 0 .009.666Z"
      clipRule="evenodd"
    />
  </svg>
);
export default RightArrow;
