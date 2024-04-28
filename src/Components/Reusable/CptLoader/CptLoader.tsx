import { Box, Fade, Slide } from "@mui/material";
import { useState } from "react";
import CptEnvelop from "../CptEnvelop/CptEnvelop";
import CptLoaderButton from "../CptLoaderButton/CptLoaderButton";
import { LblCelebrants, LblCelebrationName } from "../../Labels";

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
          zIndex: 10000,
        }}
      >
        <CptEnvelop slide={animate} />

        <Slide in={animate} direction="up" timeout={{ exit: 2500 }}>
          <Box
            sx={{
              height: "50vh",
              position: "fixed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <LblCelebrationName />
          </Box>
        </Slide>

        <Slide in={animate} direction="down" timeout={{ exit: 2500 }}>
          <Box
            sx={{
              height: "50vh",
              position: "fixed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              top: 0,
              left: 0,
              right: 0,
            }}
          >
            <LblCelebrants />
          </Box>
        </Slide>

        <CptLoaderButton onClick={handleClick} fade={animate} />
      </Box>
    </Fade>
  );
};

export default CptLoader;
