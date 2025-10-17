import { Box, Typography, Divider } from "@mui/material";

const Oppettider = () => {
  return (
    <Box
      sx={{
        flex: 1, // fyller utrymmet mellan navbar och footer
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#000",
        color: "#3E6889",
        paddingTop: "100px", // samma avstånd som andra sidor
        px: 2,
        overflow: "hidden", // 🔥 förhindrar scroll
      }}
    >
      {/* Rubrik */}
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Special Gothic Expanded One', sans-serif",
          fontSize: { xs: "40px", sm: "60px" },
          mb: 4,
          WebkitTextStroke: "1px #3E6889",
        }}
      >
        ÖPPETTIDER
      </Typography>

      {/* Divider */}
      <Divider sx={{ width: "60px", borderColor: "#3E6889", mb: 4 }} />

      {/* Öppettider */}
      <Box sx={{ maxWidth: "600px", mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Gymmet är öppet alla dagar: 05:30 – 23:00
        </Typography>
        <Typography
          variant="body1"
          sx={{ opacity: 0.8, lineHeight: 1.6 }}
        >
          Observera: Bemannade tider med personal är ännu inte fastställda. 
          Vi uppdaterar informationen så snart tiderna är klara.
        </Typography>
      </Box>
    </Box>
  );
};

export default Oppettider;