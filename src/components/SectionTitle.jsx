import { Typography, Box } from "@mui/material";

export default function SectionTitle({ overline, title }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="overline"
        color="primary"
        sx={{ letterSpacing: 3, fontWeight: 700 }}
      >
        {overline}
      </Typography>
      <Typography
        variant="h3"
        fontWeight="bold"
        color="text.primary"
        sx={{ mt: 1, fontSize: { xs: "2rem", md: "2.75rem" } }}
      >
        {title}
      </Typography>
    </Box>
  );
}