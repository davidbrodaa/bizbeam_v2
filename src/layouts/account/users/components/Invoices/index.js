// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Billing page components
import Invoice from "layouts/account/billing/components/Invoice";

function Invoices() {
  return (
    <Card>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Invoices
        </MDTypography>
        <MDButton variant="outlined" color="info" size="small">
          VIEW ALL
        </MDButton>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice
            date="March, 01, 2020"
            id="#MS-415646"
            price="$180"
            noGutter={false}
            pdfIcon={true}
          />
          <Invoice
            date="February, 10, 2021"
            id="#RV-126749"
            price="$250"
            noGutter={false}
            pdfIcon={true}
          />
          <Invoice
            date="April, 05, 2020"
            id="#FB-212562"
            price="$560"
            noGutter={false}
            pdfIcon={true}
          />
          <Invoice
            date="June, 25, 2019"
            id="#QW-103578"
            price="$120"
            noGutter={false}
            pdfIcon={true}
          />
          <Invoice
            date="March, 01, 2020"
            id="#AR-803481"
            price="$300"
            noGutter={true}
            pdfIcon={true}
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Invoices;