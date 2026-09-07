const INFO_APPS = {
  1: {
    titulo: 'Sobre Mí',
    bloquesTop: [
      {
        tipo: 'texto',
        contenido:
          'Desarrollador de Software con 1 año y 9 meses de experiencia en aplicaciones móviles (Xamarin / .NET MAUI), web, de escritorio y consola. Actualmente curso el Tecnólogo en Análisis y Desarrollo de Software (ADSO) en el SENA con enfoque Full Stack (React + Java Spring Boot).',
      },
      {
        tipo: 'texto',
        contenido:
          'Me enfoco en todo el ciclo de vida del software: diseño de diagramas y arquitectura, planeación de calidad, planes de pruebas y control de calidad riguroso. Apasionado SENA Lover y respaldado por ASNET.',
      },
    ],
    bloquesBottom: [
      {
        tipo: 'subtitulo',
        contenido: 'Educación',
        icon: 'FaGraduationCap',
      },
      {
        tipo: 'lista',
        items: [
          'SENA — Tecnólogo ADSO · En curso (desde ago 2025)',
          'SENA — Técnico en Programación · Julio 2024 · Honores: ProConect',
        ],
      },
      {
        tipo: 'subtitulo',
        contenido: 'Certificaciones',
        icon: 'FaAward',
      },
      {
        tipo: 'lista',
        items: [
          'Foundational C# with Microsoft — FreeCodeCamp (Feb 2024)',
          'Legacy JavaScript Algorithms & Data Structures V7 — FreeCodeCamp (Feb 2024)',
        ],
      },
    ],
  },
  2: {
    titulo: 'Experiencia',
    bloquesTop: [
      {
        tipo: 'empresa',
        nombre: 'Representaciones Continental S.A.S',
        cargo: 'Desarrollador FullStack',
        periodo: 'Ene 2024 – Sep 2025',
      },
      {
        tipo: 'subtitulo',
        contenido: 'Logros clave',
        icon: 'FaTrophy',
      },
      {
        tipo: 'logros',
        items: [
          {
            icon: 'FaFileInvoice',
            titulo: 'Sistema de facturación UBL/XML',
            desc: 'Generación y validación completa · -30% tiempos administrativos',
          },
          {
            icon: 'FaBoxes',
            titulo: 'Control de activos web',
            desc: 'Interfaz responsiva + reportes automáticos · +40% trazabilidad',
          },
          {
            icon: 'FaEnvelope',
            titulo: 'Automatización de correos',
            desc: 'Envío desde sistemas empresariales · elimina tareas manuales',
          },
          {
            icon: 'FaCogs',
            titulo: 'Apps de consola .NET',
            desc: 'Automatización de procesos internos · -50% tiempos operativos',
          },
        ],
      },
    ],
    bloquesBottom: [
      {
        tipo: 'logros',
        items: [
          {
            icon: 'FaMobileAlt',
            titulo: 'App móvil Xamarin.Android',
            desc: 'GPS + soporte offline para gestión de rutas en campo',
          },
          {
            icon: 'FaMapMarkedAlt',
            titulo: 'Mapas interactivos OpenLayers',
            desc: 'Zonas y rutas con geolocalización en tiempo real',
          },
          {
            icon: 'FaPlug',
            titulo: 'APIs REST + Swagger',
            desc: 'Smartphones → SQL Server · formulario PHP CRUD clientes',
          },
          {
            icon: 'FaPaintBrush',
            titulo: 'Modernización UI',
            desc: 'Bootstrap completo, AJAX, SweetAlert · UX profesional',
          },
        ],
      },
    ],
  },
  3: {
    titulo: 'Proyectos',
    bloquesTop: [
      {
        tipo: 'proyectos',
        items: [
          {
            icon: 'FaCamera',
            nombre: 'PhotoBogotá',
            tech: 'Spring Boot · React · MongoDB · Docker · Leaflet',
            desc: 'Plataforma fullstack para gestión y visualización de fotografía urbana en Bogotá. Arquitectura de capas + JWT + mapas interactivos.',
          },
          {
            icon: 'FaMotorcycle',
            nombre: 'Mega Moto',
            tech: 'React · Vite · Leaflet · Framer Motion · Bootstrap',
            desc: 'Sitio web corporativo oficial del sector motocicletas. En producción: mega-moto.com',
          },
          {
            icon: 'FaGamepad',
            nombre: 'Consola Portafolio',
            tech: 'React · Tailwind · Framer Motion',
            desc: 'Este mismo portafolio — consola interactiva tipo Nintendo DS con dual screen y navegación por controles.',
          },
        ],
      },
    ],
    bloquesBottom: [
      {
        tipo: 'proyectos',
        items: [
          {
            icon: 'FaShoppingCart',
            nombre: 'ProConect',
            tech: 'React · Node.js · MongoDB',
            desc: 'Plataforma e-commerce inspirada en tiendas online. Proyecto de titulación SENA con honores.',
          },
          {
            icon: 'FaFileInvoiceDollar',
            nombre: 'Sistema de Facturación',
            tech: '.NET · UBL/XML · SQL Server',
            desc: 'Generación y validación de documentos fiscales para empresa real. Reducción 30% en tiempos.',
          },
          {
            icon: 'FaRoute',
            nombre: 'App de Rutas en Campo',
            tech: 'Xamarin · .NET · OpenLayers',
            desc: 'App móvil con GPS, soporte offline y mapas interactivos para seguimiento en terreno.',
          },
        ],
      },
    ],
  },
  4: {
    titulo: 'Skills',
    bloquesTop: [],
    bloquesBottom: [],
  },
  5: {
    titulo: 'Contacto',
    bloquesTop: [
      {
        tipo: 'texto',
        contenido: '¿Te interesa colaborar o conocerme más? ¡Hablemos!',
      },
      {
        tipo: 'contacto',
        items: [
          { icon: 'FaMapMarkerAlt', label: 'Ubicación', valor: 'Bogotá D.C, Colombia' },
          { icon: 'FaEnvelope', label: 'Email', valor: 'sebastianprovisional25@gmail.com' },
        ],
      },
    ],
    bloquesBottom: [
      {
        tipo: 'contacto',
        items: [
          { icon: 'FaLinkedin', label: 'LinkedIn', valor: 'linkedin.com/in/sebassye' },
          { icon: 'FaGithub', label: 'GitHub', valor: 'github.com/SebasYe05' },
        ],
      },
    ],
  },
};

export default INFO_APPS;
