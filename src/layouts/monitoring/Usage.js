import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

function Usage() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={3} px={3}>
        <MDTypography variant="h4" fontWeight="medium" gutterBottom>
          Usage
        </MDTypography>
        <MDTypography variant="body2" color="text">
          Usage metrics and analytics will be shown here.
        </MDTypography>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Usage;
