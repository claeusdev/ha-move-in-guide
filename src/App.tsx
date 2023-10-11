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
          <strong>Utilities Setup:</strong> Ensure utilities are set up and
          active from day one.
        </p>
        <p>
          <strong>Community Guidelines:</strong> Familiarize yourself with and
          adhere to community rules and guidelines.
        </p>
        <p>
          <strong>Neighborhood Info:</strong> Explore your neighborhood and note
          down important locations like supermarkets, pharmacies, and public
          transport points.
        </p>
        <p>
          <strong>Community Engagement:</strong> Participate in events and join
          community groups or platforms to connect with neighbors.
        </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <h2>Contact Information</h2>
        <p>
          <strong>Landlord/Management Office:</strong> For general inquiries or
          assistance, reach out to us at [Contact Number/Email].
        </p>
        <p>
          <strong>Emergency Contact:</strong> In the event of emergencies,
          contact [Emergency Contact] immediately.
        </p>
        <p>
          <strong>Maintenance Contact:</strong> For maintenance requests,
          contact [Maintenance Contact] or use the [Online Portal].
        </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <h2>Parking & Transportation</h2>
        <p>
          <strong>Parking Spot:</strong> Your designated parking spot is
          [Parking Spot Number/Location].
        </p>
        <p>
          <strong>Guest Parking:</strong> Inform your guests about the guest
          parking rules and location.
        </p>
        <p>
          <strong>Public Transport:</strong> The nearest public transportation
          points are located at [Location(s)].
        </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <h2>Rent Information</h2>
        <p>
          <strong>Payment Method:</strong> Opt for your preferred rent payment
          method through our [Online Portal/Other Method].
        </p>
        <p>
          <strong>Rent Due Date:</strong> Ensure your rent is paid by [Day of
          Month] to avoid late fees.
        </p>
        <p>
          <strong>Renter's Insurance:</strong> Submit proof of your renter's
          insurance policy before your move-in date.
        </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <h2>Repairs & Maintenance</h2>
        <p>
          <strong>Reporting Issues:</strong> Immediately report any damages or
          issues in your apartment to [Maintenance Contact/Portal].
        </p>
        <p>
          <strong>Maintenance Requests:</strong> Utilize the [Online
          Portal/Contact Method] for any maintenance requests.
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
            Welcome to Your New Home: A Move-in Guide
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Congratulations on your new home at [Property Address]! We are
            thrilled to have you as a resident and want to ensure your
            transition is as smooth as possible. Please find below your move-in
            guide which will assist you throughout the process.
          </Typography>
        </header>

        <Box marginY={5}>
          <IconTabs />
        </Box>

        <Typography>
          Once again, welcome to [Property Name], your new home! Should you have
          any questions or require assistance, feel free to reach out to us at
          any time.
        </Typography>
        <p>Warm regards,</p>
        <Typography variant="subtitle1" fontWeight={600}>
          Ms Landord
        </Typography>
      </Container>
    </Box>
  );
}
