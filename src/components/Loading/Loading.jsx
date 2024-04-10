import { Box, CircularProgress } from '@mui/material'

const Loading = () => {
  return (
    <Box sx={{ width: '100vw', height: '100vh', bgcolor: 'background.darker', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CircularProgress color='primary' />
    </Box>
  )
}

export default Loading