// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaShopifysvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaShopifysvgIcon(props: FaShopifysvgIconProps) {
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
          "M388.3 104.1a4.7 4.7 0 00-4.4-4c-2 0-37.2-.8-37.2-.8s-21.6-20.8-29.6-28.8v432.7L442.8 472s-54.1-365.5-54.5-367.9zm-99.6-33.6a116.7 116.7 0 00-7.2-17.6C271 32.9 255.4 22 237 22a15 15 0 00-4 .4c-.4-.8-1.2-1.2-1.6-2-8-8.8-18.4-12.8-30.8-12.4-24 .8-48 18-67.3 48.8-13.6 21.6-24 48.8-26.8 70.1-27.6 8.4-46.8 14.4-47.2 14.8-14 4.4-14.4 4.8-16 18-1.2 10-38 291.8-38 291.8L307.9 504V65.7a41.7 41.7 0 00-4.4.4s-5.6 1.6-14.8 4.4zm-55.3 17.2c-16 4.8-33.6 10.4-50.8 15.6 4.8-18.8 14.4-37.6 25.6-50 4.4-4.4 10.4-9.6 17.2-12.8 6.8 14.4 8.4 34 8 47.2zm-32.8-63.3A27.5 27.5 0 01215 28c-6.4 3.2-12.8 8.4-18.8 14.4-15.2 16.4-26.8 42-31.6 66.5-14.4 4.4-28.8 8.8-42 12.8 8.7-38.4 41.2-96.5 78-97.3zm-46.4 220.2c1.6 25.6 69.3 31.2 73.3 91.7 2.8 47.6-25.2 80.1-65.7 82.5-48.8 3.2-75.7-25.6-75.7-25.6l10.4-44s26.8 20.4 48.4 18.8c14-.8 19.2-12.4 18.8-20.4-2-33.6-57.2-31.6-60.8-86.9-3.2-46.4 27.2-93.3 94.5-97.7 26-1.6 39.2 4.8 39.2 4.8l-15.2 57.6s-17.2-8-37.6-6.4c-29.6 2-30 20.8-29.6 25.6zm95.2-161.7c0-12-1.6-29.2-7.2-43.6 18.4 3.6 27.2 24 31.2 36.4q-10.8 3-24 7.2z"
        }
      ></path>
    </svg>
  );
}

export default FaShopifysvgIcon;
/* prettier-ignore-end */
