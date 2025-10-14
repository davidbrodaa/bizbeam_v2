import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function TransmissionsDoc() {
  return (
    <MDBox pt={3} px={3}>
      <MDTypography variant="h5" fontWeight="medium" gutterBottom>
        Transmissions Documentation
      </MDTypography>
      <MDTypography variant="body2" color="text">
        Documentation and usage guides for Transmissions.
      </MDTypography>
    </MDBox>
  );
}

export default TransmissionsDoc;
