import * as React from 'react';
// material
import {
  Box,
  Tabs,
  Tab,
  Table,
  Paper,
  Button,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
} from '@mui/material';
import Iconify from '../../components/Iconify';
import { useNavigate } from 'react-router-dom';
import Items from "./Items";
import CALENDARLIST from '../../_api_/calendar';

// ----------------------------------------------------------------------

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}



function Row(props: { row: ReturnType<typeof CALENDARLIST> }) {
  const { row } = props;

  return (
    <React.Fragment>
      <Items eventRows={row}/>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  const navigate = useNavigate();

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
    <TableContainer style={{ display: 'inlineTable', verticalAlign: 'super'}} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead style={{ background: 'turquoise', top: 0, borderBottom: '0px'  }}>
          <TableRow  style={{ borderBottom: '0px'  }}>
            <TableCell>2024 Ministry Calendar</TableCell>
            <TableCell align="right">
              <Button
              variant="contained"
              onClick={() => navigate("/add-event")}
              startIcon={<Iconify icon="eva:plus-fill" />}
              >
              Add
              </Button>
            </TableCell>
            
          </TableRow>
          <TableRow>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              aria-label="scrollable auto tabs example"
              style={{ paddingBottom: 0, paddingTop: 0, background: 'turquoise', top: 0 }}
            >
              {months.map((month, index) => (
                <Tab key={index} label={month} {...a11yProps(index)} />
              ))}
            </Tabs>
          </Box>          
          </TableRow>
        </TableHead>
        <TableBody>
            <Row  row={CALENDARLIST}/>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
