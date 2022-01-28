import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';

const NavBar: React.FC = () => {

    return (
        <AppBar position="static" sx={{
            // background: 'yellow',
            // color: 'black',
        }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="back"
                    sx={{ mr: 2 }}
                    onClick={() => {
                        window.location.href = '/';
                    }}
                >
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    UNDER CONSTRUCTION
                </Typography>
                <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="back"
                    sx={{ mr: 2 }}
                    onClick={() => {
                        window.location.href = 'https://github.com/johnyenter-briars/reverse-date-parser';
                    }}
                >
                    <GitHubIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;