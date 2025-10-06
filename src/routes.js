import AllProjects from "layouts/transmissions/all-projects";
import Settings from "layouts/account/settings";
import Timeline from "layouts/dashboards/projects/timeline";
import SignInBasic from "layouts/authentication/sign-in/basic";
import MDAvatar from "components/MDAvatar";

// @mui icons
import Icon from "@mui/material/Icon";

// Images
import profilePicture from "assets/images/team-3.jpg";

const routes = [
  {
    type: "collapse",
    name: "Brooklyn Alice",
    key: "brooklyn-alice",
    icon: <MDAvatar src={profilePicture} alt="Brooklyn Alice" size="sm" />,
    collapse: [
      {
        name: "Settings",
        key: "profile-settings",
        route: "/pages/account/settings",
        component: <Settings />,
      },
      {
        name: "Logout",
        key: "logout",
        route: "/authentication/sign-in/basic",
        component: <SignInBasic />,
      },
    ],
  },
  { type: "divider", key: "divider-0" },
  {
    type: "collapse",
    name: "AI Agent",
    key: "ai-agent",
    icon: <Icon fontSize="small">smart_toy</Icon>,
    collapse: [
      {
        name: "Image Model",
        key: "image-model",
        route: "/ai-agent/image-model",
      },
      {
        name: "Transmission Model",
        key: "transmission-model",
        route: "/ai-agent/transmission-model",
      },
       {
        name: "Admin Model",
        key: "admin-model",
        route: "/ai-agent/admin-model",
      },
    ],
  },
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    icon: <Icon fontSize="small">dashboard</Icon>,
    collapse: [
      {
        name: "Timeline",
        key: "timeline",
        route: "/dashboards/timeline",
      },
      {
        name: "Images Dashboard",
        key: "images-dashboard",
        route: "/dashboards/images-dashboard",
      },
      {
        name: "Admin Dashboard",
        key: "admin-dashboard",
        route: "/dashboards/admin-dashboard",
      },
    ],
  },
  { type: "title", title: "Applications", key: "title-Apps" },
  {
    type: "collapse",
    name: "Images",
    key: "images",
    icon: <Icon fontSize="small">image</Icon>,
    collapse: [
    ],
  },
  {
    type: "collapse",
    name: "Transmissions",
    key: "transmissions",
    icon: <Icon fontSize="small">apps</Icon>,
    collapse: [
      {
        name: "All Projects",
        key: "all-projects",
        route: "/transmissions/all-projects",
        component: <AllProjects />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Schedule",
    key: "schedule",
    icon: <Icon fontSize="small">calendar_today</Icon>,
    collapse: [
    ],
  },
  {
    type: "collapse",
    name: "Monitoring",
    key: "monitoring",
    icon: <Icon fontSize="small">monitor</Icon>,
    collapse: [
    ],
  },
  { type: "title", title: "Company Profile", key: "title-company" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    collapse: [
    ],
  },
  {
    type: "collapse",
    name: "Teams",
    key: "teams",
    icon: <Icon fontSize="small">group</Icon>,
    collapse: [
    ],
  },
  {
    type: "collapse",
    name: "Settings",
    key: "settings",
    icon: <Icon fontSize="small">settings</Icon>,
    collapse: [
      {
        name: "Account Settings",
        key: "account-settings",
        route: "/pages/account/settings",
        component: <Settings />,
      },
    ],
  },
  { type: "title", title: "Docs", key: "title-docs" },
  {
    type: "collapse",
    name: "How to...",
    key: "how-to",
    icon: <Icon fontSize="small">description</Icon>,
    collapse: [
    ],
  },
  {
    type: "collapse",
    name: "Manual",
    key: "manual",
    icon: <Icon fontSize="small">support</Icon>,
    collapse: [
    ],
  },
  {
    type: "collapse",
    name: "Changelog",
    key: "changelog",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    collapse: [
    ],
  },
];

export default routes;
