import React from "react";
import { Box, List, ListItem, makeStyles } from "@mui/material";

const Footer: React.FC = () => {
    return (
        <footer >
            <Box
                sx={{
                    bgcolor: 'secondary.dark',
                    textAlign: 'right'
                }}
            >
                <div >
                    &copy; 2021-2022 John Yenter-Briars
                </div>
            </Box>
        </footer>
    );
}

export default Footer;

