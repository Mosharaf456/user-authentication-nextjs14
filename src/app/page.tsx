// import Image from "next/image";

import BackgroundTest from "@/components/background";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Typography variant="h3" sx={{ml: 10, textAlign: "center"}}> NEXT JS (Material UI)MUI App v5 Installation and Theme customize </Typography>
      <BackgroundTest />
    </>
  );
}
