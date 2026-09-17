import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  Stack,
  Button,
  CardMedia,
} from "@mui/material";

import {
  GitHub,
  OpenInNew,
  LockOutlined,
} from "@mui/icons-material";

import SectionTitle from "./SectionTitle";
import projects from "../data/projects";
import ProjectCarousel from "./ProjectCarousel";

function Projects() {
  return (
    <Box
      id="proyectos"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.default",
        transition: "background-color 0.4s ease",
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          overline="Mi trabajo"
          title="Proyectos destacados"
        />

        <Typography
          color="text.secondary"
          sx={{
            mb: 6,
            maxWidth: 680,
            lineHeight: 1.8,
          }}
        >
          Una selección de proyectos en los que aplico conocimientos de
          desarrollo web, backend, bases de datos, React e inteligencia
          artificial, con especial interés en soluciones educativas y de
          accesibilidad.
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 6 }}
              key={project.id}
            >
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: "background.paper",
                  borderRadius: 3,
                  overflow: "hidden",
                  transition:
                    "transform .3s ease, box-shadow .3s ease, border-color .3s ease",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "primary.main",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                  },
                }}
              >
                  {project.images && project.images.length > 0 ? (
                      <ProjectCarousel
                        images={project.images}
                        title={project.title}
                      />
                    ) : (
                      <Box
                        sx={{
                          aspectRatio: "16 / 9",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: "action.hover",
                        }}
                      >
                        <Typography
                          variant="h6"
                          color="text.secondary"
                        >
                          {project.title}
                        </Typography>
                      </Box>
                    )}
                <CardContent
                  sx={{
                    flexGrow: 1,
                    p: { xs: 2.5, md: 3 },
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    color="text.primary"
                    gutterBottom
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.8,
                      mb: 3,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    gap={1}
                  >
                    {project.technologies.map((technology) => (
                      <Chip
                        key={technology}
                        label={technology}
                        size="small"
                        sx={{
                          bgcolor: "action.selected",
                          color: "text.primary",
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>

                <CardActions
                  sx={{
                    px: { xs: 2.5, md: 3 },
                    pb: 3,
                    pt: 0,
                    gap: 1,
                  }}
                >
                  {project.github && (
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<GitHub />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver código
                    </Button>
                  )}

                  {project.demo && (
                    <Button
                      size="small"
                      variant="contained"
                      startIcon={<OpenInNew />}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver proyecto
                    </Button>
                  )}

                  {project.private && !project.github && !project.demo && (
                    <Button
                      size="small"
                      variant="outlined"
                      disabled
                      startIcon={<LockOutlined />}
                    >
                      Proyecto privado
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;