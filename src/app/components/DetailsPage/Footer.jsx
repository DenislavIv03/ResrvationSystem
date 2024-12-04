import { Box, Typography, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        padding: 4,
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
            Reservation<span style={{ color: 'black' }}>System</span>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
            Book the best hotel you can find on the Internet now and for a cheap price!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            For Beginners
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Link href="#" color="inherit" underline="hover">New Account</Link><br />
            <Link href="#" color="inherit" underline="hover">Start Booking a Room</Link><br />
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            Explore
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Link href="#" color="inherit" underline="hover">Our Careers</Link><br />
            <Link href="#" color="inherit" underline="hover">Privacy</Link><br />
            <Link href="#" color="inherit" underline="hover">Terms & Conditions</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            Connect Us
          </Typography>
          <Typography variant="body2" color="text.secondary">
            support@reservationsystem.com<br />
            089 8989 898<br />
            ReservationSystem, Plovdiv, Bulgaria
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', marginTop: 3 }}>
        <Typography variant="body2" color="text.secondary">
          Copyright 2024 • All rights reserved • ReservationSystem
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
