import { useEffect } from "react";
import { Box, Typography, Button, Chip } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CALENDLY_URL = "https://calendly.com/rebellgym/gymintro";

const bookingOptions = [
  {
    tag: "300 kr | Duo 400 kr",
    title: "Gymintro",
    subtitle: "Perfekt för dig som är ny",
    duration: "1 timme",
    prices: [{ label: "Solo", price: "300 kr" }, { label: "Duo", price: "400 kr" }],
    icon: <FitnessCenterIcon sx={{ fontSize: 40, color: "#4fc3f7" }} />,
    desc: "Få en personlig genomgång av gymmet, lär dig hur maskinerna fungerar och kom igång med din träning på rätt sätt.",
    includes: [
      "Genomgång av all utrustning",
      "Personliga tips för din träning",
    ],
    img: "/assets/gym-hero.jpg",
    calendlyUrl: CALENDLY_URL,
  },
  {
    tag: "750 kr",
    title: "PT-pass",
    subtitle: "Träna smartare — nå snabbare resultat",
    duration: "1 timme",
    prices: [{ label: "Per pass", price: "750 kr" }],
    icon: <PersonIcon sx={{ fontSize: 40, color: "#4fc3f7" }} />,
    desc: "Ett PT-pass anpassat helt efter dina mål och förutsättningar. Oavsett om du vill gå ner i vikt, bygga muskler eller bli starkare.",
    includes: [
      "Individuellt anpassat program",
      "Personlig coachning under passet",
      "Teknikkorrektioner i realtid",
      "Uppföljning och progressionsplan",
    ],
    img: "/assets/gym-power.jpg",
    calendlyUrl: CALENDLY_URL,
  },
];

