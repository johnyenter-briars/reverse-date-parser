import React from 'react';
import logo from './logo.svg';
import './App.css';
import { parseDateString } from './parser/Parser';
import { Avatar, FormControl, IconButton, InputLabel, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';

const App: React.FC = () => {
  const [parsedOptions, setParsedOptions] = React.useState(parseDateString("2021-12-01", "C#"));
  const [currentLanguage, setCurrentLangugae] = React.useState("C#");

  const onUserInput = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setParsedOptions(parseDateString(event.target.value, "C#"));
  }

  const onLanguageSelect = (event: { target: { value: React.SetStateAction<string>; }; }): void => {
    setCurrentLangugae(event.target.value);
  }

  return (
    <div className="App">
      <div style={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            textAlign: 'center',
            minHeight: '100vh',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: 'auto',
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
                <TextField onChange={onUserInput} id="outlined-basic" label={currentLanguage} variant="filled" />
              </Box>
              <Box
                sx={{
                }}
              >
                <List dense={true}>
                  {
                    parsedOptions.map((option: string) => {
                      return (<ListItem
                        secondaryAction={
                          <IconButton edge="end" aria-label="delete">
                          </IconButton>
                        }
                      >
                        <ListItemAvatar>
                          <Avatar>
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={option}
                          secondary={true ? 'Secondary text' : null}
                        />
                      </ListItem>);
                    })
                  }
                </List>
              </Box>
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
      </div>
    </div>
  );
}

export default App;
