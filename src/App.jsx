import { Box } from '@mui/material'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './app/pages/SignIn'
import ProtectedRoute from './app/components/common/ProtectedRoute'
import { logout } from './features/slices/authSlice'
import { useDispatch } from 'react-redux'
import MyProfile from './app/pages/ProfilePage'
import SignUp from './app/pages/Register'


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
            <Route path="profile" element={<MyProfile/>} />
            </Routes>
            <Routes>
            <Route path="register" element={<SignUp/>} />
            </Routes>
          </ProtectedRoute>
        }/>
        <Route path='/sign-in' element={<SignIn />}/>
      </Routes>
       

    </>
  )
}

export default App
