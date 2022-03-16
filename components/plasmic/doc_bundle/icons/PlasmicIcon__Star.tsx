// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StarIcon(props: StarIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      style={{
        width: "32px",
        height: "32px",
        fill: "currentcolor",

        ...(style || {}),
      }}
      xmlSpace={"preserve"}
      opacity={"1"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M370.214 502.906c-11.484 0-22.938-2.844-33.125-8.188l-77.797-40.891c-2.016-1.078-4.547-1.078-6.578 0l-77.797 40.891c-10.172 5.344-21.625 8.188-33.109 8.188-15.141 0-29.609-4.719-41.844-13.594-22.047-16.047-32.906-42.703-28.328-69.578l14.891-86.672c.391-2.281-.375-4.594-2.047-6.234l-62.938-61.344c-19.531-19.047-26.438-47-18.016-72.953C11.979 166.562 34.01 148 60.995 144.093l86.984-12.641a7.026 7.026 0 005.313-3.859l38.906-78.828c12.047-24.453 36.5-39.672 63.813-39.672 27.297 0 51.75 15.219 63.813 39.688l38.906 78.813a7.022 7.022 0 005.313 3.859l86.969 12.641c27 3.906 49.016 22.469 57.453 48.406 8.438 25.984 1.531 53.938-18 72.984l-62.953 61.359a7.066 7.066 0 00-2.016 6.25l14.859 86.609c4.594 26.922-6.266 53.578-28.328 69.609-12.219 8.877-26.673 13.595-41.813 13.595zM256.011 388.875c11.484 0 22.938 2.844 33.109 8.188l77.813 40.906c1.953 1.031 4.203 1.813 7.391-.531a6.988 6.988 0 002.813-6.906l-14.844-86.625a71.183 71.183 0 0120.453-62.969l62.953-61.375c1.938-1.875 2.609-4.656 1.781-7.25-.813-2.5-3.047-4.375-5.672-4.75l-87-12.656a71.167 71.167 0 01-53.594-38.938l-38.906-78.813c-2.391-4.859-10.219-4.844-12.609-.031l-38.906 78.859a71.186 71.186 0 01-53.563 38.922l-87.016 12.641c-2.641.391-4.875 2.266-5.703 4.797a7.007 7.007 0 001.797 7.219l62.953 61.359a71.22 71.22 0 0120.469 62.969l-14.875 86.672c-.453 2.625.625 5.281 2.813 6.875 3.219 2.328 5.453 1.563 7.422.531l77.797-40.906c10.171-5.344 21.624-8.188 33.124-8.188z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StarIcon;
/* prettier-ignore-end */
