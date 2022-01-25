import { Logo } from 'loft-taxi-mui-theme';
import { AppBar, Box, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { connect } from "react-redux";
import { logOut } from "../../modules/user";
import { useState } from 'react';
import "./Header.css"

function Header(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: '#1C1A19', position: 'static' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: "space-between" }}>
          <Box sx={{ mr: { sm: 2, xs: 0 }, flex: 1 }}>
            <Logo />
          </Box>
          <Box sx={{ display: {xs: "flex", sm: "none"}, gap: "44px" }}>
            <IconButton
              size="large"
              aria-label="menu"
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
                display: "block",
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} >
                <NavLink 
                  to="/" 
                  end 
                  className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link" }
                  >
                  Карта
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink 
                  to="profile" 
                  end 
                  className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link" }
                  >
                  Профиль
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink 
                  to="/login" 
                  end 
                  className={({ isActive }) => isActive ? "menu__link menu__link--active" : "menu__link" }
                  onClick={props.logOut}
                  >
                  Выход
                </NavLink>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: {xs: "none", sm: "flex"}, gap: "44px" }}>
            <NavLink 
              to="/" 
              end 
              className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link" }
              >
              Карта
            </NavLink>
            <NavLink 
              to="profile" 
              end 
              className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link" }
              >
              Профиль
            </NavLink>
            <NavLink 
              to="/login" 
              end 
              className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link" }
              onClick={props.logOut}
              >
              Выход
            </NavLink>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default connect(
  (state) => ({ isLoggedIn: state.user.isLoggedIn }),
  { logOut }
)(Header);