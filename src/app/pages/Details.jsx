import Navbar from '../components/DetailsPage/Navbar'
import DetailsBreadcrumbs from '../components/DetailsPage/DetailsBreadcrumbs'
import CustomCarousel from'../components/DetailsPage/customCarousel'
import About from '../components/DetailsPage/About'
import Booking from '../components/DetailsPage/Booking'
import { Box } from '@mui/material'
import Treasure from '../components/DetailsPage/Treasure'
import Footer from '../components/DetailsPage/Footer'

export default function RoomDetails() {

  return (
    <>
      <Navbar />
      <DetailsBreadcrumbs />
      <CustomCarousel />
      <Box sx={{display: "flex"}}>
      <About />
      <Booking />
      </Box>
      <Treasure />
      <Footer />
    </>
  );
}