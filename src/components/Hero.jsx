import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Download, Email, ArrowDownward } from "@mui/icons-material";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg"; // <-- Cambiá el nombre si hace falta

function Hero() {
  return (
    <Box
      id="inicio"
      sx={{
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #f5f7fa 0%, #e8f1ff 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
        >
          {/* Texto */}
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
                👋 BIENVENIDO A MI PORTFOLIO
              </Typography>

              <Typography
                variant="h2"
                fontWeight="bold"
                sx={{ mt: 1 }}
              >
                Hola, soy
              </Typography>

              <Typography
                variant="h2"
                fontWeight="bold"
                color="primary"
                sx={{ mb: 2 }}
              >
                Anabel Rosi
              </Typography>

              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                Desarrolladora Backend Junior <br />
                Estudiante de Desarrollo de Software
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  maxWidth: 600,
                  lineHeight: 1.9,
                  mb: 5,
                }}
              >
                Me apasiona desarrollar aplicaciones web utilizando Python,
                Flask y bases de datos SQL. Disfruto aprender nuevas
                tecnologías, resolver problemas y crear soluciones que aporten
                valor.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
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
                >
                  Descargar CV
                </Button>

                <Button
                  startIcon={<Email />}
                  size="large"
                  href="#contacto"
                >
                  Contactarme
                </Button>
              </Stack>
            </motion.div>
          </Grid>

          {/* Foto */}
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: .8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Box
                component="img"
                src={profile}
                alt="Anabel Rosi"
                sx={{
                  width: 340,
                  height: 340,
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "8px solid white",
                  boxShadow: "0 25px 60px rgba(0,0,0,.18)",
                  transition: ".4s",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              />
            </motion.div>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 8,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ArrowDownward
            color="primary"
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