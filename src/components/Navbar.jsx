import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {  NavLink } from 'react-router-dom';

const pages = [{name:'Dashboard', path:'/'},{name:'Heroes', path:'/heroes'}];

export default function ResponsiveAppBar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path) => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static"  enableColorOnDark>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
    
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                    <MenuItem key={page.name} onClick={()=> handleCloseNavMenu(page.path)}>
                   <NavLink  style={{color:'MenuText'}}   to={page.path}>
                        
                            {page.name}
                    </NavLink>
                    </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', }}}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={()=> handleCloseNavMenu(page.path)}
              >
            
              <NavLink style={{color:'Menu'}} to={page.path}>{page.name}</NavLink>
              </Button>
            ))}
          </Box>

       
        </Toolbar>
       
      </Container>
    </AppBar>
  );
}