import { Box } from '@mui/material'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './app/pages/SignIn'
import ProtectedRoute from './app/components/common/ProtectedRoute'
import { logout } from './features/slices/authSlice'
import { useDispatch } from 'react-redux'
import MyProfile from './app/pages/ProfilePage'
import SignUp from './app/pages/Register'
import BookCalendar from './app/components/BookCalendar'
import ReservationSearch from './app/components/common/ReservationSearch'
import DummyHotelSearch from './app/components/DummyHotelSearch'
import UserReservations from './app/components/UserReservations'


function App() {
  const dispatch = useDispatch()

  return (
    <>
      <Routes>
        <Route path="/*" element={
          <ProtectedRoute>
            <Box sx={{  marginRight: "10px"}}>Reservation System</Box>
            <div>I am logged in!</div>
            <button onClick={() => dispatch(logout())}>Logout</button>
            
            <Routes>
              <Route index element={<h1>Home</h1>}/>
              <Route path="profile" element={<MyProfile/>} />
              <Route path="register" element={<SignUp/>} />
              <Route path="my-reservations" element={<UserReservations />}/>
            </Routes>

          </ProtectedRoute>
        }/>
        <Route path='sign-in' element={<SignIn />}/>
      </Routes>
       

    </>
  )
}

export default App
