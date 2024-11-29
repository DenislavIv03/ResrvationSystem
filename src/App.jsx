import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Details from './app/pages/Details'
import SignIn from './app/pages/SignIn'
import ProtectedRoute from './app/components/common/ProtectedRoute'
import { logout } from './features/slices/authSlice'
import { useDispatch } from 'react-redux'


function App() {
  const dispatch = useDispatch()

  return (
    <>
      <Routes>
      <Route path='/sign-in' element={<SignIn />}/>
        <Route path="/*" element={
          <ProtectedRoute>
            <Routes>        
            <Route path='/room-details' element={<Details />}/>
            </Routes>
            <Box sx={{  marginRight: "10px"}}>Reservation System</Box>
            <div>I am logged in!</div>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </ProtectedRoute>   
        }/>
      </Routes>
    </>
  )
}

export default App