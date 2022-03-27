// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NoteIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NoteIcon(props: NoteIconProps) {
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
          "M415.594 93.344l-18.906-62.563c4.625-2.969 7.75-8.156 7.75-14.078C404.438 7.469 396.969 0 387.719 0H129.891A62.979 62.979 0 0085.25 18.5a62.903 62.903 0 00-18.5 44.625V470.75C66.75 493.531 85.219 512 108 512h302.5c19.188 0 34.75-15.547 34.75-34.734V127.578c0-17.453-12.906-31.734-29.656-34.234zm-285.703-.5c-8.266 0-15.594-3.313-21.016-8.703-5.406-5.453-8.719-12.766-8.719-21.016s3.313-15.578 8.719-21.016c5.422-5.391 12.75-8.703 21.016-8.703h241.984l17.969 59.438H129.891z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NoteIcon;
/* prettier-ignore-end */
