// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 3 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Billing page components
import PaymentMethod from "layouts/account/billing/components/PaymentMethod";
import Invoices from "layouts/account/billing/components/Invoices";
import BillingInformation from "layouts/account/billing/components/BillingInformation";
import Transactions from "layouts/account/billing/components/Transactions";
import MasterCard from "examples/Cards/MasterCard";

function Billing() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={4}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <MDBox mb={3}>
                <MasterCard number={4562112245947852} holder="Jack Peterson" expires="11/22" />
              </MDBox>
              <MDBox mb={3}>
                <PaymentMethod />
              </MDBox>
              <MDBox mb={3}>
                <BillingInformation />
              </MDBox>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Invoices />
              <MDBox mt={3}>
                <Transactions />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;