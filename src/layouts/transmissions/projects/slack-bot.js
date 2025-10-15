import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Icon from "@mui/material/Icon";
import Chip from "@mui/material/Chip";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

function SlackBotProject() {
  const [activeSection, setActiveSection] = useState("profile");
  const [projectState, setProjectState] = useState("production");

  const menuItems = [
    { key: "profile", label: "Profile", icon: "person" },
    { key: "basic", label: "Basic Info", icon: "info" },
    { key: "password", label: "Master Password", icon: "lock" },
    { key: "2fa", label: "2FA", icon: "security" },
    { key: "accounts", label: "Accounts", icon: "account_balance" },
    { key: "notifications", label: "Notifications", icon: "notifications" },
    { key: "sessions", label: "Sessions", icon: "devices" },
    { key: "delete", label: "Delete Account", icon: "delete" },
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <Card
              sx={{
                position: "sticky",
                top: "100px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                borderRadius: "12px",
              }}
            >
              <MDBox p={2}>
                {menuItems.map((item) => (
                  <MDBox
                    key={item.key}
                    onClick={() => scrollToSection(item.key)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      p: 1.5,
                      mb: 0.5,
                      cursor: "pointer",
                      borderRadius: "8px",
                      backgroundColor:
                        activeSection === item.key ? "#f8f9fa" : "transparent",
                      transition: "all 0.2s",
                      "&:hover": {
                        backgroundColor: "#f8f9fa",
                      },
                    }}
                  >
                    <Icon
                      sx={{
                        fontSize: "20px !important",
                        color: "#6c757d",
                      }}
                    >
                      {item.icon}
                    </Icon>
                    <MDTypography
                      variant="button"
                      fontWeight="regular"
                      sx={{ color: "#495057", fontSize: "0.875rem" }}
                    >
                      {item.label}
                    </MDTypography>
                  </MDBox>
                ))}
              </MDBox>
            </Card>
          </Grid>

          <Grid item xs={12} lg={9}>
            <MDBox display="flex" flexDirection="column" gap={3}>
              <Card
                id="profile"
                sx={{
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                }}
              >
                <MDBox p={3}>
                  <MDBox
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={3}
                  >
                    <MDBox display="flex" alignItems="center" gap={2}>
                      <MDBox
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: "50%",
                          backgroundColor: "#344767",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontSize: "24px",
                          fontWeight: "600",
                        }}
                      >
                        S
                      </MDBox>
                      <MDBox>
                        <MDTypography
                          variant="h6"
                          fontWeight="medium"
                          sx={{ color: "#344767" }}
                        >
                          Slack Bot
                        </MDTypography>
                        <MDTypography
                          variant="caption"
                          sx={{ color: "#6c757d", cursor: "pointer", textDecoration: "underline" }}
                        >
                          Upload Logo
                        </MDTypography>
                      </MDBox>
                    </MDBox>
                    <MDBox display="flex" gap={1}>
                      <Chip
                        label="Production"
                        onClick={() => setProjectState("production")}
                        sx={{
                          backgroundColor: projectState === "production" ? "#e0e0e0" : "#f5f5f5",
                          color: "#344767",
                          fontWeight: projectState === "production" ? 600 : 400,
                          cursor: "pointer",
                          "&:hover": { backgroundColor: "#e0e0e0" },
                        }}
                      />
                      <Chip
                        label="Test Mode"
                        onClick={() => setProjectState("test")}
                        sx={{
                          backgroundColor: projectState === "test" ? "#e0e0e0" : "#f5f5f5",
                          color: "#344767",
                          fontWeight: projectState === "test" ? 600 : 400,
                          cursor: "pointer",
                          "&:hover": { backgroundColor: "#e0e0e0" },
                        }}
                      />
                      <Chip
                        label="Disabled"
                        onClick={() => setProjectState("disabled")}
                        sx={{
                          backgroundColor: projectState === "disabled" ? "#e0e0e0" : "#f5f5f5",
                          color: "#344767",
                          fontWeight: projectState === "disabled" ? 600 : 400,
                          cursor: "pointer",
                          "&:hover": { backgroundColor: "#e0e0e0" },
                        }}
                      />
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Card>

              <Card
                id="basic"
                sx={{
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                }}
              >
                <MDBox p={3}>
                  <MDTypography
                    variant="h6"
                    fontWeight="medium"
                    mb={3}
                    sx={{ color: "#344767" }}
                  >
                    Project Info
                  </MDTypography>

                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <MDBox mb={2}>
                        <MDTypography
                          variant="caption"
                          fontWeight="regular"
                          sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                        >
                          Project Name
                        </MDTypography>
                        <MDInput fullWidth placeholder="Enter Creative Name" />
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MDBox mb={2}>
                        <MDTypography
                          variant="caption"
                          fontWeight="regular"
                          sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                        >
                          Project Type
                        </MDTypography>
                        <Select
                          fullWidth
                          defaultValue=""
                          displayEmpty
                          sx={{
                            height: "45px",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#dee2e6",
                            },
                          }}
                        >
                          <MenuItem value="" disabled>
                            <span style={{ color: "#adb5bd" }}>Please Select One</span>
                          </MenuItem>
                          <MenuItem value="slack">Slack Bot</MenuItem>
                          <MenuItem value="api">API Integration</MenuItem>
                        </Select>
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MDBox mb={2}>
                        <MDTypography
                          variant="caption"
                          fontWeight="regular"
                          sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                        >
                          Primary Administrator
                        </MDTypography>
                        <Select
                          fullWidth
                          defaultValue=""
                          displayEmpty
                          sx={{
                            height: "45px",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#dee2e6",
                            },
                          }}
                        >
                          <MenuItem value="" disabled>
                            <span style={{ color: "#adb5bd" }}>Full Name</span>
                          </MenuItem>
                          <MenuItem value="admin1">Admin 1</MenuItem>
                          <MenuItem value="admin2">Admin 2</MenuItem>
                        </Select>
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MDBox mb={2}>
                        <MDTypography
                          variant="caption"
                          fontWeight="regular"
                          sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                        >
                          Secondary Administrator
                        </MDTypography>
                        <Select
                          fullWidth
                          defaultValue=""
                          displayEmpty
                          sx={{
                            height: "45px",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#dee2e6",
                            },
                          }}
                        >
                          <MenuItem value="" disabled>
                            <span style={{ color: "#adb5bd" }}>Full Name</span>
                          </MenuItem>
                          <MenuItem value="admin1">Admin 1</MenuItem>
                          <MenuItem value="admin2">Admin 2</MenuItem>
                        </Select>
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MDBox mb={2}>
                        <MDTypography
                          variant="caption"
                          fontWeight="regular"
                          sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                        >
                          Primary Business Owner
                        </MDTypography>
                        <Select
                          fullWidth
                          defaultValue=""
                          displayEmpty
                          sx={{
                            height: "45px",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#dee2e6",
                            },
                          }}
                        >
                          <MenuItem value="" disabled>
                            <span style={{ color: "#adb5bd" }}>Title</span>
                          </MenuItem>
                          <MenuItem value="owner1">Owner 1</MenuItem>
                          <MenuItem value="owner2">Owner 2</MenuItem>
                        </Select>
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MDBox mb={2}>
                        <MDTypography
                          variant="caption"
                          fontWeight="regular"
                          sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                        >
                          Secondary Business Owner
                        </MDTypography>
                        <Select
                          fullWidth
                          defaultValue=""
                          displayEmpty
                          sx={{
                            height: "45px",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#dee2e6",
                            },
                          }}
                        >
                          <MenuItem value="" disabled>
                            <span style={{ color: "#adb5bd" }}>Title</span>
                          </MenuItem>
                          <MenuItem value="owner1">Owner 1</MenuItem>
                          <MenuItem value="owner2">Owner 2</MenuItem>
                        </Select>
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <MDBox mb={2}>
                        <MDTypography
                          variant="caption"
                          fontWeight="regular"
                          sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                        >
                          Review Frequency
                        </MDTypography>
                        <Select
                          fullWidth
                          defaultValue=""
                          displayEmpty
                          sx={{
                            height: "45px",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#dee2e6",
                            },
                          }}
                        >
                          <MenuItem value="" disabled>
                            <span style={{ color: "#adb5bd" }}>Monthly</span>
                          </MenuItem>
                          <MenuItem value="weekly">Weekly</MenuItem>
                          <MenuItem value="monthly">Monthly</MenuItem>
                          <MenuItem value="quarterly">Quarterly</MenuItem>
                        </Select>
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <MDBox mb={2}>
                        <MDTypography
                          variant="caption"
                          fontWeight="regular"
                          sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                        >
                          Date
                        </MDTypography>
                        <MDInput fullWidth placeholder="Date" />
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <MDBox mb={2}>
                        <MDTypography
                          variant="caption"
                          fontWeight="regular"
                          sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                        >
                          Privacy Level
                        </MDTypography>
                        <Select
                          fullWidth
                          defaultValue=""
                          displayEmpty
                          sx={{
                            height: "45px",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#dee2e6",
                            },
                          }}
                        >
                          <MenuItem value="" disabled>
                            <span style={{ color: "#adb5bd" }}>Public</span>
                          </MenuItem>
                          <MenuItem value="public">Public</MenuItem>
                          <MenuItem value="private">Private</MenuItem>
                          <MenuItem value="restricted">Restricted</MenuItem>
                        </Select>
                      </MDBox>
                    </Grid>
                  </Grid>
                </MDBox>
              </Card>

              <Card
                id="notifications"
                sx={{
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                }}
              >
                <MDBox p={3}>
                  <MDTypography
                    variant="h6"
                    fontWeight="medium"
                    mb={1}
                    sx={{ color: "#344767" }}
                  >
                    Notifications
                  </MDTypography>
                  <MDTypography variant="caption" sx={{ color: "#6c757d" }}>
                    Choose how you receive notifications
                  </MDTypography>

                  <MDBox mt={3}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={3}>
                        <MDTypography
                          variant="button"
                          fontWeight="medium"
                          sx={{ color: "#344767" }}
                        >
                          User
                        </MDTypography>
                      </Grid>
                      <Grid item xs={4} md={3}>
                        <MDTypography
                          variant="caption"
                          fontWeight="medium"
                          sx={{ color: "#6c757d", textAlign: "center", display: "block" }}
                        >
                          Success
                        </MDTypography>
                      </Grid>
                      <Grid item xs={4} md={3}>
                        <MDTypography
                          variant="caption"
                          fontWeight="medium"
                          sx={{ color: "#6c757d", textAlign: "center", display: "block" }}
                        >
                          Fail
                        </MDTypography>
                      </Grid>
                      <Grid item xs={4} md={3}>
                        <MDTypography
                          variant="caption"
                          fontWeight="medium"
                          sx={{ color: "#6c757d", textAlign: "center", display: "block" }}
                        >
                          Incomplete
                        </MDTypography>
                      </Grid>
                    </Grid>

                    <MDBox
                      sx={{
                        borderTop: "1px solid #e9ecef",
                        mt: 2,
                        pt: 2,
                      }}
                    >
                      <Grid container spacing={2} alignItems="center" mb={2}>
                        <Grid item xs={12} md={3}>
                          <MDTypography
                            variant="button"
                            fontWeight="regular"
                            sx={{ color: "#344767" }}
                          >
                            Primary Administrator
                          </MDTypography>
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          md={3}
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <Switch defaultChecked />
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          md={3}
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <Switch />
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          md={3}
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <Switch />
                        </Grid>
                      </Grid>

                      <Grid container spacing={2} alignItems="center" mb={2}>
                        <Grid item xs={12} md={3}>
                          <MDTypography
                            variant="button"
                            fontWeight="regular"
                            sx={{ color: "#344767" }}
                          >
                            Secondary Administrator
                          </MDTypography>
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          md={3}
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <Switch defaultChecked />
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          md={3}
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <Switch defaultChecked />
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          md={3}
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <Switch />
                        </Grid>
                      </Grid>

                      <Grid container spacing={2} alignItems="center" mb={2}>
                        <Grid item xs={12} md={3}>
                          <MDTypography
                            variant="button"
                            fontWeight="regular"
                            sx={{ color: "#344767" }}
                          >
                            Secondary Business Owner
                          </MDTypography>
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          md={3}
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <Switch />
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          md={3}
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <Switch defaultChecked />
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          md={3}
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <Switch />
                        </Grid>
                      </Grid>

                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={3}>
                          <MDTypography
                            variant="button"
                            fontWeight="regular"
                            sx={{ color: "#344767" }}
                          >
                            Other
                          </MDTypography>
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          md={3}
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <Switch defaultChecked />
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          md={3}
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <Switch defaultChecked />
                        </Grid>
                        <Grid
                          item
                          xs={4}
                          md={3}
                          sx={{ display: "flex", justifyContent: "center" }}
                        >
                          <Switch defaultChecked />
                        </Grid>
                      </Grid>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Card>

              <Card
                sx={{
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                }}
              >
                <MDBox p={3}>
                  <MDBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <MDTypography
                      variant="h6"
                      fontWeight="medium"
                      sx={{ color: "#344767" }}
                    >
                      Schedule
                    </MDTypography>
                    <MDBox display="flex" gap={1}>
                      <Chip
                        label="Schedule"
                        sx={{
                          backgroundColor: "#e0e0e0",
                          color: "#344767",
                          fontWeight: 600,
                        }}
                      />
                      <Chip
                        label="Repeat"
                        sx={{
                          backgroundColor: "#f5f5f5",
                          color: "#344767",
                        }}
                      />
                      <Chip
                        label="Monitor"
                        sx={{
                          backgroundColor: "#f5f5f5",
                          color: "#344767",
                        }}
                      />
                    </MDBox>
                  </MDBox>

                  <MDBox>
                    <MDTypography
                      variant="button"
                      fontWeight="regular"
                      sx={{ color: "#344767", mb: 2, display: "block" }}
                    >
                      Run every
                    </MDTypography>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <MDBox display="flex" alignItems="center" gap={1}>
                          <Switch defaultChecked />
                          <MDTypography variant="caption" sx={{ color: "#6c757d" }}>
                            Mon
                          </MDTypography>
                        </MDBox>
                      </Grid>
                      <Grid item>
                        <MDBox display="flex" alignItems="center" gap={1}>
                          <Switch />
                          <MDTypography variant="caption" sx={{ color: "#6c757d" }}>
                            Tues
                          </MDTypography>
                        </MDBox>
                      </Grid>
                      <Grid item>
                        <MDBox display="flex" alignItems="center" gap={1}>
                          <Switch />
                          <MDTypography variant="caption" sx={{ color: "#6c757d" }}>
                            Wed
                          </MDTypography>
                        </MDBox>
                      </Grid>
                      <Grid item>
                        <MDBox display="flex" alignItems="center" gap={1}>
                          <Switch />
                          <MDTypography variant="caption" sx={{ color: "#6c757d" }}>
                            Thur
                          </MDTypography>
                        </MDBox>
                      </Grid>
                      <Grid item>
                        <MDBox display="flex" alignItems="center" gap={1}>
                          <Switch />
                          <MDTypography variant="caption" sx={{ color: "#6c757d" }}>
                            Fri
                          </MDTypography>
                        </MDBox>
                      </Grid>
                      <Grid item>
                        <MDBox display="flex" alignItems="center" gap={1}>
                          <Switch />
                          <MDTypography variant="caption" sx={{ color: "#6c757d" }}>
                            Sat
                          </MDTypography>
                        </MDBox>
                      </Grid>
                      <Grid item>
                        <MDBox display="flex" alignItems="center" gap={1}>
                          <Switch />
                          <MDTypography variant="caption" sx={{ color: "#6c757d" }}>
                            Sun
                          </MDTypography>
                        </MDBox>
                      </Grid>
                      <Grid item>
                        <MDBox
                          display="flex"
                          alignItems="center"
                          gap={1}
                          sx={{
                            backgroundColor: "#fff",
                            border: "1px solid #dee2e6",
                            borderRadius: "8px",
                            px: 2,
                            py: 1,
                          }}
                        >
                          <Icon sx={{ fontSize: "20px" }}>schedule</Icon>
                          <MDTypography variant="button" sx={{ color: "#344767" }}>
                            2:30 PM
                          </MDTypography>
                        </MDBox>
                      </Grid>
                    </Grid>

                    <MDBox mt={3} display="flex" alignItems="center" gap={2}>
                      <Switch />
                      <MDTypography variant="caption" sx={{ color: "#6c757d" }}>
                        day of the month at
                      </MDTypography>
                      <MDBox
                        display="flex"
                        alignItems="center"
                        gap={1}
                        sx={{
                          backgroundColor: "#fff",
                          border: "1px solid #dee2e6",
                          borderRadius: "8px",
                          px: 2,
                          py: 1,
                        }}
                      >
                        <Icon sx={{ fontSize: "20px" }}>schedule</Icon>
                        <MDTypography variant="button" sx={{ color: "#344767" }}>
                          1:30 PM
                        </MDTypography>
                      </MDBox>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Card>

              <Card
                sx={{
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                }}
              >
                <MDBox p={3}>
                  <MDBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <MDTypography
                      variant="h6"
                      fontWeight="medium"
                      sx={{ color: "#344767" }}
                    >
                      Start Script
                    </MDTypography>
                    <MDBox display="flex" alignItems="center" gap={2}>
                      <Switch />
                      <MDBox
                        sx={{
                          backgroundColor: "#f8d7da",
                          color: "#721c24",
                          px: 2,
                          py: 0.5,
                          borderRadius: "16px",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                        }}
                      >
                        DISABLED
                      </MDBox>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Card>

              <Card
                sx={{
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                }}
              >
                <MDBox p={3}>
                  <MDBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <MDTypography
                      variant="h6"
                      fontWeight="medium"
                      sx={{ color: "#344767" }}
                    >
                      Site_1
                    </MDTypography>
                    <MDBox display="flex" alignItems="center" gap={2}>
                      <Switch defaultChecked />
                      <MDBox
                        sx={{
                          backgroundColor: "#d4edda",
                          color: "#155724",
                          px: 2,
                          py: 0.5,
                          borderRadius: "16px",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                        }}
                      >
                        ENABLED
                      </MDBox>
                    </MDBox>
                  </MDBox>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <MDTypography
                        variant="caption"
                        sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                      >
                        BizLink
                      </MDTypography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MDTypography
                        variant="caption"
                        sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                      >
                        Script #
                      </MDTypography>
                    </Grid>
                  </Grid>
                </MDBox>
              </Card>

              <Card
                sx={{
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                }}
              >
                <MDBox p={3}>
                  <MDBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <MDTypography
                      variant="h6"
                      fontWeight="medium"
                      sx={{ color: "#344767" }}
                    >
                      Beofre Script
                    </MDTypography>
                    <MDBox display="flex" alignItems="center" gap={2}>
                      <Switch defaultChecked />
                      <MDBox
                        sx={{
                          backgroundColor: "#d4edda",
                          color: "#155724",
                          px: 2,
                          py: 0.5,
                          borderRadius: "16px",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                        }}
                      >
                        ENABLED
                      </MDBox>
                    </MDBox>
                  </MDBox>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <MDTypography
                        variant="caption"
                        sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                      >
                        Script
                      </MDTypography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MDTypography
                        variant="caption"
                        sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                      >
                        Script #
                      </MDTypography>
                    </Grid>
                  </Grid>
                </MDBox>
              </Card>

              <Card
                sx={{
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                }}
              >
                <MDBox p={3}>
                  <MDBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <MDTypography
                      variant="h6"
                      fontWeight="medium"
                      sx={{ color: "#344767" }}
                    >
                      Transmission
                    </MDTypography>
                    <MDBox display="flex" alignItems="center" gap={2}>
                      <Switch defaultChecked />
                      <MDBox
                        sx={{
                          backgroundColor: "#d4edda",
                          color: "#155724",
                          px: 2,
                          py: 0.5,
                          borderRadius: "16px",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                        }}
                      >
                        ENABLED
                      </MDBox>
                    </MDBox>
                  </MDBox>
                  <MDTypography
                    variant="caption"
                    sx={{ color: "#6c757d", display: "block" }}
                  >
                    Transmission Direction
                  </MDTypography>
                </MDBox>
              </Card>

              <Card
                sx={{
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                }}
              >
                <MDBox p={3}>
                  <MDBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <MDTypography
                      variant="h6"
                      fontWeight="medium"
                      sx={{ color: "#344767" }}
                    >
                      After Script
                    </MDTypography>
                    <MDBox display="flex" alignItems="center" gap={2}>
                      <Switch />
                      <MDBox
                        sx={{
                          backgroundColor: "#f8d7da",
                          color: "#721c24",
                          px: 2,
                          py: 0.5,
                          borderRadius: "16px",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                        }}
                      >
                        DISABLED
                      </MDBox>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Card>

              <Card
                sx={{
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                }}
              >
                <MDBox p={3}>
                  <MDBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <MDTypography
                      variant="h6"
                      fontWeight="medium"
                      sx={{ color: "#344767" }}
                    >
                      Site_2
                    </MDTypography>
                    <MDBox display="flex" alignItems="center" gap={2}>
                      <Switch defaultChecked />
                      <MDBox
                        sx={{
                          backgroundColor: "#d4edda",
                          color: "#155724",
                          px: 2,
                          py: 0.5,
                          borderRadius: "16px",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                        }}
                      >
                        ENABLED
                      </MDBox>
                    </MDBox>
                  </MDBox>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <MDTypography
                        variant="caption"
                        sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                      >
                        BizLink
                      </MDTypography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MDTypography
                        variant="caption"
                        sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                      >
                        Section #
                      </MDTypography>
                    </Grid>
                  </Grid>
                </MDBox>
              </Card>

              <Card
                sx={{
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                }}
              >
                <MDBox p={3}>
                  <MDBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <MDTypography
                      variant="h6"
                      fontWeight="medium"
                      sx={{ color: "#344767" }}
                    >
                      End Script
                    </MDTypography>
                    <MDBox display="flex" alignItems="center" gap={2}>
                      <Switch defaultChecked />
                      <MDBox
                        sx={{
                          backgroundColor: "#d4edda",
                          color: "#155724",
                          px: 2,
                          py: 0.5,
                          borderRadius: "16px",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                        }}
                      >
                        ENABLED
                      </MDBox>
                    </MDBox>
                  </MDBox>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <MDTypography
                        variant="caption"
                        sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                      >
                        Script
                      </MDTypography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MDTypography
                        variant="caption"
                        sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                      >
                        Script #
                      </MDTypography>
                    </Grid>
                  </Grid>
                </MDBox>
              </Card>

              <Card
                id="delete"
                sx={{
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  borderRadius: "12px",
                }}
              >
                <MDBox p={3}>
                  <MDTypography
                    variant="h6"
                    fontWeight="medium"
                    mb={1}
                    sx={{ color: "#344767" }}
                  >
                    Delete Project
                  </MDTypography>
                  <MDTypography variant="caption" sx={{ color: "#6c757d" }}>
                    Once you delete your account, there is no going back. Please be certain.
                  </MDTypography>

                  <MDBox display="flex" gap={2} mt={3}>
                    <MDButton
                      variant="outlined"
                      color="dark"
                      sx={{
                        borderColor: "#dee2e6",
                        color: "#495057",
                        textTransform: "none",
                        "&:hover": {
                          borderColor: "#adb5bd",
                          backgroundColor: "#f8f9fa",
                        },
                      }}
                    >
                      REACTIVATE
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="error"
                      sx={{ textTransform: "none" }}
                    >
                      DELETE ACCOUNT
                    </MDButton>
                  </MDBox>
                </MDBox>
              </Card>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default SlackBotProject;
