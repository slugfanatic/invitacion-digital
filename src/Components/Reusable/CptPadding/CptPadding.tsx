import { Box } from "@mui/material";
import ICptPadding from "../../../Interfaces/Components/ICptPadding";

function CptPadding<T>({
  children,
  pSize = "small",
  innerRef,
}: React.PropsWithChildren<ICptPadding<T>>) {
  const paddingValues = {
    small: "2%",
    medium: "4%",
    big: "8%",
  };

  return (
    <Box
      ref={innerRef}
      sx={{
        padding: paddingValues[pSize],
      }}
    >
      {children}
    </Box>
  );
}

export default CptPadding;
