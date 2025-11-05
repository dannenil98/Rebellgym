import React from "react";
import { Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#000",
        color: "#3E6889",
        boxShadow: "0 -2px 8px rgba(62,104,137,0.3)",
        mt: "auto",
      }}
    >
      {/* Övre rad med kontaktinfo */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 1, sm: 4 },
          px: 2,
          py: 1.5,
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <PhoneIcon sx={{ fontSize: "18px" }} />
          <Typography sx={{ fontSize: "13px" }}>070-357 04 84</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <EmailIcon sx={{ fontSize: "18px" }} />
          <Typography sx={{ fontSize: "13px" }}>Rebellgym@hotmail.com</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <LocationOnIcon sx={{ fontSize: "18px" }} />
          <Typography sx={{ fontSize: "13px" }}>
            Hemse 62350, Kodingsgatan 6
          </Typography>
        </Box>
      </Box>

      {/* Nedre rad med copyright */}
      <Box
        sx={{
          textAlign: "center",
          borderTop: "1px solid rgba(62,104,137,0.3)",
          py: 1,
        }}
      >
        <Typography sx={{ fontSize: "12px", opacity: 0.8 }}>
          © {new Date().getFullYear()} RebellGym 
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;