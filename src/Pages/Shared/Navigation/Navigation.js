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
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../Hooks/useAuth';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import EmailIcon from '@mui/icons-material/Email';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';

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
    const { user, logOut } = useAuth()


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/*.................................  */}
                    {/*             SMALL VIEW            */}
                    {/*.................................  */}
                    <VaccinesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            to="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Segoe UI',
                                fontWeight: 700,

                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Doctors Portal
                        </Typography></Link>

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
                        {user.email && <Menu
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

                            <MenuItem onClick={handleCloseNavMenu}>
                                {user.email && <Link style={{ textDecoration: 'none', color: "black" }} to="/appoinment"> Appoinment </Link>}

                            </MenuItem>

                            <MenuItem>
                                {user.email && <Link style={{ textDecoration: 'none', color: "black" }} to="/dashboard">Dash Board</Link>}
                            </MenuItem>



                        </Menu>}
                    </Box>

                    {/*.................................  */}
                    {/*             MEDIUM VIEW            */}
                    {/*.................................  */}
                    <VaccinesIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'Segoe UI',
                                fontWeight: 500,

                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Doctors Portal
                        </Typography>
                    </Link>


                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        {user.email && <Link style={{ textDecoration: 'none', color: "white" }} to="/appoinment" ><Button color="inherit">Appoinment</Button></Link>}

                        {user.email && <Link style={{ textDecoration: 'none', color: "white" }} to="/dashboard"><Button color="inherit">Dash Board</Button></Link>}
                    </Box>

                    {user.email ? <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

                                <Avatar src={user?.photoURL ? user.photoURL : "/broken-image.jpg"} />
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

                            <MenuItem onClick={handleCloseUserMenu}>
                                {
                                    user.email && <>< PermIdentityTwoToneIcon /> {user.displayName}</>
                                }
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                {
                                    user.email && <>< EmailIcon /> {user.email}</>
                                }
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu && logOut}>
                                <ExitToAppIcon /> Log out
                            </MenuItem>

                        </Menu>
                    </Box> : <Link style={{ textDecoration: 'none', color: "white" }} to="/login">  <Button color="inherit">Login</Button></Link>}
                    {
                        !user.email && <Link style={{ textDecoration: 'none', color: "white" }} to="/register">  <Button color="inherit">sign up</Button></Link>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
