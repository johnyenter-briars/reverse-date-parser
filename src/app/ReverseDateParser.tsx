import React, { useEffect } from 'react';
import { parseDateString } from '../parser/Parser';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import InputArea from '../components/InputArea';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const defaultStringOptions = [
    ["12/03/0001", "C#"],
    ["2019-12-24", "Python"],
    ["0003 21 12", "C#"],
];

const ReverseDateParser: React.FC = () => {
    const [currentLanguage, setCurrentLanguage] = React.useState("");
    const [currentString, setCurrentString] = React.useState("");
    const [parsedOptions, setParsedOptions] = React.useState<string[]>([]);

    useEffect(() => {
        let randomOption = defaultStringOptions[Math.floor(Math.random() * defaultStringOptions.length)]
        setCurrentLanguage(randomOption[1]);
        setCurrentString(randomOption[0]);
        setParsedOptions(parseDateString(randomOption[0], randomOption[1]));
    }, []);

    const onUserInput = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        let currentString = event.target.value;
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
                    color="secondary"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        minHeight: '89.4vh',
                        bgcolor: 'secondary.dark',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex-box',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >

                            <Typography
                                variant='h1'
                                sx={{
                                    marginBottom: '1em',
                                    color: 'secondary.light',
                                }}
                            >
                                Reverse Date Parser
                            </Typography>
                        </Box>
                        <Typography
                            variant='body1'
                            sx={{
                                color: 'secondary.main',
                            }}
                        >
                            Enter a date string into the box below, and see the possible format strings that would parse to it!
                        </Typography>
                        <Typography
                            variant='body1'
                            sx={{
                                marginBottom: '2em',
                                color: 'secondary.main',
                            }}
                        >
                            Change the target language using the select dropdown.
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
                <Footer />
            </div>
        </div>
    );
}

export default ReverseDateParser;