const Bokningar = () => {
  useEffect(() => {
    // Ladda Calendly CSS
    if (!document.getElementById("calendly-css")) {
      const link = document.createElement("link");
      link.id = "calendly-css";
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
    // Ladda Calendly JS
    if (!document.getElementById("calendly-js")) {
      const script = document.createElement("script");
      script.id = "calendly-js";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const openCalendly = (url) => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    }
  };

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", backgroundColor: "#000" }}>

      {/* ── HERO ── */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "340px", sm: "420px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="/assets/gym-floor.jpg"
          alt=""
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.25)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 40%, #000 100%)",
          }}
        />
        <Box sx={{ position: "relative", zIndex: 2, textAlign: "center", px: 3 }}>
          <Typography
            sx={{
              fontFamily: "'Special Gothic Expanded One', sans-serif",
              fontSize: { xs: "32px", sm: "52px", md: "64px" },
              color: "transparent",
              WebkitTextStroke: "1.5px #fff",
              letterSpacing: "4px",
              mb: 2,
            }}
          >
            BOKA PASS
          </Typography>
          <Typography
            sx={{
              color: "#7ab3d0",
              fontSize: { xs: "14px", sm: "17px" },
              letterSpacing: "2px",
              maxWidth: "500px",
              mx: "auto",
            }}
          >
            Välj ett pass nedan och boka din tid direkt
          </Typography>
        </Box>
      </Box>

      {/* ── BOKNINGSKORT ── */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: 4 },
          maxWidth: "1100px",
          mx: "auto",
          px: { xs: 3, sm: 5, md: 6 },
          pb: 10,
          mt: { xs: -4, md: -6 },
          position: "relative",
          zIndex: 3,
        }}
      >
        {bookingOptions.map((opt, i) => (
          <Box
            key={i}
            sx={{
              flex: 1,
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(62,104,137,0.25)",
              backgroundColor: "#080808",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                borderColor: "rgba(79,195,247,0.4)",
                boxShadow: "0 20px 60px rgba(79,195,247,0.1)",
              },
            }}
          >
            {/* Kortbild */}
            <Box sx={{ position: "relative", height: { xs: "180px", sm: "220px" } }}>
              <Box
                component="img"
                src={opt.img}
                alt={opt.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.5)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, transparent 30%, #080808 100%)",
                }}
              />
              <Chip
                label={opt.tag}
                size="small"
                sx={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  backgroundColor: "rgba(79,195,247,0.15)",
                  color: "#4fc3f7",
                  border: "1px solid rgba(79,195,247,0.4)",
                  fontSize: "11px",
                  letterSpacing: "1px",
                  fontWeight: 600,
                }}
              />
            </Box>

            {/* Kortinnehåll */}
            <Box sx={{ p: { xs: 3, sm: 4 }, display: "flex", flexDirection: "column", flex: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                {opt.icon}
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Special Gothic Expanded One', sans-serif",
                      fontSize: { xs: "22px", sm: "26px" },
                      color: "#fff",
                      letterSpacing: "2px",
                      lineHeight: 1.1,
                    }}
                  >
                    {opt.title}
                  </Typography>
                  <Typography sx={{ color: "#4a6c83", fontSize: "13px", mt: 0.3 }}>
                    {opt.subtitle}
                  </Typography>
                </Box>
              </Box>

              {/* Priser */}
              <Box sx={{ display: "flex", gap: 2, mb: 2.5, flexWrap: "wrap" }}>
                {opt.prices.map((p, j) => (
                  <Box
                    key={j}
                    sx={{
                      backgroundColor: "rgba(79,195,247,0.07)",
                      border: "1px solid rgba(79,195,247,0.25)",
                      borderRadius: "8px",
                      px: 2,
                      py: 0.8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ color: "#4fc3f7", fontWeight: 700, fontSize: "18px", lineHeight: 1.1 }}>
                      {p.price}
                    </Typography>
                    <Typography sx={{ color: "#3E6889", fontSize: "11px", letterSpacing: "1px" }}>
                      {p.label}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Varaktighet */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2.5,
                  color: "#3E6889",
                }}
              >
                <AccessTimeIcon sx={{ fontSize: 16 }} />
                <Typography sx={{ fontSize: "14px" }}>{opt.duration}</Typography>
              </Box>

              <Typography
                sx={{
                  color: "#7ab3d0",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                {opt.desc}
              </Typography>

              {/* Vad ingår */}
              <Box sx={{ mb: 4, flex: 1 }}>
                <Typography
                  sx={{
                    color: "#3E6889",
                    fontSize: "12px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    mb: 1.5,
                  }}
                >
                  Vad ingår
                </Typography>
                {opt.includes.map((item, j) => (
                  <Box key={j} sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
                    <CheckCircleOutlineIcon sx={{ fontSize: 17, color: "#4fc3f7", flexShrink: 0 }} />
                    <Typography sx={{ color: "#7ab3d0", fontSize: "14px" }}>{item}</Typography>
                  </Box>
                ))}
              </Box>

              {/* Bokningsknapp */}
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={() => openCalendly(opt.calendlyUrl)}
                fullWidth
                sx={{
                  backgroundColor: "#4fc3f7",
                  color: "#000",
                  fontWeight: 700,
                  fontSize: "15px",
                  py: 1.8,
                  borderRadius: "10px",
                  letterSpacing: "1px",
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#fff",
                    boxShadow: "0 8px 30px rgba(79,195,247,0.35)",
                  },
                }}
              >
                Boka {opt.title}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      {/* ── INFO-RAD ── */}
      <Box
        sx={{
          borderTop: "1px solid rgba(62,104,137,0.15)",
          py: { xs: 5, sm: 6 },
          px: { xs: 4, sm: 8 },
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: 4, sm: 8 },
        }}
      >
        {[
          { label: "Bokningsbekräftelse", value: "Via e-post direkt" },
          { label: "Avbokning", value: "Kostnadsfritt 24h innan" },
          { label: "Plats", value: "Hemse 62350, Kodningsgatan 6" },
        ].map((item, i) => (
          <Box key={i} sx={{ textAlign: "center" }}>
            <Typography sx={{ color: "#3E6889", fontSize: "12px", letterSpacing: "2px", mb: 0.5 }}>
              {item.label.toUpperCase()}
            </Typography>
            <Typography sx={{ color: "#7ab3d0", fontSize: "15px", fontWeight: 500 }}>
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Bokningar;
