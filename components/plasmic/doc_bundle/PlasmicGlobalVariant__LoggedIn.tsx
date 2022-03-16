// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";
import * as p from "@plasmicapp/react-web";
export type LoggedInValue = "_true";
export const LoggedInContext = React.createContext<LoggedInValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function useLoggedIn() {
  return React.useContext(LoggedInContext);
}

export default LoggedInContext;
/* prettier-ignore-end */
