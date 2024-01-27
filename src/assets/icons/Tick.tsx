import * as React from "react";
const Tick = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={7}
    fill="none"
    {...props}
  >
    <path
      stroke={props.color ? props.color : "#1EA4CE"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M9 1 3.5 6 1 3.727"
    />
  </svg>
);
export default Tick;
