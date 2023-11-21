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

function createData(
  name: string,
) {
  return {
    name,
    events: [
      {
        date: '2023-12-14',
        month: "January",
        eventName: 'Harvest',
        region: "National",
        department: "Ministry"
      },
      {
        date: '2024-01-01',
        eventName: 'New Year',
        month: "February",
        region: "National",
        department: "Covenant Keepers"
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      <Typography scope="row" variant="h7" gutterBottom component="div">
          {row.name}
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
                    <TableCell>Event</TableCell>
                    <TableCell align="right">Department</TableCell>
                    <TableCell align="right">Region</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody style={{ paddingBottom: 0, paddingTop: 0, background: 'gainsboro' }}>
                  {row.events.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.eventName}</TableCell>
                      <TableCell align="right">{historyRow.department}</TableCell>
                      <TableCell align="right">{historyRow.region }</TableCell>
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

const rows = [
  createData('January'),
  createData('February'),
//   createData('March'),
//   createData('April'),
//   createData('May'),
//   createData('June'),
//   createData('July'),
//   createData('August'),
//   createData('September'),
//   createData('October'),
//   createData('November'),
//   createData('December'),
];

export default function CollapsibleTable() {
  return (
    <TableContainer style={{ display: 'inlineTable', verticalAlign: 'super'}} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead style={{ paddingBottom: 0, paddingTop: 0, background: 'turquoise', top: 0 }}>
          <TableRow>
            <TableCell>Calendar Event</TableCell>
            <TableCell />
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
