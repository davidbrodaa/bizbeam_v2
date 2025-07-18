// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

function DescriptionInfo() {
  return (
    <Card id="description-info" sx={{ mb: 3 }}>
      <MDBox p={3} lineHeight={1}>
        <MDBox display="flex" justifyContent="space-between" alignItems="center">
          <MDTypography variant="h6" fontWeight="medium">
            Description Info
          </MDTypography>
          <MDButton variant="text" color="info" size="small">
            <Icon fontSize="small">edit</Icon>
            &nbsp;EDIT
          </MDButton>
        </MDBox>
      </MDBox>
      <MDBox pb={3} px={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <MDBox mb={2}>
              <MDTypography variant="caption" color="text" fontWeight="medium" textTransform="uppercase">
                File name
              </MDTypography>
              <MDTypography variant="button" fontWeight="regular" display="block">
                Unknown_user_live
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <MDBox mb={2}>
              <MDTypography variant="caption" color="text" fontWeight="medium" textTransform="uppercase">
                Notification Address
              </MDTypography>
              <MDTypography variant="button" fontWeight="regular" display="block">
                name@example.com
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <MDBox mb={2}>
              <MDTypography variant="caption" color="text" fontWeight="medium" textTransform="uppercase">
                Serial (SN)
              </MDTypography>
              <MDTypography variant="button" fontWeight="regular" display="block">
                SN-240-0003
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default DescriptionInfo;