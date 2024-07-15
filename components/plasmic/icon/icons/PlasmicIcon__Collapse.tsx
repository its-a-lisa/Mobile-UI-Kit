// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CollapseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CollapseIcon(props: CollapseIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9 13l-.707-.707.707-.707.707.707L9 13zm1 9a1 1 0 11-2 0h2zm-6.707-4.707l5-5 1.414 1.414-5 5-1.414-1.414zm6.414-5l5 5-1.414 1.414-5-5 1.414-1.414zM10 13v9H8v-9h2zm5-2l-.707.707.707.707.707-.707L15 11zm1-9a1 1 0 10-2 0h2zM9.293 6.707l5 5 1.414-1.414-5-5-1.414 1.414zm6.414 5l5-5-1.414-1.414-5 5 1.414 1.414zM16 11V2h-2v9h2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CollapseIcon;
/* prettier-ignore-end */
