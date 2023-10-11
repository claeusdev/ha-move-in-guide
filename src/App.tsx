import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Container, Typography } from "@mui/material";
import {
  PhoneInTalkTwoTone,
  PlaceTwoTone,
  DirectionsCarTwoTone,
  MonetizationOnTwoTone,
  BuildTwoTone,
} from "@mui/icons-material";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="icon tabs example"
        // centered
      >
        <Tab icon={<PlaceTwoTone />} aria-label="favorite" label="Location" />
        <Tab
          icon={<PhoneInTalkTwoTone />}
          aria-label="phone"
          label="Contacts"
        />

        <Tab
          icon={<DirectionsCarTwoTone />}
          aria-label="person"
          label="Parking"
        />
        <Tab
          icon={<MonetizationOnTwoTone />}
          aria-label="person"
          label="Rent"
        />
        <Tab icon={<BuildTwoTone />} aria-label="person" label="Repairs" />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <h2>Location & Community</h2>
        <p>
          <strong>Utilities setup: </strong> make sure utilities are set up and
          working from day one.
        </p>
        <p>
          <strong>Get to know the area:</strong> explore the neighborhood and
          learn where important places like supermarkets, pharmacies, and public
          transport points are.
        </p>

        <p>
          <strong>Community guidelines:</strong> what are the house and building
          rules? Get to know the area: explore the neighborhood and learn where
          important places like supermarkets, pharmacies, and public transport
          points are.
        </p>
        <p>
          <strong>Community engagement: </strong> join events and community
          groups or platforms to connect with neighbors.
        </p>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <h2>Contact Information</h2>
        <p>
          <strong>Landlord/management office:</strong> for general inquiries or
          assistance, reach out to us on michael@blueskyproperty.nl or
          0229-261290.
        </p>
        <p>
          <strong>Emergency contact: </strong> in the event of an emergency,
          contact management@blaak555.nl immediately.
        </p>
        <p>
          <strong>Maintenance Contact:</strong> For maintenance requests,
          contact maintenance@blaak555.nl or use the HousingAnywhere.nl.
        </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <h2>Parking & Transportation</h2>
        <p>
          <strong>Parking spot: </strong> your parking spot is on the 2nd floor
          of the underground garage. Spot 15B.
        </p>
        <p>
          <strong>Guest parking: </strong> let your guests know about the guest
          parking rules.
        </p>
        <p>
          <strong>Public transport: </strong> the nearest public transportation
          points are located at Rotterdam Blaak (train), Rotterdam Keizerstraat
          (tram).
        </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <h2>Rent Information</h2>
        <p>
          <strong>Payment method:</strong> use your preferred payment method for
          rent through our HousingAnywhere.nl
        </p>
        <p>
          <strong>Rent due date: </strong> make sure your rent is paid by the
          12th of the month to avoid late fees.
        </p>
        <p>
          <strong>Renter's insurance:</strong> submit proof of your insurance
          policy before your move-in date.
        </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <h2>Repairs & Maintenance</h2>
        <p>
          <strong>Reporting issues:</strong> immediately report any damages or
          issues in your apartment to maintenance@blaak555.nl or use the
          HousingAnywhere.nl.
        </p>
        <p>
          <strong>Maintenance requests: </strong> send any maintenance requests
          to maintenance@blaak555.nl or use HousingAnywhere.nl
        </p>

        <p>
          <strong>Move-In Inspection:</strong> Join us for a thorough move-in
          inspection to document the apartment's current condition.
        </p>
      </CustomTabPanel>
    </React.Fragment>
  );
}

export function App() {
  return (
    <Box marginY={5}>
      <Container fixed maxWidth="md">
        <header>
          <Typography
            variant="h3"
            gutterBottom
            fontWeight={600}
            marginTop={10}
            marginBottom={5}
          >
            Welcome to your new home: a Move-in Guide
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Congrats on your new home at Grote Noord 170! We're delighted to
            have you as a tenant. Below you can find your move-in guide with all
            the information you need to move in with ease.
          </Typography>
        </header>
        <Box marginY={5}>
          <IconTabs />
        </Box>

        <Typography>
          Once again, welcome to your new home at Grote Noord 170. If you have
          any questions or need help, contact us.
        </Typography>
        <p>Warm regards,</p>
        <Typography variant="subtitle1" fontWeight={600}>
          Michael Klein
        </Typography>
      </Container>
    </Box>
  );
}
