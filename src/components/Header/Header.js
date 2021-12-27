import propTypes from 'prop-types';
import {Logo} from 'loft-taxi-mui-theme';
import {AppBar, Box, Toolbar, Button} from '@mui/material';

export function Header(props) {
  const NAVS = [{name: 'main', text: 'Карта'}, 
                {name: 'profile', text: 'Профиль'}, 
                {name: 'login', text: 'Выйти'}]
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: '#1C1A19', position: 'static'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Box>
            <Logo 
              sx={{ mr: 2 }}
            />
          </Box>
          <Box>
            {
              NAVS.map((item, index) => {
                return (
                  <Button 
                    key={index}
                    color="inherit"
                    onClick={() => {props.showPage(item.name)}}
                    sx={{ textTransform: "none", fontSize: "21px", ml: "44px", '&:hover': {color: "#FDBF5A"}}}
                    >
                    {item.text}
                  </Button>
                )
              })
            }
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

Header.propTypes = {
  currentPage: propTypes.string.isRequired,
  showPage: propTypes.func.isRequired
};