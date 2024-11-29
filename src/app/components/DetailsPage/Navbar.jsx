import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {styled } from '@mui/material'
import Divider from '@mui/material/Divider'


export default function MenuAppBar() {

  const pages = ['Home', 'Register', 'Sign In']
  const Navbar = styled('div')({
    width: 'auto',
    height: 'auto',
    fill: 'none',
    backgroundColor: 'white',
  });

  return (
    <div>
    <Box>
      <Navbar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ fontSize: '26px', color: '#152C5B'}}>
            Reservation
          </Typography>
          <Typography variant="h6" component="div" sx={{ fontSize: '26px', flexGrow: 1 , color: '#3252DF'}}>
            System
          </Typography>
          <Box sx={{fontSize: '16px',display:{xs: 'none', md: 'flex'}}}>
                    {pages.map((page) => (
                        <Button color='inherit' key={page}>{page}</Button>
                    ))}
            </Box>
        </Toolbar>
      </Navbar>
    </Box>
    <Divider>
    </Divider>
    </div>
  );
}
