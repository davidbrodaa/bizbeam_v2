/**
=========================================================
* Material Dashboard 3 PRO React - v2.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDProgress from "components/MDProgress";

// ProgressLineChart configurations
import configs from "examples/Charts/LineCharts/ProgressLineChart/config";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function ProgressLineChart({ color = "info", icon, title, count = 0, progress, height = "6.25rem", chart }) {
  const { data, options } = configs(color, chart.labels || [], title, chart.data || []);

  return (
    <Card>
      <MDBox display="flex" alignItems="center" pt={2} px={2}>
        <MDBox
          width="3rem"
          height="3rem"
          display="grid"
          justifyContent="center"
          alignItems="center"
          borderRadius="md"
          shadow="md"
          color="white"
          bgColor={color}
          variant="gradient"
        >
          <Icon fontSize="default">{icon}</Icon>
        </MDBox>
        <MDBox ml={2} lineHeight={1}>
          <MDTypography
            variant="button"
            fontWeight="regular"
            textTransform="capitalize"
            color="text-stone-600"
          >
            {title}
          </MDTypography>
          {count ? (
            <MDTypography variant="h5" fontWeight="bold">
              {count}
            </MDTypography>
          ) : null}
        </MDBox>
        <MDBox width="25%" ml="auto">
          <MDTypography display="block" variant="caption" fontWeight="medium" color="text-stone-600">
            {progress}%
          </MDTypography>
          <MDBox mt={0.25}>
            <MDProgress variant="gradient" color={color} value={progress} />
          </MDBox>
        </MDBox>
      </MDBox>
      {useMemo(
        () => (
          <MDBox mt={2}>
            <Line data={data} options={options} style={{ height }} redraw />
          </MDBox>
        ),
        [chart, height, color]
      )}
    </Card>
  );
}

// Typechecking props for the ProgressLineChart
ProgressLineChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  progress: PropTypes.number.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default ProgressLineChart;
