import { classNames } from "components/utils/functions";
import { forwardRef, ComponentProps } from "react";

import styles from "./sidebar-button.module.css";

export interface SidebarButtonProps
  extends Omit<ComponentProps<"a">, "className" | "children"> {
  name: string;
  href: string;
  Icon: (props: ComponentProps<"svg">) => JSX.Element;
  current: boolean;
}

const SidebarButton = forwardRef<HTMLAnchorElement, SidebarButtonProps>(
  ({ name, href, Icon, current, ...rest }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={classNames(
          current ? styles.linkCurrent : styles.linkNotCurrent,
          "group",
          styles.linkDefault
        )}
        {...rest}
      >
        <Icon
          className={classNames(
            current ? styles.iconCurrent : styles.iconNotCurrent,
            styles.iconDefault
          )}
          aria-hidden="true"
        />
        {name}
      </a>
    );
  }
);

export default SidebarButton;
