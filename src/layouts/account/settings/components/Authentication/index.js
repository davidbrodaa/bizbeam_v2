// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

function Authentication() {
  return (
    <Card id="2fa" sx={{ mb: 3 }}>
      <MDBox p={3} lineHeight={1}>
        <MDTypography variant="h6" fontWeight="medium" mb={2}>
          Two-factor authentication
        </MDTypography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MDBox display="flex" justifyContent="space-between" alignItems="center" py={1}>
              <MDTypography variant="body2" color="text">
                Security keys
              </MDTypography>
              <MDBox display="flex" alignItems="center" gap={2}>
                <MDBadge variant="contained" color="success" badgeContent="ENABLED" container />
                <Button variant="outlined" size="small" color="error">
                  Disable
                </Button>
              </MDBox>
            </MDBox>
          </Grid>
          
          <Grid item xs={12}>
            <MDBox display="flex" justifyContent="space-between" alignItems="center" py={1}>
              <MDTypography variant="body2" color="text">
                SMS number
              </MDTypography>
              <MDBox display="flex" alignItems="center" gap={2}>
                <MDBadge variant="contained" color="success" badgeContent="ENABLED" container />
                <Button variant="outlined" size="small" color="error">
                  Disable
                </Button>
              </MDBox>
            </MDBox>
          </Grid>
          
          <Grid item xs={12}>
            <MDBox display="flex" justifyContent="space-between" alignItems="center" py={1}>
              <MDTypography variant="body2" color="text">
                Authenticator app
              </MDTypography>
              <MDBox display="flex" alignItems="center" gap={2}>
                <MDBadge variant="contained" color="success" badgeContent="ENABLED" container />
                <Button variant="outlined" size="small" color="error">
                  Disable
                </Button>
              </MDBox>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default Authentication;
