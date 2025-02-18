import * as React from "react";
import type { SVGProps } from "react";

export const VueIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="2em"
    height="2em"
    {...props}
  >
    <path
      d="M14.76,1.641L24,1.641L12,22.341L0,1.641L9.18,1.641L12,6.441L14.76,1.641Z"
      fill="#41B883"
    />
    <path
      d="M0,1.641L12,22.341L24,1.641L19.2,1.641L12,14.061L4.74,1.641L0,1.641Z"
      fill="#41B883"
    />
    <path
      d="M4.74,1.641L12,14.121L19.2,1.641L14.76,1.641L12,6.441L9.18,1.641L4.74,1.641Z"
      fill="#35495E"
    />
  </svg>
);
