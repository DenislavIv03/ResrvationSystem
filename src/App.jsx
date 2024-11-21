import { Box } from '@mui/material'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './app/pages/SignIn'
import ProtectedRoute from './app/components/common/ProtectedRoute'
import { logout } from './features/slices/authSlice'
import { useDispatch } from 'react-redux'


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
          </ProtectedRoute>
        }/>
        <Route path='/sign-in' element={<SignIn />}/>
      </Routes>
       

    </>
  )
}

export default App
