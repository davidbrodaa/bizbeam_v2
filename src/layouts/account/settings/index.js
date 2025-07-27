// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";

// Settings page components
import Header from "layouts/account/settings/components/Header";
import CompanyLogo from "layouts/account/settings/components/CompanyLogo";
import BasicInfo from "layouts/account/settings/components/BasicInfo";
import Authentication from "layouts/account/settings/components/Authentication";
import Notifications from "layouts/account/settings/components/Notifications";
import DescriptionInfo from "layouts/account/settings/components/DescriptionInfo";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

function Settings() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={4}>
        <Header />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CompanyLogo />
          </Grid>
          <Grid item xs={12}>
            <BasicInfo />
          </Grid>
          <Grid item xs={12}>
            <Authentication />
          </Grid>
          <Grid item xs={12}>
            <Notifications />
          </Grid>
          <Grid item xs={12}>
            <DescriptionInfo />
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Settings;
