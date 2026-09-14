import { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  DarkMode,
  LightMode,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

const SECTIONS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

function Navbar({ darkMode, setDarkMode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(15, 23, 42, 0.85)"
              : "rgba(255, 255, 255, 0.85)",
          color: "text.primary",
          borderBottom: "1px solid",
          borderColor: "divider",
          transition: "background-color 0.4s ease",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{ minHeight: "72px", justifyContent: "space-between" }}
          >
            {/* LOGO */}
            <Typography
              component="a"
              href="#inicio"
              variant="h6"
              sx={{
                textDecoration: "none",
                color: "text.primary",
                fontWeight: 800,
                letterSpacing: "-0.5px",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              Anabel Rosi
              <Box
                component="span"
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  display: "inline-block",
                }}
              />
            </Typography>

            {/* MENÚ DESKTOP */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {SECTIONS.map((section) => (
                <Button
                  key={section.href}
                  href={section.href}
                  sx={{
                    color: "text.primary",
                    fontWeight: 600,
                    px: 1.5,
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {section.label}
                </Button>
              ))}

              <IconButton
                onClick={() => setDarkMode(!darkMode)}
                aria-label={
                  darkMode ? "Activar modo claro" : "Activar modo oscuro"
                }
                sx={{
                  ml: 1,
                  color: "text.primary",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                {darkMode ? <LightMode /> : <DarkMode />}
              </IconButton>
            </Box>

            {/* BOTÓN HAMBURGUESA EN MÓVIL */}
            <IconButton
              onClick={toggleDrawer(true)}
              aria-label="Abrir menú"
              sx={{
                display: { xs: "flex", md: "none" },
                color: "text.primary",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* DRAWER MÓVIL */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: "background.paper",
            backgroundImage: "none",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" fontWeight={800} color="text.primary">
            Menú
          </Typography>
          <IconButton onClick={toggleDrawer(false)} aria-label="Cerrar menú">
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        <List>
          {SECTIONS.map((section) => (
            <ListItem key={section.href} disablePadding>
              <ListItemButton
                component="a"
                href={section.href}
                onClick={toggleDrawer(false)}
                sx={{
                  "&:hover": {
                    color: "primary.main",
                    bgcolor: "action.hover",
                  },
                }}
              >
                <ListItemText
                  primary={section.label}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <Box sx={{ p: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={darkMode ? <LightMode /> : <DarkMode />}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Modo claro" : "Modo oscuro"}
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;