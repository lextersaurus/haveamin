
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router/Router'
import { ThemeProvider } from '@emotion/react'
import { customTheme } from './themes/custom'
import { CssBaseline } from '@mui/material'

function App() {

  return (
    <>
    <ThemeProvider theme={customTheme}>
        <CssBaseline/>
        <RouterProvider router={router}/>
    </ThemeProvider>
      

    </>
  )
}

export default App
