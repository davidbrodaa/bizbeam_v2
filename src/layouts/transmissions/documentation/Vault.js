import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function Vault() {
  return (
    <MDBox pt={3} px={3}>
      <MDTypography variant="h5" fontWeight="medium" gutterBottom>
        Vault
      </MDTypography>
      <MDTypography variant="body2" color="text">
        Secure storage and documentation for sensitive configuration.
      </MDTypography>
    </MDBox>
  );
}

export default Vault;
