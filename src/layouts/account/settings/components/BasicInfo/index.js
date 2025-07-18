// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Settings page components
import FormField from "layouts/account/components/FormField";

function BasicInfo() {
  return (
    <Card id="basic-info" sx={{ overflow: "visible", mb: 3 }}>
      <MDBox p={3} lineHeight={1}>
        <MDBox display="flex" justifyContent="space-between" alignItems="center">
          <MDTypography variant="h6" fontWeight="medium">
            Basic Info
          </MDTypography>
          <MDButton variant="text" color="info" size="small">
            <Icon fontSize="small">edit</Icon>
            &nbsp;EDIT
          </MDButton>
        </MDBox>
      </MDBox>
      <MDBox component="form" pb={3} px={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormField label="Company Legal Name" placeholder="Enter company name" />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField label="Address 1" placeholder="Enter address" />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField label="Notification Email" placeholder="notifications@example.com" inputProps={{ type: "email" }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField label="Address 2" placeholder="Enter address 2" />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormField label="Phone Number" placeholder="+1 (312) 555-1212" />
          </Grid>
          <Grid item xs={12} md={2}>
            <FormField label="City" placeholder="City" />
          </Grid>
          <Grid item xs={12} md={2}>
            <FormField label="ZIP" placeholder="ZIP" />
          </Grid>
          <Grid item xs={12} md={2}>
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
          <Grid item xs={12} md={6}>
            <FormField label="Country" placeholder="Select country" />
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default BasicInfo;
