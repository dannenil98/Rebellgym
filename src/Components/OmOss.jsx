import { Box, Typography, Divider } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const OmOss = () => {
  return (
    <Box
      sx={{
        flex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        overflow: "hidden",
        paddingTop: "100px",
        pb: 10,
      }}
    >
      {/* Rubrik */}
      <Box sx={{ textAlign: "center", width: "100%", mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Special Gothic Expanded One', sans-serif",
            fontSize: { xs: "40px", sm: "60px" },
            WebkitTextStroke: "1px #3E6889",
            color: "transparent",
            letterSpacing: "3px",
          }}
        >
          OM OSS
        </Typography>
        <Divider sx={{ width: "80px", borderColor: "#4fc3f7", borderWidth: "2px", mx: "auto", mt: 2 }} />
      </Box>

      {/* Tvåkolumns layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 6, md: 10 },
          width: "100%",
          maxWidth: "1100px",
          mx: "auto",
          px: { xs: 3, sm: 6 },
        }}
      >
        {/* Bild */}
        <Box
          sx={{
            flexShrink: 0,
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: { xs: "220px", sm: "300px", md: "360px" },
              height: { xs: "220px", sm: "300px", md: "360px" },
              borderRadius: "50%",
              border: "3px solid rgba(79,195,247,0.4)",
              boxShadow: "0 0 40px rgba(79,195,247,0.15), 0 8px 30px rgba(0,0,0,0.6)",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src="/assets/Omossbild.jpg"
              alt="Om oss bild"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
          {/* Dekorativ ring */}
          <Box
            sx={{
              position: "absolute",
              inset: "-12px",
              borderRadius: "50%",
              border: "1px solid rgba(79,195,247,0.15)",
              pointerEvents: "none",
            }}
          />
        </Box>

        {/* Text */}
        <Box
          sx={{
            color: "#3E6889",
            textAlign: { xs: "center", md: "left" },
            maxWidth: "540px",
          }}
        >
          <FormatQuoteIcon
            sx={{
              fontSize: 48,
              color: "rgba(79,195,247,0.3)",
              display: { xs: "none", md: "block" },
              mb: 1,
            }}
          />

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: { xs: "15px", sm: "17px", md: "18px" },
              lineHeight: 1.85,
              color: "#7ab3d0",
            }}
          >
            Min vision med Rebell Gym är att skapa en samlingspunkt med fokus på träning och välmående.
            Oavsett om du är ungdom, pensionär, stillasittande eller idrottare — här kommer du hitta ett
            sätt att stärka dig själv såväl fysiskt som mentalt.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: { xs: "15px", sm: "17px", md: "18px" },
              lineHeight: 1.85,
              color: "#7ab3d0",
            }}
          >
            Hos oss handlar träning helt enkelt om att bli den starkaste versionen av dig själv.
          </Typography>

          <Box
            sx={{
              display: "inline-block",
              borderTop: "2px solid rgba(79,195,247,0.4)",
              pt: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "13px", sm: "15px" },
                color: "#4fc3f7",
                fontStyle: "italic",
                letterSpacing: "1px",
              }}
            >
              Välkommen till Rebell Gym – där styrka möter gemenskap.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OmOss;
