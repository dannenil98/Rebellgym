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
        backgroundColor: "#000",
        color: "#3E6889",
        boxShadow: "0 0px 6px rgba(62, 104, 137)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1200,
      }}
    >
      <Box
        sx={{
          px: "20px",
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
            fontSize: "28px",
            letterSpacing: "2px",
            cursor: "pointer",
            color: "#3E6889",
            textDecoration: "none",
            "&:hover": { color: "#4fc3f7" },
          }}
        >
          REBELL GYM
        </Box>

        {/* Desktop-länkar */}
     <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center" }}>
  {navLinks.map((item, index) => {
    const isActive = location.pathname === item.path;
    return (
      <React.Fragment key={item.text}>
        <Button
          component={Link}
          to={item.path}
          sx={{
            color: isActive ? "#4fc3f7" : "#3E6889",
            fontSize: "16px",
            textTransform: "none",
            px: 1.5, // padding inom knappen
            mx: { lg: 1.5 }, // större mellanrum på stora skärmar
            borderBottom: isActive
              ? "3px solid #4fc3f7"
              : "3px solid transparent",
            transition: "color 0.3s, border-bottom 0.3s",
            "&:hover": {
              color: "#4fc3f7",
              borderBottom: "3px solid #4fc3f7",
            },
          }}
        >
          {item.text}
        </Button>

        {/* Divider mellan länkarna, utom sista */}
        {index < navLinks.length - 1 && (
          <Box
            sx={{
              width: "1px",
              height: "20px",
              backgroundColor: "rgba(62,104,137,0.4)",
              mx: { lg: 2 }, // avstånd mellan divider och knappar
            }}
          />
        )}
      </React.Fragment>
    );
  })}
</Box>

        {/* Social ikoner och hamburger */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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

          <IconButton
            onClick={() => setMenuOpen(!menuOpen)}
            sx={{ display: { xs: "flex", lg: "none" }, color: "#3E6889" }}
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