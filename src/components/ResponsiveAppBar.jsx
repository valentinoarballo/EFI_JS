import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom"
import { WidthFull } from '@mui/icons-material';
import {DarkModeContext} from '../context/DarkModeContext';
import { background } from '@chakra-ui/react';

const settings = ['Logout'];

function ResponsiveAppBar({ listMenu }) {

  const pages = listMenu

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const {darkMode, toggleDarkMode} = React.useContext(DarkModeContext);
  
  const handleClick = () => {
      toggleDarkMode();
  }


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar style={{background:`${darkMode ? '#404258':''}`}} position="static">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>

          {/* Icono bichito DESKTOP */}
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

          {/* Agrega un logo en DESKTOP con una tipografia especifica (se le puede poner un href) */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MY KANBAN
          </Typography>


          {/* Dropdown MOBILE */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            
            {/*Icono hamburguesa*/}
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

            {/* El dropdown MOBILE */}
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

              {pages.map(({ name, path }, key) => { // Desktop
                return (
                  <Link to={path} key={key}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{name}</Typography>
                    </MenuItem>
                  </Link>
                )
              })}

            </Menu>

          </Box>


          {/* Icono bichito MOBILE */}
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}


          {/* Agrega un logo en MOBILE con una tipografia especifica (se le puede poner un href) */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MY KANBAN
          </Typography>


          {/* Botones navbar DESKTOP */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({ name, path }, key) => {
              return (
                <Link to={path} key={key}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {name}
                  </Button>
                </Link>
              )
            })}
          </Box>


          {/* Icono fotito de perfil DESKTOP y MOBILE*/}
          <Box sx={{ flkexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleClick}>
                  <Typography textAlign="center">Dark Mode</Typography>
              </MenuItem>

            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
