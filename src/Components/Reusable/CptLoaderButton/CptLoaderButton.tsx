import { Box, Button, Fade } from "@mui/material";
import ICptLoaderButton from "../../../Interfaces/Components/ICptLoaderButton";

const CptLoaderButton: React.FC<ICptLoaderButton> = ({
  onClick,
  fade,
  time,
}): JSX.Element => {
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
        <Button onClick={onClick}>Click</Button>
      </Box>
    </Fade>
  );
};

export default CptLoaderButton;
