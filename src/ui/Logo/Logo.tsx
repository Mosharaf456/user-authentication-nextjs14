import React from 'react';
import { Box } from '@mui/material';

// Logo component to display the AGCG LOGO
const Logo = () => {
    return (
        <Box
            component='img'
            src='/login-icon/AGCG-Logo1.png'
            alt='AGCG LOGO'
            sx={{
                width: '80%', 
                maxWidth: '200px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
        />
    );
};

export default Logo;