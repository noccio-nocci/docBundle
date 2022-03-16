// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SectionFlapIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SectionFlapIcon(props: SectionFlapIconProps) {
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

      <path
        fill={"currentColor"}
        d={
          "M255.992 92.089L0 348.081l71.821 71.83L255.992 235.74 440.18 419.911l71.82-71.83z"
        }
      ></path>
    </svg>
  );
}

export default SectionFlapIcon;
/* prettier-ignore-end */
