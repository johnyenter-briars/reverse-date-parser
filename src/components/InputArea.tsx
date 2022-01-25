import { FormControl, IconButton, InputLabel, List, ListItem, ListItemText, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
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
                // background: 'blue',
            }}
        >
            <Box
                id="data-box"
                sx={{
                    display: 'grid',
                    justifyContent: 'center',
                    alignContent: 'flex-start',
                    margin: '10px',
                    // background: 'red',
                }}
            >
                <Box
                    sx={{
                    }}
                >
                    <TextField
                        color="secondary"
                        value={props.currentString}
                        onChange={props.onUserInput}
                        id="outlined-basic"
                        label={props.currentLanguage}
                        variant="filled" />
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
                <FormControl variant="filled" sx={{ minWidth: 120 }}>
                    <InputLabel id="language-input-label">Language</InputLabel>
                    <Select
                        labelId="select"
                        id="select"
                        value={props.currentLanguage}
                        onChange={props.onLanguageSelect}
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