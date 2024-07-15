// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaTwitchsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaTwitchsvgIcon(props: FaTwitchsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M391.2 103.5h-38.7v109.7h38.6zM285 103h-38.6v109.8H285zM120.8 0L24.3 91.4v329.2h115.8V512l96.5-91.4h77.3L487.7 256V0zm328.3 237.8l-77.2 73.1h-77.3l-67.6 64v-64h-86.9V36.6h309z"
        }
      ></path>
    </svg>
  );
}

export default FaTwitchsvgIcon;
/* prettier-ignore-end */
