export interface CVData {
  profile: {
    name: string;
    role: string;
    role2: string;
    birthDate: string;
    location: string;
    image: string;
    contact: {
      email: string;
      phone: string;
      linkedin: string;
      github: string;
    };
    technologies: string[];
    languages: {
      name: string;
      items: {
        level: string;
        details: string[];
      }[];
    }[];
  };
  sections: {
    profile: {
      title: string;
      content: string;
    };
    education: {
      title: string;
      items: {
        title: string;
        time: string;
        institution: string;
        link?: {
          url: string;
          text: string;
        };
      }[];
    };
    experience: {
      title: string;
      items: {
        title: string;
        time: string;
        details: string[];
        projects?: {
          title: string;
          items: string[];
        };
        link?: {
            url: string;
            text: string;
        }
      }[];
    };
    courses: {
      title: string;
      items: {
        title: string;
        time: string;
        institution: string;
        certificate?: {
          url: string;
          code: string;
        };
      }[];
    };
  };
}

export const cvDataEs: CVData = {
  profile: {
    name: "Mateo Scarabino",
    role: "Ingeniero en sistemas informáticos",
    role2: "Desarrollador Web Full Stack",
    birthDate: "24/03/1998",
    location: "Rosario, Argentina.",
    image: "/assets/images/profile.webp",
    contact: {
      email: "matescarabino@gmail.com",
      phone: "341 3254929",
      linkedin: "/mateoscarabino",
      github: "/matescarabino",
    },
    technologies: [
      "Javascript / Typescript",
      "Node JS",
      "React / Next.js",
      "SQL / NoSQL",
      "GIT / Github",
      "Firebase / Supabase",
      "IA para desarrollo",
    ],
    languages: [
      {
        name: "Ingles",
        items: [
            {
                level: "(Alto)",
                details: ["Reading/Listening/Writing"],
            },
            {
                level: "(Medio)",
                details: ["Speaking"],
            }
        ]
      },
    ],
  },
  sections: {
    profile: {
      title: "Perfil Laboral",
      content:
        "Ingeniero en Sistemas Informáticos con más de 3 años de experiencia como desarrollador web fullstack, especializado y apasionado por el desarrollo backend. Cuento con capacidad para ejecutar proyectos end to end, desde el diseño y la planificación hasta la puesta en marcha e implementación. Me destaco por la resolución de problemas, la creatividad y la iniciativa para enfrentar desafíos técnicos. Busco proyectos que me desafíen técnicamente y me permitan seguir creciendo profesionalmente, aportando valor en equipos interdisciplinarios.",
    },
    education: {
      title: "Formación Académica",
      items: [
        {
          title: "Ingeniería en sistemas informáticos",
          time: "2023 - Rosario, Argentina.",
          institution: "Universidad Abierta Interamericana - UAI",
          link: {
            url: "PDFs/ProyectoFinal_ScarabinoMateo.pdf",
            text: "Descargar Proyecto Final.",
          },
        },
        // {
        //   title: "Bachiller en Ciencias Naturales",
        //   time: "2015 - Rosario, Argentina.",
        //   institution: "Colegio Stella Maris de Fisherton",
        // },
      ],
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          title: "Radium Rocket - Software Factory",
          time: "Febrero 2023 - Actualidad",
          details: [
            "Desarrollador Web Full Stack. Diseño, desarrollo y mantenimiento de múltiples proyectos internos y para clientes externos de diferentes industrias. Mi trabajo abarcó frontend, backend y bases de datos.",
            "En total formé parte de más de 10 proyectos en rubros como ecommerce, fintech, agro, realidad virtual, noticias y gestión administrativa, utilizando principalmente <strong>TypeScript, Node.js, React, Next.js</strong> y bases de datos <strong>SQL (PostgreSQL, SQL Server)</strong> y <strong>NoSQL (MongoDB)</strong>.",
          ],
          projects: {
            title: "Proyectos destacados",
            items: [
              "<strong>Qira Pagos</strong> – Billetera virtual y plataforma de trading de granos.",
              "<strong>Qira Global</strong> – Tienda virtual de agroinsumos.",
              "<strong>Aapresid</strong> – Portal de noticias y publicaciones con backoffice.",
              "<strong>Proyectos VR</strong> – Backoffice para demos de realidad virtual. Space Prison, La Económica y Fundemap.",
              "<strong>Newsreadeck</strong> – Backend para app iOS de noticias y landing page con Next.js.",
              "<strong>Hedgit</strong> – Plataforma de asesoría de mercados agrícolas.",
              "<strong>Norpan</strong> – Ecommerce mayorista.",
              "<strong>Radium Admin</strong> – Gestión administrativa y RRHH.",
              "<strong>Radium Accountancy</strong> – Aplicación contable interna.",
            ],
          },
          link: {
              url: "https://radiumrocket.com/",
              text: "Más Información"
          }
        },
        {
          title: "Bootcamp - Radium Rocket",
          time: "Agosto 2022 - Diciembre 2022",
          details: [
            "Become a Software Professional: Simulación de trabajo de desarrollo real. Meets diarias, clases y trabajo semanal en distintos lenguajes junto a empleados de la empresa. <a href='PDFs/Certificado_RR.pdf' download target='new'>Descargar certificado</a>",
          ],
        },
        {
          title: "Minería Criptomonedas con GPUs",
          time: "2018 - 2022",
          details: [
            "Encargado del armado y gestión integral de rigs de minería en entornos Linux. Responsable de evaluar y adquirir hardware, montar las estructuras físicas en oficina, instalar y configurar el software necesario, y asegurar el funcionamiento continuo de los equipos. Implementé sistemas de monitoreo y mantenimiento preventivo, además de configurar los procesos de cobro automático para clientes mediante billeteras virtuales.",
          ],
        },
        {
          title: "Servicio Técnico PC",
          time: "2017 - 2021",
          details: [
            "Reparación PCs, instalación Windows, formateo, limpieza, mantenimiento preventivo, instalación programas, etc.",
          ],
        },
      ],
    },
    courses: {
      title: "Cursos",
      items: [
        {
          title: "Diplomatura en Programación Web Full stack",
          time: "2021",
          institution: "Universidad Tecnológica Nacional - UTN",
          certificate: {
            url: "http://elearning-total.com/campus/verificando_certificado.php",
            code: "NUjxAGZp6E",
          },
        },
        {
          title: "React Js",
          time: "2022",
          institution: "CoderHouse",
        },
        {
          title: "Javascript",
          time: "2022",
          institution: "CoderHouse",
        },
      ],
    },
  },
};

