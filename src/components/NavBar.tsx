import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';

const NavBar: React.FC = () => {

    return (
        <AppBar
            position="static"
            sx={{
                // background: 'yellow',
                bgcolor: 'secondary.dark',
            }}>
            <Toolbar>
                {/* <Box
                    sx={{
                        display: 'flex-box'
                    }}
                > */}
                <Box
                    sx={{
                        bgcolor: 'primary.main',
                        borderRadius: '5px',
                        border: '2px solid #90C3C8',
                        float: 'left',
                    }}
                >
                    <IconButton
                        size="large"
                        edge="start"
                        // color="inherit"
                        aria-label="back"
                        sx={{ mr: 2 }}
                        onClick={() => {
                            window.location.href = '/';
                        }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                </Box>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1 
                    }}
                >

                    
                </Typography>
                <Box
                    sx={{
                        bgcolor: 'primary.main',
                        borderRadius: '5px',
                        border: '2px solid #90C3C8',
                        float: 'right',
                    }}
                >
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
                        {/* <GitHubIcon /> */}
                        <GitHubIcon
                            className="svg_icons"
                        />
                    </IconButton>
                </Box>


                {/* </Box> */}
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;