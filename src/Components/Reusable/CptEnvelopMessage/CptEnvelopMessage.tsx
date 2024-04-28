import { Box, Slide } from "@mui/material";
import { LblCelebrants, LblCelebrationName } from "../../Labels";
import ICptEnvelop from "../../../Interfaces/Components/ICptEnvelop";

const CptEnvelopMessage: React.FC<ICptEnvelop> = ({
  slide,
  time,
}): JSX.Element => {
  return (
    <>
      <Slide in={slide} direction="up" timeout={{ exit: time }}>
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
      <Slide in={slide} direction="down" timeout={{ exit: time }}>
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
    </>
  );
};

export default CptEnvelopMessage;
