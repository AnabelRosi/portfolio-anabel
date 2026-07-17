import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { SiFlask, SiMysql, SiSqlite } from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython size={45} color="#3776AB" /> },
  { name: "Flask", icon: <SiFlask size={45} /> },
  { name: "HTML5", icon: <FaHtml5 size={45} color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt size={45} color="#1572B6" /> },
  { name: "MySQL", icon: <SiMysql size={45} color="#4479A1" /> },
  { name: "SQLite", icon: <SiSqlite size={45} color="#003B57" /> },
  { name: "Git", icon: <FaGitAlt size={45} color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub size={45} /> },
  { name: "Bases de Datos", icon: <FaDatabase size={45} color="#1976d2" /> },
];

function Skills() {
  return (
    <Box
      id="tecnologias"
      sx={{
        py: 10,
        backgroundColor: "#f8fafc",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          fontWeight="bold"
          align="center"
          gutterBottom
        >
          Tecnologías
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Estas son algunas de las tecnologías con las que trabajo actualmente.
        </Typography>

        <Grid container spacing={3}>
          {skills.map((skill) => (
            <Grid item xs={6} sm={4} md={3} key={skill.name}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 3,
                  transition: ".3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                {skill.icon}

                <Typography
                  sx={{
                    mt: 2,
                    fontWeight: "bold",
                  }}
                >
                  {skill.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills;