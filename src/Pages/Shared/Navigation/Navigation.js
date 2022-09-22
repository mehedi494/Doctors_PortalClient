import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useAuth } from './../../../Hooks/useAuth';

import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';







function HideOnScroll(props) {
    const { children, window } = props;
       const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Navigation = (props) => {
    const { user, logOut } = useAuth()
    
    
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Doctors Portal
                        </Typography>
                        <Link style={{ textDecoration: 'none', color: "white" }} to="/appoinment"><Button color="inherit">Appoinment</Button></Link>
                        {user.email && <Link style={{ textDecoration: 'none', color: "white" }} to="/dashboard"><Button color="inherit">Dash Board</Button></Link>}
                        {
                            user.email && <Button variant=" outlined">{user.displayName}</Button>
                        }
                        {
                            user.email ? <Button onClick={logOut} color="inherit">Log out</Button> :
                                <Link style={{ textDecoration: 'none', color: "white" }} to="/login">  <Button color="inherit">Login</Button></Link>
                        }

                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <Container>
            </Container>
        </React.Fragment>
    );
};

export default Navigation;