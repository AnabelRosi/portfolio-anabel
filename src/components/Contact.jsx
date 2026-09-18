import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Paper,
  Divider,
} from "@mui/material";

import { FaWhatsapp } from "react-icons/fa";

import {
  Email,
  LinkedIn,
  GitHub,
  Phone,
  WhatsApp

} from "@mui/icons-material";

import SectionTitle from "./SectionTitle";

function Contact() {
  return (
    <Box
      id="contacto"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.paper",
        scrollMarginTop: "80px",
      }}
    >
      <Container maxWidth="md">
        <SectionTitle
          overline="Hablemos"
          title="Contacto"
        />

        <Paper
          elevation={0}
          sx={{
            mt: 5,
            p: { xs: 3, md: 5 },
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 4,
            textAlign: "center",
            bgcolor: "background.default",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            gutterBottom
          >
            ¿Tenés un proyecto o una oportunidad?
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 600,
              mx: "auto",
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            Estoy interesada en oportunidades relacionadas con desarrollo de
            software, backend y desarrollo web. Si querés conocer más sobre mi
            trabajo, podés contactarme o visitar mis perfiles profesionales.
          </Typography>


          <Divider sx={{ mb: 4 }} />

          {/* BOTONES */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<Email />}
              href="mailto:ana1085@hotmail.com"
            >
              Enviarme un email
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<FaWhatsapp />}
              href="https://wa.me/542612717641"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<LinkedIn />}
              href="https://www.linkedin.com/in/anabelrosi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<GitHub />}
              href="https://github.com/AnabelRosi"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

export default Contact;