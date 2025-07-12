// @material-ui core components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

// Settings page components
import FormField from "layouts/account/components/FormField";

function PrimaryContactInfo() {
  return (
    <Card id="primary-contact-info" sx={{ overflow: "visible" }}>
      <MDBox p={3} lineHeight={1}>
        <MDTypography variant="h6" fontWeight="medium">
          Primary Contact Basic Info
        </MDTypography>
      </MDBox>
      <MDBox component="form" pb={3} px={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormField label="Primary Contact First Name (admin)" placeholder="John" />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField label="Primary Contact Last Name (admin)" placeholder="Doe" />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField label="Email" placeholder="example@email.com" inputProps={{ type: "email" }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField label="Custom Email" placeholder="custom@email.com" inputProps={{ type: "email" }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField label="Your location" placeholder="Sydney, Australia" />
          </Grid>
          <Grid item xs={12} md={6}>
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

export default PrimaryContactInfo;