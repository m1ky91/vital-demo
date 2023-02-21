import { useState } from "react";
import {
  Bars3Icon,
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import SidebarFooter from "components/molecules/sidebar-footer";
import SidebarHeader from "components/molecules/sidebar-header";
import Sidebar from "components/organisms/sidebar";
import { NavLink, Outlet } from "react-router-dom";

import styles from "./app.module.css";
import { classNames } from "components/utils/functions";

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Gym", href: "/gym", icon: UsersIcon },
  { name: "Bookings", href: "/bookings", icon: FolderIcon },
  { name: "Training", href: "/training", icon: CalendarIcon },
];

const App = (): JSX.Element => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onOpen={setSidebarOpen}>
        <SidebarHeader
          srcImage="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          altImage="Your Company"
        />
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  classNames(
                    isActive ? styles.linkCurrent : styles.linkNotCurrent,
                    "group",
                    styles.linkDefault
                  )
                }
              >
                <item.icon className={styles.iconDefault} aria-hidden="true" />
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <SidebarFooter
          href="#"
          srcImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          altImage=""
          profileName="Tom Cook"
        />
      </Sidebar>
      <div className="flex flex-1 flex-col md:pl-64">
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex flex-1 justify-between px-8 py-4">
            <div className="flex flex-1">
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
            </div>
          </div>
        </div>

        <main className="flex-1 py-2">
          <div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              <Outlet />
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
