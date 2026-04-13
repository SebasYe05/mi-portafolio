const INFO_APPS = {
  1: {
    titulo: "Sobre Mí",
    bloques: [
      {
        tipo: "texto",
        contenido:
          "Desarrollador de Software con 1 año y 9 meses de experiencia. Especializado en aplicaciones web, móvil y de escritorio. Actualmente curso el Tecnólogo en Análisis y Desarrollo de Software (Full Stack) en el SENA.",
      },
      {
        tipo: "subtitulo",
        contenido: "📚 Educación",
      },
      {
        tipo: "lista",
        items: [
          "SENA — Tecnólogo en Análisis y Desarrollo de Software (en curso)",
          "SENA — Técnico en Programación de Software · Honores: Proyecto ProConect",
        ],
      },
      {
        tipo: "subtitulo",
        contenido: "🏅 Certificaciones",
      },
      {
        tipo: "lista",
        items: [
          "Foundational C# with Microsoft — FreeCodeCamp (Feb 2024)",
          "Legacy JavaScript Algorithms and Data Structures V7 — FreeCodeCamp (Feb 2024)",
        ],
      },
    ],
  },
  2: {
    titulo: "Experiencia",
    bloques: [
      {
        tipo: "empresa",
        nombre: "Representaciones Continental S.A.S",
        cargo: "Desarrollador FullStack",
        periodo: "Ene 2024 – Sep 2025",
      },
      {
        tipo: "subtitulo",
        contenido: "🏆 Logros",
      },
      {
        tipo: "logros",
        items: [
          {
            icono: "📄",
            titulo: "Sistema de facturación UBL/XML",
            desc: "Reducción del 30% en tiempos administrativos",
          },
          {
            icono: "📦",
            titulo: "Control de activos web",
            desc: "Mejora del 40% en trazabilidad de inventario",
          },
          {
            icono: "📧",
            titulo: "Automatización de correos",
            desc: "Eliminación de tareas manuales repetitivas",
          },
          {
            icono: "⚙️",
            titulo: "Aplicaciones de consola .NET",
            desc: "Reducción del 50% en tiempos operativos",
          },
          {
            icono: "📱",
            titulo: "App móvil Xamarin.Android",
            desc: "GPS + soporte offline para rutas en campo",
          },
          {
            icono: "🗺️",
            titulo: "Mapas interactivos OpenLayers",
            desc: "Geolocalización en tiempo real",
          },
          {
            icono: "🔌",
            titulo: "APIs REST con Swagger",
            desc: "Smartphones ↔ SQL Server",
          },
          {
            icono: "🎨",
            titulo: "Modernización UI Bootstrap",
            desc: "AJAX, SweetAlert, diseño responsivo",
          },
        ],
      },
    ],
  },
  3: {
    titulo: "Proyectos",
    bloques: [
      {
        tipo: "proyectos",
        items: [
          {
            emoji: "🎮",
            nombre: "Consola Portafolio",
            tech: "React · Tailwind",
            desc: "Este mismo portafolio — GameBoy DS interactiva con pantalla dual y navegación por controles.",
          },
          {
            emoji: "📋",
            nombre: "Sistema de Facturación",
            tech: ".NET · UBL/XML · SQL Server",
            desc: "Generación y validación de documentos fiscales para empresa real. Reducción 30% en tiempos.",
          },
          {
            emoji: "🗺️",
            nombre: "App de Rutas en Campo",
            tech: "Xamarin · .NET · OpenLayers",
            desc: "App móvil con GPS, soporte offline y mapas interactivos para seguimiento en terreno.",
          },
          {
            emoji: "🛒",
            nombre: "ProConect",
            tech: "React · Node.js · MongoDB",
            desc: "Plataforma e-commerce inspirada en tiendas online. Proyecto de titulación con honores.",
          },
          {
            emoji: "📦",
            nombre: "Control de Activos",
            tech: ".NET · SQL Server · Bootstrap",
            desc: "Sistema web responsivo para gestión de inventario con reportes automatizados.",
          },
        ],
      },
    ],
  },
  4: {
    titulo: "Skills",
    bloques: [
      {
        tipo: "skills",
        categorias: [
          {
            nombre: "Backend",
            items: [
              "Java",
              "C# / .NET",
              "Node.js",
              "Spring Boot",
              "PHP",
              "Express.js",
            ],
          },
          {
            nombre: "Frontend",
            items: [
              "React",
              "JavaScript",
              "HTML5",
              "CSS3",
              "Tailwind",
              "Bootstrap",
              "Framer",
              "Axios",
            ],
          },
          {
            nombre: "UI Components",
            items: [
              "SweetAlert2",
              "LottieFiles",
              "React Hook Form",
              "Flatpickr",
              "React Select",
            ],
          },
          {
            nombre: "Bases de datos",
            items: ["SQL Server", "MySQL", "MongoDB", "SQLite"],
          },
          {
            nombre: "Mapas",
            items: ["OpenLayers", "Leaflet", "Chart.js", "Recharts"],
          },
          {
            nombre: "DevOps & QA",
            items: [
              "Docker",
              "Git",
              "GitHub Actions",
              "Linux",
              "Selenium",
              "Swagger",
              "EchoAPI",
              "Jira",
            ],
          },
          {
            nombre: "Móvil & Otros",
            items: ["Xamarin", ".NET MAUI", "TamperMonkey", "WordPress"],
          },
        ],
      },
      {
        tipo: "subtitulo",
        contenido: "🧠 Habilidades blandas",
      },
      {
        tipo: "tags",
        items: [
          "Aprendizaje autodidacta",
          "Resolución de problemas",
          "Trabajo en equipo",
          "UI/UX Focus",
          "Git avanzado",
          "Inglés B1",
        ],
      },
    ],
  },
  5: {
    titulo: "Contacto",
    bloques: [
      {
        tipo: "contacto",
        items: [
          { icono: "📍", label: "Ubicación", valor: "Bogotá D.C, Colombia" },
          { icono: "📧", label: "Email", valor: "sotomayo250525@gmail.com" },
          { icono: "📱", label: "Teléfono", valor: "+57 320 692 3504" },
          { icono: "💼", label: "LinkedIn", valor: "linkedin.com/in/sebassye" },
          { icono: "🐙", label: "GitHub", valor: "github.com/SebasYe05" },
        ],
      },
    ],
  },
};

export default INFO_APPS;
