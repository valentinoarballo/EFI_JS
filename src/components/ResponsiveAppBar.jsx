import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { styled } from '@mui/material/styles';
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
import Switch from '@mui/material/Switch';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import FormControlLabel from '@mui/material/FormControlLabel';
import { DarkModeContext } from '../context/DarkModeContext';
import { LoginContext } from '../context/LoginContext';
import { lightTheme, darkTheme } from '../themes/theme'
import { ThemeProvider } from '@mui/material/styles';

import '../index.css'
import PropTypes from 'prop-types';


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

export default function ResponsiveAppBar({ listMenu }) {

  const pages = listMenu

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  // eslint-disable-next-line no-unused-vars
  const { logged, loginToggle } = useContext(LoginContext)

  const navigate = useNavigate()

  const handleModeSwitch = () => {
    toggleDarkMode();
  }

  const handleLogout = () => {
    loginToggle()
    navigate('/login')
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

  const settings = [{ name: 'Logout', func: handleLogout }]

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <AppBar position="static">
        <Container maxWidth="xxl">
          <Toolbar disableGutters>

            {/* Icono bichito DESKTOP */}
            <FlutterDashIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

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
              TUX MANAGER
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
                  display: { xs: 'block', md: 'none' }
                }}
              >

                {pages.map(({ name, path }, key) => { // Desktop
                  return (
                    <Link to={path} key={key}>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography
                          textAlign="center"
                          style={{ color: `${darkMode ? 'white' : 'black'}` }}
                        >{name}
                        </Typography>
                      </MenuItem>
                    </Link>
                  )
                })}
              </Menu>

            </Box>
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
              TUX MANAGER
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
            <Box sx={{ flkexGrow: 0 }} style={{ display: 'flex', gap: '40  px' }}>
              <FormControlLabel
                onClick={handleModeSwitch}
                control={<MaterialUISwitch sx={{ m: 1 }} checked={darkMode} />}
                label=""
              />

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

                {settings.map(({ name, func }) => (
                  <MenuItem key={name} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" onClick={func}>{name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

ResponsiveAppBar.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  listMenu: PropTypes.array.isRequired,
};