import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiFlask,
  SiMysql,
  SiSqlite,
  SiJavascript,
  SiReact,
} from "react-icons/si";

import SectionTitle from "./SectionTitle";

const skills = [
  {
    name: "Python",
    icon: FaPython,
    color: "#3776AB",
  },
  {
    name: "Flask",
    icon: SiFlask,
    color: "#000000",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "#1572B6",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
  },
  {
    name: "SQLite",
    icon: SiSqlite,
    color: "#003B57",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: null,
  },
  {
    name: "Bases de Datos",
    icon: FaDatabase,
    color: null,
  },
];

function Skills() {
  return (
    <Box
      id="tecnologias"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.paper",
        transition: "background-color 0.4s ease",
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle
          overline="Mi stack"
          title="Tecnologías"
        />

        <Typography
          color="text.secondary"
          sx={{
            mb: 6,
            maxWidth: 650,
            lineHeight: 1.8,
          }}
        >
          Tecnologías y herramientas que utilizo para desarrollar aplicaciones
          web, trabajar con bases de datos y construir soluciones de software.
        </Typography>

        <Grid container spacing={2.5}>
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <Grid
                size={{ xs: 6, sm: 4, md: 3 }}
                key={skill.name}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    border: "1px solid",
                    borderColor: "divider",
                    bgcolor: "background.default",
                    borderRadius: 3,
                    transition:
                      "transform .3s ease, border-color .3s ease, box-shadow .3s ease",

                    "&:hover": {
                      transform: "translateY(-5px)",
                      borderColor: "primary.main",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.07)",
                    },
                  }}
                >
                  <CardContent sx={{ py: 3.5 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: 1.5,
                      }}
                    >
                      <Icon
                        size={45}
                        color={skill.color || "currentColor"}
                      />
                    </Box>

                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: "text.primary",
                      }}
                    >
                      {skill.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills;