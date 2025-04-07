import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import TicketsSold from "../../components/TicketsSold";
import SalesRevenue from "../../components/SalesRevenue";
import PopularEvents from "../../components/PopularEvents";
import EventsSection from "../../components/EventsSection";
import Invoices from "../../components/invoices";
import SmallCalender from "../../components/SmallCalender";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="right">
        <Header title="DASHBOARD" subtitle="Hello Oriando,welcome back!" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        borderRadius="20px"
        padding="10px"
        backgroundColor={colors.primary[300]}
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 4"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Upcoming Events"
            value="345"
            icon={
              <EmailIcon
                sx={{ color: colors.primary[500], fontSize: "20px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 4"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
        >
          <StatBox
            title="Total Bookings"
            value="1798"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.primary[500], fontSize: "20px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 4"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Tickets Sold"
            value="1250"
            icon={
              <PersonAddIcon
                sx={{ color: colors.primary[500], fontSize: "20px" }}
              />
            }
          />
        </Box>
        <Box gridColumn="span 3" gridRow="span 2" padding="20px">
          <TicketsSold />
        </Box>
        <Box
          gridColumn="span 5"
          gridRow="span 2"
          padding="20px"
          backgroundColor={colors.primary[400]}
        >
          <SalesRevenue />
        </Box>
        <Box gridColumn="span 4">
          <PopularEvents />
        </Box>
        <Box gridColumn="span 4">
          <SmallCalender />
        </Box>
      </Box>
      {/* ROW 3 */}
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
      >
        <Box
          gridColumn="span 5"
          gridRow="span 2"
          padding="20px"
          backgroundColor={colors.primary[400]}
        >
          <EventsSection />
        </Box>
      </Box>
      {/* ROW 4 */}
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
      >
        <Box
          gridColumn="span 5"
          gridRow="span 2"
          padding="20px"
          backgroundColor={colors.primary[400]}
        >
          <Invoices />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
