// import Image from "next/image";

import BackgroundTest from "@/components/background";
import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Box sx={{ p: 3, bgcolor: 'background.default', color: 'text.primary' }}>
        <Typography variant="h3" sx={{ml: 10, textAlign: "center"}}> NEXT JS (Material UI)MUI App v5 Installation and Theme customize </Typography>
      </Box>
      <BackgroundTest />
    </>
  );
}
