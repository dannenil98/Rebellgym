import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";
import Produkter from "./Components/Produkter";
import OmOss from "./Components/OmOss";
import Priser from "./Components/Priser";
import Oppettider from "./Components/Oppettider";

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
        {/* Wrapper med Navbar och Footer */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Navbar />

          {/* Här renderas aktuell route */}
          <Box sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/produkter" element={<Produkter />} />
              <Route path="/om-oss" element={<OmOss />} />
              <Route path="/priser" element={<Priser />} />
              <Route path="/oppettider" element={<Oppettider />} />
            </Routes>
          </Box>

          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;