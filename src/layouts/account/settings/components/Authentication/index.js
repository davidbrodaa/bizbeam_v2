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
    <Card id="2fa">
      <MDBox p={3} lineHeight={1} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Two-factor authentication
        </MDTypography>
        <MDBadge variant="contained" color="success" badgeContent="ENABLED" container />
      </MDBox>
      <MDBox p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} display="flex" justifyContent="space-between" alignItems="center">
            <MDTypography variant="body2" color="text">
              Security keys
            </MDTypography>
            <MDBadge variant="contained" color="success" badgeContent="ENABLED" container />
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="flex-end">
            <Button variant="outlined" size="small">
              Disable
            </Button>
          </Grid>
          
          <Grid item xs={12} md={6} display="flex" justifyContent="space-between" alignItems="center">
            <MDTypography variant="body2" color="text">
              SMS number
            </MDTypography>
            <MDBadge variant="contained" color="success" badgeContent="ENABLED" container />
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="flex-end">
            <Button variant="outlined" size="small">
              Disable
            </Button>
          </Grid>
          
          <Grid item xs={12} md={6} display="flex" justifyContent="space-between" alignItems="center">
            <MDTypography variant="body2" color="text">
              Authenticator app
            </MDTypography>
            <MDBadge variant="contained" color="success" badgeContent="ENABLED" container />
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="flex-end">
            <Button variant="outlined" size="small">
              Disable
            </Button>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default Authentication;
