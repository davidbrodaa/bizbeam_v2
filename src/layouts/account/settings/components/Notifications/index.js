// @mui material components
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Switch from "@mui/material/Switch";
import Icon from "@mui/material/Icon";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Setting images components
import TableCell from "layouts/account/settings/components/TableCell";

function Notifications() {
  return (
    <Card id="notifications" sx={{ mb: 3 }}>
      <MDBox p={3} lineHeight={1} display="flex" flexDirection="column">
        <MDTypography variant="h6" fontWeight="medium" mb={1}>
          Notifications
        </MDTypography>
        <MDTypography variant="button" color="text" mb={2}>
          Choose how you receive notifications. These notification settings apply to the things you're watching.
        </MDTypography>
      </MDBox>
      <MDBox pb={3} px={3}>
        <MDBox minWidth="auto" sx={{ overflow: "scroll" }}>
          <Table sx={{ minWidth: "36rem" }}>
            <MDBox component="thead">
              <TableRow>
                <TableCell width="40%" padding={[1.5, 3, 1.5, 0.5]} noBorder>
                  <MDTypography variant="button" fontWeight="medium" color="text">
                    Activity
                  </MDTypography>
                </TableCell>
                <TableCell align="center" padding={[1.5, 2, 1.5, 2]} noBorder>
                  <MDBox display="flex" alignItems="center" justifyContent="center">
                    <Icon fontSize="small" sx={{ mr: 0.5 }}>email</Icon>
                    <MDTypography variant="button" fontWeight="medium" color="text">
                      Email
                    </MDTypography>
                  </MDBox>
                </TableCell>
                <TableCell align="center" padding={[1.5, 2, 1.5, 2]} noBorder>
                  <MDBox display="flex" alignItems="center" justifyContent="center">
                    <Icon fontSize="small" sx={{ mr: 0.5 }}>notifications</Icon>
                    <MDTypography variant="button" fontWeight="medium" color="text">
                      Push
                    </MDTypography>
                  </MDBox>
                </TableCell>
                <TableCell align="center" padding={[1.5, 2, 1.5, 2]} noBorder>
                  <MDBox display="flex" alignItems="center" justifyContent="center">
                    <Icon fontSize="small" sx={{ mr: 0.5 }}>sms</Icon>
                    <MDTypography variant="button" fontWeight="medium" color="text">
                      SMS
                    </MDTypography>
                  </MDBox>
                </TableCell>
              </TableRow>
            </MDBox>
            <TableBody>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]} noBorder>
                  <MDBox lineHeight={1.4}>
                    <MDTypography variant="button" fontWeight="medium">
                      New User Creation
                    </MDTypography>
                    <MDTypography variant="caption" color="text" fontWeight="regular" display="block">
                      Notify when another user mentions you in a comment
                    </MDTypography>
                  </MDBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked color="success" />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch color="success" />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch color="success" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]} noBorder>
                  <MDBox lineHeight={1.4}>
                    <MDTypography variant="button" fontWeight="medium">
                      Login Activity
                    </MDTypography>
                    <MDTypography variant="caption" color="text" fontWeight="regular" display="block">
                      Notify when another user comments your item.
                    </MDTypography>
                  </MDBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked color="success" />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked color="success" />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch color="success" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]} noBorder>
                  <MDBox lineHeight={1.4}>
                    <MDTypography variant="button" fontWeight="medium">
                      New Projects
                    </MDTypography>
                    <MDTypography variant="caption" color="text" fontWeight="regular" display="block">
                      Notify when another user follows you.
                    </MDTypography>
                  </MDBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch color="success" />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked color="success" />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch color="success" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]} noBorder>
                  <MDTypography variant="button" fontWeight="medium">
                    Log in from a new device
                  </MDTypography>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked color="success" />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked color="success" />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked color="success" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Notifications;
