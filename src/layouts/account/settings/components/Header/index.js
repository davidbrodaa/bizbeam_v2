// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

function Header() {
  return (
    <MDBox mb={3}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <MDBox>
          <MDTypography variant="h4" fontWeight="medium">
            Profile Overview
          </MDTypography>
          <MDBox display="flex" alignItems="center" mt={0.5}>
            <MDTypography variant="button" color="text" mr={1}>
              Account Status:
            </MDTypography>
            <MDTypography variant="button" color="text" mr={2}>
              01/04/2025
            </MDTypography>
            <MDTypography variant="button" color="text" mr={1}>
              Last Modified:
            </MDTypography>
            <MDTypography variant="button" color="text">
              04/23/2025
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDButton variant="text" color="info" size="small">
          <Icon fontSize="small">file_upload</Icon>
          &nbsp;Upload Logo
        </MDButton>
      </MDBox>
    </MDBox>
  );
}

export default Header;
