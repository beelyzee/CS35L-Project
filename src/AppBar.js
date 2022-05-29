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
const pages_links = ["/profile", "/search", "/", "/"]


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
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="profile image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADmCAMAAABruQABAAAAhFBMVEX39/cAAAD////7+/v8/Pz19fW/v7/Gxsby8vLu7u7KysqRkZHg4OC3t7dhYWFra2uhoaFVVVV0dHQ+Pj43Nzfp6emcnJzT09Ovr6/c3NwVFRWLi4slJSVFRUWlpaV/f38dHR1vb284ODgwMDAMDAyDg4OVlZVNTU1iYmIpKSlZWVkSEhL3vabKAAALCElEQVR4nO1d61bqOhCmM4EWKIjcWi4CHhXZ+v7vd1pxb7BJ22Rm0uJafP/0R5OPJJO5p9O544477rjjjjvuuAYiKgU/oVT237YnxgLmlDBORulwsx9/PJ7xMd5vhukoiTEn+QsZ5rSiJB2e/gTlOIyHaRL9KoIZL0zS6baC1TW20zTBX8Evm+Vq92FJ64KP3Sr7RdqefBUQuuF+7UzsjPU07N4qPYRO74HI6y9Ovc4N0lOQTJnEzpgObuvsIfQnLyLMcvxZ9m9m8RBWMkt2wTS5CXYIg0dhZjkeQ1CtM+vNPDDLMeu1unYI4X+emOWYh62xQ0iePDLL8dTSuYPFyTOzHKcFNM5M4bABZjmG2LBQgfDQELXMXAibXDoVcZUrNzxEjS0d9BpllqPXzNJhV1oLscG024DAhKS5k3aNQ+J76RCWrTDLsfR712F33Bq1IBj73JcqtnWC+MEh9rYvW5CPRfiSlzBpm1mQHzov1PZt8/rCXp4cqjalyDXG0u4U7Ly3zekf3jui5DDyZV1TMIsEyWE0b5vPD8zlyGEk56CTwYsUOeze1qrlmAupKOjbK0LBkwg35R6VaQIfAuYqtGGt2eCZfYlDUy4fdwyZ5GAkM4/t+G2S9sIw7KWTzUnImhixyKlEYAqPy0H0NzfhO2chGiwlTnHCOHPYZw9/GkWmeBoqiEZ8Z1mfLi2BqWltJ/2KaEwetatKY7DAjLwrmVbNfKTq9oxSI55eQLV4FMvMXtcz+2ZHDf5/oUc6crzDNuzYDqo6rGuGdOSAYbHNVy57BVaMKN47YVdyvCNvjoloiG/0wSbO5DCmj0a4Uzk6Quy6K4Gu/Dvtx3/jrcjjPTmOBzvqSOsFTVlQC7K83DmRwwV1nC3ZIsaIrGYuXMYEaih7zdCCsE9duZPDwqmQOIj7uf5Bjiy/Qvthker74SjmHYbZ8WI9LlmQuB3qVkbuEgfgW/kdeCaO3bX8PlG/Owg4DTEiyhM7BwNZRw4lEiXIYqxv83Ug6nYPMsEjIFrjbzbDU5fN6QItB1ltiOq/DRvap7ketcsEiMd9Uz8BqpC0FFQW8DYDRTTbxJaNvnCTWu8MMeuHoUcWQRXUhxpuSPT/CFzbF1Av8F7170t1kgwkQ9A4oE3isfIHpmriB9nECCAejEorxKP8deLm4x5StG/Kbkn6pnytkCZIVeak8+OQOI8KG5UaIx1L5yEBMQlpWjER2heDpXSqtKJmoJZ+kXq5ubgr7EA+HKVXHDlsL2QCXHGjGgOlm5IqJQP57H3pqVAlb/BHPqURqAHVktuIemPKi0m6oCzTIsjRbVFF+Xsuz8S5lETAyXFSD2m29FC70SeE5BCYsDb5xY16Psy3AP2nuiluRn8XPZnEyn3myI0cJDYfOOrXbuu8mdQu8u0m5nX9wY2eD2W44agOrqDOlqdxo9fDG9xd5BslCNYeuH2SZ2O4bRUjsUqcGuPwB3N93aje3BwrcTuAnpFh8C9zcmWCkTg3Trqt5u0iW4M5xC9v+tUdGCxlhpik5YtVc+NUNmmCkq4I5LCIfTkh4kxGU5OAlRtd44l3Bdlx84WPIjfFSk2u8p0RwKu3mBX3JLIya4Wdr1TX6xnr4mRYOzy7BSTdQYpZcFE4/fTEuzNEVUqGMvmFgkuRdXXnEFRNWEpJjsLljdziFEF/EENrPyMpcOOoJV9gZRf+mArzeGiKCe9GySFmoDLM0m/0pLkVdwIV7NPhg5t2ZdLAUyI8cSMUIRhAT3D3yk3iHmDfRTl8cJsLcJPor+eDG19llilK9sKNe+QkDlvgixuv541Uz54iN7Ze8o0BnRzQPds/UdRLuPrpP5DJgUS99RdWwnbABURyIqXkZxTtALaCegGppaIgNS0lhONWLoIgUJTYmQh0xzLTX/ITzuREqWn+EkYNpgGOFaei1PQaTXJChxlO5JScIMuhpbuwPPAGpPbkhKnp0Qklo+5cYE1Omlqw03yvUorJZQg7cpK3zxlaHEd+CDvFGRev0uMaMh6lh7Dqp4ixODVDhFrAT6GhPryDPfG+ZobkGfleVdPYwjuEEAr3/zIYyNKC8m1h2VZX+tkITUyK+AWvMHR5cgNhIXi7Gv2kYl9/XXYdFUqEzk6qBbDp+1Ia5SFFkpGjeiITMHb8kNG6XuxaIJmAkAi8tmDMB5FwB814r6MgxOxmwOZ7hxkWDoL3AbvjOEKfuX3M6SCshJVso/OZCbArSeNRR8Y3t3Kv2WRXAj0EdzSfCc4NdyRLEDO7hBoXKIsCAlVv/RB/6AWJ7cE+yyZCTYAe+Xi0ABaUTIzStHCafTru+3kEBSmRj/JKPEqu0c7fSxMQO5+68p/ZfVNuSU3UbIHoOKGKSgXnGgGvL2jkgNRpPlW12I4F8YLNL0pnlDgI78r2AG71ubwewJZQfXuvQ2W9spO3y/tjPN9zQuvLoLqm18F1buMNkYFtFlRNbai1NPkktmIkwdJPVdfVAexa4a3FS7qrZ2VzF7zUnRFlJXRfm6VmRy6t30k2MrdpajYJo68WH7G4BlYtPKta+0SDzYtH9ZFvRg4JHdipcerbNAiDOvPbIWwoCexXnpaj3ayqqXmoCrZDdX6PXV+36hPnobjUFlUNpm3fF8MKjflV8r0kV5QXex1sZ1VVM8LsVstEaZDQvmamPDRgeWJ9oUyXd2j7XerNc20dLo4SW9Ulf79MORUr3iDDaKg45RKjOTYgkiXPg7GBo5t8M4oT+qsmgjDsStfiO1P9qXiJOgmaoNPqS+tgkEgeWnlQoAk6d6NEX3vpQmciitKEot4Wv+GhmxMFRd2E1kCraOywu8xLQAsS0Hofa+nRjfgjq6Gpy1QdULPkSBnkkoBipImuA2oXQSsW99V8ih5GZ/F/jWKyTqvkNGpbTqNxvdyjxW2pbUimeqs/VeDrdfBa6FVW3McY9MBsS64gXZfg30l6mlcr9qnufZNo5KPbcs/Sr4PXAtVzcRIyLVN0c3AWNes1Ufrz4VJtAAzu6obiimcYqv5YF9vPj+vkJv5SLwowpQhJOkmV7qX4aGhfqsgwtujQSs9IfW3kGodQjwKchH9Vk+dr3/W9dKpriCkKN5XqmNOZD6HXU4cQGrz3HrrLmovmH/r+Nib0TfkJfixkc9n8Ev1sTIXGDEpf6iysTAW3gtm8FyD0TLUQa3+pcRgZ07VnMlnYV+PAwBhtefcZIMOSAon3AasuoDjIwJzxvvGsL5T1qnjqCbFTUFa74t9yVIuSMoLDzqV2ygyEaFcStH1vIskKy+Ph0wEw6CFAUpq4tWxIf614b3t7jIFk3aGC+FhaJub2HjgLWFUC8nJcKXB6wBsR1OpYkQJ6bNQYhrgqYfMwHfXBbv2y9YJ+b19V2PcYN+zEQBhVd8542adxJydYxhBzWp043Vfn7K69VFbUQHXqHx17n07COMqEREbygq8/ozic7OsrFYeddpI+YGGXj3p4Gu83x12ajkajNN0dN/vxzK66dCpe6GMNhJjdULECp7iF7XjNbuWL3cOqVWZndvwaUQP27a7ZX2SK0lKy21AQfC756psYMgVXrifPWErtlgJCfynRX3G+tO3D0CRyjXDI69gxH65o2mgDyC7peEKtpH6fxBwrogFkqxeFG9c+L7O3MLrZFfuBbPn6g8nY7nm67Xg56N/4ghWQrZ9aJOnmVF7f8zLepIMF/o71KuJL04fuIhmMdsvN236aY/+2We5Gg9WiC1VWwi8BZhzPyv83sr/wt5O644477rjjjjvuuOOOO24T/wOYgKgzdZ/+9QAAAABJRU5ErkJggg==" />
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