import { createTheme } from "@mui/material";

const TypographyBreakPoints = createTheme({
  typography: {
    h1: {
      fontSize: "4.5rem",
      "@media (min-width:600px)": {
        fontSize: "5rem",
      },
      "@media (min-width:960px)": {
        fontSize: "5.5rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "6rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "7rem",
      },
    },
    h2: {
      fontSize: "4rem",
      "@media (min-width:600px)": {
        fontSize: "4.5rem",
      },
      "@media (min-width:960px)": {
        fontSize: "5rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "5.5rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "6rem",
      },
    },
    h3: {
      fontSize: "3.5rem",
      "@media (min-width:600px)": {
        fontSize: "4rem",
      },
      "@media (min-width:960px)": {
        fontSize: "4.5rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "5rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "5.5rem",
      },
    },
    h4: {
      fontSize: "2.25rem",
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:960px)": {
        fontSize: "2.75rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "3rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "3.25rem",
      },
    },
    h5: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "2.25rem",
      },
      "@media (min-width:960px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "2.75rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "3rem",
      },
    },
    h6: {
      fontSize: "1.375rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.625rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "1.75rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "1.875rem",
      },
    },
    subtitle1: {
      fontSize: "1.125rem",
      "@media (min-width:600px)": {
        fontSize: "1.25rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.375rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "1.625rem",
      },
    },
    subtitle2: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.125rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.25rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "1.375rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "1.5rem",
      },
    },
    body1: {
      fontSize: "1.25rem",
      "@media (min-width:600px)": {
        fontSize: "1.375rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "1.625rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "1.75rem",
      },
    },
    body2: {
      fontSize: "1.125rem",
      "@media (min-width:600px)": {
        fontSize: "1.25rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.375rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:1920px)": {
        fontSize: "1.625rem",
      },
    },
  },
});

export default TypographyBreakPoints;
