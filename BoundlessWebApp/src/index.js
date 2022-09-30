import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// Fonts
import "./fonts/Metropolis/Metropolis-Black.otf";
import "./fonts/Metropolis/Metropolis-BlackItalic.otf";
import "./fonts/Metropolis/Metropolis-ExtraBold.otf";
import "./fonts/Metropolis/Metropolis-ExtraBoldItalic.otf";
import "./fonts/Metropolis/Metropolis-Bold.otf";
import "./fonts/Metropolis/Metropolis-BoldItalic.otf";
import "./fonts/Metropolis/Metropolis-SemiBold.otf";
import "./fonts/Metropolis/Metropolis-SemiBoldItalic.otf";
import "./fonts/Metropolis/Metropolis-Medium.otf";
import "./fonts/Metropolis/Metropolis-MediumItalic.otf";
import "./fonts/Metropolis/Metropolis-Regular.otf";
import "./fonts/Metropolis/Metropolis-RegularItalic.otf";
import "./fonts/Metropolis/Metropolis-Light.otf";
import "./fonts/Metropolis/Metropolis-LightItalic.otf";
import "./fonts/Metropolis/Metropolis-Thin.otf";
import "./fonts/Metropolis/Metropolis-ThinItalic.otf";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      lgBig: 1480,
      xl: 1580
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
