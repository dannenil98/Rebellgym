import { Box, Typography } from "@mui/material";

const OmOss = () => {
  return (
    <Box
      sx={{
        flex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          color: "#3E6889",
          textAlign: "center",
          px: 2,
          py: 6,
          paddingTop: "120px",
          maxWidth: "900px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Special Gothic Expanded One', sans-serif",
            fontSize: { xs: "28px", sm: "40px", md: "60px" }, // mindre på små skärmar
            mb: 3,
            WebkitTextStroke: "1px #3E6889",
          }}
        >
          OM OSS
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: { xs: "14px", sm: "16px", md: "18px" }, // mindre på små skärmar
            lineHeight: 1.6,
          }}
        >
          Min vision med rebell gym är att skapa en samlingspunkt med fokus på träning och välmående. Oavsett om du är ungdom, pensionär, stillasittande eller idrottare. 
          Här kommer du hitta ett sätt att stärka dig själv såväl fysiskt som mentalt. 
          Hos oss handlar helt enkelt träning om att bli den starkaste versionen av dig själv. 
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "12px", sm: "14px", md: "16px" }, // mindre på små skärmar
            opacity: 0.8,
          }}
        >
          Välkommen till Rebell Gym – där styrka möter gemenskap.
        </Typography>
        <Box
          component="img"
          src="/assets/Omossbild.jpg"
          alt="Om oss bild"
          sx={{
            width: { xs: "180px", sm: "300px", md: "350px" },
            height: { xs: "180px", sm: "300px", md: "350px" },
            borderRadius: "50%",
            objectFit: "cover",
            marginTop: "50px",
            mx: "auto",
            boxShadow: "0 8px 20px rgba(62,104,137,0.5)", // snygg skugga
          }}
        />
      </Box>
    </Box>
  );
};

export default OmOss;