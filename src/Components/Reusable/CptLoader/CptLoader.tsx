import { Box, Fade } from "@mui/material";
import ICptLoader from "../../../Interfaces/Components/ICptLoader";
import CptEnvelop from "../CptEnvelop/CptEnvelop";

const CptLoader: React.FC<ICptLoader> = ({ fade }): JSX.Element => {
  return (
    <Fade in={fade} timeout={{ exit: 6000 }}>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "white",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10000,
        }}
      >
        <CptEnvelop slide={fade} />
      </Box>
    </Fade>
  );
};

export default CptLoader;
