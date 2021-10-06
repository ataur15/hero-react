import React from 'react';
import './Header.css';
import HomeIcon from '@mui/icons-material/Home';
import { Box } from '@mui/system';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        color="inherit"
                        sx={{ mr: 1 }}
                    >
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <nav>
                            <ul>
                                <li><Link to="/todos">Todos</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </nav>
                    </Typography>
                    <div className="search-bar">
                        <input className="search" type="text" placeholder="Search" />
                        <Search className="search-icon"></Search>
                    </div>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>

    );
};

export default Header;
