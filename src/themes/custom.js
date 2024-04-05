import { createTheme } from "@mui/material/styles"

export const customTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#50B2C0',
        },
        secondary: {
          main: '#F6511D',
          contrastText: '#FFF',
        },
        text: {
          primary: '#396465',
        },
        background: {
          default: '#fff9f1',
        },
      },
})