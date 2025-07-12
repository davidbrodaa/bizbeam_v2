// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Billing page components
import Bill from "layouts/account/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="billing-information">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Billing Contact
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="Oliver Liam"
            company="Viking Burrito"
            email="oliver@burrito.com"
            vat="FRB1235476"
          />
          <Bill
            name="Lucas Harper"
            company="Stone Tech Zone"
            email="lucas@stone-tech.com"
            vat="FRB1235476"
          />
          <Bill
            name="Ethan James"
            company="Fiber Notion"
            email="ethan@fiber.com"
            vat="FRB1235476"
            noGutter
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;