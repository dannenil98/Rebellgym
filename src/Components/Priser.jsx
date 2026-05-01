import { Box, Typography, Divider, Chip } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const prices = [
  { namn: "Engångsträning", pris: "90 kr", popular: false },
  { namn: "Veckokort", pris: "280 kr", popular: false },
  { namn: "Klippkort x10", pris: "650 kr", popular: false },
  { namn: "Månadskort", pris: "520 kr", popular: true },
  { namn: "Kvartalskort", pris: "1 250 kr", popular: false },
  { namn: "Halvårskort", pris: "2 275 kr", popular: false },
  { namn: "Årskort", pris: "3 995 kr", popular: false },
];

const Priser = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "100px",
        paddingBottom: "60px",
        width: "100%",
        px: { xs: 2, sm: 4 },
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
          textAlign: "center",
        }}
      >
        PRISER
      </Typography>

      <Divider sx={{ width: "80px", borderColor: "#4fc3f7", borderWidth: "2px", mb: 6 }} />

      <Box
        sx={{
          width: "100%",
          maxWidth: "560px",
          backgroundColor: "#0a0a0a",
          border: "1px solid rgba(62,104,137,0.25)",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
        }}
      >
        {prices.map((item, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: { xs: 3, sm: 4 },
              py: { xs: 1.8, sm: 2.2 },
              backgroundColor: item.popular
                ? "rgba(79,195,247,0.08)"
                : i % 2 === 0
                ? "rgba(255,255,255,0.015)"
                : "transparent",
              borderLeft: item.popular ? "3px solid #4fc3f7" : "3px solid transparent",
              transition: "background 0.2s ease",
              "&:hover": {
                backgroundColor: item.popular
                  ? "rgba(79,195,247,0.14)"
                  : "rgba(62,104,137,0.1)",
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Typography
                sx={{
                  color: item.popular ? "#4fc3f7" : "#7ab3d0",
                  fontSize: { xs: "15px", sm: "17px" },
                  fontWeight: item.popular ? 600 : 400,
                }}
              >
                {item.namn}
              </Typography>
              {item.popular && (
                <Chip
                  icon={<StarIcon sx={{ fontSize: "14px !important", color: "#4fc3f7 !important" }} />}
                  label="Populärt"
                  size="small"
                  sx={{
                    backgroundColor: "rgba(79,195,247,0.15)",
                    color: "#4fc3f7",
                    border: "1px solid rgba(79,195,247,0.4)",
                    fontSize: "11px",
                    height: "22px",
                  }}
                />
              )}
            </Box>
            <Typography
              sx={{
                color: item.popular ? "#4fc3f7" : "#3E6889",
                fontSize: { xs: "15px", sm: "17px" },
                fontWeight: item.popular ? 700 : 500,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {item.pris}
            </Typography>
          </Box>
        ))}

        <Box
          sx={{
            px: { xs: 3, sm: 4 },
            py: 3,
            borderTop: "1px solid rgba(62,104,137,0.2)",
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        >
          <Typography variant="body2" sx={{ color: "#4fc3f7", mb: 1, fontSize: { xs: "13px", sm: "14px" } }}>
            <strong>10% rabatt</strong> — studerande, pensionärer och FaR.
          </Typography>
          <Typography variant="body2" sx={{ color: "#3E6889", mb: 0.5, fontSize: { xs: "12px", sm: "13px" }, opacity: 0.8 }}>
            *Medlemskap och passerkort ingår i priset.
          </Typography>
          <Typography variant="body2" sx={{ color: "#3E6889", mb: 2, fontSize: { xs: "12px", sm: "13px" }, opacity: 0.8 }}>
            Vid borttappat passerkort debiteras 50 kr för ett nytt.
          </Typography>

          <Divider sx={{ borderColor: "rgba(62,104,137,0.15)", mb: 2 }} />

          <Typography variant="body2" sx={{ color: "#4fc3f7", fontWeight: 600, mb: 0.5, fontSize: { xs: "13px", sm: "14px" } }}>
            Friskvårdsbidrag?
          </Typography>
          <Typography variant="body2" sx={{ color: "#3E6889", fontSize: { xs: "12px", sm: "13px" }, opacity: 0.8 }}>
            Behöver ni hjälp att lösa kort via friskvård – fråga personalen.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Priser;
