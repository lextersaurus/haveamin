import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Header from '../components/Header/Header'
import Footer from './../components/Footer/Footer'

const MainLayout = () => {
  return (
    <>
      <Box component='div' sx={{ backgroundColor: 'primary.main', display: 'flex', flexDirection: 'row', height: '100vh' }}>
        <Header />
        <Box component='main' sx={{ backgroundColor: 'background.default', width: '100%', borderRadius: '36px 0 0 36px', overflowY: 'auto' }}>
          <Box sx={{ height: '100%', width: '100%', padding: '24px' }}>
            <Outlet />
            <Footer />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default MainLayout