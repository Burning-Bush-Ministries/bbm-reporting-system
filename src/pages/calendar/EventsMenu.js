import * as React from 'react';
import { List, ListItem, ListItemButton, Box, ListItemIcon, Divider, ListItemText }  from '@mui/material';
import Iconify from '../../components/Iconify';

export default function EventCalendar() {

    return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon >
                <Iconify icon='eva:calendar-outline' fontSize="xx-large" />
              </ListItemIcon>
              <ListItemText primary="Annual 2024 Calendar" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider variant="fullWidth"/>
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="National Calendar" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Regional Calendar" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}