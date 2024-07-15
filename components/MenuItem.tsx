import * as React from "react";
import {
  PlasmicMenuItem,
  DefaultMenuItemProps
} from "./plasmic/menu_item/PlasmicMenuItem";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface MenuItemProps extends DefaultMenuItemProps {
  // Feel free to add any additional props that this component should receive
}
function MenuItem_(props: MenuItemProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicMenuItem.useBehavior<MenuItemProps>(
    props,
    ref
  );
  return <PlasmicMenuItem {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<MenuItemProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<MenuItemProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const MenuItem = React.forwardRef(MenuItem_) as any as ButtonComponentType;

export default Object.assign(MenuItem, { __plumeType: "button" });
