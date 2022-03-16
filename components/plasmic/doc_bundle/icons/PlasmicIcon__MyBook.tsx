// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MyBookIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MyBookIcon(props: MyBookIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 512 512"}
      style={{
        width: "32px",
        height: "32px",
        fill: "currentcolor",

        ...(style || {}),
      }}
      xmlSpace={"preserve"}
      opacity={"1"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M455.104 56.125H143.749c-7.639 0-13.838 6.198-13.838 13.838S136.11 83.8 143.749 83.8h120.16l13.604 23.819H126.849c-10.45 0-19.766-4.18-26.64-11.027-6.838-6.864-11.017-16.18-11.026-26.63.009-10.45 4.189-19.766 11.026-26.63 6.874-6.847 16.189-11.027 26.64-11.036H438.96V.009L126.849 0C88.21.018 56.905 31.314 56.896 69.963v372.084c.009 38.639 31.314 69.944 69.954 69.954h328.255V107.62h-71.99L369.511 83.8h85.593V56.125zm-65.98 195.258V139.916h33.693v339.787H165.281V139.916h118.394v111.466l52.728-27.675 52.721 27.676z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MyBookIcon;
/* prettier-ignore-end */
