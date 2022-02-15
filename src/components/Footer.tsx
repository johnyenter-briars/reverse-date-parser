import React from "react";
import { Box, IconButton, List, ListItem, makeStyles, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer: React.FC = () => {
    return (
        <footer >
            <Box
                sx={{
                    bgcolor: 'secondary.dark',
                    // textAlign: 'left'efteft
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        bgcolor: 'secondary.dark',
                        // textAlign: 'left',
                        // justifyContent: 'flex-start',
                    }}
                >
                    See an issue with this page? 
                    <a
                        href="https://github.com/johnyenter-briars/reverse-date-parser/issues/new"
                    >Let me know about it!</a>
                </Box>
                <Box

                    sx={{
                        bgcolor: 'secondary.dark',
                        // textAlign: 'right',
                        // float: 'right',
                        // justifyContent: 'flex-end',
                    }}
                >
                    &copy; 2021-2022 John Yenter-Briars
                </Box>
            </Box>
            {/* <Box
                sx={{
                    bgcolor: 'secondary.dark',
                    textAlign: 'right'
                }}
            >
                <div >
                    &copy; 2021-2022 John Yenter-Briars
                </div>
            </Box> */}
        </footer>
    );
}

export default Footer;

