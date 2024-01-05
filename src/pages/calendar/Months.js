import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Items from "./Items";

function CustomTabPanel({ children, value, index, ...other }) {
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="scrollable auto tabs example"
         >
          {months.map((month, index) => (
            <Tab key={index} label={month} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {months.map((month, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <Items/>
        </CustomTabPanel>
      ))}
    </Box>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}



// <TableRow>
// <TableCell style={{ paddingBottom: 0, paddingTop: 0}} colSpan={6}>
//     <Box sx={{ margin: 1 }}>

//       {/* <Table size="small" aria-label="purchases">
//         <TableHead>
//           <TableRow>
//             <TableCell>Date</TableCell>
//             <TableCell>Month</TableCell>
//             <TableCell>Event</TableCell>
//             <TableCell align="right">Department</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody style={{ paddingBottom: 0, paddingTop: 0, background: 'gainsboro' }}>
//           {CALENDARLIST.map((eventRow) => (
//             <TableRow key={eventRow.id}>
//               <TableCell component="th" scope="row">
//                 {eventRow.dayFrom}  { (eventRow.dayFrom === eventRow.dayTo) ? "" : "  -  " + (eventRow.dayTo)}
//               </TableCell>
//               <TableCell>{eventRow.month}</TableCell>
//               <TableCell>{eventRow.name}</TableCell>
//               <TableCell align="right">{eventRow.department}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table> */}
//     </Box>
// </TableCell>
// </TableRow>