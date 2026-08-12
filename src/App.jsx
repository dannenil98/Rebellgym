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
        html {
          scroll-behavior: smooth;
        }

        body {
          position: relative;
        }

        body::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 9999;
          pointer-events: none;
          opacity: 0.035;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

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

        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -30px) scale(1.08); }
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `,
    },
  },
  typography: {
    fontFamily: "'Cascadia Mono', 'Special Gothic Expanded One', monospace",
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