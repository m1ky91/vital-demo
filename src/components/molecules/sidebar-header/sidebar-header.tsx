import { forwardRef, ComponentProps } from "react";

import styles from "./sidebar-header.module.css";

export interface SidebarHeaderProps
  extends Omit<ComponentProps<"div">, "className" | "children"> {
  srcImage: string;
  altImage: string;
}

const SidebarHeader = forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ srcImage, altImage, ...rest }, ref) => {
    return (
      <div ref={ref} className={styles.container} {...rest}>
        <img className={styles.img} src={srcImage} alt={altImage} />
      </div>
    );
  }
);

export default SidebarHeader;
