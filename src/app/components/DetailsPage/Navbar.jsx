import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {styled } from '@mui/material'
import Divider from '@mui/material/Divider'
import { useState } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function MenuAppBar() {

  const pages = ['Home', 'Register', 'Sign In']

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  const Navbar = styled('div')({
    width: '100%',
    backgroundColor: 'white',
  });

  const LogoText = styled(Typography) ({
    fontSize: '26px',
    color: '#152C5B'
  });
  
  const SystemText = styled(Typography) ({
    fontSize: '26px',
    color: '#3252DF',
    marginLeft: '8px'
  })

  const NavButton = styled(Button) ({
    fontSize: '16px',
    color: 'inherit'
  })

  const MenuButton = styled(IconButton) ({
    color: 'inherit'
  })

  return (
    <div>
    <Box>
      <Navbar>
        <Toolbar>
          <Grid container alignItems="center" spacing= {2} justifyContent="space-between">
          <Grid item xs={6} sm={6} md ={4} display="flex" alignItems="center">
          <LogoText variant="h6">Reservation</LogoText>
          <SystemText variant="h6">System</SystemText>
          </Grid>
          <Grid item display="flex" justifyContent="flex-end" alignItems='center'>
              <Box display={{ xs: 'flex', md: 'none' }} alignItems="center">
                <MenuButton edge="end" aria-label="menu" onClick={handleMenuOpen}>
                  <MenuIcon />
                </MenuButton>
                <Menu open={Boolean(anchorEl)} onClose={handleMenuClose} anchorOrigin={{vertical:'top', horizontal:'right'}} transformOrigin={{vertical:'top', horizontal: 'right'}}>
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleMenuClose}>
                      {page}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box display={{ xs: 'none', md: 'flex' }}>
                    {pages.map((page) => (
                        <NavButton key={page}>{page}</NavButton>
                    ))}
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Navbar>
    </Box>
    <Divider>
    </Divider>
    </div>
  );
}
