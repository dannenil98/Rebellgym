import React, { useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { text: "Öppettider", path: "/oppettider" },
    { text: "Priser", path: "/priser" },
    { text: "Bilder", path: "/bilder" },
    { text: "Boka pass", path: "/bokningar" },
    { text: "Om oss", path: "/om-oss" },
  ];

  const navbarHeight = 60;

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(10px)",
        color: "#3E6889",
        borderBottom: "1px solid rgba(79,195,247,0.15)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1200,
      }}
    >
      <Box
        sx={{
          px: { xs: "20px", md: "24px", lg: "32px" },
          py: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: `${navbarHeight}px`,
        }}
      >
        <Box
          component={Link}
          to="/"
          sx={{
            fontSize: { xs: "22px", md: "20px", lg: "26px" },
            fontWeight: 700,
            letterSpacing: "2px",
            cursor: "pointer",
            textDecoration: "none",
            flexShrink: 0,
            background: "linear-gradient(120deg, #7ab3d0 20%, #4fc3f7 60%, #8fe3ff 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            transition: "background-position 0.5s ease, filter 0.3s ease",
            "&:hover": { backgroundPosition: "100% center", filter: "brightness(1.2)" },
          }}
        >
          REBELL GYM
        </Box>

        {/* Desktop-länkar */}
     <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: { md: 0.5, lg: 1 } }}>
  {navLinks.map((item) => {
    const isActive = location.pathname === item.path;
    return (
      <Button
        key={item.text}
        component={Link}
        to={item.path}
        sx={{
          color: isActive ? "#0a1520" : "#7ab3d0",
          fontSize: { md: "12.5px", lg: "14.5px" },
          fontWeight: isActive ? 700 : 500,
          textTransform: "none",
          whiteSpace: "nowrap",
          px: { md: 1.4, lg: 2 },
          py: 0.8,
          borderRadius: "999px",
          backgroundColor: isActive ? "#4fc3f7" : "transparent",
          boxShadow: isActive ? "0 0 18px rgba(79,195,247,0.45)" : "none",
          transition: "all 0.25s ease",
          "&:hover": {
            color: isActive ? "#0a1520" : "#4fc3f7",
            backgroundColor: isActive ? "#4fc3f7" : "rgba(79,195,247,0.1)",
          },
        }}
      >
        {item.text}
      </Button>
    );
  })}
</Box>

        {/* Social ikoner och hamburger */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexShrink: 0 }}>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 1,
              pl: { sm: 1.5 },
              ml: { sm: 0.5 },
              borderLeft: { sm: "1px solid rgba(62,104,137,0.3)" },
            }}
          >
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

          <IconButton
            onClick={() => setMenuOpen(!menuOpen)}
            sx={{ display: { xs: "flex", md: "none" }, color: "#3E6889" }}
          >
            {menuOpen ? <CloseIcon sx={{ fontSize: 30 }} /> : <MenuIcon sx={{ fontSize: 30 }} />}
          </IconButton>
        </Box>
      </Box>

      {/* Animated mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dim overlay */}
            <motion.div
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                top: `${navbarHeight}px`,
                left: 0,
                width: "100%",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: 1100,
              }}
            />

            {/* Slide-down menu */}
            <motion.div
  initial={{ y: "-100%", opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: "-100%", opacity: 0 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  style={{
    position: "fixed",
    top: navbarHeight,
    left: 0,
    width: "100%",
    background: "rgba(0,0,0,0.95)",
    backdropFilter: "blur(4px)",
    zIndex: 1100,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "8px 24px",
  }}
>
  {navLinks.map((item, index) => {
    const isActive = location.pathname === item.path;
    return (
      <React.Fragment key={item.text}>
        <Button
          component={Link}
          to={item.path}
          onClick={() => setMenuOpen(false)}
          sx={{
            color: isActive ? "#4fc3f7" : "#3E6889",
            fontSize: "18px",
            textTransform: "none",
            width: "100%",
            justifyContent: "space-between",
            py: 1,
            borderBottom: isActive ? "3px solid #4fc3f7" : "none",
            "&:hover": {
              color: "#4fc3f7",
              borderBottom: "3px solid #4fc3f7",
            },
          }}
        >
          {item.text}
          <span style={{ marginLeft: "auto", paddingRight: "10px" }}>➤</span>
        </Button>

        {/* Divider mellan länkarna */}
        {index < navLinks.length - 1 && (
          <Box
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(62,104,137,0.4)",
              my: 0.5,
            }}
          />
        )}
      </React.Fragment>
    );
  })}

  {/* Social ikoner längst ner */}
  <Box
    sx={{
      width: "100%",
      height: "1px",
      backgroundColor: "rgba(62,104,137,0.4)",
      my: 2,
    }}
  />
  <Box
    sx={{
      display: "flex",
      gap: 2,
      justifyContent: "center",
      width: "100%",
      mb: 1,
    }}
  >
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
</motion.div>
          </>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Navbar;