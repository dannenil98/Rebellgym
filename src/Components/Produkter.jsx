import { Box, Typography, Grid, Card, CardContent, Skeleton } from "@mui/material";
import { motion } from "framer-motion";

const Produkter = () => {
  const skeletons = Array.from({ length: 4 });

  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: "#000",
        color: "#3E6889",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 2, sm: 4 },
        py: 6,
        overflow: "hidden",
      }}
    >
      {/* Byggikon + animerad text */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "40px" }}
      >
        <Typography variant="h2" sx={{ fontSize: { xs: "50px", sm: "80px" } }}>
          🏗️
        </Typography>

        <motion.div
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Special Gothic Expanded One', sans-serif",
              WebkitTextStroke: "1px #3E6889",
              textAlign: "center",
              fontSize: { xs: "30px", sm: "50px" },
              letterSpacing: "2px",
            }}
          >
            Sidan är under uppbyggnad
          </Typography>
        </motion.div>
      </motion.div>

      {/* Skeleton-kort */}
      <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: "1200px" }}>
        {skeletons.map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                backgroundColor: "#111",
                borderRadius: "16px",
                boxShadow: "0 0 10px rgba(62,104,137,0.4)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 0 20px rgba(79,195,247,0.6)",
                },
              }}
            >
              <Skeleton
                variant="rectangular"
                height={220}
                sx={{
                  bgcolor: "rgba(62,104,137,0.1)",
                  borderTopLeftRadius: "16px",
                  borderTopRightRadius: "16px",
                }}
              />
              <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Skeleton
                  variant="text"
                  height={30}
                  width="60%"
                  sx={{ bgcolor: "rgba(62,104,137,0.2)", mx: "auto", mb: 1 }}
                />
                <Skeleton
                  variant="text"
                  height={20}
                  width="80%"
                  sx={{ bgcolor: "rgba(62,104,137,0.15)", mx: "auto", mb: 1 }}
                />
                <Skeleton
                  variant="text"
                  height={25}
                  width="40%"
                  sx={{ bgcolor: "rgba(62,104,137,0.25)", mx: "auto", mb: 2 }}
                />
                <Skeleton
                  variant="rectangular"
                  height={36}
                  width="50%"
                  sx={{
                    bgcolor: "rgba(62,104,137,0.2)",
                    borderRadius: "8px",
                    mx: "auto",
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Produkter;
