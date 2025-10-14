import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";

function Partners() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={3} px={3}>
        <MDTypography variant="h4" fontWeight="medium" gutterBottom>
          Partners
        </MDTypography>
        <MDTypography variant="body2" color="text">
          Partner management and integrations go here.
        </MDTypography>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Partners;
