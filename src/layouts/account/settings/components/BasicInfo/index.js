// @material-ui core components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

// Settings page components
import FormField from "layouts/account/components/FormField";

function BasicInfo() {
  return (
    <Card id="basic-info" sx={{ overflow: "visible" }}>
      <MDBox p={3} lineHeight={1}>
        <MDTypography variant="h6" fontWeight="medium">
          Basic Info
        </MDTypography>
      </MDBox>
      <MDBox component="form" pb={3} px={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormField label="Company Legal Name" placeholder="Legal" />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField label="Address 1" placeholder="123 Example Ave" />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField label="Address 2" placeholder="Suite 100" />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormField label="City" placeholder="Chicago" />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormField label="ZIP" placeholder="60606" />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormField label="Country" placeholder="United States of America" />
          </Grid>
          <Grid item xs={12}>
            <FormField label="Notification Email" placeholder="notifications@example.com" inputProps={{ type: "email" }} />
          </Grid>
          <Grid item xs={12}>
            <FormField label="Phone Number" placeholder="+1 (312) 555-1212" />
          </Grid>
          <Grid item xs={12}>
            <MDBox mb={1.5}>
              <MDInput
                select
                label="Language"
                defaultValue="English"
                SelectProps={{
                  native: true,
                }}
                variant="standard"
                fullWidth
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </MDInput>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default BasicInfo;
