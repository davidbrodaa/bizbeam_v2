// @mui material components
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Switch from "@mui/material/Switch";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Setting images components
import TableCell from "layouts/account/settings/components/TableCell";

function Notifications() {
  return (
    <Card id="notifications">
      <MDBox p={3} lineHeight={1} display="flex" flexDirection="column">
        <MDTypography variant="h6" fontWeight="medium">
          Notifications
        </MDTypography>
        <MDTypography variant="button" color="text">
          Choose how you receive notifications. These notification settings apply to the things you're watching.
        </MDTypography>
      </MDBox>
      <MDBox pb={3} px={3}>
        <MDBox minWidth="auto" sx={{ overflow: "scroll" }}>
          <Table sx={{ minWidth: "36rem" }}>
            <MDBox component="thead">
              <TableRow>
                <TableCell width="100%" padding={[1.5, 3, 1.5, 0.5]} noBorder>
                  Activity
                </TableCell>
                <TableCell align="center" padding={[1.5, 6, 1.5, 6]} noBorder>
                  Email
                </TableCell>
                <TableCell align="center" padding={[1.5, 6, 1.5, 6]} noBorder>
                  Push
                </TableCell>
                <TableCell align="center" padding={[1.5, 6, 1.5, 6]} noBorder>
                  SMS
                </TableCell>
              </TableRow>
            </MDBox>
            <TableBody>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]} noBorder>
                  <MDBox lineHeight={1.4}>
                    <MDTypography
                      variant="button"
                      fontWeight="regular"
                    >
                      New User Creation
                    </MDTypography>
                    <MDTypography
                      variant="caption"
                      color="text"
                      fontWeight="regular"
                    >
                      Notify when another user mentions you in a comment
                    </MDTypography>
                  </MDBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]} noBorder>
                  <MDBox lineHeight={1.4}>
                    <MDTypography
                      variant="button"
                      fontWeight="regular"
                    >
                      Login Activity
                    </MDTypography>
                    <MDTypography
                      variant="caption"
                      color="text"
                      fontWeight="regular"
                    >
                      Notify when another user comments your item.
                    </MDTypography>
                  </MDBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]} noBorder>
                  <MDBox lineHeight={1.4}>
                    <MDTypography
                      variant="button"
                      fontWeight="regular"
                    >
                      New Projects
                    </MDTypography>
                    <MDTypography
                      variant="caption"
                      color="text"
                      fontWeight="regular"
                    >
                      Notify when another user follows you.
                    </MDTypography>
                  </MDBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]} noBorder>
                  <MDTypography variant="button" color="text">
                    Log in from a new device
                  </MDTypography>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
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
