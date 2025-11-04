import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Homepage from "./Components/Homepage";
import OmOss from "./Components/OmOss";
import Priser from "./Components/Priser";
import Oppettider from "./Components/Oppettider";
import Layout from "./Components/Layout";
import Bilder from "./Components/Bilder";
import Bokningar from "./Components/Bokningar";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @keyframes slideDown {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeUp {
          0% {
            transform: translateY(40px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `,
    },
  },
  typography: {
    fontFamily: "Special Gothic Expanded One, sans-serif",
  },
  palette: {
    background: {
      default: "#000", // Svart bakgrund
    },
    text: {
      primary: "#3E6889", // Textfärg
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* Layout omsluter allt */}
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/om-oss" element={<OmOss />} />
            <Route path="/bilder" element={<Bilder/>} />
            <Route path="/bokningar" element={<Bokningar />} />
            <Route path="/priser" element={<Priser />} />
            <Route path="/oppettider" element={<Oppettider />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;