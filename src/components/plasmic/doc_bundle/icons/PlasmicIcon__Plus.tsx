// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlusIcon(props: PlusIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 512 512"}
      style={{
        width: "16px",
        height: "16px",
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
            "M359.244 224.004h-59.988c-6.217 0-11.258-5.043-11.258-11.258v-59.992c0-6.215-5.039-11.254-11.256-11.254h-41.486c-6.217 0-11.258 5.039-11.258 11.254v59.992c0 6.215-5.039 11.258-11.256 11.258h-59.988c-6.219 0-11.258 5.039-11.258 11.258v41.484c0 6.215 5.039 11.258 11.258 11.258h59.988c6.217 0 11.256 5.039 11.256 11.258v59.984c0 6.219 5.041 11.258 11.258 11.258h41.486c6.217 0 11.256-5.039 11.256-11.258v-59.984c0-6.219 5.041-11.258 11.258-11.258h59.988c6.217 0 11.258-5.043 11.258-11.258v-41.484c0-6.219-5.041-11.258-11.258-11.258z"
          }
        ></path>

        <path
          d={
            "M256 0C114.613 0 0 114.617 0 256c0 141.387 114.613 256 256 256 141.383 0 256-114.613 256-256C512 114.617 397.383 0 256 0zm0 448c-105.871 0-192-86.129-192-192 0-105.867 86.129-192 192-192 105.867 0 192 86.133 192 192 0 105.871-86.133 192-192 192z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default PlusIcon;
/* prettier-ignore-end */
