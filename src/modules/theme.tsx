import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    text: {
      primary: '#36393B',
    },
    primary: {
      main: '#AFD0D6',
    },
    secondary: {
      main: '#A5D8FF',
      light: '#BFB6BB',
      dark: '#C49799',
    },
    warning: {
      main: '#C49799',
    },
    error: {
      main: '#C91C24',
    },
    success: {
      main: '#AFD0D6',
    },
    info: {
      main: '#A5D8FF',
    },
    divider: '#36393B',
  },
})

export default theme
