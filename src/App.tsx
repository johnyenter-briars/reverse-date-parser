import React, { useEffect } from 'react';
import './App.css';
import { parseDateString } from './parser/Parser';
import { Avatar, Button, FormControl, IconButton, InputLabel, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ContentCopyTwoTone } from '@mui/icons-material';
import ResultsList from './components/ResultsList';

const defaultOptions = [
    ["2021-02-0", "C#"],
    ["2019-12-24", "Python"],
    ["Feb 21 2021", "Python"],
];

const App: React.FC = () => {
    const [currentLanguage, setCurrentLanguage] = React.useState("");
    const [currentString, setCurrentString] = React.useState("");
    const [parsedOptions, setParsedOptions] = React.useState<string[]>([]);

    useEffect(() => {
        let randomOption = defaultOptions[Math.floor(Math.random() * defaultOptions.length)]
        let randomString = randomOption[0];
        let randomLanguage = randomOption[1];

        setCurrentLanguage(randomLanguage);
        setCurrentString(randomString);
        setParsedOptions(parseDateString(randomString, randomLanguage));
    }, [])

    const onUserInput = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        let currentString = event.target.value;
        let options = parseDateString(currentString, currentLanguage);
        setCurrentString(event.target.value);
        setParsedOptions(parseDateString(currentString, currentLanguage));
    }

    const onLanguageSelect = (event: { target: { value: React.SetStateAction<string>; }; }): void => {
        var language = event.target.value.toString();
        setCurrentLanguage(language);
        setParsedOptions(parseDateString(currentString, language));
    }

    return (
        <div className="App">
            <div style={{ width: '100%' }}>
                <AppBar position="static" sx={{
                    background: 'yellow',
                    color: 'black',
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
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                        textAlign: 'center',
                        minHeight: '100vh',
                        background: 'orange',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex-box',
                            justifyContent: 'center',
                            margin: 'auto',
                            background: 'yellow',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                // margin: '40px',
                                background: 'green',
                                // border: '10px solid black',
                                // borderRadius: '500px',
                                // padding: '20px',

                            }}
                        >
                            <Typography
                                variant='h1'
                                sx={{
                                    marginBottom: '200px'
                                }}
                            >
                                Reverse Date Parser
                            </Typography>
                        </Box>
                        <Typography
                            variant='body1'
                        >
                            Enter a date string into the box below, and see the possible format strings that would parse to it!
                        </Typography>
                        <Typography
                            variant='body1'
                            sx={{
                                marginBottom: '300px'
                            }}
                        >
                            Change the language on the right side.
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                margin: 'auto',
                                background: 'blue',
                            }}
                        >
                            <Box
                                id="data-box"
                                sx={{
                                    display: 'grid',
                                    justifyContent: 'center',
                                    alignContent: 'flex-start',
                                    margin: '10px',
                                    background: 'red',
                                }}
                            >
                                <Box
                                    sx={{
                                    }}
                                >
                                    <TextField
                                        value={currentString}
                                        onChange={onUserInput}
                                        id="outlined-basic"
                                        label={currentLanguage}
                                        variant="filled" />
                                </Box>
                                <ResultsList
                                    options={parsedOptions}
                                />
                            </Box>
                            <Box
                                id="select-box"
                                sx={{
                                    margin: '10px',
                                }}
                            >
                                <FormControl variant="filled" sx={{ minWidth: 120 }}>
                                    <InputLabel id="language-input-label">Language</InputLabel>
                                    <Select
                                        labelId="select"
                                        id="select"
                                        value={currentLanguage}
                                        onChange={onLanguageSelect}
                                    >
                                        <MenuItem value={"C#"}>C#</MenuItem>
                                        <MenuItem value={"Python"}>Python</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </div>
        </div>
    );
}

export default App;
