import React, { useEffect } from 'react';
import './App.css';
import { parseDateString } from './parser/Parser';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import InputArea from './components/InputArea';
import NavBar from './components/NavBar';

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

        setCurrentLanguage(randomOption[1]);
        setCurrentString(randomOption[0]);
        setParsedOptions(parseDateString(currentString, currentLanguage));
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
                <NavBar />
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
                        <InputArea
                            currentLanguage={currentLanguage}
                            currentString={currentString}
                            parsedOptions={parsedOptions}
                            onUserInput={onUserInput}
                            onLanguageSelect={onLanguageSelect}
                        />
                    </Box>
                </Box>
            </div>
        </div>
    );
}

export default App;
