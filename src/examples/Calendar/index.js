// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @fullcalendar components
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 3 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Custom styles for Calendar
import CalendarRoot from "examples/Calendar/CalendarRoot";

// Material Dashboard 3 PRO React context
import { useMaterialUIController } from "context";

function Calendar({ 
  header = {
    title: "",
    date: "",
  }, 
  ...rest 
}) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const validClassNames = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ];

  const events = rest.events
    ? rest.events.map((el) => ({
      ...el,
      className: validClassNames.find((item) => item === el.className)
        ? `event-${el.className}`
        : "event-info",
    }))
    : [];

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={header.title || header.date ? 2 : 0} px={2} lineHeight={1}>
        {header.title ? (
          <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            {header.title}
          </MDTypography>
        ) : null}
        {header.date ? (
          <MDTypography component="p" variant="button" color="text" fontWeight="regular">
            {header.date}
          </MDTypography>
        ) : null}
      </MDBox>
      <CalendarRoot p={2} ownerState={{ darkMode }}>
        <FullCalendar
          {...rest}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          events={events}
          height="100%"
        />
      </CalendarRoot>
    </Card>
  );
}

// Typechecking props for the Calendar
Calendar.propTypes = {
  header: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
  }),
};

export default Calendar;
