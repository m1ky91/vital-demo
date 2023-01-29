import { classNames } from "components/utils/functions";
import { forwardRef, ComponentProps } from "react";

import styles from "./sidebar-footer.module.css";

export interface SidebarFooterProps
  extends Omit<ComponentProps<"div">, "className" | "children"> {
  href: string;
  srcImage: string;
  altImage: string;
  profileName: string;
}

const SidebarFooter = forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ href, srcImage, altImage, profileName, ...rest }, ref) => {
    return (
      <div ref={ref} className={styles.container} {...rest}>
        <a href={href} className={classNames("group", styles.link)}>
          <div className={classNames("group", styles.innerLinkContainer)}>
            <div>
              <img className={styles.img} src={srcImage} alt={altImage} />
            </div>
            <div className="ml-3">
              <p className={styles.profileName}>{profileName}</p>
              <p className={styles.viewProfile}>View profile</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
);

export default SidebarFooter;
