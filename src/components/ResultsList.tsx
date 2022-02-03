import { IconButton, List, ListItem, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CopyToClipboard from './CopytoClipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
// import IconButton from '@mui/material/IconButton';


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
                                sx={{
                                    width: 'auto',
                                }}
                                divider={true}
                            >
                                <ListItemText
                                    primary={option}
                                />
                                <CopyToClipboard>
                                    {({ copy }) => (
                                        // <ContentCopyIcon
                                        //     // variant="contained"
                                        //     // color="primary"
                                        //     onClick={() => copy(option)}
                                        // />
                                        <IconButton
                                            // variant="contained"
                                            // color="primary"
                                            onClick={() => copy(option)}
                                        >
                                            <ContentCopyIcon />
                                        </IconButton>
                                        
                                    )}
                                </CopyToClipboard>
                            </ListItem>
                        );
                    })
                }
            </List>
        </Box>
    )

}

export default ResultsList