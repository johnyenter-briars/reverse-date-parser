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
                {/* <div >
                    <List >
                        <ListItem >
                            <a
                                href="/team"
                                target="_blank"
                            >
                                About us
                            </a>
                        </ListItem>
                        <ListItem >
                            <a
                                href="/terms_conditions"
                                target="_blank"
                            >
                                Terms & Conditions
                            </a>
                        </ListItem>
                    </List>
                </div> */}
                <div >
                    &copy; 2021-2022 John Yenter-Briars
                </div>
            </Box>
        </footer>
    );
}

export default Footer;

