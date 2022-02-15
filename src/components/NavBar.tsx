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

                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',


                        //     display: flex;
                        //     justify- content: center;
                        // align-items: center;
                        // height: 200px;
                        // border: 3px solid green; 
                    }}
                >
                    <IconButton
                        size="large"
                        // edge="start"
                        color="inherit"
                        // aria-label="back"
                        sx={{ 
                            mr: 2,
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
                        // width: '10%',
                        // height: '0',
                        // width: '5vw',
                        // height: '5vw',
                        // paddingBottom: '10%',

                        // height:0;width:20%;padding-bottom:20%;background-color:red
                    }}
                >
                    <IconButton
                        size="large"
                        // edge="end"
                        color="inherit"
                        // aria-label="back"
                        sx={{
                            mr: 2,
                            margin: '2px',

                        }}
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
        </AppBar >
    );
}

export default NavBar;