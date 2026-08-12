import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#000",
        color: "#3E6889",
        borderTop: "1px solid rgba(79,195,247,0.15)",
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
          gap: { xs: 1.5, sm: 5 },
          px: 2,
          py: { xs: 2.5, sm: 2 },
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        {[
          { icon: <PhoneIcon sx={{ fontSize: "18px" }} />, text: "070-357 04 84" },
          { icon: <EmailIcon sx={{ fontSize: "18px" }} />, text: "Rebellgym@hotmail.com" },
          { icon: <LocationOnIcon sx={{ fontSize: "18px" }} />, text: "Hemse 62350, Kodingsgatan 6" },
        ].map((item, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#3E6889",
              transition: "color 0.25s ease",
              "&:hover": { color: "#4fc3f7" },
            }}
          >
            {item.icon}
            <Typography sx={{ fontSize: "13px", letterSpacing: "0.3px" }}>{item.text}</Typography>
          </Box>
        ))}

        <Box sx={{ display: "flex", gap: 0.5 }}>
          <IconButton
            component="a"
            href="https://www.facebook.com/profile.php?id=61577732596255"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ color: "#3E6889", "&:hover": { color: "#4fc3f7" } }}
          >
            <FacebookIcon sx={{ fontSize: "18px" }} />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com/rebell_gym/"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ color: "#3E6889", "&:hover": { color: "#4fc3f7" } }}
          >
            <InstagramIcon sx={{ fontSize: "18px" }} />
          </IconButton>
        </Box>
      </Box>

      {/* Nedre rad med copyright */}
      <Box
        sx={{
          textAlign: "center",
          borderTop: "1px solid rgba(62,104,137,0.2)",
          py: 1.2,
        }}
      >
        <Typography sx={{ fontSize: "12px", opacity: 0.6, letterSpacing: "0.5px" }}>
          © {new Date().getFullYear()} Rebell Gym
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;