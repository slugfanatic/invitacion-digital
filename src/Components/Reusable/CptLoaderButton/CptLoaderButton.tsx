import { useState } from "react";
import { Box, Button, Fade } from "@mui/material";
import ICptLoaderButton from "../../../Interfaces/Components/ICptLoaderButton";
import imageSrc from "../../../assets/images/sello.jpg";

const CptLoaderButton: React.FC<ICptLoaderButton> = ({
  onClick,
  fade,
  time,
}): JSX.Element => {
  const [hover, setHover] = useState(false);

  return (
    <Fade in={fade} timeout={{ exit: time }}>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Button
          onClick={onClick}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          sx={{
            "&.MuiButton-root": {
              backgroundImage: `url(${imageSrc})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: hover ? "220px" : "190px",
              height: hover ? "220px" : "190px",
              transition: "width 0.3s ease, height 0.3s ease",
            },
          }}
        />
      </Box>
    </Fade>
  );
};

export default CptLoaderButton;
