import { FormControl, InputLabel, MenuItem, Select, styled, TextField } from '@mui/material';
import { Box, margin } from '@mui/system';
import React from 'react';
import ResultsList from './ResultsList';

interface IInputAreaProps {
    currentLanguage: string,
    currentString: string,
    parsedOptions: string[],
    onUserInput: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    onLanguageSelect: (event: { target: { value: React.SetStateAction<string>; }; }) => void,
}
const InputArea: React.FC<IInputAreaProps> = (props: IInputAreaProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                margin: 'auto',
                borderRadius: '25px',
                border: '2px solid',
                borderColor: 'primary.main',
            }}
        >
            <Box
                id="data-box"
                sx={{
                    display: 'grid',
                    justifyContent: 'center',
                    alignContent: 'flex-start',
                    margin: '10px',
                }}
            >
                <Box>
                    <TextField
                        variant="standard"
                        value={props.currentString}
                        onChange={props.onUserInput}
                        id="outlined-basic"
                        label={props.currentLanguage}
                        InputProps={{
                            autoFocus: true,
                        }}
                        sx={{
                            '& .MuiInput-underline:after': { borderBottomColor: 'secondary.main' },
                            '& .MuiInputLabel-standard': { color: 'secondary.main' },
                            '& .Mui-focused': { color: 'secondary.main' },
                            textField: {
                                width: '90%',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                paddingBottom: 0,
                                marginTop: 0,
                                fontWeight: 500,
                            },
                            input: {
                                color: 'secondary.light'
                            },

                        }}
                    />
                </Box>
                <ResultsList
                    options={props.parsedOptions}
                />
            </Box>
            <Box
                id="select-box"
                sx={{
                    margin: '10px',
                }}
            >
                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                    <InputLabel 
                        id="language-input-label"
                        sx={{
                            color: 'secondary.main',
                        }}
                    >Language</InputLabel>
                    <Select
                        labelId="select"
                        id="select"
                        label="test"
                        value={props.currentLanguage}
                        onChange={props.onLanguageSelect}
                        variant="standard"
                        sx={{
                            '& .MuiInput-underline:before': { borderBottomColor: 'secondary.main' },
                            '& .MuiInput-underline:after': { borderBottomColor: 'red' },
                            color: 'secondary.light',
                        }}
                    >
                        <MenuItem value={"C#"}>C#</MenuItem>
                        <MenuItem value={"Python"}>Python</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )

}

export default InputArea;