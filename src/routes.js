import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },

  {
    path: "/table",
    name: "Chart",
    rtlName: "User Profile",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/Notifications",
    name: "Notifications",
    rtlName: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/logout",
    name: "Logout",
    rtlName: "Logout",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin",
  },
];

export default dashboardRoutes;
