import * as React from "react";
const LeftArrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="#697488"
      fillRule="evenodd"
      d="M13.933 6.667a.765.765 0 0 0-.192-.28L7.614.257A.873.873 0 1 0 6.38 1.491l4.63 4.632H.875A.878.878 0 0 0 0 7c0 .482.394.876.875.876H11.02l-4.63 4.633a.873.873 0 1 0 1.234 1.235l6.126-6.13c.08-.08.14-.176.193-.281a.92.92 0 0 0-.009-.666Z"
      clipRule="evenodd"
    />
  </svg>
);
export default LeftArrow;
