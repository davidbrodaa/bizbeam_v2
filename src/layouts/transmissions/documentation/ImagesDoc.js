import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function ImagesDoc() {
  return (
    <MDBox pt={3} px={3}>
      <MDTypography variant="h5" fontWeight="medium" gutterBottom>
        Images Documentation
      </MDTypography>
      <MDTypography variant="body2" color="text">
        Documentation and guides for Images features and workflows.
      </MDTypography>
    </MDBox>
  );
}

export default ImagesDoc;
