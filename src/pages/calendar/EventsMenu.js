import * as React from 'react';
import { List, ListItem, ListItemButton, Box, ListItemIcon, Divider, ListItemText }  from '@mui/material';
import Iconify from '../../components/Iconify';

export default function EventCalendar() {
    const getIcon = (name) => <Iconify icon='eva:calendar-outline' fontSize="xxx-large" />;

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon icon={getIcon} >
                <Box icon={getIcon} />
              </ListItemIcon>
              <ListItemText primary="Annual 2024 Calendar" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
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