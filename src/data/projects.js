
const base = import.meta.env.BASE_URL;

const projects = [
  {
    id: 1,
    title: "LeerIA",
    description:
      "Aplicación web educativa orientada al seguimiento de la fluidez lectora. Permite registrar sesiones de lectura, analizar métricas y realizar un seguimiento de la evolución de los estudiantes.",
    technologies: ["Python", "Flask", "SQLite"],
    github: "",
    demo: "",
    private: true,
    images: [
      `${base}/projects/leerIA/01.jpeg`,
      `${base}/projects/leerIA/02.jpeg`,
      `${base}/projects/leerIA/03.jpeg`,
    ],
  },

  {
    id: 2,
    title: "SignIA",
    description:
      "Proyecto de accesibilidad e inclusión educativa que busca facilitar la comunicación en tiempo real entre docentes y estudiantes con discapacidad auditiva mediante inteligencia artificial y reconocimiento de lenguaje.",
    technologies: [
      "Python",
      "Inteligencia Artificial",
      "Procesamiento de audio/video",
    ],
    github: "",
    demo: "",
    private: true,
    images: [
      `${base}/projects/signIA/01.jpeg`,
      `${base}/projects/signIA/02.jpeg`,
      `${base}/projects/signIA/03.jpeg`,
    ],
  },

  {
    id: 3,
    title: "Fixture Mundial 2026",
    description:
      "Aplicación web interactiva desarrollada con React para consultar y organizar los partidos del Mundial 2026, mostrando las distintas etapas y la información del torneo de manera clara y dinámica.",
    technologies: ["React", "JavaScript", "Material UI"],
    github: "",
    demo: "",
    private: false,
    images: [
      `${base}/projects/fixture/01.jpeg`,
      `${base}/projects/fixture/02.jpeg`,
      `${base}/projects/fixture/03.jpeg`,
    ],
  },

  {
    id: 4,
    title: "Sistema de Gestión de Residuos",
    description:
      "Sistema web para gestionar la recolección de residuos, usuarios, reportes y tareas, con diferentes roles y operaciones sobre una base de datos.",
    technologies: ["Python", "Flask", "MySQL"],
    github: "",
    demo: "",
    private: true,
    images: [
      `${base}/projects/residuos/01.png`,
      `${base}/projects/residuos/02.png`,
      `${base}/projects/residuos/03.png`,
    ],
  },
];

export default projects;