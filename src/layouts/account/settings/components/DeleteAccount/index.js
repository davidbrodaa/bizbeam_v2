// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function DeleteAccount() {
  return (
    <Card id="delete-account">
      <MDBox p={3} lineHeight={1}>
        <MDTypography variant="h6" fontWeight="medium">
          Delete Account
        </MDTypography>
        <MDTypography variant="button" color="text" fontWeight="regular">
          Once you delete your account, there is no going back. Please be certain.
        </MDTypography>
      </MDBox>
      <MDBox p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Button variant="outlined" color="secondary" fullWidth>
              DEACTIVATE
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="contained" color="error" fullWidth>
              DELETE ACCOUNT
            </Button>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default DeleteAccount;
