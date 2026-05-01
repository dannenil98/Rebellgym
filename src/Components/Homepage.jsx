import { Box, Typography, Button, Grid } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import GroupsIcon from "@mui/icons-material/Groups";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const gymSections = [
  {
    title: "Styrketräning",
    desc: "Välutrustad maskinpark med frivikter, maskiner och allt du behöver.",
    img: "/assets/gym-hero.jpg",
  },
  {
    title: "Kondition",
    desc: "Moderna cardio-maskiner — roddmaskiner, air bikes, löpband och mer.",
    img: "/assets/gym-cardio.jpg",
  },
  {
    title: "Lyftarplattformar",
    desc: "Squat racks, lyftplattformar och spegelvägg för seriös styrketräning.",
    img: "/assets/gym-power.jpg",
  },
  {
    title: "Hantelhörna",
    desc: "Komplett hantelset och speglar — perfekt för allt från axlar och armar till bröst och rygg.",
    img: "/assets/gym-dumbbells.jpg",
  },
  {
    title: "Gymlounge",
    desc: "Slappna av före eller efter passet i vår mysiga lounge med soffa och omklädningsrum.",
    img: "/assets/gym-lobby.jpg",
  },
];

const features = [
  {
    ikon: <FitnessCenterIcon sx={{ fontSize: 44, color: "#4fc3f7" }} />,
    titel: "Träning för alla",
    text: "Nybörjare som proffs. Vi har utrustning och miljö för alla nivåer.",
  },
  {
    ikon: <GroupsIcon sx={{ fontSize: 44, color: "#4fc3f7" }} />,
    titel: "Gemenskap",
    text: "Hos oss stöttar vi varandra och växer tillsammans.",
  },
  {
    ikon: <WhatshotIcon sx={{ fontSize: 44, color: "#4fc3f7" }} />,
    titel: "Driv och resultat",
    text: "Utmana dig själv varje dag. Bli starkare — mentalt och fysiskt.",
  },
];

