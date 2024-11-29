import { Box, Button, Typography, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
import { DateRange } from "@mui/icons-material";

function Booking() {
      const [nights, setNights] = useState(0)
      const [pricePerNight] = useState(280);
      const handleIncrease = () => setNights(nights + 1);
      const handleDecrease = () => {
        if (nights > 0) setNights(nights - 1);
      };
    
      const totalPrice = pricePerNight * nights;
      return (
        <Box sx={{ border: '1px solid #e0e0e0',borderRadius: '8px',padding: '16px',width: '300px', marginLeft: '170px'}}>
            <Box sx={{ margin: '20px', padding: '20px'}}>
            <Typography variant="h6" gutterBottom color="#152C5B">
            Start Booking
            </Typography>
            <Typography variant="h4" color="#1ABC9C" gutterBottom>
            ${pricePerNight} <span style={{ fontSize: '26px', color: '#757575' }}>per night</span>
            </Typography>
            <Typography variant="body1" gutterBottom>
            How long will you stay?
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <Button
              variant="outlined"
              onClick={handleDecrease}
              disabled={nights === 0}
              sx={{ minWidth: '40px', maxHeight: '30px', backgroundColor: '#E74C3C', color: 'white' }}
            >
              -
            </Button>
            <Typography variant="body1" sx={{ minWidth: '125px', minHeight: '30px', textAlign: 'center', backgroundColor: '#F5F6F8' }}>
              {nights} {nights === 1 ? 'night' : 'nights'}
            </Typography>
            <Button
              variant="outlined"
              onClick={handleIncrease}
              sx={{ minWidth: '40px', maxHeight: '30px', backgroundColor: '#1ABC9C', color: 'white'}}
            >
              +
            </Button>
          </Box>
          <Typography variant="body1" gutterBottom>
            Pick a Date
          </Typography>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="20 Jan - 22 Jan"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DateRange />
              </InputAdornment>
            ),
          }}
        sx={{ marginBottom: '16px' }}/>
        <Typography variant="body2" gutterBottom>
          You will pay <strong>${totalPrice} </strong> for {nights} {nights === 1 ? 'night' : 'nights'}
        </Typography>
        <Button variant="contained" color="primary" fullWidth>
          Continue to Book
        </Button>
            </Box>
        </Box>
      )
    }
  

export default Booking;