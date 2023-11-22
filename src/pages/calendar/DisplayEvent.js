import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './DisplayEvent.css';

import CALENDARLIST from '../../_api_/calendar';

// ----------------------------------------------------------------------
const TABLE_HEAD = [
  { id: 'id', label: 'No.', alignRight: false },
  { id: 'name', label: 'Event Name', alignRight: false },
  { id: 'time', label: 'Time', alignRight: false },
  { id: 'dayFrom', label: 'Start Day', alignRight: false },
  { id: 'dayTo', label: 'End Day', alignRight: false },
  { id: 'month', label: 'Month', alignRight: false },
  { id: 'year', label: 'Year', alignRight: false },
  { id: 'department', label: 'Department', alignRight: false },
  { id: 'region', label: 'Region', alignRight: false },
  { id: '' }
];
// ----------------------------------------------------------------------

function createData(
  name: string
) {
  return {
    name,
    events: [
      {
        date: '2023-12-14',
        month: "January",
        eventName: 'Harvest',
        region: "National",
        department: "Ministry",
        year: 2023,
        dayFrom: 17,
        dayTo: 20,
        time: '10:00'
      },
      {
        date: '2024-01-01',
        eventName: 'New Year',
        month: "February",
        region: "National",
        department: "Covenant Keepers",
        year: 2023,
        dayFrom: 17,
        dayTo: 20,
        time: '10:00'
      },
    ],
  };
}

const displayData = () => {
  console.log('Inside New Page: => ', CALENDARLIST);
};


function Row(props: { row: ReturnType<typeof CALENDARLIST> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(true);
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      <Typography scope="row" variant="h7" gutterBottom component="div">
          {row.name} Upcoming..
        </Typography>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0}} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Month</TableCell>
                    <TableCell>Event</TableCell>
                    <TableCell align="right">Department</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody style={{ paddingBottom: 0, paddingTop: 0, background: 'gainsboro' }}>
                  {CALENDARLIST.map((eventRow) => (
                    <TableRow key={eventRow.id}>
                      <TableCell component="th" scope="row">
                        {eventRow.dayFrom}  { (eventRow.dayFrom === eventRow.dayTo) ? "" : "  -  " + (eventRow.dayTo)}
                      </TableCell>
                      <TableCell>{eventRow.month}</TableCell>
                      <TableCell>{eventRow.name}</TableCell>
                      <TableCell align="right">{eventRow.department}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  return (
    <TableContainer style={{ display: 'inlineTable', verticalAlign: 'super'}} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead style={{ paddingBottom: 0, paddingTop: 0, background: 'turquoise', top: 0 }}>
          <TableRow>
            <TableCell>Calendar Events</TableCell>
            <TableCell />
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <Row  row={CALENDARLIST}/>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
