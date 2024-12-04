import React from "react";
import ReservationCard from "./ReservationCard";
import { Grid, styled } from "@mui/material";

const ReservationList = ({ reservations }) => {
  return (
    <div>
      <Grid container spacing={2}>
      {reservations.map((reservation) => (
        <ReservationCard
          key={reservation.id}
          thumbnail={reservation.thumbnail}
          title={reservation.title}
          price={reservation.price}
        />
      ))} 
      </Grid>
      
    </div>
  );
};

export default ReservationList;
