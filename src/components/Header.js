import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import { useNavigate,Link } from 'react-router-dom';
import { useState } from 'react';

import SearchField from './Search';
import logo from '../images/logo.png'
const clientId = "822787173000-29pc1e5rkkla5bmbc6iqv3udfl67nsj9.apps.googleusercontent.com";

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

export default function PrimarySearchAppBar() {
  const navigate=useNavigate();
  // const navigate=useNavigate();
  const [profile,setProfile]=useState('')
  const [userName,setUserName]=useState("")
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
      console.log('Login Success:', res.profileObj);
      setShowloginButton(false);
      setShowlogoutButton(true);
      sessionStorage.setItem('authKey',res.accessToken);
      setProfile(res.profileObj.imageUrl)
      setUserName(res.profileObj.name);
      
  };


  const onLoginFailure = (res) => {
      console.log('Login Failed:', res);
  };


  // const onSignoutSuccess = () => {
  //     alert("You have been logged out successfully");
  //     console.clear();
  //     setShowloginButton(true);
  //     setShowlogoutButton(false);
  // };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    navigate('/')
    setShowloginButton(true);
    setShowlogoutButton(false);
    sessionStorage.removeItem('authKey')
    setProfile('')
    setUserName('')
};

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      { showloginButton ?
      <div onClick={handleMenuClose}>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
                </
                div> : null}

            { showlogoutButton ?
               <div onClick={handleMenuClose}>
                  <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                    onClick={handleMenuClose}

                ></GoogleLogout>
               </div>:null
                  // </GoogleLogout> : null

            }
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem> */}
      {/* <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      <MenuItem onClick={handleProfileMenuOpen}>
        
          { showloginButton ?
      <div onClick={handleMenuClose}>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
                </
                div> : null}
          {/* <AccountCircle /> */}
        {/* </IconButton> */}
        { showlogoutButton ?
               <div onClick={handleMenuClose}>
                  <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                    onClick={handleMenuClose}

                ></GoogleLogout>
               </div>:null}
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" display='flex'>
        <Toolbar>
        
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block',margin:'5' } }}
          >
            <img className="header-image" src={logo} alt="youtube"/>
          </Typography>
           <SearchField />

          <Box sx={{ flexGrow: 1 }} />
         
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {userName?<p className="username">Welcome {userName} </p>:null}
            {profile && userName?<>
            <img className="profile" src={profile} alt="profile" /> </>  :<AccountCircle />}
           </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
