import * as React from "react";
import { type SVGProps } from "react";

export const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 22"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M10 2v18m0 0-8-8.308M10 20l8-8.308"
    />
  </svg>
);
