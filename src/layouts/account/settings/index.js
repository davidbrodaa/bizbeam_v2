// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";

// Settings page components
import Sidenav from "layouts/account/settings/components/Sidenav";
import BasicInfo from "layouts/account/settings/components/BasicInfo";
import Authentication from "layouts/account/settings/components/Authentication";
import Notifications from "layouts/account/settings/components/Notifications";
import DeleteAccount from "layouts/account/settings/components/DeleteAccount";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import PrimaryContactInfo from "layouts/account/settings/components/PrimaryContactInfo";

function Settings() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <Sidenav />
          </Grid>
          <Grid item xs={12} lg={9}>
            <MDBox>
              <MDBox mb={3}>
                <BasicInfo />
              </MDBox>
              <MDBox mb={3}>
                <PrimaryContactInfo />
              </MDBox>
              <MDBox mb={3}>
                <Authentication />
              </MDBox>
              <MDBox mb={3}>
                <Notifications />
              </MDBox>
              <MDBox mb={3}>
                <DeleteAccount />
              </MDBox>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Settings;
