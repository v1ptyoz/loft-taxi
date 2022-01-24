import {Logo} from 'loft-taxi-mui-theme';
import {AppBar, Box, Toolbar} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { logOut } from "../../modules/user";
import "./Header.css"

function Header(props) {
  
  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: '#1C1A19', position: 'static'}}>
          <Toolbar sx={{ display: 'flex' }} className='header__topline'>
            <Box>
              <Logo 
                sx={{ mr: 2 }}
              />
            </Box>
            <Box sx={{display: "flex", gap: "44px"}}>
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
  (state) => ({isLoggedIn: state.user.isLoggedIn}),
  { logOut }
)(Header);