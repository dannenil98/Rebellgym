import { Box, Typography, Card, CardContent, Divider } from "@mui/material";

const Priser = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", // 🔥 så rubriken hamnar nedanför navbar
        backgroundColor: "#000",
        overflow: "hidden",
        paddingTop: "120px", // 🔥 konsekvent avstånd
        pb: 6,
      }}
    >
      <Card
        sx={{
          backgroundColor: "#000",
          color: "#3E6889",
          borderRadius: "16px",
          boxShadow: "0 0 10px rgba(62,104,137,0.4)",
          width: "90%",
          maxWidth: "700px",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Special Gothic Expanded One', sans-serif",
              textAlign: "center",
              mb: 3,
            }}
          >
            PRISER
          </Typography>

          {[ 
            ["Årskort", "3995 kr"],
            ["Halvårskort", "2275 kr"],
            ["Kvartalskort", "1250 kr"],
            ["Månadskort", "520 kr"],
            ["Klippkort x10", "650 kr"],
            ["Veckokort", "280 kr"],
            ["Engångsträning", "90 kr"],
          ].map(([namn, pris], i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 1,
                fontSize: "18px",
              }}
            >
              <Typography>{namn}</Typography>
              <Typography>{pris}</Typography>
            </Box>
          ))}

          <Divider sx={{ my: 2, borderColor: "#3E6889" }} />

          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>10% rabatt</strong> ges för studerande, pensionärer och FaR.
          </Typography>

          <Typography variant="body2" sx={{ mb: 1 }}>
            *Medlemskap och passerkort ingår i priset.
          </Typography>

          <Typography variant="body2" sx={{ mb: 1 }}>
            Vid borttappat passerkort debiteras en avgift på 100 kr för ett nytt.
          </Typography>

          <Typography variant="body2" sx={{ mt: 2, fontWeight: "bold" }}>
            Friskvårdsbidrag?
          </Typography>
          <Typography variant="body2">
            Behöver ni hjälp att lösa kort via friskvård – fråga personalen.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Priser;