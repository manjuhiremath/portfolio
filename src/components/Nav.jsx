// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// // import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// // import Menu from '@mui/material/Menu';
// // import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';

// import Button from '@mui/material/Button';

// import MenuItem from '@mui/material/MenuItem';


// const pages = ['Home', 'About', 'Projects' , 'Contact'];


function ResponsiveAppBar() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);


  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };


  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };



  return (
    <AppBar position="static" sx={{ bgcolor: 'white' }}>
      {/* <Container maxWidth="xl" >
      <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
              sx={{
                textAlign: 'center',
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'sans-serif',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'black',
                opacity: '70%',
                textDecoration: 'none',
              }}
          >
            Manju.dev
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
          
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily:"sans-serif",
              fontWeight: 700,
              color: 'black',
              textDecoration: 'none',
            }}
          >
             Manju.dev
          </Typography>
        </Toolbar>
      </Container> */}
    </AppBar>
  );
}
export default ResponsiveAppBar;