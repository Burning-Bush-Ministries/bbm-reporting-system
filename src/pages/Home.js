/* eslint-disable */
import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid, Button } from '@mui/material';

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

const MENU_ITMES = [
    {
        icon : <HomeIcon fontSize="large" />,
        itemName : 'Church'
    },
    {
        icon : <HomeIcon fontSize="large" />,
        itemName : 'Stats'
    },
    {
        icon : <HomeIcon fontSize="large" />,
        itemName : 'Calendar'
    },
    {
        icon : <HomeIcon fontSize="large" />,
        itemName : 'Assets Inventory'
    },
    {
        icon : <HomeIcon fontSize="large" />,
        itemName : 'Bush Camp'
    },
    {
        icon : <HomeIcon fontSize="large" />,
        itemName : 'FRC School'
    },
    {
        icon : <HomeIcon fontSize="large" />,
        itemName : 'Gear'
    }
]

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M 10 14 h 4 v 7 h -4 Z" />
      <path d="M 20.42 10.18 L 12.71 2.3 a 1 1 0 0 0 -1.42 0 l -7.71 7.89 A 2 2 0 0 0 3 11.62 V 20 a 2 2 0 0 0 1.89 2 H 8 v -9 a 1 1 0 0 1 1 -1 h 6 a 1 1 0 0 1 1 1 v 9 h 3.11 A 2 2 0 0 0 21 20 v -8.38 a 2.07 2.07 0 0 0 -0.58 -1.44 Z" />
    </SvgIcon>
  );
}

function FormRow({ name = 'Church', icon = <HomeIcon fontSize="large" />, url = '/' }) {
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
