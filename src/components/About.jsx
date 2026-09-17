import { Box, Container, Typography, Stack, Chip } from "@mui/material";

import {
  Code,
  Storage,
  School,
} from "@mui/icons-material";

import SectionTitle from "./SectionTitle";

function About() {
  return (
    <Box
      id="sobre-mi"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: (theme) =>
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #0f172a 0%, #172554 100%)"
            : "linear-gradient(135deg, #f8fafc 0%, #e8f1ff 100%)",
        transition: "background 0.4s ease",
      }}
    >
      <Container maxWidth="md">
        <SectionTitle
          overline="Conoceme"
          title="Sobre mí"
        />

        <Typography
          variant="body1"
          sx={{
            mt: 4,
            lineHeight: 1.9,
            color: (theme) =>
              theme.palette.mode === "dark"
                ? "#cbd5e1"
                : "#475569",
          }}
        >
          Soy estudiante de la Tecnicatura en Desarrollo de Software y estoy
          orientando mi perfil hacia el desarrollo backend. Trabajo
          principalmente con Python, Flask y bases de datos, y también estoy
          incorporando tecnologías de desarrollo frontend como JavaScript y
          React.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2.5,
            lineHeight: 1.9,
            color: (theme) =>
              theme.palette.mode === "dark"
                ? "#cbd5e1"
                : "#475569",
          }}
        >
          Me interesa transformar ideas y necesidades reales en aplicaciones
          útiles. A través de mis proyectos he trabajado en soluciones
          educativas, de accesibilidad, gestión de información y desarrollo
          web, aplicando conceptos de programación, bases de datos y diseño de
          aplicaciones.
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          gap={1}
          sx={{ mt: 4 }}
        >
          <Chip
            icon={<Code />}
            label="Desarrollo Backend"
            variant="outlined"
          />

          <Chip
            icon={<Storage />}
            label="Bases de Datos"
            variant="outlined"
          />

          <Chip
            icon={<School />}
            label="Desarrollo de Software"
            variant="outlined"
          />
        </Stack>
      </Container>
    </Box>
  );
}

export default About;