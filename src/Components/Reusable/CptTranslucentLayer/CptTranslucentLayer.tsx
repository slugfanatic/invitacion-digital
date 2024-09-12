import { Box, Theme } from "@mui/material";
import ICptTranslucentLayer from "../../../Interfaces/Components/ICptTranslucentLayer";

const CptTranslucentLayer: React.FC<ICptTranslucentLayer> = ({
  children,
  color,
  glass,
  className,
  opacity = 0.4,
}) => {
  const calculateBackgroundColor = (color: string, opacity: number) => {
    const opacityHex = Math.floor(opacity * 255).toString(16);
    return color + opacityHex;
  };

  const backgroundValues = {
    primary: {
      backgroundColor: (theme: Theme) =>
        calculateBackgroundColor(theme.palette.primary.main, opacity),
    },
    secondary: {
      backgroundColor: (theme: Theme) =>
        calculateBackgroundColor(theme.palette.secondary.main, opacity),
    },
  };

  const blurValues = {
    lower: {
      backdropFilter: "blur(2.5px)",
    },
    medium: {
      backdropFilter: "blur(5px)",
    },
    high: {
      backdropFilter: "blur(10px)",
    },
  };

  return (
    <Box
      className={className}
      sx={{
        ...(color && backgroundValues[color]),
        ...(glass && blurValues[glass]),
      }}
    >
      {children}
    </Box>
  );
};

export default CptTranslucentLayer;
