import { Dialog, Transition } from "@headlessui/react";
import { forwardRef, ComponentProps, Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import styles from "./sidebar.module.css";

export interface SidebarProps extends Omit<ComponentProps<"div">, "className"> {
  isOpen: boolean;
  onOpen: any;
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ isOpen, onOpen, children, ...rest }, ref) => {
    return (
      <div ref={ref} {...rest}>
        <Transition.Root show={isOpen} as={Fragment}>
          <Dialog as="div" className={styles.dialog} onClose={onOpen}>
            <Transition.Child
              as={Fragment}
              enter={styles.transitionOverlay}
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave={styles.transitionOverlay}
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className={styles.overlay} />
            </Transition.Child>

            <div className={styles.slider}>
              <Transition.Child
                as={Fragment}
                enter={styles.transitionSlider}
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave={styles.transitionSlider}
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className={styles.panel}>
                  <Transition.Child
                    as={Fragment}
                    enter={styles.transitionPanel}
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave={styles.transitionPanel}
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className={styles.closeButtonContainer}>
                      <button
                        type="button"
                        className={styles.closeButton}
                        onClick={() => onOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className={styles.closeButtonIcon}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className={styles.sidebarDesktopContainer}>
          <div className={styles.sidebarDesktopInnerContainer}>{children}</div>
        </div>
      </div>
    );
  }
);

export default Sidebar;
