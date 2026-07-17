import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: "bold", color: "#1976d2" }}
        >
          Anabel Rosi
        </Typography>

        <Box>
          <Button color="inherit" href="#inicio">
            Inicio
          </Button>
          <Button color="inherit" href="#sobre-mi">
            Sobre mí
          </Button>
          <Button color="inherit" href="#tecnologias">
            Tecnologías
          </Button>
          <Button color="inherit" href="#proyectos">
            Proyectos
          </Button>
          <Button color="inherit" href="#contacto">
            Contacto
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;