import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect, useRef } from "react";

const BokningCalendly = () => {
  // Korrekt Calendly-länkar
  const ptUrl = "https://calendly.com/rebellgym/30min"; // PT-pass 1h
  const introUrl = "https://calendly.com/rebellgym/gymintro"; // Gymintro 30 min

  const [selectedUrl, setSelectedUrl] = useState(ptUrl); // default PT-pass
  const calendlyRef = useRef(null);

  useEffect(() => {
    // Rensa tidigare widget
    if (calendlyRef.current) {
      calendlyRef.current.innerHTML = "";

      // Skapa inline widget div
      const div = document.createElement("div");
      div.className = "calendly-inline-widget";
      div.setAttribute("data-url", selectedUrl);
      div.style.minWidth = "320px";
      div.style.height = "700px";
      calendlyRef.current.appendChild(div);

      // Lägg till script för Calendly
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      calendlyRef.current.appendChild(script);
    }
  }, [selectedUrl]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: "100px",
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 3,
          color: "#3E6889",
          fontFamily: "'Special Gothic Expanded One', sans-serif",
          WebkitTextStroke: "1px #3E6889",
          fontSize: { xs: "30px", sm: "40px", md: "50px" },
          textAlign: "center",
        }}
      >
        BOKA PT-PASS / GYMINITRO
      </Typography>

      {/* Knappval för att växla mellan bokningar */}
      <Box sx={{ mb: 3, display: "flex", gap: 2 }}>
        <Button
          variant={selectedUrl === ptUrl ? "contained" : "outlined"}
          onClick={() => setSelectedUrl(ptUrl)}
          sx={{
            backgroundColor: selectedUrl === ptUrl ? "#3E6889" : "transparent",
            color: selectedUrl === ptUrl ? "#fff" : "#3E6889",
          }}
        >
          PT-pass (1h)
        </Button>
        <Button
          variant={selectedUrl === introUrl ? "contained" : "outlined"}
          onClick={() => setSelectedUrl(introUrl)}
          sx={{
            backgroundColor: selectedUrl === introUrl ? "#3E6889" : "transparent",
            color: selectedUrl === introUrl ? "#fff" : "#3E6889",
          }}
        >
          Gymintro (30 min)
        </Button>
      </Box>

      {/* Calendly inline widget */}
      <Box
        ref={calendlyRef}
        sx={{
          width: "100%",
          maxWidth: "900px",
        }}
      />
    </Box>
  );
};

export default BokningCalendly;