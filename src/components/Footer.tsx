import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
    return (
        <footer >
            <Box
                sx={{
                    bgcolor: 'secondary.dark',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        color: 'secondary.main',
                    }}
                >
                    <p>
                        Issue with this page?
                        <a
                            href="https://github.com/johnyenter-briars/reverse-date-parser/issues/new"
                        > Let me know!
                        </a>
                    </p>
                </Box>
                <Box
                    sx={{
                        bgcolor: 'primary.main',
                        borderRadius: '5px',
                        border: '2px solid #90C3C8',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            margin: '2px',
                        }}

                    >
                        Inspired by the wonderfully helpful:
                        <a
                            href='https://crontab.guru/'
                        >
                            Crontab Guru
                        </a>
                    </Typography>

                </Box>
                <Box

                    sx={{
                        color: 'secondary.main',
                    }}
                >
                    <p>
                        &copy; 2021-2022 John Yenter-Briars
                    </p>
                </Box>
            </Box>
        </footer>
    );
}

export default Footer;

