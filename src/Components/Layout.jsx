import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `
          radial-gradient( #0a0a0a 30%, #000 100%)
        `,
      }}
    >
      <Navbar />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          overflow: "hidden",
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;