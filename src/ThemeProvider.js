import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
      dark: "#1b5e20",
      light: "#e8f5e9",
    },
    secondary: {
      main: "#ffca28",
      dark: "#ff8f00",
      light: "#fff8e1",
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
