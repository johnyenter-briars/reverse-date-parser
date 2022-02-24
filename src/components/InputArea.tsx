import { FormControl, InputLabel, MenuItem, Select, styled, TextField } from '@mui/material';
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

    // '& .MuiInput-u`nderline:before': { borderBottomColor: 'orange' },
    // '& .MuiInput-underline:after': { borderBottomColor: 'red' },
    const StyledInput = styled(TextField)`
        & .MuiFilledInput-underline:before {
            borderBottomColor: 'red';
        }
        & .MuiFilledInput-underline:after {
            borderBottomColor: 'green';
        }
    `;

    StyledInput.defaultProps = {
        label: props.currentLanguage,
        value: props.currentString,
        onChange: props.onUserInput,
        id: "filled-basic",
        variant: "filled",
        InputProps: {
            autoFocus: true,
        },
        sx: {
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

        }
    }


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
                <Box
                    sx={{
                    }}
                >
                    <StyledInput />
                    {/* <TextField
                        value={props.currentString}
                        onChange={props.onUserInput}
                        id="outlined-basic"
                        label={props.currentLanguage}
                        variant="outlined"
                        InputProps={{
                            autoFocus: true,
                        }}
                        // color='secondary'
                        sx={{
                            '& .MuiInput-underline:before': { borderBottomColor: 'orange' },
                            '& .MuiInput-underline:after': { borderBottomColor: 'red' },
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
                    /> */}
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
                        sx={{
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