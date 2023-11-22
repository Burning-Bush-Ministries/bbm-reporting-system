import * as React from 'react';
// material
import {
  Box,
  Collapse,
  IconButton,
  Table,
  Paper,
  Button,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  TableContainer,
} from '@mui/material';
import './DisplayEvent.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Iconify from '../../components/Iconify';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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
            <TableCell align="right">
              <Button
              variant="contained"
              onClick={() => navigate("/add-event")}
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Add
            </Button></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <Row  row={CALENDARLIST}/>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
