// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  NoSaved,
  Cars,
  Visitors,
  TotalAdults,
  AppCurrentVisits,
  AppWebsiteVisits,
  FaithKids,
  Offering
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | BBM">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={2}>
            <TotalAdults />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FaithKids />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <NoSaved />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Offering />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Visitors />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Cars />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
