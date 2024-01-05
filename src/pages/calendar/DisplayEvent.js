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
import Months from './Months';

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
      <Months/>
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
