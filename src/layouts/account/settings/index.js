import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function Settings() {
  const [activeSection, setActiveSection] = useState("profile");
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

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
                        C
                      </MDBox>
                      <MDBox>
                        <MDTypography
                          variant="h6"
                          fontWeight="medium"
                          sx={{ color: "#344767" }}
                        >
                          Company Name
                        </MDTypography>
                        <MDTypography
                          variant="caption"
                          sx={{ color: "#6c757d" }}
                        >
                          CEO
                        </MDTypography>
                      </MDBox>
                    </MDBox>
                    <MDButton
                      variant="outlined"
                      color="dark"
                      size="small"
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
                      Upload
                    </MDButton>
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
                    Basic Info
                  </MDTypography>

                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <MDBox mb={2}>
                        <MDTypography
                          variant="caption"
                          fontWeight="regular"
                          sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                        >
                          Company Legal Name
                        </MDTypography>
                        <MDInput fullWidth />
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MDBox mb={2}>
                        <MDTypography
                          variant="caption"
                          fontWeight="regular"
                          sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                        >
                          Address 1
                        </MDTypography>
                        <MDInput
                          fullWidth
                          placeholder="Enter company address"
                        />
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MDBox mb={2}>
                        <MDTypography
                          variant="caption"
                          fontWeight="regular"
                          sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                        >
                          Main Email
                        </MDTypography>
                        <MDInput
                          fullWidth
                          placeholder="example@email.com - Where used for general use."
                        />
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MDBox mb={2}>
                        <MDTypography
                          variant="caption"
                          fontWeight="regular"
                          sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                        >
                          Address 2
                        </MDTypography>
                        <MDInput
                          fullWidth
                          placeholder="Enter company address"
                        />
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <MDBox mb={2}>
                        <MDTypography
                          variant="caption"
                          fontWeight="regular"
                          sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                        >
                          Phone Number
                        </MDTypography>
                        <MDInput fullWidth />
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <MDBox mb={2}>
                        <MDTypography
                          variant="caption"
                          fontWeight="regular"
                          sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                        >
                          City
                        </MDTypography>
                        <MDInput fullWidth />
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <MDBox mb={2}>
                        <MDTypography
                          variant="caption"
                          fontWeight="regular"
                          sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                        >
                          State
                        </MDTypography>
                        <MDInput fullWidth />
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <MDBox mb={2}>
                        <MDTypography
                          variant="caption"
                          fontWeight="regular"
                          sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                        >
                          Zip
                        </MDTypography>
                        <MDInput fullWidth />
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MDBox mb={2}>
                        <MDTypography
                          variant="caption"
                          fontWeight="regular"
                          sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                        >
                          Language
                        </MDTypography>
                        <Select
                          fullWidth
                          defaultValue="english"
                          sx={{
                            height: "45px",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#dee2e6",
                            },
                          }}
                        >
                          <MenuItem value="english">English</MenuItem>
                          <MenuItem value="spanish">Spanish</MenuItem>
                          <MenuItem value="french">French</MenuItem>
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
                          Country
                        </MDTypography>
                        <Select
                          fullWidth
                          defaultValue="usa"
                          sx={{
                            height: "45px",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#dee2e6",
                            },
                          }}
                        >
                          <MenuItem value="usa">United States</MenuItem>
                          <MenuItem value="canada">Canada</MenuItem>
                          <MenuItem value="uk">United Kingdom</MenuItem>
                        </Select>
                      </MDBox>
                    </Grid>
                  </Grid>
                </MDBox>
              </Card>

              <Card
                id="password"
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
                    Master Password
                  </MDTypography>

                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <MDBox mb={2}>
                        <MDTypography
                          variant="caption"
                          fontWeight="regular"
                          sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                        >
                          Current password
                        </MDTypography>
                        <MDBox position="relative">
                          <MDInput
                            fullWidth
                            type={showPassword.current ? "text" : "password"}
                          />
                          <IconButton
                            size="small"
                            onClick={() =>
                              setShowPassword({
                                ...showPassword,
                                current: !showPassword.current,
                              })
                            }
                            sx={{
                              position: "absolute",
                              right: 8,
                              top: "50%",
                              transform: "translateY(-50%)",
                            }}
                          >
                            <Icon fontSize="small">
                              {showPassword.current
                                ? "visibility"
                                : "visibility_off"}
                            </Icon>
                          </IconButton>
                        </MDBox>
                      </MDBox>
                      <MDBox mb={2}>
                        <MDTypography
                          variant="caption"
                          fontWeight="regular"
                          sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                        >
                          New password
                        </MDTypography>
                        <MDBox position="relative">
                          <MDInput
                            fullWidth
                            type={showPassword.new ? "text" : "password"}
                          />
                          <IconButton
                            size="small"
                            onClick={() =>
                              setShowPassword({
                                ...showPassword,
                                new: !showPassword.new,
                              })
                            }
                            sx={{
                              position: "absolute",
                              right: 8,
                              top: "50%",
                              transform: "translateY(-50%)",
                            }}
                          >
                            <Icon fontSize="small">
                              {showPassword.new
                                ? "visibility"
                                : "visibility_off"}
                            </Icon>
                          </IconButton>
                        </MDBox>
                      </MDBox>
                      <MDBox mb={2}>
                        <MDTypography
                          variant="caption"
                          fontWeight="regular"
                          sx={{ color: "#6c757d", mb: 0.5, display: "block" }}
                        >
                          Confirm New password
                        </MDTypography>
                        <MDBox position="relative">
                          <MDInput
                            fullWidth
                            type={showPassword.confirm ? "text" : "password"}
                          />
                          <IconButton
                            size="small"
                            onClick={() =>
                              setShowPassword({
                                ...showPassword,
                                confirm: !showPassword.confirm,
                              })
                            }
                            sx={{
                              position: "absolute",
                              right: 8,
                              top: "50%",
                              transform: "translateY(-50%)",
                            }}
                          >
                            <Icon fontSize="small">
                              {showPassword.confirm
                                ? "visibility"
                                : "visibility_off"}
                            </Icon>
                          </IconButton>
                        </MDBox>
                      </MDBox>

                      <MDBox mt={3}>
                        <MDTypography
                          variant="caption"
                          fontWeight="medium"
                          sx={{ color: "#344767", mb: 1, display: "block" }}
                        >
                          Password requirements
                        </MDTypography>
                        <MDTypography
                          variant="caption"
                          sx={{ color: "#6c757d", mb: 1, display: "block" }}
                        >
                          Please follow this guide for a strong password:
                        </MDTypography>
                        <MDBox component="ul" pl={2} mt={1}>
                          <MDTypography
                            component="li"
                            variant="caption"
                            sx={{ color: "#6c757d", mb: 0.5 }}
                          >
                            One special characters
                          </MDTypography>
                          <MDTypography
                            component="li"
                            variant="caption"
                            sx={{ color: "#6c757d", mb: 0.5 }}
                          >
                            Min 6 characters
                          </MDTypography>
                          <MDTypography
                            component="li"
                            variant="caption"
                            sx={{ color: "#6c757d", mb: 0.5 }}
                          >
                            One number (2 as recommended)
                          </MDTypography>
                          <MDTypography
                            component="li"
                            variant="caption"
                            sx={{ color: "#6c757d" }}
                          >
                            Change it often
                          </MDTypography>
                        </MDBox>
                      </MDBox>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <MDBox
                        sx={{
                          backgroundColor: "#f8f9fa",
                          borderRadius: "8px",
                          p: 2.5,
                        }}
                      >
                        <MDTypography
                          variant="button"
                          fontWeight="medium"
                          sx={{ color: "#344767", mb: 1.5, display: "block" }}
                        >
                          Why a Master Password is Needed
                        </MDTypography>
                        <MDTypography
                          variant="caption"
                          sx={{
                            color: "#6c757d",
                            lineHeight: 1.6,
                            display: "block",
                          }}
                        >
                          The Master Password is required to encrypt and mask
                          critical or sensitive information, making it
                          unavailable to unauthorized users. By setting a Master
                          Password, we ensure:
                        </MDTypography>
                        <MDBox component="ul" pl={2} mt={1.5}>
                          <MDTypography
                            component="li"
                            variant="caption"
                            sx={{ color: "#6c757d", mb: 1, lineHeight: 1.6 }}
                          >
                            <strong>Data Protection:</strong> Only authorized
                            individuals with the secret password can access
                            masked information.
                          </MDTypography>
                          <MDTypography
                            component="li"
                            variant="caption"
                            sx={{ color: "#6c757d", mb: 1, lineHeight: 1.6 }}
                          >
                            <strong>Confidentiality:</strong> It prevents
                            accidental or malicious access to private details,
                            such as transmission details, proprietary data, or
                            secure configurations.
                          </MDTypography>
                          <MDTypography
                            component="li"
                            variant="caption"
                            sx={{ color: "#6c757d", mb: 1, lineHeight: 1.6 }}
                          >
                            <strong>Access Control:</strong> It establishes a
                            clear barrier, limiting access to sensitive data only
                            to users who have been granted and authenticated the
                            password.
                          </MDTypography>
                        </MDBox>
                        <MDTypography
                          variant="caption"
                          sx={{
                            color: "#6c757d",
                            lineHeight: 1.6,
                            display: "block",
                            mt: 1.5,
                          }}
                        >
                          It is crucial that the Master Password is kept secret
                          and never shared, ensuring that all masked sensitive
                          information remains protected and secure.
                        </MDTypography>
                      </MDBox>
                    </Grid>
                  </Grid>

                  <MDBox display="flex" justifyContent="flex-end" mt={3}>
                    <MDButton
                      variant="gradient"
                      color="dark"
                      sx={{ textTransform: "none" }}
                    >
                      UPDATE PASSWORD
                    </MDButton>
                  </MDBox>
                </MDBox>
              </Card>

              <Card
                id="2fa"
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
                    <MDTypography
                      variant="h6"
                      fontWeight="medium"
                      sx={{ color: "#344767" }}
                    >
                      Two-factor authentication
                    </MDTypography>
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

                  <MDBox>
                    <MDBox
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      py={2}
                      sx={{
                        borderBottom: "1px solid #e9ecef",
                      }}
                    >
                      <MDBox>
                        <MDTypography
                          variant="button"
                          fontWeight="regular"
                          sx={{ color: "#344767" }}
                        >
                          Security keys enforcement
                        </MDTypography>
                      </MDBox>
                      <MDBox display="flex" alignItems="center" gap={2}>
                        <MDTypography
                          variant="caption"
                          sx={{ color: "#6c757d" }}
                        >
                          Disabled
                        </MDTypography>
                        <Switch />
                      </MDBox>
                    </MDBox>

                    <MDBox
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      py={2}
                      sx={{
                        borderBottom: "1px solid #e9ecef",
                      }}
                    >
                      <MDBox>
                        <MDTypography
                          variant="button"
                          fontWeight="regular"
                          sx={{ color: "#344767" }}
                        >
                          SMS number enforcement
                        </MDTypography>
                      </MDBox>
                      <MDBox display="flex" alignItems="center" gap={2}>
                        <MDTypography
                          variant="caption"
                          sx={{ color: "#6c757d" }}
                        >
                          Enabled
                        </MDTypography>
                        <Switch defaultChecked />
                      </MDBox>
                    </MDBox>

                    <MDBox
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      py={2}
                    >
                      <MDBox>
                        <MDTypography
                          variant="button"
                          fontWeight="regular"
                          sx={{ color: "#344767" }}
                        >
                          Authentication app enforcement
                        </MDTypography>
                      </MDBox>
                      <MDBox display="flex" alignItems="center" gap={2}>
                        <MDTypography
                          variant="caption"
                          sx={{ color: "#6c757d" }}
                        >
                          Enabled
                        </MDTypography>
                        <Switch defaultChecked />
                      </MDBox>
                    </MDBox>
                  </MDBox>

                  <MDBox
                    mt={3}
                    sx={{
                      backgroundColor: "#f8f9fa",
                      borderRadius: "8px",
                      p: 2.5,
                    }}
                  >
                    <MDTypography
                      variant="button"
                      fontWeight="medium"
                      sx={{ color: "#344767", mb: 1.5, display: "block" }}
                    >
                      Why 2FA is Essential for Security
                    </MDTypography>
                    <MDTypography
                      variant="caption"
                      sx={{
                        color: "#6c757d",
                        lineHeight: 1.6,
                        display: "block",
                      }}
                    >
                      A Two-Factor Authentication (2FA) option is required
                      because it provides a crucial, secondary layer of security
                      that significantly prevents unauthorized account access,
                      even if your password is compromised.
                    </MDTypography>
                  </MDBox>
                </MDBox>
              </Card>

              <Card
                id="accounts"
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
                    <MDTypography
                      variant="h6"
                      fontWeight="medium"
                      sx={{ color: "#344767" }}
                    >
                      Accounts
                    </MDTypography>
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

                  <MDBox
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    py={2}
                  >
                    <MDBox>
                      <MDTypography
                        variant="button"
                        fontWeight="regular"
                        sx={{ color: "#344767" }}
                      >
                        Password expiration time
                      </MDTypography>
                    </MDBox>
                    <MDBox display="flex" alignItems="center" gap={2}>
                      <MDTypography variant="caption" sx={{ color: "#6c757d" }}>
                        Enabled
                      </MDTypography>
                      <Switch defaultChecked />
                    </MDBox>
                  </MDBox>

                  <MDBox
                    mt={3}
                    sx={{
                      backgroundColor: "#f8f9fa",
                      borderRadius: "8px",
                      p: 2.5,
                    }}
                  >
                    <MDTypography
                      variant="button"
                      fontWeight="medium"
                      sx={{ color: "#344767", mb: 1.5, display: "block" }}
                    >
                      Why password expiration
                    </MDTypography>
                    <MDTypography
                      variant="caption"
                      sx={{
                        color: "#6c757d",
                        lineHeight: 1.6,
                        display: "block",
                      }}
                    >
                      User account password expiration is a security measure that
                      forces users to periodically change their password, reducing
                      the risk of a compromised password being used for an
                      extended period. A mandatory refresh protects the account by
                      limiting the lifespan of any potentially stolen credentials.{" "}
                      <strong>
                        Please note that this setting applies to the accounts
                        managed within your organization and does not affect the
                        Sign-On (SSO) accounts.
                      </strong>
                    </MDTypography>
                  </MDBox>
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
                          Activity
                        </MDTypography>
                      </Grid>
                      <Grid item xs={4} md={3}>
                        <MDTypography
                          variant="caption"
                          fontWeight="medium"
                          sx={{ color: "#6c757d", textAlign: "center" }}
                        >
                          Email
                        </MDTypography>
                      </Grid>
                      <Grid item xs={4} md={3}>
                        <MDTypography
                          variant="caption"
                          fontWeight="medium"
                          sx={{ color: "#6c757d", textAlign: "center" }}
                        >
                          Push
                        </MDTypography>
                      </Grid>
                      <Grid item xs={4} md={3}>
                        <MDTypography
                          variant="caption"
                          fontWeight="medium"
                          sx={{ color: "#6c757d", textAlign: "center" }}
                        >
                          SMS
                        </MDTypography>
                      </Grid>
                    </Grid>

                    <Divider sx={{ my: 2 }} />

                    <Grid container spacing={2} alignItems="center" mb={2}>
                      <Grid item xs={12} md={3}>
                        <MDBox>
                          <MDTypography
                            variant="button"
                            fontWeight="regular"
                            sx={{ color: "#344767", display: "block" }}
                          >
                            Mentions
                          </MDTypography>
                          <MDTypography variant="caption" sx={{ color: "#6c757d" }}>
                            Notify when someone you in a comment
                          </MDTypography>
                        </MDBox>
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
                        <MDBox>
                          <MDTypography
                            variant="button"
                            fontWeight="regular"
                            sx={{ color: "#344767", display: "block" }}
                          >
                            Comments
                          </MDTypography>
                          <MDTypography variant="caption" sx={{ color: "#6c757d" }}>
                            Notify when user comments your item
                          </MDTypography>
                        </MDBox>
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
                        <MDBox>
                          <MDTypography
                            variant="button"
                            fontWeight="regular"
                            sx={{ color: "#344767", display: "block" }}
                          >
                            Follows
                          </MDTypography>
                          <MDTypography variant="caption" sx={{ color: "#6c757d" }}>
                            Notify when user follows you
                          </MDTypography>
                        </MDBox>
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
                        <MDBox>
                          <MDTypography
                            variant="button"
                            fontWeight="regular"
                            sx={{ color: "#344767", display: "block" }}
                          >
                            Log in from a new device
                          </MDTypography>
                        </MDBox>
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
                    Delete Account
                  </MDTypography>
                  <MDTypography variant="caption" sx={{ color: "#6c757d" }}>
                    Once you delete your account, there is no going back. Please
                    be certain.
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
                      DEACTIVATE
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

export default Settings;
