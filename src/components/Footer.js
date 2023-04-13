import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Logo from '../assets/images/Logo-1.png'

function Footer() {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt='logo' width='200px' height='40px'/>
        <Typography variant='h7' pb='40px' >
          Made with ❤️ by Anand Raj
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
