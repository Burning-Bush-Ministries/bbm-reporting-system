/* eslint-disable */
import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid, Button } from '@mui/material';
import Iconify from '../components/Iconify';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontSize: '10em',
  direction: 'inline-grid'
}));

const ButtonClick = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  display: 'inline'
}));

const getIcon = (name) => <Iconify icon={name} fontSize="xxx-large" />;


const MENU_ITMES = [
    {
        icon : getIcon('eva:home-fill'),
        itemName : 'Church'
    },
    {
        icon : getIcon('eva:calendar-outline'),
        itemName : 'Calendar'
    },
    {
        icon : getIcon('eva:layers-outline'),
        itemName : 'Assets Inventory'
    },
    {
        icon : getIcon('eva:book-open-outline'),
        itemName : 'Bush Camp'
    },
    {
        icon : getIcon('eva:monitor-outline'),
        itemName : 'FRC School'
    },
    {
        icon : getIcon('eva:gift-outline'),
        itemName : 'Gear'
    },
    {
        icon : getIcon('eva:attach-outline'),
        itemName : 'Reports'
    }
]

function FormRow({ name = 'Reports', icon =  getIcon('eva:layers-outline'), url = '/' }) {
  return (
   <Grid item xs={4}>
      <Item>
        <ButtonClick>
          {icon}
          <br />
          {name}
        </ButtonClick>
      </Item>
    </Grid>
  );
}

export default function SvgIconsSize() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          {MENU_ITMES.map((item, index) =>{
            console.log("itemName", item.icon);
            return <FormRow icon={item.icon} name={item.itemName}/>
          })   
         }
        </Grid>
      </Grid>
    </Box>
  );
}
