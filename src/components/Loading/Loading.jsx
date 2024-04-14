import { Box, CircularProgress } from '@mui/material'

const Loading = () => {
  return (
    <Box sx={{ width: '100%', height: '90vh', bgcolor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CircularProgress color='primary' />
    </Box>
  )
}

export default Loading