export const cvDataEn: CVData = {
  profile: {
    name: "Mateo Scarabino",
    role: "Information Systems Engineer",
    role2: "Full Stack Web Developer",
    birthDate: "24/03/1998",
    location: "Rosario, Argentina.",
    image: "/assets/images/profile.webp",
    contact: {
      email: "matescarabino@gmail.com",
      phone: "+54 341 3254929",
      linkedin: "/mateoscarabino",
      github: "/matescarabino",
    },
    technologies: [
      "Javascript / Typescript",
      "Node JS",
      "React / Next.js",
      "SQL",
      "MongoDB",
      "GIT / Github",
      "Firebase / Supabase",
      "AI for development",
    ],
    languages: [
      {
        name: "English",
        items: [
            {
                level: "(Advanced)",
                details: ["Reading/Listening/Writing"],
            },
            {
                level: "(Intermediate)",
                details: ["Speaking"],
            }
        ]
      },
    ],
  },
  sections: {
    profile: {
      title: "Professional Profile",
      content:
        "Information Systems Engineer with 3 years of experience as a fullstack web developer, specialized and passionate about backend development. I stand out for problem solving, creativity and initiative to face technical challenges. I continually seek to learn and improve my skills to add value in interdisciplinary projects.",
    },
    education: {
      title: "Education",
      items: [
        {
          title: "Information Systems Engineering",
          time: "2023 - Rosario, Argentina.",
          institution: "Universidad Abierta Interamericana - UAI",
           link: {
            url: "PDFs/ProyectoFinal_ScarabinoMateo.pdf",
            text: "Download Final Project.",
          },
        },
        // {
        //   title: "Bachelor in Natural Sciences",
        //   time: "2015 - Rosario, Argentina.",
        //   institution: "Colegio Stella Maris de Fisherton",
        // },
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          title: "Radium Rocket - Software Factory",
          time: "February 2023 - Present",
          details: [
            "Full Stack Web Developer. Design, development and maintenance of multiple internal projects and for external clients from different industries. My work covered frontend, backend and databases.",
            "In total I was part of over 10 projects in areas such as ecommerce, fintech, agro, virtual reality, news and administrative management, mainly using <strong>TypeScript, Node.js, React</strong> and SQL databases <strong>(PostgreSQL, SQL Server)</strong> and <strong>NoSQL (MongoDB)</strong>.",
          ],
          projects: {
            title: "Featured Projects",
            items: [
              "<strong>Qira Pagos</strong> – Virtual wallet and grain trading platform.",
              "<strong>Qira Global</strong> – Agrosupplies virtual store.",
              "<strong>Aapresid</strong> – News and publications portal with backoffice.",
              "<strong>VR Projects</strong> – Space Prison, La Económica and Fundemap. Backoffice for virtual reality demos.",
              "<strong>Newsreadeck</strong> – iOS news app and landing page with Next.js.",
              "<strong>Hedgit</strong> – Agricultural market advisory platform.",
              "<strong>Norpan</strong> – Wholesale Ecommerce.",
              "<strong>Radium Admin</strong> – Administrative and HR management.",
              "<strong>Radium Accountancy</strong> – Internal accounting application.",
            ],
          },
          link: {
              url: "https://radiumrocket.com/",
              text: "More Information"
          }
        },
        {
          title: "Bootcamp - Radium Rocket",
          time: "August 2022 - December 2022",
          details: [
            "Become a Software Professional: Real development job simulation. Daily meets, classes and weekly work in different languages together with company employees. <a href='PDFs/Certificado_RR.pdf' download target='new'>Download Certificate</a>",
          ],
        },
        {
          title: "Cryptocurrency Mining with GPUs",
          time: "2018 - 2022",
          details: [
            "In charge of assembly and integral management of mining rigs in Linux environments. Responsible for evaluating and acquiring hardware, assembling physical structures in office, installing and configuring necessary software, and ensuring continuous equipment operation. Implemented monitoring and preventive maintenance systems, as well as configuring automatic payment processes for clients via virtual wallets.",
          ],
        },
        {
          title: "PC Technical Service",
          time: "2017 - 2021",
          details: [
            "PC Repair, Windows installation, formatting, cleaning, preventive maintenance, program installation, etc.",
          ],
        },
      ],
    },
    courses: {
      title: "Courses",
      items: [
        {
          title: "Full Stack Web Programming Diploma",
          time: "2021",
          institution: "Universidad Tecnológica Nacional - UTN",
          certificate: {
            url: "http://elearning-total.com/campus/verificando_certificado.php",
            code: "NUjxAGZp6E",
          },
        },
        {
          title: "React Js",
          time: "2022",
          institution: "CoderHouse",
        },
        {
          title: "Javascript",
          time: "2022",
          institution: "CoderHouse",
        },
      ],
    },
  },
};
