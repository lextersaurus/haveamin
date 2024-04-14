import { createTheme } from "@mui/material/styles"

export const customTheme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
    ]
  },
  palette: {
      mode: 'light',
      primary: {
        main: '#50B2C0',
        contrastText: '#fff9f1'
      },
      secondary: {
        main: '#F6511D',
        contrastText: '#FFF',
      },
      text: {
        primary: '#396465',
        secondary: '#67A0A2'
      },
      background: {
        default: '#fff9f1',
        paper: '#fff',
        darker: '#DEDAD9'
      },
      success: {
        main: '#00c853'
      }
    },
})