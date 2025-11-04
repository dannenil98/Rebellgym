import { Box, Typography, Card, CardContent, Divider } from "@mui/material";  

const Priser = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "120px",
        paddingBottom: "48px",
        width: "100%",
      }}
    >
      <Card
        sx={{
          background: "radial-gradient(circle at center, rgba(62,104,137,0.15) 0%, rgba(0,0,0,0) 0%)",
          color: "#3E6889",
          borderRadius: "16px",
          margin: "10px",
          boxShadow: "0 0 11px rgba(62,104,137,0.3)",
          width: { xs: "95%", sm: "90%", md: "700px" }, // responsiv bredd
          px: { xs: 2, sm: 3 }, // padding inuti kortet
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Special Gothic Expanded One', sans-serif",
              textAlign: "center",
              mb: 3,
              fontSize: { xs: "24px", sm: "32px", md: "36px" }, // mindre på små skärmar
            }}
          >
            PRISER
          </Typography>

          {[ 
            ["Engångsträning", "90 kr"],
            ["Veckokort", "280 kr"],
            ["Klippkort x10", "650 kr"],
            ["Månadskort", "520 kr"],
            ["Kvartalskort", "1250 kr"],
            ["Halvårskort", "2275 kr"],
            ["Årskort", "3995 kr"],
          ].map(([namn, pris], i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 1,
                fontSize: { xs: "14px", sm: "16px", md: "18px" }, // mindre på små skärmar
              }}
            >
              <Typography>{namn}</Typography>
              <Typography>{pris}</Typography>
            </Box>
          ))}

          <Divider sx={{ my: 2, borderColor: "#3E6889" }} />

          <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: "12px", sm: "14px" } }}>
            <strong>10% rabatt</strong> ges för studerande, pensionärer och FaR.
          </Typography>

          <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: "12px", sm: "14px" } }}>
            *Medlemskap och passerkort ingår i priset.
          </Typography>

          <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: "12px", sm: "14px" } }}>
            Vid borttappat passerkort debiteras en avgift på 100 kr för ett nytt.
          </Typography>

          <Typography variant="body2" sx={{ mt: 2, fontWeight: "bold", fontSize: { xs: "14px", sm: "16px" } }}>
            Friskvårdsbidrag?
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
            Behöver ni hjälp att lösa kort via friskvård – fråga personalen.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Priser;