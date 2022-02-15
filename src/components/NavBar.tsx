import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';

const NavBar: React.FC = () => {

    return (
        <AppBar
            position="static"
            sx={{
                bgcolor: 'secondary.dark',
                // flex: '0 1 auto',
            }}>
            <Toolbar>
                <Box
                    sx={{
                        bgcolor: 'primary.main',
                        borderRadius: '5px',
                        border: '2px solid #90C3C8',
                        float: 'left',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <IconButton
                        size="large"
                        color="inherit"
                        sx={{
                            margin: '2px',
                        }}
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
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <IconButton
                        size="large"
                        color="inherit"
                        sx={{
                            margin: '2px',
                        }}
                        onClick={() => {
                            window.location.href = 'https://github.com/johnyenter-briars/reverse-date-parser';
                        }}
                    >
                        <GitHubIcon
                            className="svg_icons"
                        />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar >
    );
}

export default NavBar;