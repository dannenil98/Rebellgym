import { Box, Typography } from "@mui/material";

const OmOss = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#3E6889",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        px: 2,
        py: 6,
        paddingTop: "120px", // 🔥 konsekvent avstånd
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Special Gothic Expanded One', sans-serif",
          fontSize: { xs: "40px", sm: "60px" },
          mb: 3,
          WebkitTextStroke: "1px #3E6889",
        }}
      >
        OM OSS
      </Typography>

      <Typography
        variant="body1"
        sx={{
          maxWidth: "800px",
          mb: 3,
          fontSize: "18px",
          lineHeight: 1.6,
        }}
      >
        Rebell Gym är en träningsanläggning där gemenskap, styrka och passion
        står i centrum. Vi erbjuder en rå, genuin träningsmiljö för alla nivåer –
        oavsett om du är nybörjare eller erfaren atlet. Hos oss handlar träning
        om att utmana dig själv och bli den starkaste versionen av dig själv.
      </Typography>

      <Typography
        sx={{
          fontSize: "16px",
          maxWidth: "600px",
          opacity: 0.8,
        }}
      >
        Välkommen till Rebell Gym – där styrka möter gemenskap.
      </Typography>
    </Box>
  );
};

export default OmOss;