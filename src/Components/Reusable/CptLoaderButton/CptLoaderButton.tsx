import { useState } from "react";
import { Box, Button, Fade } from "@mui/material";
import ICptLoaderButton from "../../../Interfaces/Components/ICptLoaderButton";
import red from "../../../assets/images/wax_red.png";
import redW from "../../../assets/images/wax_red_w.png";
import gold from "../../../assets/images/wax_gold.png";
import { useCelebrationContext } from "../../../Context/CelebrationContext";
import useBreakpoints from "../../../Hooks/useBreakpoints";

const CptLoaderButton: React.FC<ICptLoaderButton> = ({
  onClick,
  fade,
  time,
}): JSX.Element => {
  const {
    currentCelebrant: { wax },
  } = useCelebrationContext();
  const { mdUp } = useBreakpoints();
  const [hover, setHover] = useState(false);

  const size = mdUp ? 220 : 165;

  const waxValues = {
    red: red,
    redW: redW,
    gold: gold,
  };

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
              backgroundImage: `url(${wax && waxValues[wax]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: hover ? `${size * 1.2}px` : `${size}px`,
              height: hover ? `${size * 1.2}px` : `${size}px`,
              backgroundColor: "unset",
              boxShadow: "none",
              transition: "width 0.3s ease, height 0.3s ease",
              "&:hover": {
                backgroundColor: "unset",
                boxShadow: "none",
              },
            },
          }}
        />
      </Box>
    </Fade>
  );
};

export default CptLoaderButton;
