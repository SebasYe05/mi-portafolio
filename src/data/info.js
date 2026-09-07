const INFO_APPS = {
  1: {
    titulo: "Sobre Mí",
    bloques: [
      {
        tipo: "texto",
        contenido:
          "Desarrollador de Software con 1 año y 9 meses de experiencia en aplicaciones móviles (Xamarin / .NET MAUI), web, de escritorio y consola. Actualmente curso el Tecnólogo en Análisis y Desarrollo de Software (ADSO) en el SENA con enfoque Full Stack (React + Java Spring Boot).",
      },
      {
        tipo: "texto",
        contenido:
          "Me enfoco en todo el ciclo de vida del software: diseño de diagramas y arquitectura, planeación de calidad, planes de pruebas y control de calidad riguroso. Apasionado SENA Lover y respaldado por ASNET.",
      },
      {
        tipo: "subtitulo",
        contenido: "📚 Educación",
      },
      {
        tipo: "lista",
        items: [
          "SENA — Tecnólogo en Análisis y Desarrollo de Software (ADSO) · En curso (desde ago 2025)",
          "SENA — Técnico en Programación de Software · Julio 2024 · Honores: Proyecto ProConect",
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
        contenido: "🏆 Logros clave",
      },
      {
        tipo: "logros",
        items: [
          {
            icono: "📄",
            titulo: "Sistema de facturación UBL/XML",
            desc: "Generación y validación completa · -30% tiempos administrativos",
          },
          {
            icono: "📦",
            titulo: "Control de activos web",
            desc: "Interfaz responsiva + reportes automáticos · +40% trazabilidad",
          },
          {
            icono: "📧",
            titulo: "Automatización de correos",
            desc: "Envío desde sistemas empresariales · elimina tareas manuales",
          },
          {
            icono: "⚙️",
            titulo: "Apps de consola .NET",
            desc: "Automatización de procesos internos · -50% tiempos operativos",
          },
          {
            icono: "📱",
            titulo: "App móvil Xamarin.Android",
            desc: "GPS + soporte offline para gestión de rutas en campo",
          },
          {
            icono: "🗺️",
            titulo: "Mapas interactivos OpenLayers",
            desc: "Zonas y rutas con geolocalización en tiempo real",
          },
          {
            icono: "🔌",
            titulo: "APIs REST + Swagger",
            desc: "Smartphones → SQL Server · formulario PHP CRUD clientes",
          },
          {
            icono: "🎨",
            titulo: "Modernización UI",
            desc: "Bootstrap completo, AJAX, SweetAlert · UX profesional",
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
            emoji: "📸",
            nombre: "PhotoBogotá",
            tech: "Spring Boot · React · MongoDB · Docker · Leaflet",
            desc: "Plataforma fullstack para gestión y visualización de fotografía urbana en Bogotá. Arquitectura de capas + JWT + mapas interactivos.",
          },
          {
            emoji: "🏍️",
            nombre: "Mega Moto",
            tech: "React · Vite · Leaflet · Framer Motion · Bootstrap",
            desc: "Sitio web corporativo oficial de empresa del sector motocicletas. En producción: mega-moto.com",
          },
          {
            emoji: "🎮",
            nombre: "Consola Portafolio",
            tech: "React · Tailwind · Framer Motion",
            desc: "Este mismo portafolio — consola interactiva tipo Nintendo DS con dual screen y navegación por controles.",
          },
          {
            emoji: "🛒",
            nombre: "ProConect",
            tech: "React · Node.js · MongoDB",
            desc: "Plataforma e-commerce inspirada en tiendas online. Proyecto de titulación SENA con honores.",
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
        ],
      },
    ],
  },
  4: {
    titulo: "Skills",
    bloques: [
      {
        tipo: "skills",
        categorias: [],
      },
    ],
  },
  5: {
    titulo: "Contacto",
    bloques: [
      {
        tipo: "texto",
        contenido: "¿Te interesa colaborar o conocerme más? ¡Hablemos!",
      },
      {
        tipo: "contacto",
        items: [
          { icono: "📍", label: "Ubicación", valor: "Bogotá D.C, Colombia" },
          { icono: "📧", label: "Email", valor: "sebastianprovisional25@gmail.com" },
          { icono: "💼", label: "LinkedIn", valor: "linkedin.com/in/sebassye" },
          { icono: "🐙", label: "GitHub", valor: "github.com/SebasYe05" },
        ],
      },
    ],
  },
};

export default INFO_APPS;
