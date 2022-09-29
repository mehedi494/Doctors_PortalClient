import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Button, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import BookedAppointment from '../BookedAppointment/BookedAppointment';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddDoctors from '../AddDoctors/AddDoctors';
import { useAuth } from './../../../Hooks/useAuth';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ReplyIcon from '@mui/icons-material/Reply';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import EmailIcon from '@mui/icons-material/Email';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';


const drawerWidth = 240;

function DashBoard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    // const { pathname }=useMatch()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);

    }

    let activeStyle = {
        TransitionEvent: '.5sec',
        textDecoration: "underline",
        color: "black",
        background:"#81d4fa"
    };

    let notActiveStyle = {
        textDecoration: "none",
        color: "green"

    };

    
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const { user, logOut,isAdmin } = useAuth()


    const drawer = (
        <div>
            <Toolbar sx={{ background:"#1976D2"}}>
                <Typography variant="h5" sx={{fontWeight:400}} color="white">DASH BAR</Typography>
            </Toolbar>
            <Toolbar />


            <NavLink style={({ isActive }) => isActive ? activeStyle : notActiveStyle} to="/appoinment"><ListItemButton color="#81d4fa"> <ReplyIcon/> Go Appointment page</ListItemButton></NavLink>







            <List>
                <NavLink style={({ isActive }) => isActive ? activeStyle : notActiveStyle} to="/dashboard/"><ListItemButton color="#81d4fa"> <BookmarkAddedIcon/> Booked Appointment</ListItemButton>
                </NavLink>

                {isAdmin && <Box>
                    <NavLink style={({ isActive }) => isActive ? activeStyle : notActiveStyle} to="/dashboard/admin">
                        <ListItemButton color="inherit"  ><AdminPanelSettingsIcon/> Make Admin </ListItemButton>
                    </NavLink>
                    <NavLink style={({ isActive }) => isActive ? activeStyle : notActiveStyle} to="/dashboard/addDoctor">
                        <ListItemButton color="inherit"  ><PersonAddAlt1Icon/>Add Doctors </ListItemButton>
                    </NavLink>
                </Box>}


            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >

                <Toolbar sx={{ dislplay: 'flex', justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Doctors Portal
                    </Typography>

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
                </Toolbar>

                {/* Profile */}
                
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Routes>

                    <Route path='/' element={<BookedAppointment />}></Route>
                    <Route path='/admin' element={<MakeAdmin />}></Route>
                    <Route path='/addDoctor' element={<AddDoctors />}></Route>

                </Routes>

            </Box>
        </Box>
    );
}

DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashBoard;
