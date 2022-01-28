import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles'
import { blue, grey } from '@mui/material/colors';
import ReverseDateParser from '../app/ReverseDateParser';

const RdpTheme = createTheme({
    typography: {
        h1: {
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: '50px',
        }
    },
    palette: {
        primary: {
            main: '#77DD77',
            light: 'ffffff',
            dark: '000000'
            
        },
        secondary: {
            light: '#BF55EC',
            dark: '#37505c',
            main: '#0044ff',
            contrastText: '#ffcc00',
        },
        background: {
            default: 'ffffff'
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});

export default function ThemedApp() {
    return (
        <ThemeProvider theme={RdpTheme}>
            <ReverseDateParser/>
        </ThemeProvider>
    );
}