import { Theme, useMediaQuery } from "@mui/material";

const useBreakpoints = () => {
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
  const xlUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"));

  return { smUp, mdUp, lgUp, xlUp };
};

export default useBreakpoints;
