import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import {
  Download,
  Email,
  ArrowDownward,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <Box
      id="inicio"
      component="section"
      sx={{
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        scrollMarginTop: "80px",

        background: (theme) =>
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #0f172a 0%, #172554 100%)"
            : "linear-gradient(135deg, #f8fafc 0%, #e8f1ff 100%)",

        py: { xs: 8, md: 4 },

        transition: "background 0.4s ease",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">

          {/* TEXTO */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="overline"
                color="primary"
                sx={{
                  letterSpacing: 3,
                  fontWeight: 700,
                }}
              >
                BIENVENIDO A MI PORTFOLIO
              </Typography>

              <Typography
                variant="h2"
                fontWeight="bold"
                color="text.primary"
                sx={{
                  mt: 1,
                  fontSize: {
                    xs: "2.5rem",
                    md: "4rem",
                  },
                }}
              >
                Hola, soy
              </Typography>

              <Typography
                variant="h2"
                fontWeight="bold"
                color="primary"
                sx={{
                  mb: 2,
                  fontSize: {
                    xs: "2.5rem",
                    md: "4rem",
                  },
                }}
              >
                Anabel Rosi
              </Typography>

              <Typography
                variant="h5"
                color="text.primary"
                sx={{
                  mb: 3,
                  minHeight: "40px",
                  fontWeight: 600,
                }}
              >
                <TypeAnimation
                  sequence={[
                    "Desarrolladora de Software Junior",
                    2000,
                    "Estudiante de Desarrollo de Software",
                    2000,
                    "Desarrollo web con Python y Flask",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  maxWidth: 600,
                  lineHeight: 1.9,
                  mb: 5,
                }}
              >
                Desarrollo aplicaciones web utilizando Python, Flask,
                bases de datos SQL y tecnologías frontend. Me interesa
                crear soluciones útiles y seguir creciendo a través de
                proyectos reales de desarrollo de software.
              </Typography>

              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                spacing={2}
              >
                <Button
                  variant="contained"
                  size="large"
                  href="#proyectos"
                >
                  Ver proyectos
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<Download />}
                  size="large"
                  href="/cv.pdf"
                  download
                >
                  Descargar CV
                </Button>
                
              </Stack>

              <Stack
                direction="row"
                spacing={1}
                sx={{
                  mt: 4,
                }}
              >
                <Button
                  variant="text"
                  startIcon={<GitHub />}
                  href="https://github.com/AnabelRosi"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.primary",
                  }}
                >
                  GitHub
                </Button>

                <Button
                  variant="text"
                  startIcon={<LinkedIn />}
                  href="https://www.linkedin.com/in/anabelrosi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "text.primary",
                  }}
                >
                  LinkedIn
                </Button>
              </Stack>
            </motion.div>
          </Grid>

          {/* FOTO */}
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
              }}
            >
              <Box
                component="img"
                src={profile}
                alt="Anabel Rosi - Desarrolladora de Software"
                sx={{
                  width: {
                    xs: 260,
                    sm: 300,
                    md: 340,
                  },

                  height: {
                    xs: 260,
                    sm: 300,
                    md: 340,
                  },

                  objectFit: "cover",
                  borderRadius: "50%",

                  border: "8px solid",
                  borderColor: "background.paper",

                  boxShadow: (theme) =>
                    theme.palette.mode === "dark"
                      ? "0 25px 60px rgba(0,0,0,.45)"
                      : "0 25px 60px rgba(0,0,0,.18)",

                  transition:
                    "transform .4s ease, box-shadow .4s ease",

                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              />
            </motion.div>
          </Grid>
        </Grid>

        {/* FLECHA */}
        <Box
          component="a"
          href="#sobre-mi"
          aria-label="Ir a la sección Sobre mí"
          sx={{
            mt: 6,
            display: "flex",
            justifyContent: "center",
            color: "primary.main",
            textDecoration: "none",
          }}
        >
          <ArrowDownward
            sx={{
              fontSize: 35,
              animation: "bounce 1.8s infinite",

              "@keyframes bounce": {
                "0%,100%": {
                  transform: "translateY(0)",
                },

                "50%": {
                  transform: "translateY(10px)",
                },
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;