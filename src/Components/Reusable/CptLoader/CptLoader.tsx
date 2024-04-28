import { useState } from "react";
import { Box, Button, Fade } from "@mui/material";

const TopEnvelop: React.FC = (): JSX.Element => {
  const screenWidth = window.innerWidth;
  const svgHeight = window.innerHeight * 0.6;

  const points =
    `0,0` +
    ` ` +
    `0,${svgHeight * 0.4}` +
    ` ` +
    `${screenWidth * 0.5},${svgHeight}` +
    ` ` +
    `${screenWidth},${svgHeight * 0.4}` +
    ` ` +
    `${screenWidth},${0}`;

  return (
    <svg
      width={screenWidth}
      height={svgHeight}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <defs>
        <linearGradient id="grad" x1="100%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#fff", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#ddd", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <polygon points={points} fill="url(#grad)" fillOpacity="0.6" />
    </svg>
  );
};

const BottomEnvelop: React.FC = (): JSX.Element => {
  const screenWidth = window.innerWidth;
  const svgHeight = window.innerHeight * 0.65;

  const points =
    `0,${svgHeight}` +
    ` ` +
    `${screenWidth * 0.5},0` +
    ` ` +
    `${screenWidth},${svgHeight}`;

  return (
    <svg
      width={screenWidth}
      height={svgHeight}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
      }}
    >
      <defs>
        <linearGradient id="grad" x1="100%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#ddd", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#fff", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <polygon points={points} fill="url(#grad)" fillOpacity="0.8" />
    </svg>
  );
};

const CptLoader: React.FC = (): JSX.Element => {
  const [fade, setFade] = useState(true);

  return (
    <Fade in={fade} timeout={{ exit: 1500 }}>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10000,
        }}
      >
        <BottomEnvelop />
        <TopEnvelop />
        <Button onClick={() => setFade((prev) => !prev)}>Click</Button>
      </Box>
    </Fade>
  );
};

export default CptLoader;
