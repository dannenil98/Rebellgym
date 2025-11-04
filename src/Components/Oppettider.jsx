import { Box, Typography, Divider, Grid, Paper } from "@mui/material";

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
      {/* Rubrik */}
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Special Gothic Expanded One', sans-serif",
          fontSize: { xs: "40px", sm: "60px" },
          mb: 2,
          WebkitTextStroke: "1px #3E6889",
        }}
      >
        ÖPPETTIDER
      </Typography>

      {/* Divider */}
      <Divider sx={{ width: "60px", borderColor: "#3E6889", mb: 4 }} />

      {/* Gymmets ordinarie öppettider */}
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          fontWeight: "bold",
        }}
      >
        Gymmet är öppet alla dagar: 05:30 – 23:00
      </Typography>

      {/* Bemannade tider */}
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          textDecoration: "underline",
        }}
      >
        Bemannade tider
      </Typography>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ maxWidth: "600px" }}
      >
        {[
          { dag: "Måndag", tid: "17:00 – 19:00" },
          { dag: "Tisdag", tid: "Stängt" },
          { dag: "Onsdag", tid: "17:30 – 20:00" },
          { dag: "Torsdag", tid: "Stängt" },
          { dag: "Fredag", tid: "16:00 – 18:00" },
          { dag: "Lördag", tid: "11:00 – 13:00"  },
          { dag: "Söndag", tid: "16:00 – 18:00" },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                backgroundColor: "#0d0d0d",
                color: "#3E6889",
                borderRadius: "12px",
                textAlign: "center",
                fontFamily: "'Special Gothic Expanded One', sans-serif",
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {item.dag}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  opacity: 0.9,
                  fontSize: "16px",
                  mt: 0.5,
                }}
              >
                {item.tid}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Extra info */}
      <Typography
        variant="body2"
        sx={{
          mt: 4,
          maxWidth: "600px",
          opacity: 0.7,
          fontSize: "14px",
          lineHeight: 1.6,
        }}
      >
        Öppettiderna kan variera vid röda dagar och helger.  
        Följ våra sociala medier för senaste uppdateringarna.
      </Typography>
    </Box>
  );
};

export default Oppettider;