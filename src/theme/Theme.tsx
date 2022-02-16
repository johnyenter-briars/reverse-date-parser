import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles'
import ReverseDateParser from '../app/ReverseDateParser';
import './App.css';

const RdpTheme = createTheme({
    typography: {
        h1: {
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: '50px',
        }
    },
    palette: {
        primary: {
            main: '#77DD77', //light green
            light: '#FF0000', //open
            dark: '#FF0000' //open
        },
        secondary: {
            light: '#BF55EC', //pink
            dark: '#37505c', //light grey
            main: '#FF0000', //open
        },
        background: {
            default: '#FF0000' //open
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});

export default function ThemedApp() {
    return (
        <ThemeProvider theme={RdpTheme}>
            <ReverseDateParser />
        </ThemeProvider>
    );
}