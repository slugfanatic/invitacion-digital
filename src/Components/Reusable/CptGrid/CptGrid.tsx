import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import IChildrenProp from "../../../Interfaces/Base/IChildrenProp";

export const CptGridContainer: React.FC<IChildrenProp> = ({ children }) => (
  <Grid2 container columns={{ xs: 4, sm: 8, md: 12 }}>
    {children}
  </Grid2>
);

export const CptGridLeft: React.FC<IChildrenProp> = ({ children }) => (
  <>
    <Grid2 xs={4} sm={4} md={6}>
      {children}
    </Grid2>
    <Grid2 xs sm md />
  </>
);

export const CptGridMiddle: React.FC<IChildrenProp> = ({ children }) => (
  <Grid2 xs={4} sm={8} md={12}>
    {children}
  </Grid2>
);

export const CptGridRight: React.FC<IChildrenProp> = ({ children }) => (
  <>
    <Grid2 xs sm md />
    <Grid2 xs={4} sm={4} md={6}>
      {children}
    </Grid2>
  </>
);
