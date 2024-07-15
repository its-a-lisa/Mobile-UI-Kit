// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaUnsplashsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaUnsplashsvgIcon(props: FaUnsplashsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 448 512"}
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
          "M448 230.2V480H0V230.2h141.1v124.9h165.8V230.2zM306.9 32H141.1v124.9h165.8z"
        }
      ></path>
    </svg>
  );
}

export default FaUnsplashsvgIcon;
/* prettier-ignore-end */
