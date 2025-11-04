import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import GroupsIcon from "@mui/icons-material/Groups";
import WhatshotIcon from "@mui/icons-material/Whatshot";

const Homepage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
        color: "#3E6889",
      }}
    >
      {/* Hero-section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
          zIndex: 1,
          px: { xs: 3, sm: 6 },
        }}
      >
        {/* Logga */}
        <Box
          sx={{
            animation: "slideDown 0.6s ease-out forwards",
            opacity: 0,
            animationDelay: "0.4s",
          }}
        >
          <img
            src="/assets/Rebellogga.png"
            alt="Rebellogo"
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
            }}
          />
        </Box>

        {/* Titel */}
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "35px", sm: "60px", md: "100px", lg: "120px" },
            animation: "fadeUp 1s ease-out forwards",
            letterSpacing: "5px",
            opacity: 0,
            WebkitTextStroke: "2px #3E6889",
            animationDelay: "0.8s",
            fontFamily: "'Special Gothic Expanded One', sans-serif",
            mt: 2,
          }}
        >
          REBELLGYM
        </Typography>

        {/* Slogan */}
        <Typography
          sx={{
            mt: 2,
            fontSize: { xs: "16px", sm: "20px" },
            letterSpacing: "2px",
            opacity: 0,
            animation: "fadeUp 1.5s ease-out forwards",
            animationDelay: "1.2s",
            textTransform: "uppercase",
          }}
        >
          Där styrka möter gemenskap 💪
        </Typography>

        {/* Knappar */}
        <Box
          sx={{
            mt: 4,
            opacity: 0,
            animation: "fadeUp 1.5s ease-out forwards",
            animationDelay: "1.6s",
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="outlined"
            href="/priser"
            sx={{
              borderColor: "#3E6889",
              color: "#3E6889",
              textTransform: "none",
              fontSize: "14px",
              px: { xs: 3, sm: 4 },
              py: 1,
              "&:hover": { borderColor: "#4fc3f7", color: "#4fc3f7" },
            }}
          >
            Se priser
          </Button>
          
          <Button
            variant="outlined"
            href="/bokningar"
            sx={{
              borderColor: "#3E6889",
              color: "#3E6889",
              textTransform: "none",
              fontSize: "14px",
              px: { xs: 3, sm: 4 },
              py: 1,
              "&:hover": { borderColor: "#4fc3f7", color: "#4fc3f7" },
            }}
          >
            Boka PT-pass
          </Button>
        </Box>
      </Box>

      {/* Om gymmet / Info cards */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#0d0d0d",
          py: { xs: 4, sm: 8 },
          px: { xs: 3, sm: 14 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: { xs: 4, sm: 6 },
            fontFamily: "'Special Gothic Expanded One', sans-serif",
            WebkitTextStroke: "1px #3E6889",
          }}
        >
          VARFÖR REBELL GYM?
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 4 }} justifyContent="center" alignItems="stretch">
          {[
            {
              ikon: <FitnessCenterIcon sx={{ fontSize: 60, mb: 2 }} />,
              titel: "Träning för alla",
              text: "Hos oss finns en bra maskinpark för både nybörjare och erfarna. Vi har maskiner med viktmagasin och frivikter.",
            },
            {
              ikon: <GroupsIcon sx={{ fontSize: 60, mb: 2 }} />,
              titel: "Gemenskap",
              text: "Hos oss stöttar vi varandra och växer tillsammans.",
            },
            {
              ikon: <WhatshotIcon sx={{ fontSize: 60, mb: 2 }} />,
              titel: "Driv och resultat",
              text: "Utmana dig själv varje dag. Bli starkare – mentalt och fysiskt.",
            },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card
                sx={{
                  backgroundColor: "#111",
                  borderRadius: "16px",
                  textAlign: "center",
                  color: "#3E6889",
                  boxShadow: "0 0 10px rgba(62,104,137,0.4)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  height: "100%",
                  padding: { xs: 2, sm: 3 },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  {item.ikon}
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: "'Special Gothic Expanded One', sans-serif", mb: 1 }}
                  >
                    {item.titel}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ opacity: 0.8, fontSize: { xs: "14px", sm: "16px" } }}
                  >
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Animationer */}
      <style>
        {`
          @keyframes slideDown {
            from { transform: translateY(-40px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @keyframes fadeUp {
            from { transform: translateY(40px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </Box>
  );
};

export default Homepage;