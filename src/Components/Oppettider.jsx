import { useEffect, useState } from "react";
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

// JS getDay(): 0=söndag ... 6=lördag → mappa till index i `days` (0=måndag)
const jsDayToIndex = (jsDay) => (jsDay === 0 ? 6 : jsDay - 1);

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

const isStaffedNow = (now) => {
  const todayIndex = jsDayToIndex(now.getDay());
  const today = days[todayIndex];
  if (!today.open) return false;
  const nowMin = now.getHours() * 60 + now.getMinutes();
  return today.tid.split("\n").some((range) => {
    const [start, end] = range.split(" – ").map((t) => toMinutes(t.trim()));
    return nowMin >= start && nowMin < end;
  });
};

const Oppettider = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const todayIndex = jsDayToIndex(now.getDay());
  const staffedNow = isStaffedNow(now);

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
          mb: 2.5,
        }}
      >
        <AccessTimeIcon sx={{ color: "#4fc3f7", fontSize: 22 }} />
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4fc3f7", fontSize: { xs: "14px", sm: "17px" } }}>
          Gymmet är öppet alla dagar: 05:00 – 23:00
        </Typography>
      </Box>

      {/* Live status */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 5,
          px: 2,
          py: 0.6,
          borderRadius: "999px",
          border: staffedNow ? "1px solid rgba(90,220,140,0.4)" : "1px solid rgba(62,104,137,0.3)",
          backgroundColor: staffedNow ? "rgba(90,220,140,0.08)" : "transparent",
        }}
      >
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: staffedNow ? "#5adc8c" : "#3E6889",
            boxShadow: staffedNow ? "0 0 8px rgba(90,220,140,0.8)" : "none",
            animation: staffedNow ? "glowPulse 1.8s ease-in-out infinite" : "none",
          }}
        />
        <Typography sx={{ fontSize: "13px", letterSpacing: "0.5px", color: staffedNow ? "#5adc8c" : "#3E6889" }}>
          {staffedNow ? "Bemannat just nu" : "Självträning just nu — ingen personal på plats"}
        </Typography>
      </Box>

      <Typography
        variant="overline"
        sx={{ mb: 3, letterSpacing: "3px", color: "#7ab3d0", fontSize: "13px" }}
      >
        Bemannade tider
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: "680px" }}>
        {days.map((item, i) => {
          const isToday = i === todayIndex;
          return (
            <Grid item xs={12} sm={6} key={i} sx={{ display: "flex" }}>
              <Paper
                elevation={0}
                sx={{
                  position: "relative",
                  p: { xs: 2, sm: 2.5 },
                  backgroundColor: item.open ? "rgba(62,104,137,0.1)" : "rgba(255,255,255,0.02)",
                  border: isToday
                    ? "1px solid rgba(79,195,247,0.7)"
                    : item.open
                    ? "1px solid rgba(79,195,247,0.35)"
                    : "1px solid rgba(255,255,255,0.06)",
                  boxShadow: isToday ? "0 0 20px rgba(79,195,247,0.2)" : "none",
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
                {isToday && (
                  <Typography
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 14,
                      fontSize: "10px",
                      letterSpacing: "1.5px",
                      color: "#4fc3f7",
                      fontWeight: 700,
                    }}
                  >
                    IDAG
                  </Typography>
                )}
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
          );
        })}
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
