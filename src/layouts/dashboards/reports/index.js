import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "components/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import DataTable from "examples/Tables/DataTable";

function Reports() {
  const reportsBarChartData = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: { label: "Sales", data: [50, 40, 300, 320, 500, 350, 200, 230, 500] },
  };

  const reportsLineChartData = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenue",
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
      },
    ],
  };

  const dataTableData = {
    columns: [
      { Header: "Report Name", accessor: "name", width: "40%" },
      { Header: "Date", accessor: "date", width: "20%" },
      { Header: "Status", accessor: "status", width: "20%" },
      { Header: "Action", accessor: "action", width: "20%" },
    ],
    rows: [
      {
        name: "Sales Report Q4",
        date: "2024-03-15",
        status: "Completed",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View
          </MDTypography>
        ),
      },
      {
        name: "User Analytics",
        date: "2024-03-10",
        status: "Completed",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View
          </MDTypography>
        ),
      },
      {
        name: "Revenue Summary",
        date: "2024-03-05",
        status: "Completed",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View
          </MDTypography>
        ),
      },
      {
        name: "Monthly Performance",
        date: "2024-02-28",
        status: "Archived",
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            View
          </MDTypography>
        ),
      },
    ],
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pb={3}>
        <MDBox mb={3} ml={1}>
          <MDTypography variant="h4" fontWeight="bold">
            Reports
          </MDTypography>
          <MDTypography
            variant="button"
            fontWeight="regular"
            sx={{ fontSize: "16px", color: "#737373" }}
          >
            View and analyze your business reports
          </MDTypography>
        </MDBox>

        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <ComplexStatisticsCard
                icon="assessment"
                title="Total Reports"
                count={45}
                percentage={{
                  color: "success",
                  amount: "+12%",
                  label: "than last month",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <ComplexStatisticsCard
                icon="trending_up"
                title="Revenue Growth"
                count="23%"
                percentage={{
                  color: "success",
                  amount: "+5%",
                  label: "than last quarter",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <ComplexStatisticsCard
                icon="groups"
                title="Active Users"
                count="8,234"
                percentage={{
                  color: "success",
                  amount: "+18%",
                  label: "than last week",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <ComplexStatisticsCard
                icon="task_alt"
                title="Completed"
                count={38}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "out of 45 reports",
                }}
              />
            </Grid>
          </Grid>
        </MDBox>

        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <ReportsBarChart
                color="info"
                title="Weekly Sales"
                description="Performance Overview"
                date="updated today"
                chart={reportsBarChartData}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ReportsLineChart
                color="success"
                title="Revenue Trends"
                description={
                  <>
                    (<strong>+15%</strong>) increase this year
                    )
                  </>
                }
                date="updated 2 hours ago"
                chart={reportsLineChartData}
              />
            </Grid>
          </Grid>
        </MDBox>

        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <DataTable
                table={dataTableData}
                showTotalEntries={false}
                isSorted={false}
                noEndBorder
                entriesPerPage={false}
              />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Reports;
