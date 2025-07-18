// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function CompanyLogo() {
  return (
    <Card id="company-logo" sx={{ mb: 3 }}>
      <MDBox p={3}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={2}>
            <MDBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="80px"
              height="80px"
              borderRadius="lg"
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} dashed ${borderColor}`,
                backgroundColor: "grey.100"
              }}
            >
              <MDTypography variant="caption" color="text" textAlign="center">
                COMPANY<br />LOGO
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={10}>
            <MDTypography variant="h6" fontWeight="medium">
              Company Name
            </MDTypography>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default CompanyLogo;