const Homepage = () => {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* ── HERO ── */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Bakgrundsbild */}
        <Box
          component="img"
          src="/assets/gym-hero.jpg"
          alt="Rebell Gym"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(0.35)",
            transform: "scale(1.05)",
            transition: "transform 8s ease",
          }}
        />

        {/* Gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        {/* Innehåll */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            px: { xs: 3, sm: 6 },
            gap: 0,
          }}
        >
          {/* Logga */}
          <Box
            component="img"
            src="/assets/Rebellogga.png"
            alt="Rebellogo"
            sx={{
              width: { xs: "160px", sm: "220px", md: "280px" },
              mb: 3,
              opacity: 0,
              animation: "fadeDown 0.8s ease-out 0.3s forwards",
              filter: "drop-shadow(0 0 24px rgba(79,195,247,0.3))",
            }}
          />

          <Typography
            sx={{
              fontFamily: "'Special Gothic Expanded One', sans-serif",
              fontSize: { xs: "36px", sm: "60px", md: "80px", lg: "100px" },
              letterSpacing: { xs: "6px", sm: "12px" },
              color: "#fff",
              lineHeight: 1,
              mb: 2,
              opacity: 0,
              animation: "fadeUp 0.8s ease-out 0.6s forwards",
              textShadow: "0 0 60px rgba(79,195,247,0.25)",
            }}
          >
            REBELL GYM
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "13px", sm: "16px", md: "19px" },
              letterSpacing: { xs: "3px", sm: "6px" },
              textTransform: "uppercase",
              color: "#4fc3f7",
              mb: 5,
              opacity: 0,
              animation: "fadeUp 0.8s ease-out 0.9s forwards",
            }}
          >
            Där styrka möter gemenskap
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 2, sm: 3 },
              flexWrap: "wrap",
              justifyContent: "center",
              opacity: 0,
              animation: "fadeUp 0.8s ease-out 1.2s forwards",
            }}
          >
            <Button
              variant="contained"
              href="/bokningar"
              endIcon={<ArrowForwardIcon />}
              sx={{
                backgroundColor: "#4fc3f7",
                color: "#000",
                fontWeight: 700,
                fontSize: { xs: "13px", sm: "15px" },
                px: { xs: 3, sm: 5 },
                py: { xs: 1.3, sm: 1.8 },
                borderRadius: "6px",
                letterSpacing: "1px",
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#fff",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 30px rgba(79,195,247,0.4)",
                },
              }}
            >
              Boka PT-pass
            </Button>

            <Button
              variant="outlined"
              href="/priser"
              sx={{
                borderColor: "rgba(255,255,255,0.5)",
                borderWidth: "2px",
                color: "#fff",
                fontWeight: 500,
                fontSize: { xs: "13px", sm: "15px" },
                px: { xs: 3, sm: 5 },
                py: { xs: 1.3, sm: 1.8 },
                borderRadius: "6px",
                letterSpacing: "1px",
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "#4fc3f7",
                  color: "#4fc3f7",
                  backgroundColor: "rgba(79,195,247,0.08)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Se priser
            </Button>
          </Box>
        </Box>

        {/* Scroll-indikator */}
        <Box
          sx={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            opacity: 0,
            animation: "fadeIn 1s ease 2s forwards",
          }}
        >
          <Box
            sx={{
              width: "1px",
              height: "50px",
              background: "linear-gradient(to bottom, rgba(79,195,247,0.8), transparent)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
        </Box>
      </Box>

      {/* ── GYMMET I SIFFROR ── */}
      <Box
        sx={{
          backgroundColor: "#050505",
          borderTop: "1px solid rgba(79,195,247,0.15)",
          py: { xs: 5, sm: 6 },
          px: { xs: 4, sm: 8 },
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {[
            { num: "05:00", label: "Öppnar varje dag" },
            { num: "23:00", label: "Stänger varje dag" },
            { num: "500+", label: "Kvadratmeter" },
            { num: "PT", label: "Personlig tränare på plats" },
          ].map((item, i) => (
            <Grid item xs={6} sm={3} key={i}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontFamily: "'Special Gothic Expanded One', sans-serif",
                    fontSize: { xs: "26px", sm: "36px", md: "44px" },
                    color: "#4fc3f7",
                    lineHeight: 1,
                    mb: 0.5,
                  }}
                >
                  {item.num}
                </Typography>
                <Typography sx={{ color: "#3E6889", fontSize: { xs: "11px", sm: "13px" }, letterSpacing: "1px" }}>
                  {item.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ── UTFORSKA GYMMET ── */}
      <Box
        sx={{
          backgroundColor: "#070707",
          py: { xs: 8, sm: 12 },
          px: { xs: 3, sm: 6, md: 10 },
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Special Gothic Expanded One', sans-serif",
            fontSize: { xs: "28px", sm: "42px" },
            color: "transparent",
            WebkitTextStroke: "1px rgba(62,104,137,0.8)",
            letterSpacing: "4px",
            textAlign: "center",
            mb: 1,
          }}
        >
          UTFORSKA GYMMET
        </Typography>
        <Typography sx={{ textAlign: "center", color: "#3E6889", mb: { xs: 5, sm: 7 }, fontSize: "15px", letterSpacing: "2px" }}>
          Moderna lokaler — helt utrustade
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 3 }}>
          {gymSections.map((section, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: "240px", sm: "340px", md: "420px" },
                  borderRadius: "14px",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: "1px solid rgba(62,104,137,0.2)",
                  "&:hover .gym-img": {
                    transform: "scale(1.08)",
                    filter: "brightness(0.4)",
                  },
                  "&:hover .gym-overlay": {
                    opacity: 1,
                  },
                }}
              >
                <Box
                  className="gym-img"
                  component="img"
                  src={section.img}
                  alt={section.title}
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.5)",
                    transition: "transform 0.6s ease, filter 0.4s ease",
                  }}
                />

                {/* Gradient underifrån */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)",
                  }}
                />

                {/* Titel alltid synlig */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: { xs: 2.5, sm: 3 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Special Gothic Expanded One', sans-serif",
                      fontSize: { xs: "18px", sm: "22px" },
                      color: "#fff",
                      letterSpacing: "2px",
                      mb: 0.5,
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Typography
                    className="gym-overlay"
                    sx={{
                      color: "#7ab3d0",
                      fontSize: "14px",
                      lineHeight: 1.5,
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    {section.desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ── VARFÖR REBELL GYM ── */}
      <Box
        sx={{
          backgroundColor: "#050505",
          borderTop: "1px solid rgba(62,104,137,0.15)",
          py: { xs: 8, sm: 12 },
          px: { xs: 3, sm: 8, md: 14 },
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Special Gothic Expanded One', sans-serif",
            fontSize: { xs: "28px", sm: "42px" },
            color: "transparent",
            WebkitTextStroke: "1px rgba(62,104,137,0.8)",
            letterSpacing: "4px",
            textAlign: "center",
            mb: { xs: 5, sm: 7 },
          }}
        >
          VARFÖR REBELL GYM?
        </Typography>

        <Grid container spacing={{ xs: 3, sm: 4 }} justifyContent="center">
          {features.map((item, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: { xs: 3, sm: 4 },
                  borderRadius: "16px",
                  border: "1px solid rgba(62,104,137,0.2)",
                  backgroundColor: "#0a0a0a",
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    border: "1px solid rgba(79,195,247,0.4)",
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 40px rgba(79,195,247,0.1)",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{item.ikon}</Box>
                <Typography
                  sx={{
                    fontFamily: "'Special Gothic Expanded One', sans-serif",
                    color: "#7ab3d0",
                    fontSize: { xs: "16px", sm: "18px" },
                    letterSpacing: "1px",
                    mb: 1.5,
                  }}
                >
                  {item.titel}
                </Typography>
                <Typography sx={{ color: "#3E6889", fontSize: "15px", lineHeight: 1.7 }}>
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ── CTA BANNER ── */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          py: { xs: 10, sm: 14 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 3,
        }}
      >
        <Box
          component="img"
          src="/assets/Rebelbild11.jfif"
          alt=""
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.2)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(0,0,0,0.6), rgba(79,195,247,0.05))",
          }}
        />
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            sx={{
              fontFamily: "'Special Gothic Expanded One', sans-serif",
              fontSize: { xs: "26px", sm: "42px", md: "54px" },
              color: "#fff",
              letterSpacing: "4px",
              mb: 2,
              textShadow: "0 0 40px rgba(79,195,247,0.3)",
            }}
          >
            REDO ATT BÖRJA?
          </Typography>
          <Typography sx={{ color: "#7ab3d0", fontSize: { xs: "14px", sm: "17px" }, mb: 5, letterSpacing: "2px" }}>
            Boka ett gyminitro eller PT-pass idag
          </Typography>
          <Button
            variant="contained"
            href="/bokningar"
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: "#4fc3f7",
              color: "#000",
              fontWeight: 700,
              fontSize: { xs: "14px", sm: "16px" },
              px: { xs: 4, sm: 6 },
              py: { xs: 1.5, sm: 2 },
              borderRadius: "6px",
              letterSpacing: "1px",
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#fff",
                transform: "translateY(-2px)",
                boxShadow: "0 10px 40px rgba(79,195,247,0.5)",
              },
            }}
          >
            Boka nu
          </Button>
        </Box>
      </Box>

      <style>{`
        @keyframes fadeDown {
          from { transform: translateY(-30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 0.7; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
      `}</style>
    </Box>
  );
};

export default Homepage;
