// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoutIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoutIcon(props: LogoutIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 512 512"}
      style={{
        width: "64px",
        height: "64px",
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

      <g fill={"currentColor"}>
        <path
          d={
            "M155.81 0v173.889h33.417V33.417h235.592l-74.87 50.656a30.79 30.79 0 00-13.535 25.503v286.24H189.227V282.079H155.81v147.154h180.604v70.93c0 4.382 2.423 8.404 6.29 10.451a11.841 11.841 0 0012.189-.644l119.318-80.736V0H155.81z"
          }
        ></path>

        <path
          d={
            "M228.657 290.4a4.732 4.732 0 002.75 4.3 4.708 4.708 0 005.042-.685l78.044-66.035-78.044-66.034a4.708 4.708 0 00-5.042-.686 4.733 4.733 0 00-2.75 4.3v33.392H37.79v58.064h190.868V290.4z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default LogoutIcon;
/* prettier-ignore-end */
