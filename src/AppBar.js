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
import { Link } from "react-router-dom";

const pages = ['My Profile', 'Search', 'Top Rankings', 'Check out'];
const settings = ['Logout'];
const pages_links = ["/profile", "/search", "/data", "/"]


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <AppBar position="static" elevation={0} sx={{ bgcolor: '#aa00ff' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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
              Prfl
          </Typography>

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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
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
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >

                <Link to={pages_links[index]}>
                {page}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Logout">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="profile image" src="data:image/png;base64,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" />
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
                  <Typography textAlign="center" href="/">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;