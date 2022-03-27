// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GoogleLogoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GoogleLogoIcon(props: GoogleLogoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <defs>
        <path
          id={"89yrr486ia"}
          d={
            "M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
          }
        ></path>
      </defs>

      <clipPath id={"89yrr486ib"}>
        <use xlinkHref={"#89yrr486ia"} overflow={"visible"}></use>
      </clipPath>

      <path
        clipPath={"url(#89yrr486ib)"}
        fill={"#FBBC05"}
        d={"M0 37V11l17 13z"}
      ></path>

      <path
        clipPath={"url(#89yrr486ib)"}
        fill={"#EA4335"}
        d={"M0 11l17 13 7-6.1L48 14V0H0z"}
      ></path>

      <path
        clipPath={"url(#89yrr486ib)"}
        fill={"#34A853"}
        d={"M0 37l30-23 7.9 1L48 0v48H0z"}
      ></path>

      <path
        clipPath={"url(#89yrr486ib)"}
        fill={"#4285F4"}
        d={"M48 48L17 24l-4-3 35-10z"}
      ></path>
    </svg>
  );
}

export default GoogleLogoIcon;
/* prettier-ignore-end */
