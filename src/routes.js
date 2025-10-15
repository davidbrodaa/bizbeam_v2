import AllProjects from "layouts/transmissions/projects";
import SlackBotProject from "layouts/transmissions/projects/slack-bot";
import Settings from "layouts/account/settings";
import Timeline from "layouts/dashboards/projects/timeline";
import SignInBasic from "layouts/authentication/sign-in/basic";
import ImageModel from "layouts/ai-agent/image-model";
import TransmissionModel from "layouts/ai-agent/transmission-model";
import AdminModel from "layouts/ai-agent/admin-model";
import Calendar from "layouts/dashboards/calendar";
import MDAvatar from "components/MDAvatar";
import Documentation from "layouts/transmissions/documentation";
import TransmissionsDoc from "layouts/transmissions/documentation/TransmissionsDoc";
import ImagesDoc from "layouts/transmissions/documentation/ImagesDoc";
import Vault from "layouts/transmissions/documentation/Vault";
import Usage from "layouts/monitoring/Usage";
import Partners from "layouts/transmissions/Partners";

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
        component: <ImageModel />,
      },
      {
        name: "Transmission Model",
        key: "transmission-model",
        route: "/ai-agent/transmission-model",
        component: <TransmissionModel />,
      },
      {
        name: "Admin Model",
        key: "admin-model",
        route: "/ai-agent/admin-model",
        component: <AdminModel />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    icon: <Icon fontSize="small">dashboard</Icon>,
    collapse: [
      
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
        name: "Projects",
        key: "projects",
        route: "/transmissions/projects",
        component: <AllProjects />,
      },

      {
        name: "BizLink",
        key: "bizlink",
        route: "/transmissions/partners",
        component: <Partners />,
      },
      {
        name: "Schedule",
        key: "schedule",
        route: "/transmissions/schedule",
        icon: <Icon fontSize="small">calendar_today</Icon>,
        component: <Calendar />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Documentation",
    key: "documentation",
    icon: <Icon fontSize="small">description</Icon>,
    collapse: [
      {
        name: "Transmissions Doc",
        key: "transmissions-doc",
        route: "/applications/documentation/transmissions",
        component: <TransmissionsDoc />,
      },
      {
        name: "Images Docs",
        key: "images-docs",
        route: "/applications/documentation/images",
        component: <ImagesDoc />,
      },
      {
        name: "Vault",
        key: "vault",
        route: "/applications/documentation/vault",
        icon: <Icon fontSize="small">lock</Icon>,
        component: <Vault />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Monitoring",
    key: "monitoring",
    icon: <Icon fontSize="small">monitor</Icon>,
    collapse: [
      {
        name: "Timeline",
        key: "timeline",
        route: "/dashboards/timeline",
        component: <Timeline />,
      },
      {
        name: "Usage",
        key: "usage",
        route: "/monitoring/usage",
        component: <Usage />,
      },
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
