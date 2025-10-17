import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Collapse,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { text: "Produkter", path: "/produkter" },
    { text: "Om oss", path: "/om-oss" },
    { text: "Priser", path: "/priser" },
    { text: "Öppettider", path: "/oppettider" }
  ];

  // --- FIX: stäng mobilmeny automatiskt när fönstret blir större än md ---
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (isDesktop && menuOpen) {
      setMenuOpen(false);
    }
  }, [isDesktop, menuOpen]);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#000",
        color: "#3E6889",
        boxShadow: "0 0px 6px rgba(62, 104, 137)",
        position: "relative",
        zIndex: 1200,
      }}
    >
      {/* NAVBAR */}
      <Box
        sx={{
          px: "20px",
          py: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logga */}
        <Typography
          component={Link}
          to="/"
          sx={{
            fontSize: "28px",
            letterSpacing: "2px",
            cursor: "pointer",
            color: "#3E6889",
            textDecoration: "none",
            "&:hover": {
              color: "#4fc3f7",
              textDecoration: "underline",
            },
          }}
        >
          REBELLGYM
        </Typography>

        {/* Länkar (desktop) */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {navLinks.map((item) => (
            <Button
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                color: "#3E6889",
                fontSize: "16px",
                textTransform: "none",
                "&:hover": {
                  color: "#4fc3f7",
                  textDecoration: "underline",
                },
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>

        {/* Höger - ikoner + meny */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {/* Sociala ikoner (visas från sm och uppåt) */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
            <IconButton
              component="a"
              href="https://www.facebook.com/profile.php?id=61577732596255"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#3E6889", "&:hover": { color: "#4fc3f7" } }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/rebell_gym/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#3E6889", "&:hover": { color: "#4fc3f7" } }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>

          {/* Menyikon (endast på små skärmar) */}
          <IconButton
            onClick={() => setMenuOpen(!menuOpen)}
            sx={{ display: { xs: "flex", md: "none" }, color: "#3E6889" }}
          >
            {menuOpen ? (
              <CloseIcon sx={{ fontSize: 30 }} />
            ) : (
              <MenuIcon sx={{ fontSize: 30 }} />
            )}
          </IconButton>
        </Box>
      </Box>

      {/* MOBILMENY */}
      <Collapse in={menuOpen} timeout="auto" unmountOnExit>
        <Box
          sx={{
            backgroundColor: "#000",
            borderTop: "1px solid rgba(62,104,137,0.4)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pb: 2,
            pt: 1,
            boxShadow: "inset 0 4px 10px rgba(62,104,137,0.3)",
          }}
        >
          {navLinks.map((item) => (
            <Button
              key={item.text}
              component={Link}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              sx={{
                color: "#3E6889",
                fontSize: "18px",
                textTransform: "none",
                my: 0.5,
                "&:hover": {
                  color: "#4fc3f7",
                  textDecoration: "underline",
                },
              }}
            >
              {item.text}
            </Button>
          ))}

          {/* Sociala ikoner – visas bara på xs-skärmar */}
          <Box sx={{ display: { xs: "flex", sm: "none" }, gap: 2, mt: 1 }}>
            <IconButton
              component="a"
              href="https://www.facebook.com/profile.php?id=61577732596255"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#3E6889", "&:hover": { color: "#4fc3f7" } }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/rebell_gym/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#3E6889", "&:hover": { color: "#4fc3f7" } }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
