import { Dialog, Transition } from "@headlessui/react";
import { forwardRef, ComponentProps, Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import styles from "./sidebar.module.css";

export type SidebarProps = Omit<ComponentProps<"div">, "className">

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ children, ...rest }, ref) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
      <div ref={ref} {...rest}>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className={styles.dialog} onClose={setSidebarOpen}>
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
                        onClick={() => setSidebarOpen(false)}
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
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
            {children}
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default Sidebar;
