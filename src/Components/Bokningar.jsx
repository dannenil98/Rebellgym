import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

const BokningCalendly = () => {
  const introUrl = "https://calendly.com/rebellgym/gymintro";
  const calendlyRef = useRef(null);

  useEffect(() => {
    if (calendlyRef.current) {
      calendlyRef.current.innerHTML = "";

      const div = document.createElement("div");
      div.className = "calendly-inline-widget";
      div.setAttribute("data-url", introUrl);
      div.style.width = "100%";
      div.style.height = "100%"; // höjden styrs via Box sx prop
      calendlyRef.current.appendChild(div);

      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      calendlyRef.current.appendChild(script);
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 15,
        pb: 15,
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 2,
          color: "#3E6889",
          fontFamily: "'Special Gothic Expanded One', sans-serif",
          WebkitTextStroke: "1px #3E6889",
          fontSize: { xs: "20px", sm: "30px", md: "40px" },
          textAlign: "center",
        }}
      >
        BOKA GYMINITRO / PT-PASS
      </Typography>

      <Box
        ref={calendlyRef}
        sx={{
          width: "100%",
          maxWidth: { xs: "320px", sm: "500px", md: "500px" },
          height: {
            xs: "450px",  // små mobiler
            sm: "500px",  // vanliga mobiler
            md: "400px",  // medelstora skärmar, t.ex. 1024px
            lg: "650px",  // stora skärmar
          },
        }}
      />
    </Box>
  );
};

export default BokningCalendly;