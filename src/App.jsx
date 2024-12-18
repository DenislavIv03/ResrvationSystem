import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Details from './app/pages/Details'
import SignIn from './app/pages/SignIn'
import ProtectedRoute from './app/components/common/ProtectedRoute'
import { logout } from './features/slices/authSlice'
import { useDispatch } from 'react-redux'
import "react-toastify/dist/ReactToastify.css";
import { messageSuccess } from './app/components/Toast.js'
import { ToastContainer } from 'react-toastify'
import ReservationList from './app/components/ReservationList'
import { styled } from '@mui/system';
import MyProfile from './app/pages/ProfilePage'
import SignUp from './app/pages/Register'
import BookCalendar from './app/components/BookCalendar'
import ReservationSearch from './app/components/common/ReservationSearch'
import DummyHotelSearch from './app/components/DummyHotelSearch'
import UserReservations from './app/components/UserReservations'

const BigReservationTitle = styled('h3')({
  fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 50,
    marginBottom:-20,
});


const reservations = [
  
    {
      id: 1,
      thumbnail: "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
      title: "Luxury Hotel Stay",
      price: 150,
    },
    {
      id: 2,
      thumbnail: "https://www.tripsavvy.com/thmb/_Rt3jkxaF5P_UrB2CewwHIquJ2U=/1920x1365/filters:fill(auto,1)/pacificterracehotel-bd2dcb7b9d5c4dda9adf004b4aa8b0a5.jpg",
      title: "Beach Resort",
      price: 200,
    },
    {
      id: 3,
      thumbnail: "https://www.fodors.com/wp-content/uploads/2017/10/mnt14.jpg",
      title: "Mountain Retreat",
      price: 180,
    },
    {
      id: 4,
      thumbnail: "https://cache.marriott.com/content/dam/marriott-renditions/DXBHG/dxbhg-guestroom-0012-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=*:645",
      title: "Al Habtoor Grand Resort",
      price: 210,
    },
];

const notify = () => messageSuccess("Success!");

function App() {
  const dispatch = useDispatch()

  return (
    <>
      <Routes>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path="/*" element={
          <ProtectedRoute>
            <Box sx={{  marginRight: "10px"}}>Reservation System</Box>
            <div>I am logged in!</div>
            <button onClick={() => dispatch(logout())}>Logout</button>
            
            <Routes>
              <Route index element={<h1>Home</h1>}/>
              <Route path="profile" element={<MyProfile/>} /> 
              <Route path="my-reservations" element={<UserReservations />}/>
              <Route path='room-details' element={<Details />}/>
            </Routes>
          </ProtectedRoute>   
        }/>

      </Routes>
      <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
      <BigReservationTitle>Most visited destinations</BigReservationTitle>
      <ReservationList reservations={reservations} />
      </div>
    
    </>
  );
}

export default App