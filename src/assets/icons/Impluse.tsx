import * as React from "react";
const Impluse = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="#1EA4CE"
      d="M6.44 10.407v-4.21h4.12c.243 0 .44-.2.44-.45a.445.445 0 0 0-.44-.45H6.44V1.088A.445.445 0 0 0 6 .638a.445.445 0 0 0-.44.45v4.21H1.44a.445.445 0 0 0-.44.45c0 .248.197.45.44.45h4.12v4.209c0 .248.197.45.44.45s.44-.201.44-.45"
    />
  </svg>
);
export default Impluse;
