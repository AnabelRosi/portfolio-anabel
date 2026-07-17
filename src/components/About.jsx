import { Box, Container, Typography } from "@mui/material";

function About() {
  return (
    <Box
      id="sobre-mi"
      sx={{
        py: 10,
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
        >
          Sobre mí
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 2 }}
        >
          Soy estudiante de Tecnicatura en Desarrollo de Software con especial
          interés en el desarrollo backend utilizando Python y Flask.
          Disfruto aprender nuevas tecnologías, resolver problemas y participar
          en proyectos colaborativos. Mi objetivo es seguir creciendo como
          desarrolladora y aportar soluciones de calidad.
        </Typography>
      </Container>
    </Box>
  );
}

export default About;