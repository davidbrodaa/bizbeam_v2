import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

function Documentation() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={3} px={3}>
        <MDTypography variant="h4" fontWeight="medium" gutterBottom>
          Documentation
        </MDTypography>
        <MDTypography variant="body2" color="text">
          This is the Documentation module. Add your docs, links or embedded help here.
        </MDTypography>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Documentation;
