import { createTheme, responsiveFontSizes } from "@mui/material"
import { green, purple } from '@mui/material/colors';

let theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    },
    typography: {
        fontFamily: "sans-serif",
    }
});

theme = responsiveFontSizes(theme)

export default theme