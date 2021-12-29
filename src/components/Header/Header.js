import "./Header.css"
import {Logo} from 'loft-taxi-mui-theme';
import {AppBar, Box, Toolbar} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import dataContext from "../../context";

export function Header() {
  const context = useContext(dataContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: '#1C1A19', position: 'static'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
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
              onClick={context.logout}
              >
              Выход
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}