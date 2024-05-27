"use client";

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useColorMode } from '@/components/theme-registry/ThemeRegistry';

export default function BackgroundTest() {
  const { toggleColorMode } = useColorMode();

  return (
    <Box sx={{ p: 3, bgcolor: 'background.default', color: 'text.primary' }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
            Welcome to My Next.js App
        </Typography>
        <Button variant="contained" onClick={toggleColorMode}>
            Toggle Light/Dark Mode
        </Button>
  </Box>
  );
}



