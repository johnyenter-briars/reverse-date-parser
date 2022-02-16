import { IconButton, List, ListItem, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CopyToClipboard from './CopytoClipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


interface IResultsListProps {
    options: string[],
}

const ResultsList: React.FC<IResultsListProps> = (props: IResultsListProps) => {

    return (
        <Box
            sx={{
            }}
        >
            <List dense={true}>
                {
                    props.options.map((option: string) => {
                        return (
                            <ListItem
                                key={option}
                                sx={{
                                    borderBlockColor: '#74A4BC',
                                    display: 'flow-root list-item'

                                }}
                                divider={true}
                            >
                                <Box
                                    sx={{
                                        bgcolor: '#6E75A8',
                                        display: 'flex',
                                        borderRadius: '5px',
                                        border: '2px solid #90C3C8',
                                    }}
                                >
                                    <ListItemText
                                        primary={option}
                                        sx={{
                                            textAlign: 'center',
                                            margin: 'auto'
                                        }}
                                    />
                                    <CopyToClipboard>
                                        {({ copy }) => (
                                            <IconButton
                                                onClick={() => copy(option)}
                                            >
                                                <ContentCopyIcon />
                                            </IconButton>
                                        )}
                                    </CopyToClipboard>
                                </Box>
                            </ListItem>
                        );
                    })
                }
            </List>
        </Box>
    )
}

export default ResultsList