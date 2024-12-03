import { Box } from '@mui/material'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './app/pages/SignIn'
import ProtectedRoute from './app/components/common/ProtectedRoute'
import { logout } from './features/slices/authSlice'
import { useDispatch } from 'react-redux'
import "react-toastify/dist/ReactToastify.css";
import React from 'react';
import { messageSuccess } from './app/components/Toast.js'
import { ToastContainer } from 'react-toastify'
import ReservationList from './app/components/ReservationList'
import { styled } from '@mui/system';
import MyProfile from './app/pages/ProfilePage'
import SignUp from './app/pages/Register'
import BookCalendar from './app/components/BookCalendar'

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
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/*" element={
          <ProtectedRoute>
            <Box sx={{  marginRight: "10px"}}>Reservation System</Box>
            <div>I am logged in!</div>
            <button onClick={() => dispatch(logout())}>Logout</button>
            <BookCalendar />
            
            <Routes>
            <Route path="profile" element={<MyProfile/>} />
            </Routes>
            <Routes>
            <Route path="register" element={<SignUp/>} />
            </Routes>
          </ProtectedRoute>
        }/>
        <Route path='/sign-in' element={<SignIn />}/>
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

export default App;
