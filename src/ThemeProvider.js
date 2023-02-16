import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      light: "#EAECF8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      dark: "#ba000d",
      main: "#ED6E52",
      light: "#FFF3ED",
      table: "#F5E8E1",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F5F5F5",
          WebkitUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none",
        },
        h4: {
          fontSize: "2rem!important",
          fontWeight: "600!important",
        },
        h2: {
          fontSize: "2.25rem!important",
          fontWeight: "600!important",
        },
        h3: {
          fontSize: "2.125rem!important",
          fontWeight: "600!important",
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
      },
    },
  },
});

export default function GlobalCssOverride(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}
