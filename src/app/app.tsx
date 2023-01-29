import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import SidebarButton from "components/molecules/sidebar-button";
import SidebarFooter from "components/molecules/sidebar-footer";
import SidebarHeader from "components/molecules/sidebar-header";
import Sidebar from "components/organisms/sidebar";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: InboxIcon, current: false },
  { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];

const App = (): JSX.Element => {
  return (
    <>
      <Sidebar>
        <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
          <SidebarHeader
            srcImage="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            altImage="Your Company"
          />
          <nav className="mt-5 space-y-1 px-2">
            {navigation.map((item) => (
              <SidebarButton
                key={item.name}
                name={item.name}
                href={item.href}
                Icon={item.icon}
                current={item.current}
              />
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
    </>
  );
};

export default App;
