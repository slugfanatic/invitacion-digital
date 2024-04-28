import { useState } from "react";
import { Box, Fade } from "@mui/material";
import CptEnvelop from "../CptEnvelop/CptEnvelop";
import CptEnvelopMessage from "../CptEnvelopMessage/CptEnvelopMessage";
import CptLoaderButton from "../CptLoaderButton/CptLoaderButton";

const CptLoader: React.FC = (): JSX.Element => {
  const [animate, setAnimate] = useState(true);

  const handleClick = () => {
    setAnimate((prev) => !prev);
  };

  return (
    <Fade in={animate} timeout={{ exit: 3000 }}>
      <Box
        sx={{
          height: "100vh",
          background:
            "radial-gradient(circle, rgba(192,192,192,1) 5%, rgba(255,255,255,1) 80%)",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
        }}
      >
        <CptEnvelop slide={animate} time={2500} />
        <CptEnvelopMessage slide={animate} time={2500} />
        <CptLoaderButton onClick={handleClick} fade={animate} time={50} />
      </Box>
    </Fade>
  );
};

export default CptLoader;
