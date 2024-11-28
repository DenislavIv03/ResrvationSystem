import React from "react";
import PropTypes from "prop-types"; 
import { Grid} from "@mui/material";
import { styled } from '@mui/system';

const MyReservationCard = styled('div')({
  
  borderRadius: 8,
  overflow: "hidden",
  width: 250,
  alignContent: "center",
  margin: 55,
});

const Image = styled('img')({
  width: 250,       
  height: 150,     
  borderRadius: 10,
});

const CardDetails = styled('div')({
});

const CardTitle = styled('h3')({
  fontSize: 18,
  marginTop: 20,
  marginBottom: 2,
});

const CardPrice = styled('p')({
  fontSize: 16,
  fontWeight: 'bold',
  marginTop: 0,
  color: '#21ABC6',
});

const ReservationCard = ({ thumbnail, title, price }) => {
  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
    <MyReservationCard>
      <Image src={thumbnail} alt={title} />
      <CardDetails>
        <CardTitle >{title}</CardTitle>
        <CardPrice>${price}</CardPrice>
      </CardDetails>
    </MyReservationCard>
  </Grid>
    
  );
};

ReservationCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ReservationCard;
