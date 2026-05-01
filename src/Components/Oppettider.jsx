import { Box, Typography, Divider, Grid, Paper } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const days = [
  { dag: "Måndag", tid: "17:00 – 19:00", open: true },
  { dag: "Tisdag", tid: "Stängt", open: false },
  { dag: "Onsdag", tid: "09:00 – 10:30\n17:30 – 20:00", open: true },
  { dag: "Torsdag", tid: "Stängt", open: false },
  { dag: "Fredag", tid: "16:30 – 18:30", open: true },
  { dag: "Lördag", tid: "Stängt", open: false },
  { dag: "Söndag", tid: "16:00 – 18:00", open: true },
];

const Oppettider = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",
        color: "#3E6889",
        paddingTop: "100px",
        px: { xs: 2, sm: 4 },
        pb: 8,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Special Gothic Expanded One', sans-serif",
          fontSize: { xs: "40px", sm: "60px" },
          mb: 2,
          WebkitTextStroke: "1px #3E6889",
          color: "transparent",
          letterSpacing: "3px",
        }}
      >
        ÖPPETTIDER
      </Typography>

      <Divider sx={{ width: "80px", borderColor: "#4fc3f7", borderWidth: "2px", mb: 4 }} />

      {/* Självbetjäning banner */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          backgroundColor: "rgba(79,195,247,0.08)",
          border: "1px solid rgba(79,195,247,0.3)",
          borderRadius: "12px",
          px: 3,
          py: 1.5,
          mb: 5,
        }}
      >
        <AccessTimeIcon sx={{ color: "#4fc3f7", fontSize: 22 }} />
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4fc3f7", fontSize: { xs: "14px", sm: "17px" } }}>
          Gymmet är öppet alla dagar: 05:00 – 23:00
        </Typography>
      </Box>

      <Typography
        variant="overline"
        sx={{ mb: 3, letterSpacing: "3px", color: "#7ab3d0", fontSize: "13px" }}
      >
        Bemannade tider
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: "680px" }}>
        {days.map((item, i) => (
          <Grid item xs={12} sm={6} key={i} sx={{ display: "flex" }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2, sm: 2.5 },
                backgroundColor: item.open ? "rgba(62,104,137,0.1)" : "rgba(255,255,255,0.02)",
                border: item.open
                  ? "1px solid rgba(79,195,247,0.35)"
                  : "1px solid rgba(255,255,255,0.06)",
                borderRadius: "14px",
                textAlign: "center",
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                transition: "all 0.2s ease",
                "&:hover": item.open
                  ? { boxShadow: "0 0 18px rgba(79,195,247,0.15)", transform: "translateY(-2px)" }
                  : {},
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "'Special Gothic Expanded One', sans-serif",
                  color: item.open ? "#7ab3d0" : "#444",
                  letterSpacing: "1px",
                  fontSize: "15px",
                  mb: 0.5,
                }}
              >
                {item.dag}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: "15px",
                  whiteSpace: "pre-line",
                  color: item.open ? "#4fc3f7" : "#333",
                  fontWeight: item.open ? 500 : 400,
                }}
              >
                {item.tid}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography
        variant="body2"
        sx={{
          mt: 5,
          maxWidth: "500px",
          color: "#3E6889",
          opacity: 0.6,
          fontSize: "13px",
          lineHeight: 1.7,
          fontStyle: "italic",
        }}
      >
        Öppettiderna kan variera vid röda dagar och helger.
        <br />
        Följ våra sociala medier för senaste uppdateringarna.
      </Typography>
    </Box>
  );
};

export default Oppettider;
